### Note
Much of the documentation in [ActionsIdentityPool](./actions-identity-pool.md) is applicable to this construct as well. Rather than duplicating, read that documentation as well.

# Actions Identity Pool Basic
Use this construct to create an `Amazon Cognito Identity Pool` intended for GitHub Actions [OpenID Connect identities](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect), for when using the [Basic (Classic) AuthFlow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html).

## Usage

```typescript
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import { ActionsIdentityPoolBasic, ClaimMapping, GhaClaim } from '@catnekaise/actions-constructs';

const githubOrganization = 'catnekaise'; // Change this Value

const app = new cdk.App();
const stack = new cdk.Stack(app, 'ActionsIdentityPoolStack');

const openIdConnectProvider = iam.OpenIdConnectProvider
  .fromOpenIdConnectProviderArn(stack, 'Provider', `arn:aws:iam::${stack.account}:oidc-provider/token.actions.githubusercontent.com`);

const pool = new ActionsIdentityPoolBasic(stack, 'Pool', {
  openIdConnectProvider: openIdConnectProvider,
  claimMapping: ClaimMapping.fromClaims(GhaClaim.REPOSITORY, GhaClaim.ACTOR, GhaClaim.REPOSITORY, GhaClaim.JOB_WORKFLOW_REF, GhaClaim.ENVIRONMENT, GhaClaim.SHA, GhaClaim.RUNNER_ENVIRONMENT),
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: [`${githubOrganization}/*`],
    },
  },
});

const role = pool.authenticatedRole;

declare const bucket: s3.Bucket;

// permission granted at object prefix = /${aws:principalTag/repo}/cache/${aws:principalTag/jWorkRef}/*
bucket.grantReadWrite(role, pool.util.iamResourcePath.value(GhaClaim.REPOSITORY, 'cache', GhaClaim.JOB_WORKFLOW_REF, '*'));
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
        uses: catnekaise/cognito-idpool-basic-auth@alpha
        with:
          cognito-identity-pool-id: "eu-west-1:11111111-example"
          aws-role-arn: "arn:aws:iam::111111111111:role/cognito-role"
          aws-region: "eu-west-1"
          audience: "cognito-identity.amazonaws.com"
          aws-account-id: "111111111111"
          set-in-environment: true
      - name: "STS Get Caller Identity"
        run: |
          aws sts get-caller-identity

      - name: "Upload text file to S3 bucket"
        run: |
          date > info.txt
          aws s3 cp info.txt s3://BUCKET_NAME/${{ github.repository }}/cache/${{ github.job_workflow_ref }}/info.txt


```

### Claim Requirements
`ActionsIdentityPoolBasic` requires that there's at least one claim applied to a principal when using `createPrincipalForPool` to create trust policies. These are added as conditions in the trust policy.

```typescript
const pool = new ActionsIdentityPoolBasic(stack, 'Pool', {
  principalClaimRequirements: {
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
  },
});

const principal = pool.createPrincipalForPool(); // value of principalClaimRequirements set in ActionsIdentityPoolBasic constructor are used

const role = new iam.Role(stack, 'Role', {
  assumedBy: principal,
});

const role2 = new iam.Role(stack, 'Role2', {
  assumedBy: pool.createPrincipalForPool(({
    // no claims provided to principalClaimRequirements in ActionsIdentityPoolBasic constructor are inherited
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/'],
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
```

### Additional Documentation
More documentation relevant for this construct is available in the documentation for [ActionsIdentityPool](./actions-identity-pool.md).

- [Chained Principal Builder](./util/chained-principal-builder.md)
- [IAM Resource Path Builder](./util/iam-resource-path.md)
- [Principal Builder](./util/principal-builder.md)
