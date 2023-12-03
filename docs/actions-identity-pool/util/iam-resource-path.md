# IAM Resource Path Builder
Use this to build an IAM Policy resource path consisting of text and principalTags. It will use the tag names provided to the Identity Pool when builder is created using `pool.util.iamResourcePath`.

### Background
When you write a resource path for an AWS IAM policy that uses many GitHub Actions claims such as `arn:aws:s3:::my-bucket/${aws:principalTag/repo}/${aws:principalTag/env}/${aws:principalTag/run}/${aws:principalTag/attempt}/*`, you have to make sure of:

- Using Correct Syntax
- Using correct tag names and updating the resource path string if you change any tag name
- Not using claims that was not mapped in the Identity Pool

Using this utility, it allows you to work with the [original claim names](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token) of a GitHub Actions access token claim and the utility will:

- Build a string with the correct syntax
- Use the tag name you specified in `ClaimMapping`, and reflect updated tag names you make in `ClaimMapping`
- Throw an error if you attempt to use a claim that you did not include in `ClaimMapping`

## Basic Usage
See examples below and view source. If using this please provide feedback.

```typescript
import { ActionsIdentityPoolBasic, ClaimMapping } from '@catnekaise/actions-constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

const claimMapping = ClaimMapping.fromClaimsWithTagName({
    repository: 'repo',
    job_workflow_ref: 'job',
    actor: 'user',
});

const pool = new ActionsIdentityPoolBasic(stack, 'Pool', {
    claimMapping,
    principalClaimRequirements: {
        repository: {
            condition: 'StringLike',
            values: [`${githubOrganization}/*`],
        },
    },
});

const role = pool.authenticatedRole;

const bucket = new s3.Bucket(this, 'Bucket', { name: 'my-bucket' });

// permission granted at object prefix = /${aws:principalTag/repo}/*
bucket.grantRead(role, pool.util.iamResourcePath.value(GhaClaim.REPOSITORY, '*'));

// resource string = arn:aws:s3:::my-bucket/${aws:principalTag/repo}/*
const value = pool.util.iamResourcePath.text(bucket.bucketArn).claim(GhaClaim.REPOSITORY).text('*').toString();

role.addToPolicy(new iam.PolicyStatement({
  effect: Effect.ALLOW,
  actions: ['s3:GetObject'],
  resources: [value],
}));
```

## Usage - Separate Stack
The same builder can be created in a separate stack where the Identity Pool was not created.

```typescript
import { ActionsIdentityIamResourcePathBuilder, ClaimMapping } from '@catnekaise/actions-constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

const claimMapping = ClaimMapping.fromClaimsWithTagName({
    repository: 'repo',
    job_workflow_ref: 'job',
    actor: 'user',
});

// Same as calling `pool.util.iamResourcePath`.
const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(claimMapping);

declare const role: iam.Role;

const bucket = new s3.Bucket(this, 'Bucket', { name: 'my-bucket' });

// permission granted at object prefix = /${aws:principalTag/repo}/*
bucket.grantRead(role, builder.value(GhaClaim.REPOSITORY, '*'));
```

### Claim, Value, Text
Three methods of input exists, `.claim`, `.value` and `.text`.

- Using `.claim` will throw error unless the provided value matches a [GitHub Actions access token claim](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token).
- Using `.value` allows mixing both GitHub Actions access token claims and text.
- Using `.text` will not transform values as `.text` does not care about mapped or unmapped claims
- Values provided to `.claim` and values matching claims provided to `.value` will be transformed into `${aws:principalTag/tag_name}`.
- When a claim is provided to either `.claim` or `.value` that was not mapped in `ClaimMapping`, an error is thrown

```typescript
import { ActionsIdentityIamResourcePathBuilder, ClaimMapping } from '@catnekaise/actions-constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

const claimMapping = ClaimMapping.fromClaimsWithTagName({
    repository: 'repo',
    job_workflow_ref: 'job',
    actor: 'user',
});

const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(claimMapping);

declare const role: iam.Role;

const bucket = new s3.Bucket(this, 'Bucket', { name: 'my-bucket' });

// permission granted at object prefix = /${aws:principalTag/repo}/*
bucket.grantRead(role, builder.claim(GhaClaim.REPOSITORY).text('*'));

// permission granted at object prefix = /${aws:principalTag/repo}/*
bucket.grantRead(role, builder.value(GhaClaim.REPOSITORY, '*'));

// permission granted at object prefix = /repository/*
bucket.grantRead(role, builder.text('repository', '*'));

// Throws an error as "environment" was not a claim mapped in "ClaimMapping"
bucket.grantRead(role, builder.claim(GhaClaim.ENVIRONMENT).text('*'));

// Does NOT throws an error as .text() does not care about "ClaimMapping"
// permission granted at object prefix = /environment/*
bucket.grantRead(role, builder.text('environment').text('*'));
```

### Immutable
The builder is immutable.

```typescript
import { ActionsIdentityIamResourcePathBuilder, ClaimMapping } from '@catnekaise/actions-constructs';

const claimMapping = ClaimMapping.fromClaimsWithTagName({
    repository: 'repo',
    job_workflow_ref: 'job',
    actor: 'user',
});

// builder string value = ''
let builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(claimMapping);

// builder string value = ''
builder.claim(GhaClaim.REPOSITORY);

// builder string value = '${aws:principalTag/repo}'
builder = builder.claim(GhaClaim.REPOSITORY);

// builder string value = '${aws:principalTag/repo}'
// builder2 string value = '${aws:principalTag/repo}/foo'
let builder2 = builder.text('foo');

// builder string value = '${aws:principalTag/repo}/${aws:principalTag/user}'
builder = builder.claim(GhaClaim.ACTOR);

// builder2 string value = '${aws:principalTag/repo}/foo/${aws:principalTag/user}'
builder2 = builder2.claim(GhaClaim.ACTOR);
```
