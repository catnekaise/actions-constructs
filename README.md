# Actions Constructs
A set of AWS CDK Constructs for integrating GitHub Actions and AWS.

### GitHub Actions ABAC in AWS
At the time of writing, the constructs and utilities of this library relates to `GitHub Actions attribute based access control in AWS` and how to make this as easy as possible using AWS CDK.

## ActionsIdentityPool
Use this construct to create an `Amazon Cognito Identity Pool` that enables GitHub Actions [OpenID Connect identities](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) to request temporary AWS Credentials. The temporary AWS Credentials will have principal/session tags corresponding with [access token claims](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token) which enables attribute based access control (ABAC) to AWS resources based on these claims.

Used for [Enhanced (Simplified) AuthFlow](https://catnekaise.github.io/github-actions-abac-aws/cognito-identity/).

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

[Continue reading here](./docs/actions-identity-pool/actions-identity-pool.md).

## ActionsIdentityPoolBasic
Similar to above but used for [Basic (Classic) AuthFlow](https://catnekaise.github.io/github-actions-abac-aws/cognito-identity/). [View documentation here](./docs/actions-identity-pool/actions-identity-pool-basic.md).


## Utilities
- [Chained Principal Builder](/docs/actions-identity-pool/util/chained-principal-builder.md)
- [IAM Resource Path Builder](/docs/actions-identity-pool/util/iam-resource-path.md)
- [Principal Builder](/docs/actions-identity-pool/util/principal-builder.md)

### Developer Note - Other Languages
The library successfully builds using jsii/projen. It's on my TODO-list.
