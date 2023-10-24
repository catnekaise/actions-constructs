# Actions Identity Pool
Use this construct to create an `Amazon Cognito Identity Pool` that enables GitHub Actions [OpenID Connect identities](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) to request temporary AWS Credentials. This construct is for the [Enhanced (Simplified) AuthFlow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html).

## Usage

```typescript
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import { ActionsIdentityPool, ClaimMapping } from '@catnekaise/actions-constructs';

const githubOrganization = 'catnekaise'; // Change this Value

const app = new cdk.App();
const stack = new cdk.Stack(app, 'ActionsIdentityPoolStack');

const openIdConnectProvider = iam.OpenIdConnectProvider
        .fromOpenIdConnectProviderArn(stack, 'Provider', `arn:aws:iam::${stack.account}:oidc-provider/token.actions.githubusercontent.com`);

const pool = new ActionsIdentityPool(stack, 'Pool', {
  openIdConnectProvider: openIdConnectProvider,
  authenticatedRole: 'create',
  claimMapping: ClaimMapping.fromClaims('repository', 'actor', 'job_workflow_ref'),
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: [`${githubOrganization}/*`],
    },
  },
});

const role = new iam.Role(stack, 'Role', {
  assumedBy: pool.createPrincipalForPool(),
});

pool.assignRoleWhenClaimEquals(role, 'repository_owner', githubOrganization);

declare const bucket: s3.Bucket;

// permission granted at object prefix = /${aws:principalTag/repo}/cache/${aws:principalTag/jWorkRef}/*
bucket.grantReadWrite(role, pool.util.iamResourcePath.value('repository', 'cache', 'job_workflow_ref', '*'));
```

### Use in GitHub Actions
The following workflow uses a re-usable action for authenticating with the ID Pool. Read [here](./using-identity-pool.md) for more information about using Cognito Identity in GitHub Actions.

```yaml
on:
  workflow_dispatch:
jobs:
  job1:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: "Get Credentials from Amazon Cognito Identity"
        uses: catnekaise/cognito-idpool-auth@alpha
        with:
          cognito-identity-pool-id: "eu-west-1:11111111-example"
          aws-region: "eu-west-1"
          audience: "cognito-identity.amazonaws.com"
          aws-account-id: "111111111111"
          set-in-environment: true

      - name: "STS Get Caller Identity"
        run: |
          aws sts get-caller-identity

      - name: Upload text file to S3 bucket
        run: |
          date > info.txt
          aws s3 cp info.txt s3://BUCKET_NAME/${{ github.repository }}/cache/${{ github.job_workflow_ref }}/info.txt


```

### AWS IAM OpenID Connect Identity Provider
Import the existing Identity Provider or [create the provider](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services#adding-the-identity-provider-to-aws) for the AWS Account in the stack. If using GitHub Enterprise Cloud with [configured issuer](https://docs.github.com/en/enterprise-cloud@latest/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-issuer-value-for-an-enterprise), add `enterpriseSlug`.

If no provider is passed in the props, construct will attempt to import an existing provider in the account.

```typescript
import * as iam from 'aws-cdk-lib/aws-iam';
import { ActionsIdentityPool } from '@catnekaise/actions-constructs';

const openIdConnectProvider = new iam.OpenIdConnectProvider(stack, 'Provider', {
  url: 'https://token.actions.githubusercontent.com',
  clientIds: ['cognito-identity.amazonaws.com'],
});

const pool = new ActionsIdentityPool(stack, 'Pool', {
  openIdConnectProvider: openIdConnectProvider,
  authenticatedRole: 'create',
  claimMapping: ClaimMapping.fromClaims('repository', 'actor', 'job_workflow_ref', 'environment', 'sha', 'runner_environment'),
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: [`${githubOrganization}/*`],
    },
  },
});
```

## ClaimMapping

#### fromClaims
Provide one or more GitHub Actions Claims and tag names will be the name abbreviations listed in the table below. Any claim not listed will have the same tag name as claim name.

A use case for tag name abbreviations is because of [session limits](https://catnekaise.github.io/github-actions-abac-aws/detailed-explanation/#session-limit).

```typescript
const pool = new ActionsIdentityPool(stack, 'Pool', {
  claimMapping: ClaimMapping.fromClaims('repository', 'environment', 'actor', 'job_workflow_ref'),
});
```

| Claim                 | Tag Name |
|-----------------------|----------|
| repository_owner      | owner    |
| repository            | repo     |
| runner_environment    | runEnv   |
| job_workflow_ref      | jWorkRef |
| workflow_ref          | workRef  |
| environment           | env      |
| enterprise            | ent      |
| run_number            | run      |
| run_attempt           | attempt  |
| run_id                | runId    |
| repository_visibility | repoVis  |
| repository_owner_id   | ownerId  |
| repository_id         | repoId   |
| event_name            | event    |
| actor_id              | actorId  |

#### fromClaimsWithTagName
Specify tag names for claims.

```typescript
const pool = new ActionsIdentityPool(stack, 'Pool', {
  claimMapping: ClaimMapping.fromClaimsWithTagName({
    repository: 'repo',
    job_workflow_ref: 'job',
  }),
});
```

#### fromClaimsAsTagNames
Use claim name as tag name.

```typescript
const pool = new ActionsIdentityPool(stack, 'Pool', {
  claimMapping: ClaimMapping.fromClaimsAsTagNames('repository', 'environment', 'actor', 'job_workflow_ref'),
});
```

### Claim Requirements
`ActionsIdentityPool` requires that there's at least one claim applied to a principal when using `createPrincipalForPool` to create trust policies. These are added as conditions in the trust policy.

```typescript
const pool = new ActionsIdentityPool(stack, 'Pool', {
  claims: ['repository'],
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
  },
});

// value of principalClaimRequirements set in ActionsIdentityPoolProps are used
const principal = pool.createPrincipalForPool(); 

const role = new iam.Role(stack, 'Role', {
  assumedBy: principal,
});

const role2 = new iam.Role(stack, 'Role2', {
  assumedBy: pool.createPrincipalForPool(({
    // claims provided to principalClaimRequirements in ActionsIdentityPool constructor are NOT inherited/merged
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
    environment: ['test'],
    jobWorkflowRef: {
      condition: 'StringLike',
      values: [
        'catnekaise/shared-workflows/*@refs/heads/main',
      ],
    },
  })),
});

pool.assignRoleWhenClaimEquals(role2, 'environment', 'test');
pool.assignRoleWhenClaimEquals(role, 'repository_owner', 'catnekaise');
```

#### repository_owner claim
It's possible to match against any claim even if not mapping the claim. If intending to assign a role based on the GitHub organization name, it's easier to user the claim `repository_owner` equaling the name as seen above than matching startsWith on the `repository` claim.

### Role Assignment
Cognito Identity can perform [role selection](https://docs.aws.amazon.com/cognito/latest/developerguide/role-based-access-control.html#using-rules-to-assign-roles-to-users) by evaluating rules. This allows different roles to be assigned to different workflows based on rule configuration.

```typescript
declare const pool: ActionsIdentityPool;

const principal = pool.createPrincipalForPool();

const role = new iam.Role(stack, 'Role', {
  assumedBy: principal,
});

pool.assignRoleWhenClaimEquals(role, 'repository_owner', 'catnekaise');
pool.assignRoleWhenClaimStartsWith(role, 'repository', 'catnekaise/');
```

### Role Assignment Order
When rules are evaluated they are evaluated in the order they were created.

```typescript
declare const pool: ActionsIdentityPool;

const role = new iam.Role(stack, 'Role', {
  assumedBy: pool.createPrincipalForPool({
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
    environment: ['dev', 'test', 'prod'],
  }),
});

const generalRole = new iam.Role(stack, 'GeneralRole', {
  assumedBy: pool.createPrincipalForPool(),
});

pool.assignRoleWhenClaimEquals(role, 'environment', 'dev'); // Rule 1
pool.assignRoleWhenClaimEquals(role, 'environment', 'test'); // Rule 2
pool.assignRoleWhenClaimEquals(generalRole, 'repository_owner', 'catnekaise'); // Rule 3
pool.assignRoleWhenClaimEquals(role, 'environment', 'prod'); // Rule 4
```

### Default Authenticated Role
> https://docs.aws.amazon.com/cognito/latest/developerguide/role-based-access-control.html#using-rules-to-assign-roles-to-users

It's required to assign a role as the `default authenticated role` when using role mappings for an Identity Pool. This has bearing if the Cognito Identity Pool role resolution is configured to resolve the `default authenticated role` when no rule is matched.

- Set `authenticatedRole` to `useFirstAssigned` and the first role provided to `ActionsIdentityPool` for role assignment is used as the default authenticated role.
- Set `authenticatedRole` to `create` and `ActionsIdentityPool` will create a role for this purpose. 
  - Use `authenticatedRoleName` to provide the created role with a specific name.
- Optionally set `roleResolution` to `defaultAuthenticatedRole` if the default authenticated role shall be used when no rule matched.

```typescript
const pool = new ActionsIdentityPool(stack, 'Pool', {
  claims: ['repository'],
  authenticatedRole: 'create',
  authenticatedRoleName: 'cognito-gha-default',
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
  },
  roleResolution: 'deny', // default
});

const defaultAuthRole: iam.Role | undefined = pool.defaultAuthenticatedRole;
```

### cognito-identity.amazonaws.com:amr
> https://docs.aws.amazon.com/cognito/latest/developerguide/role-trust-and-permissions.html

Provide `authenticatedMethodReference` in constructor with value of either `host` (default), `authenticated`, or `arn` to configure what value shall be used when getting principals from the pool.

If using any value other than `authenticated` for the role that is configured as the `Default Authenticated Role`, the Cognito Identity Console UI will display a large warning saying "Trust policy isn't secure for this identity pool". This is incorrect and is likely on a TODO list somewhere.

Nonetheless, when setting `authenticatedRole` to `create`, the construct will use `authenticated` regardless of value provided in `authenticatedMethodReference`. If using `useFirstAssigned`, the amr can be provided when creating the principal as exampled below.

```typescript
const pool = new ActionsIdentityPool(stack, 'Pool', {
  authenticatedRole: 'useFirstAssigned',
  authenticatedMethodReference: 'host',
});

const role = new iam.Role(stack, 'Role', {
  assumedBy: pool.createPrincipalForPool(undefined, 'authenticated'),
});

pool.assignRoleWhenClaimEquals(role, 'repository_owner', 'catnekaise');
```

| Option         | Value                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| host (default) | token.actions.githubusercontent.com                                                  |
| authenticated  | authenticated                                                                        |
| arn            | `arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*` |


## Utils
- [Chained Principal Builder](./util/chained-principal-builder.md)
- [IAM Resource Path Builder](./util/iam-resource-path.md)

### GitHub Enterprise Cloud
When using GitHub Enterprise Cloud the `issuer` claim can be  [configured](https://docs.github.com/en/enterprise-cloud@latest/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-issuer-value-for-an-enterprise) to include the enterprise slug.

If having done so, either always provide the openIdConnectProvider to `ActionsIdentityPool` or set context option `@catnekaise/actions-identity-pool:enterpriseSlug` with value of enterprise slug.
