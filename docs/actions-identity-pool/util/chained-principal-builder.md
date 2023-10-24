# Chained Principal Builder
Use this to create a principal (trust policy) for a role that should be assumed by a role that was assumed by `ActionsIdentityPool` or `ActionsIdentityPoolBasic`. 

###  Usage
See examples below and view source.

```typescript
const pool = new ActionsIdentityPool(this, 'Pool', {
  claimMapping: ClaimMapping.fromClaims('repository', 'environment'),
});

const role = new iam.Role(stack, 'Role', {
  roleName: 'cognito-gha',
  assumedBy: pool.createPrincipalForPool({
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
    environment: ['dev', 'test'],
  }),
});

pool.assignRoleWhenClaimStartsWith(role, 'repository', 'catnekaise/');

const builder = pool.util.chainedPrincipal
  .passesClaim('repository', 'environment', 'runner_environment', 'sha')
  .claimEquals('environment', 'dev', 'test')
  .claimLike('repository', 'catnekaise/*');

const principal = builder.createPrincipalAssumedBy(role);

const chainedRole = new iam.Role(this, 'ChainedRole', {
  name: 'chained-role',
  assumedBy: principal,
});
```

### Guardrails
Attempting to use claims in the builder that was not mapped in the identity pool will throw errors.

```typescript
const pool = new ActionsIdentityPool(this, 'Pool', {
  claimMapping: ClaimMapping.fromClaims('repository', 'environment'),
});

// Error will be thrown as the ActionsIdentityPool was not configured to map the claim "actor".
const builder = pool.util.chainedPrincipal
  .claimEquals('actor', 'djonser');

```

### Generated Policy
Trust policy created by the builder.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::111111111111:role/cognito-gha"
      },
      "Action": [
        "sts:AssumeRole",
        "sts:TagSession"
      ],
      "Condition": {
        "StringEquals": {
          "aws:FederatedProvider": "cognito-identity.amazonaws.com",
          "aws:principalTag/env": "dev",
          "aws:requestTag/sha": "${aws:principalTag/sha}",
          "aws:requestTag/runEnv": "${aws:principalTag/runEnv}",
          "aws:requestTag/repo": "${aws:principalTag/repo}",
          "aws:requestTag/env": "${aws:principalTag/env}"
        },
        "StringLike": {
          "aws:principalTag/repo": "catnekaise/*"
        },
        "ForAllValues:StringEquals": {
          "aws:tagKeys": [
            "repo",
            "env",
            "runEnv",
            "sha"
          ]
        }
      }
    }
  ]
}
```

### Add additional conditions
Use `createConditions()` and then append any additional conditions as required.

```typescript
declare const pool: ActionsIdentityPool;
declare const role: iam.Role;

const builder = pool.util.chainedPrincipal
  .claimLike('repository', 'catnekaise/*');

const conditions = builder.createConditions() as ChainedPrincipalConditions;

conditions.StringEquals['aws:SourceVpc'] = 'vpc-12345';


// Use .withSessionTags() only if intending to assume this role with session tags
const principal = new iam.PrincipalWithConditions(role, conditions).withSessionTags();

const chainedRole = new iam.Role(this, 'ChainedRole', {
  name: 'chained-role',
  assumedBy: principal,
});
```

### Cross Account - Same CDK App
This will require bootstrapping with `--trust`.

```typescript
const deploymentRoleName = 'infra-network-deployment-dev';
const idPoolAccount = '111111111111';
const devAccount = '222222222222';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'ActionsIdentityPoolStack', {
  env: {
    account: idPoolAccount,
    region: 'eu-west-1',
  },
});

const devStack = new cdk.Stack(app, 'DevStack', {
  env: {
    account: devAccount,
    region: 'eu-west-1',
  },
});

const openIdConnectProvider = iam.OpenIdConnectProvider
  .fromOpenIdConnectProviderArn(stack, 'Provider', `arn:aws:iam::${stack.account}:oidc-provider/token.actions.githubusercontent.com`);

const pool = new ActionsIdentityPool(stack, 'Pool', {
  openIdConnectProvider: openIdConnectProvider,
  claimMapping: ClaimMapping.fromClaims('repository', 'environment'),
  authenticatedRole: 'create',
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
  },
});

const role = new iam.Role(stack, 'Role', {
  roleName: 'cognito-gha-role',
  assumedBy: pool.createPrincipalForPool({
    repository: {
      condition: 'StringEquals',
      values: ['catnekaise/infra.network'],
    },
    environment: ['dev'],
  }),
});

role.addToPolicy(new iam.PolicyStatement({
  effect: Effect.ALLOW,
  actions: ['sts:AssumeRole', 'sts:TagSession'],
  resources: [`arn:aws:iam::${devAccount}:role/${deploymentRoleName}`],
}));

pool.assignRoleWhenClaimStartsWith(role, 'sub', 'repo:catnekaise/infra.network:environment:dev');

const deploymentRole = new iam.Role(devStack, 'DeploymentRole', {
  roleName: deploymentRoleName,
  assumedBy: pool.util.chainedPrincipal
    .passesClaim('repository', 'environment', 'job_workflow_ref', 'runner_environment')
    .claimEquals('repository', 'catnekaise/infra.network')
    .claimEquals('environment', 'dev')
    .createPrincipalAssumedBy(role),
});

// add permissions or policies
deploymentRole.addToPolicy(new iam.PolicyStatement({
  effect: Effect.ALLOW,
  actions: [],
  resources: [],
}));
```

### Cross Account - Different CDK Apps

```typescript
// Using tag name abbrevations included in this library
import { ActionsIdentityChainedPrincipalBuilder, ClaimMapping } from '@catnekaise/actions-constructs';

const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromDefaults('repository', 'environment'))
  .claimEquals('repository', 'catnekaise/infra.network')
  .claimEquals('environment', 'dev');

// Specifying own tag name for each claim
const builder2 = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
  repository: 'repo',
  environment: 'env',
}))
  .claimEquals('repository', 'catnekaise/infra.network')
  .claimEquals('environment', 'dev');

const app = new cdk.App();
const stack = new cdk.Stack(app, 'Stack', {
  env: {
    account: '222222222222',
    region: 'eu-west-1',
  },
});

const deploymentRole = new iam.Role(stack, 'DeploymentRole', {
  roleName: 'infra-network-deployment-dev',
  assumedBy: builder.createPrincipalAssumedBy(new iam.ArnPrincipal('arn:aws:iam::111111111111:role/cognito-gha-role')),
});
```

### Cross Account - Specific Identity Pool

```typescript
const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromDefaults('repository', 'environment'))
  .claimEquals('repository', 'catnekaise/infra.network')
  .claimEquals('environment', 'dev')
  .requireIdentityPoolId('eu-west-1:11111111-example');

const deploymentRole = new iam.Role(stack, 'DeploymentRole', {
  roleName: 'infra-network-deployment-dev',
  assumedBy: builder.createPrincipalAssumedBy(new iam.AccountPrincipal('111111111111')),
});
```

### External Id
External Id condition can be added using the builder regardless if cross account or not.

```typescript
const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromDefaults('repository', 'environment'))
  .claimEquals('repository', 'catnekaise/infra.network')
  .claimEquals('environment', 'dev')
  .requireIdentityPoolId('eu-west-1:11111111-example')
  .requireExternalId('githubactions');

const deploymentRole = new iam.Role(stack, 'DeploymentRole', {
  roleName: 'infra-network-deployment-dev',
  assumedBy: builder.createPrincipalAssumedBy(new iam.AccountPrincipal('111111111111')),
});
```
