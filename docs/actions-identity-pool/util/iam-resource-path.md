# IAM Resource Path Builder
Use this to build an IAM Policy resource path consisting of text and principalTags. It will use the tag names provided to the Identity Pool when builder is created using `pool.util.iamResourcePath`.

## Usage
See examples below and view source. If using this please provide feedback.

```typescript
declare const pool: ActionsIdentityPool;
declare const role: iam.Role;
const bucket = new s3.Bucket(this, 'Bucket', { name: 'my-bucket' });

// Inline use. .toString() is automatically used
bucket.grantRead(role, pool.util.iamResourcePath.value('repository', '*'));

// Create a new builder
const builder = pool.util.iamResourcePath;

const value = builder.text(bucket.bucketArn).claim('repository').text('*').toString();

role.addToPolicy(new iam.PolicyStatement({
  effect: Effect.ALLOW,
  actions: ['s3:GetObject'],
  resources: [value],
}));


// arn:aws:s3:::my-bucket/${aws:principalTag/repo}/${aws:principalTag/env}/${aws:principalTag/run}/${aws:principalTag/attempt}/*
const value2 = builder.value(bucket.bucketArn, 'repository', 'environment', 'run_id', 'run_attempt', '*').toString();

// .text() always renders the value provided
// arn:aws:s3:::my-bucket/repository_environment_job_workflow_ref
const value3 = builder.text(bucket.bucketArn, 'repository', 'environment', 'job_workflow_ref').toString('_');
```
