[![npm (scoped)](https://img.shields.io/npm/v/@catnekaise/actions-constructs?style=flat-square)](https://www.npmjs.com/package/@catnekaise/actions-constructs)
[![Nuget](https://img.shields.io/nuget/v/Catnekaise.CDK.ActionsConstructs?style=flat-square)](https://www.nuget.org/packages/Catnekaise.CDK.ActionsConstructs/)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/catnekaise/actions-constructs?sort=semver&style=flat-square)](https://github.com/catnekaise/actions-constructs/releases)

# Actions Constructs
AWS CDK Constructs for integrating GitHub Actions and AWS.

### Table of Contents

* ["Legacy" Constructs](#legacy-constructs)
* [ActionsIdentityPoolV2](#actionsidentitypoolv2)
    * [Usage](#usage)
    * [Usage - GitHub Actions](#usage---github-actions)
    * [OpenID Connect Provider](#openid-connect-provider)
        * [Audience](#audience)
    * [Mapped Claims](#mapped-claims)
        * [Custom Tag Names](#custom-tag-names)
        * [Library Tag Abbreviations](#library-tag-abbreviations)
    * [Enhanced AuthFlow](#enhanced-authflow)
* [ActionsIdentityPolicyUtility](#actionsidentitypolicyutility)
    * [Philosophy](#philosophy)
    * [Constraints](#constraints)
        * [Example](#example)
            * [Regular Usage](#regular-usage)
            * [With Policy Utility](#with-policy-utility)
    * [Policy Constraining](#policy-constraining)
    * [Policy Variable and PrincipalTagConditionKey](#policy-variable-and-principaltagconditionkey)
    * [ActionsIdentityConstraints](#actionsidentityconstraints)
        * [Constraints and CDK](#constraints-and-cdk)
    * [Resource Paths](#resource-paths)
        * [ToString](#tostring)
        * [More Examples](#more-examples)
    * [Role-Chaining (Cross Account)](#role-chaining-cross-account)
    * [Role Chaining in Workflows](#role-chaining-in-workflows)
    * [Passing Claims](#passing-claims)
        * [Trust Policy](#trust-policy)
* [Entrypoint Account](#entrypoint-account)
    * [Grant Organization Role Chain](#grant-organization-role-chain)
        * [Policy Statement](#policy-statement)
* [Additional Roles](#additional-roles)
    * [Same Stack](#same-stack-)
    * [Separate Stack](#separate-stack)

### "Legacy" Constructs
Will continue to be supported.

- [ActionsIdentityPool](./docs/actions-identity-pool/actions-identity-pool.md)
- [ActionsIdentityPoolBasic](./docs/actions-identity-pool/actions-identity-pool-basic.md)

# ActionsIdentityPoolV2
> Detailed explanation of the use-case can be found [here](https://catnekaise.github.io/github-actions-abac-aws/cognito-identity/).

Use this to create a Cognito Identity Pool that allows GitHub Actions to authenticate and receive temporary AWS credentials that has session/principal tags corresponding with the GitHub Actions claims. This enables attribute-based access control (ABAC) to AWS resources from GitHub Actions.

## Usage

```typescript
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib';
import {
  ActionsIdentityPoolV2,
  ActionsIdentityMappedClaims,
  GitHubActionsClaimConstraint,
} from '@catnekaise/actions-constructs';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'CatnekaiseActionsIdentityExampleStack');

// More details about OIDC Provider further below.
const openIdConnectProvider = iam.OpenIdConnectProvider
        .fromOpenIdConnectProviderArn(stack, 'Provider', `arn:aws:iam::${stack.account}:oidc-provider/token.actions.githubusercontent.com`);

const pool = new ActionsIdentityPoolV2(stack, 'Pool', {
  authenticatedRoleConstraints: [
    // change value to the name(s) of your GitHub organization(s) that shall be allowed to authenticate
    GitHubActionsClaimConstraint.repoOwners('catnekaise'),
  ],
  mappedClaims: ActionsIdentityMappedClaims.create(GhaClaim.REPOSITORY, GhaClaim.ACTOR, GhaClaim.RUNNER_ENVIRONMENT),
  authenticatedRoleName: 'GhaCognito', // Optional
  openIdConnectProvider,
});
```

## Usage - GitHub Actions
If having used the example above you can test it by using the workflow below. Make sure to update the values to match your environment.

Also, make sure the [OIDC Provider Audience](#audience) has been configured with whichever audience is used below.

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
        uses: catnekaise/cognito-idpool-auth@v1
        with:
          # Change values below to match your setup
          auth-flow: "basic"
          cognito-identity-pool-id: "eu-west-1:11111111-example"
          aws-role-arn: "arn:aws:iam::111111111111:role/GhaCognito"
          aws-region: "eu-west-1"
          audience: "cognito-identity.amazonaws.com"
          aws-account-id: "111111111111"
          set-in-environment: true
      
      - name: "STS Get Caller Identity"
        run: |
          aws sts get-caller-identity
```

## OpenID Connect Provider

- If no OIDC Provider is defined in the props given to ActionsIdentityPoolV2 it will try to import the provider from the AWS Account where the pool is being created.
- If the OIDC Provider does not exist in the target account, the construct cannot be deployed.
- If using GitHub Enterprise with a customized issuer, then import/create that provider and explicitly define it in the props.

```typescript
const stack = new cdk.Stack(new cdk.App(), 'CatnekaiseActionsIdentityExampleStack');

// Example for creating the OIDC Provider in the same stack as the Identity Pool
const openIdConnectProvider = new iam.OpenIdConnectProvider(stack, 'Provider', {
  url: 'https://token.actions.githubusercontent.com',
  // Keep sts.amazonaws.com if also using account to assume roles directly via STS
  clientIds: ['cognito-identity.amazonaws.com', 'sts.amazonaws.com'],
});

const pool = new ActionsIdentityPoolV2(stack, 'Pool', {
  openIdConnectProvider,
  // ...
});
```

### Audience
If the provider already exist, go ahead and add the clientId (audience) `cognito-identity.amazonaws.com` to the existing provider. This is the audience used as default value for actions `catnekaise/cognito-idpool-auth` and `catnekaise/cognito-idpool-auth-basic`.

## Mapped Claims
Because there's a limit for how much data can be put into a session in AWS, not all existing GitHub Actions claims can be mapped by Cognito Identity. Attempting to map all (or too many) claims will result in failure when assuming a role.

`ActionsIdentityMappedClaims` is used for selecting which claims should be mapped in the identity pool. It can also be used to map claims using different tag names than the claim name. Using shorter tag names gives room for mapping additional claims and staying under the limit. Further details for how to manage the session limit can be found [here](https://catnekaise.github.io/github-actions-abac-aws/detailed-explanation/#session-limit).

A good starting point of which claims to map that should not affect these limits:

```typescript
const mappedClaims = ActionsIdentityMappedClaims.create(
        GhaClaim.REPOSITORY,
        GhaClaim.ACTOR,
        GhaClaim.RUN_ID,
        GhaClaim.SHA,
        GhaClaim.REF,
        GhaClaim.JOB_WORKFLOW_REF,
);
```

### Custom Tag Names
Claims can be mapped to a tag with a different name than the original claim. The key is the name of the claim and value will become name of the tag.

```typescript
const mappedClaims = ActionsIdentityMappedClaims.createCustom({
  repository: 'repo',
  job_workflow_ref: 'jWorkRef'
})
```

### Library Tag Abbreviations
This library has a set of abbreviations that can be used to shorten the tag names. Value of the abbreviation tag names can be found in [claims.ts](./src/identity-pool/claims.ts).

```typescript
const mappedClaims = ActionsIdentityMappedClaims.createWithAbbreviations(
        // becomes `repo` instead of `repository`
        GhaClaim.REPOSITORY,
        // becomes `jWorkRef` instead of `job_workflow_ref`
        GhaClaim.JOB_WORKFLOW_REF,
);
```

## Enhanced AuthFlow
> [!NOTE]
> Using the `basic` auth-flow will feel the most similar to how you have been using GitHub Actions OIDC with AWS STS today, so it may be a better starting point than the `enhanced` auth-flow.

By default the `ActionsIdentityPoolV2` uses the `Basic (Classic) AuthFlow` but it can also be configured to use the `Enhanced (Simplified) AuthFlow`.

Using the enhanced auth-flow requires an extra step where a role-assignment is made. More details about the differences of these auth-flows in the context of GitHub Actions can be found [here](https://catnekaise.github.io/github-actions-abac-aws/detailed-explanation/#authentication-flows).

```typescript
const pool = new ActionsIdentityPoolV2(stack, 'Pool', {
  useEnhancedAuthFlow: true,
  // other props
});

const role: iam.Role = pool.defaultAuthenticatedRole;

// The claims used in role assignment does not have to be claims that are mapped in the identity pool.
pool.enhancedFlowAssignRole(role, GhaClaim.REPOSITORY_OWNER, EnhancedFlowMatchType.EQUALS, 'catnekaise/');
```

# ActionsIdentityPolicyUtility
Use the policy utility to:

- Create principals (trust policy) for additional IAM Roles assumed via Cognito Identity
- Create principals (trust policy) for IAM Roles assumed via the roles above (role-chaining)
- Build resource paths containing a mix of text and GitHub Actions claims
- Append grants with conditions based on claims from GitHub Actions
- Append policy statements with conditions based on claims from GitHub Actions

```typescript
import { ActionsIdentityPoolV2, ActionsIdentityPolicyUtility } from '@catnekaise/actions-constructs';

declare const pool: ActionsIdentityPoolV2;

// Available via ActionsIdentityPoolV2
let policyUtility = pool.policyUtility;

// Configure separately
policyUtility = ActionsIdentityPolicyUtility.create(scope, {
  mappedClaims: ActionsIdentityMappedClaims.create(GhaClaim.REPOSITORY /** additional claims **/),
  // Additional utility configuration
});
```

## Philosophy
The `ActionsIdentityPolicyUtility` aims to make it as easy as possible to work with the GitHub Actions claims while minimizing interference with how you work with AWS CDK today.

- The utility prevents you from using claims you have not mapped in your identity pool.
- The utility will select correct tag names if you have mapped a claim to a tag with a different name.
- Any changes to mapped claims configuration is reflected in any conditions or resource paths created via the policy utility


## Constraints
In the context of this library (and [catnekaise/cdk-iam-utilities](https://github.com/catnekaise/cdk-iam-utilities)), constraining is the act of appending existing `iam.PolicyStatement(s)` with conditions. One applied constraint may conditionally add `none`, `one` or `many` conditions to the provided policy statement(s).

The goal of constraints is to simplify working with the condition block of a policy statement when there are many conditions being used, and to help make working with the conditions "contextual" to the task at hand, such as creating policies for GitHub Actions attribute based access controls.

### Example
Using the existing functionality in CDK of granting a role the permissions to read and write in a S3 bucket, there are these example requirements:

- Can only read/write to an object prefix that matches `artifacts/workflow_run/${{ github.repository }}/${{ github.run_id }}/*`
- Can only read/write when workflow is running on a `self-hosted` runner
- Can only read/write when workflows running is a re-usable workflow on the `main` branch in repository `catnekaise/shared-workflows`

#### Regular Usage

```typescript
declare const bucket: s3.Bucket;

const grant = bucket.grantReadWrite(role,
        'artifacts/workflow_run/${aws:principalTag/repository}/${aws:principalTag/run_id}/*',
);

grant.principalStatements[0].addCondition('StringEquals', {
  'aws:principalTag/runner_environment': 'self-hosted',
});

grant.principalStatements[0].addCondition('StringLike', {
  'aws:principalTag/job_workflow_ref': 'catnekaise/shared-workflows/.github/workflows/*@refs/heads/main',
});
```

#### With Policy Utility

```typescript
declare const pool: ActionsIdentityPoolV2;
declare const bucket: s3.Bucket;

const grant = bucket.grantReadWrite(role,
        pool.policyUtility.util.resourcePath('artifacts/workflow_run', GhaClaim.REPOSITORY, GhaCLaim.RUN_ID, '*'),
);

pool.policyUtility.constrainGrant(grant)
        .whenSelfHosted()
        .jobWorkflowLike('catnekaise', 'shared-workflows', '*', 'refs/heads/main');
```

## Policy Constraining
A single policy statement can be constrained in the same way as a grant.

```typescript
declare const role: iam.Role;
declare const pool: ActionsIdentityPoolV2;

const policy = new iam.PolicyStatement({
  effect: iam.Effect.ALLOW,
  actions: ['ssm:GetParameter'],
  resources: ['*'],
});

pool.policyUtility.constrain(policy)
        .hasResourceTagEqualToClaim('repository', GhaClaim.REPOSITORY);

role.addToPolicy(policy);
```

## Policy Variable and PrincipalTagConditionKey
It's also possible to create individual policy variables and/or principal tags via the policy utility and use them in condition statements. Any changes made to the mapped claims configurations will be reflected in variables/tags created via the policy utility.

```typescript
import { ActionsIdentityPolicyUtility, GhaClaim } from '@catnekaise/actions-constructs';

const policyUtility = ActionsIdentityPolicyUtility.create(scope, {
  mappedClaims: ActionsIdentityMappedClaims.create(GhaClaim.REPOSITORY, GhaClaim.ACTOR),
});

const policyVariable = policyUtility.policyVar(GhaClaim.REPOSITORY);
const principalTag = policyUtility.principalTagConditionKey(GhaClaim.ACTOR);

const policy = new iam.PolicyStatement({
  conditions: {
    StringEquals: {
      [principalTag.toString()]: 'catnekaise/example-repo',
      'aws:ResourceTag/owner': policyVariable.toString(),
    },
  },
});
```

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Condition": {
        "StringEquals": {
          "aws:PrincipalTag/repository": "catnekaise/example-repo",
          "aws:ResourceTag/owner": "${aws:PrincipalTag/actor}"
        }
      }
    }
  ]
}
```

## ActionsIdentityConstraints
When working with constraints via the policy utility you will be using `ActionsIdentityConstraints` where convenience methods has been created for some common scenarios such as `whenSelfHosted()` and `repoOwners('catnekaise', 'additional-org')`.

These convenience methods do cover all possible scenarios. The following methods can be used for those scenarios.

```typescript
import { ConditionOperator } from '@catnekaise/cdk-iam-utilities';

pool.policyUtility.newPrincipalBuilder()
        .claimEquals(GhaClaim.REPOSITORY_VISIBILITY, 'public') // StringEquals
        .claimLike(GhaClaim.ENVIRONMENT, 'dev-*') // StringLike
        .claimCondition(ConditionOperator.STRING_NOT_EQUALS, GhaClaim.ENVIRONMENT, 'dev-custom');
```


### Constraints and CDK
Whether on a single policy statement or on several policy statements included in a grant, each condition is added to each policy statement via `policyStatement.addCondition()`. If the combination of `Operator` and `ConditionKey` already exists, existing value(s) gets replaced.

```typescript
declare const role: iam.Role;
declare const pool: ActionsIdentityPoolV2;

const policy = new iam.PolicyStatement({
  effect: iam.Effect.ALLOW,
  actions: [],
  resources: [],
  conditions: {
    StringEquals: {
      'aws:PrincipalTag/runner_environment': 'github-hosted',
    },
  },
});

// Condition value runner_environment is changed from github-hosted to self-hosted
pool.policyUtility.constrain(policy).whenSelfHosted();

// Condition value is changed from self-hosted to github-hosted
policy.addCondition('StringEquals', { 'aws:PrincipalTag/runner_environment': 'self-hosted' });

role.addToPolicy(policy);
```

## Resource Paths
Concatenate strings and claims to a resource path. All examples below results in the resource path: `items/${aws:principalTag/repository}/${aws:principalTag/environment}/*`.

```typescript
declare const pool: ActionsIdentityPoolV2;
declare const bucket: s3.Bucket;

let resourcePath: string;

resourcePath = policyUtility.resourcePath('items', GhaClaim.REPOSITORY, GhaCLaim.ENVIRONMENT, '*').toString();

resourcePath = policyUtility.resourcePath()
        .text('items')
        .claim(GhaClaim.REPOSITORY, GhaClaim.ENVIRONMENT)
        .text('*').toString();

resourcePath = policyUtility.resourcePath('items')
        .value(GhaClaim.REPOSITORY, GhaClaim.ENVIRONMENT, '*').toString();

const grant = bucket.grantReadWrite(role, resourcePath);
```

### ToString
While some CDK constructs allow passing in resource paths of `any` type and will implicitly invoke the toString() method, it's best to invoke toString() before passing the resource path to where it will be used.

### More Examples

```typescript
import { ActionsIdentityPoolV2 } from '@catnekaise/actions-constructs';

declare const pool: ActionsIdentityPoolV2;
declare const bucket: s3.Bucket;
declare const terraformStateTable: dynamodb.TableV2;

// Allow Github Actions to store cache to an S3 bucket in context of repository and the ref that is running
bucket.grantReadWrite(pool.defaultAuthenticatedRole,
        pool.policyUtility.resourcePath('cache', GhaClaim.REPOSITORY, GhaCLaim.REF, '*'));

// Allow Github Actions to upload/download artifacts in context of repository and the specific workflow run
bucket.grantReadWrite(pool.defaultAuthenticatedRole,
        pool.policyUtility.resourcePath('artifacts/workflow_run', GhaClaim.REPOSITORY, GhaCLaim.RUN_ID, '*'));


// Allow terraform running in GitHub Actions to to acquire state lock, but only on the combination of repository and environment running
const tableGrant = terraformStateTable.grant(pool.defaultAuthenticatedRole, 'dynamodb:DescribeTable', 'dynamodb:GetItem', 'dynamodb:PutItem', 'dynamodb:DeleteItem');
tableGrant.principalStatements.addCondition('ForAllValues:StringEquals', {
  'dynamodb:LeadingKeys': [
    pool.policyUtility.resourcePath(GhaClaim.REPOSITORY, GhaClaim.ENVIRONMENT, 'terraform.tfstate').toString(),
  ],
});
```

## Role-Chaining (Cross Account)
The example below can be split into separate CDK Apps.

```typescript
const poolStack = new cdk.Stack(app, 'PoolStack', {
  env: {
    region: 'eu-west-1',
    account: '111111111111',
  },
});

const workloadStack = new cdk.Stack(app, 'WorkloadStack', {
  env: {
    region: 'eu-west-1',
    account: '222222222222',
  },
});

workloadStack.addDependency(poolStack);

const mappedClaims = ActionsIdentityMappedClaims.create(GhaClaim.REPOSITORY, GhaClaim.ENVIRONMENT);

const pool = new ActionsIdentityPoolV2(poolStack, 'Pool', {
  authenticatedRoleConstraints: [
    // change value to the name(s) of your GitHub organization(s) or username(s) that shall be allowed to authenticate
    GitHubActionsClaimConstraint.repoOwners('catnekaise'),
  ],
  mappedClaims,
  authenticatedRoleName: 'GhaCognito',
});

pool.defaultAuthenticatedRole.grantAssumeRole(new iam.SessionTagsPrincipal(new iam.ArnPrincipal('arn:aws:iam::222222222222:role/github-actions/WorkloadDeploymentDev')));


new iam.Role(workloadStack, 'Role', {
  roleName: 'WorkloadDeploymentDev',
  path: '/github-actions/',
  assumedBy: util.newChainedPrincipalBuilder()
          .repositoryEquals('catnekaise/workload-repo')
          .environmentEquals('dev')
          .createPrincipalAssumedBy(workloadStack, new iam.AccountPrincipal('111111111111'), {
            // Read more about passing claims further below
            passClaims: mappedClaims.toPassClaims(),
          }),
});
```

## Role Chaining in Workflows
For more information, read documentation at [catnekaise/cognito-idpool-auth](https://github.com/catnekaise/cognito-idpool-auth)

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        required: true
        description: Environment

jobs:
  job1:
    runs-on: ubuntu-latest
    environment: ${{ inputs.environment }}
    permissions:
      id-token: write
      contents: read
    steps:
      - name: "Get Credentials from Amazon Cognito Identity"
        uses: catnekaise/cognito-idpool-auth@v1
        with:
          # Change values below to match your environment
          cognito-identity-pool-id: "eu-west-1:11111111-example"
          aws-role-arn: "arn:aws:iam::111111111111:role/GhaCognito"
          aws-region: "eu-west-1"
          audience: "cognito-identity.amazonaws.com"
          aws-account-id: "111111111111"
          set-in-environment: true
          role-chain-pass-claims: "repository,environment"
          role-chain-arn: "arn:aws:iam::222222222222:role/WorkloadDevDeployment"
```

## Passing Claims
In the context of this library, passing claims means tagging the next session with one or more of the GitHub Actions claims present in the current role session. Doing this is optional, but it makes it possible to use the GitHub Actions claims with policies inside the workload account.

In order to not allow the workflow to alter the value of claims during role chaining or setting any additional session tags, the trust policy in the workload account needs to be configured accordingly.

```typescript
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib';
import { ActionsIdentityPolicyUtility, ActionsIdentityMappedClaims, GhaClaim } from '@catnekaise/actions-constructs';

const stack = new cdk.Stack(new cdk.App(), 'WorkloadStack');

const mappedClaims = ActionsIdentityMappedClaims.create(GhaClaim.ACTOR, GhaClaim.REPOSITORY, GhaClaim.SHA, GhaClaim.REF, GhaClaim.ENVIRONMENT);

// All claims will have to be defined as session tags when using AssumeRole
const passAllClaims = mappedClaims.toPassClaims();

// Only the Repository and Environment claim has to be set when using AssumeRole
const passSomeClaims = mappedClaims.toPassClaims(GhaClaim.ENVIRONMENT, GhaClaim.REPOSITORY);

// Only Repository and Environment has to be set, but has to be set with customized tag names
const passCustomClaims = mappedClaims.toPassClaimsCustom({
  // claim: tagName
  repository: 'repo',
  environment: 'github_environment',
});

// Allows directly using the configure-aws-credentials action: https://github.com/aws-actions/configure-aws-credentials#session-tagging-and-name
// Note: The only real claims passable using this is: Repository, Actor, Sha and Ref
const passConfigureAwsCredentialsClaims = mappedClaims.toConfigureAwsCredentialsPassClaims();

const util = ActionsIdentityPolicyUtility.create(stack, {
  mappedClaims,
});

new iam.Role(workloadStack, 'Role', {
  roleName: 'WorkloadRole',
  assumedBy: util.newChainedPrincipalBuilder()
          .repositoryEquals('catnekaise/workload-repo')
          .environmentEquals('dev')
          .createPrincipalAssumedBy(workloadStack, new iam.AccountPrincipal('111111111111'), {
            // Set one of the examples above
            passClaims: passSomeClaims,
          }),
});
```

### Trust Policy
The example above would produce this trust policy:

```json5
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::111111111111:root"
      },
      "Action": [
        "sts:AssumeRole",
        "sts:TagSession"
      ],
      "Condition": {
        "StringEquals": {
          // Requires role was assumed via Cognito Identity
          "aws:FederatedProvider": "cognito-identity.amazonaws.com",
          // Requires that value of current session tags equals the following environment and repository
          "aws:PrincipalTag/environment": "dev",
          "aws:PrincipalTag/repository": "catnekaise/workload-repo",
          // Requires setting session tags with same value as current session tags
          "aws:RequestTag/environment": "${aws:principalTag/environment}",
          "aws:RequestTag/repository": "${aws:principalTag/repository}"
        },
        "ForAllValues:StringEquals": {
          // Requires that only the two following session tags are set
          "aws:TagKeys": [
            "repository",
            "environment"
          ]
        }
      }
    }
  ]
}
```

# Entrypoint Account
In the context of this library (and its associated documentation), an `entrypoint` account is a production AWS account in an organization that is trusted to have correctly configured Cognito Identity, associated AWS IAM Roles and their permissions. This account is where GitHub Actions authentication starts.

The AWS credentials received from the Cognito Identity Pool in the entrypoint account is primarily used to perform role chaining into many workload accounts.

## Grant Organization Role Chain
When assuming a role cross-account, the role that performs `AssumeRole` needs permissions to do this (in addition to the cross-account role trust policy allowing the assumption to begin with). In order to not have to add permission for each individual workload role that an identity pool role shall be allowed to assume, and in order to not grant the same role the ability to assume any roles that have a weak trust policy, `grantOrganizationRoleChain` can be used.

`grantOrganizationRoleChain` provides an opinionated interface of granting the type of permissions required to meet the criteria above.

```typescript
import { ActionsIdentityPoolV2 } from '@catnekaise/actions-constructs';

declare const pool: ActionsIdentityPoolV2;

pool.policyUtility.grantOrganizationRoleChain(pool.defaultAuthenticatedRole, {
  // One of rolePath or roleHasResourceTags is required, or both.
  rolePath: '/github-actions/',
  roleHasResourceTags: {
    usedViaGitHubActions: '1',
  },
  // Optional
  resourceOrgPaths: ['o-example/r-ab12/ou-ab12-11111111/*'],
  // Optional
  // Identity Pool AWS Account ID is automatically excluded when using policyUtility via ActionsIdentityPoolV2
  excludeAccountIds: ['333333333333', '444444444444'],
});
```

### Policy Statement
The following permissions are granted to the role in the example above.

```json5
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "sts:TagSession",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      // Limited to assuming workload roles under path /github-actions/
      "Resource": "arn:aws:iam::*:role/github-actions/*",
      "Condition": {
        "StringEquals": {
          // Limited to assuming workload roles that have the following tag
          "aws:ResourceTag/usedViaGitHubActions": "1",
          // Limit to assuming roles within the same organization as the current role
          "aws:ResourceOrgID": "${aws:PrincipalOrgID}"
        },
        "StringNotEquals": {
          // Shall explicitly not be allowed to assume roles in identity pool account (111111111111)
          // Shall explicitly not be allowed to assume roles in accounts 333333333333, 444444444444
          "aws:ResourceAccount": ["111111111111", "333333333333", "444444444444"]
        },
        "ForAnyValue:StringLike": {
          // Shall only be allowed to assume roles under the following organization path
          "aws:ResourceOrgPaths": [
            "o-example/r-ab12/ou-ab12-11111111/*"
          ]
        }
      }
    }
  ]
}
```

# Additional Roles
More roles can be created and assumed via a Cognito Identity Pool. If using the `enhanced` auth-flow, these roles must exist in the same AWS account as the identity pool. If using the `basic` auth-flow, these roles can be created in any AWS Account and reference the ID of the identity pool.

Using the [ActionsIdentityPolicyUtility](#actionsidentitypolicyutility), the trust policies for these roles can be created that align with the configuration of an identity pool in any stack.

## Same Stack

```typescript
declare const pool: ActionsIdentityPoolV2;

const principal = pool.policyUtility.newPrincipalBuilder()
        .repositoryEquals('catnekaise/workload-repo')
        .createPrincipal(pool);

const role = new iam.Role(scope, 'AdditionalRole', {
  assumedBy: principal,
});

// If using the enhanced auth-flow, assignment must be configured
pool.enhancedFlowAssignRole(role, GhaClaim.REPOSITORY, EnhancedFlowMatchType.EQUALS, 'catnekaise/workload-repo');
```

## Separate Stack

```typescript
import { ActionsIdentityPolicyUtility } from '@catnekaise/actions-constructs';

const mappedClaims = ActionsIdentityMappedClaims.create(
        GhaClaim.REPOSITORY,
        // additional claims
);

const utility = ActionsIdentityPolicyUtility.create(stack, {
  mappedClaims,
  // identityPoolId is required when using the principalBuilder.
  identityPoolId: 'eu-west-1:11111111-example',
});

const principal = utility.newPrincipalBuilder()
        .repositoryEquals('catnekaise/workload-repo')
        .createPrincipal(pool);

new iam.Role(scope, 'AdditionalRole', {
  assumedBy: principal,
});
```
