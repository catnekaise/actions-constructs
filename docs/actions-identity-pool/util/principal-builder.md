# ActionsIdentityPrincipalBuilder
This is the same functionality as when using `createPrincipalForPool` on `ActionsIdentityPool` or `ActionsIdentityPoolBasic`. If you already have one of these constructs in your stack, use that method instead.

Use this utility directly if you have created an `ActionsIdentityPoolBasic` (or manually created Cognito Identity Pool with Basic AuthFlow) and then want to create principals for roles in different stacks. When using Basic AuthFlow, the roles can be created in AWS accounts other than the account containing the identity pool.

###  Usage
See examples below and view source.

```typescript
import { ActionsIdentityPrincipalBuilder, ClaimMapping } from '@catnekaise/actions-constructs';

const builder = ActionsIdentityPrincipalBuilder.create(ClaimMapping.fromDefaults(GhaClaim.REPOSITORY, GhaClaim.ENVIRONMENT), 'eu-west-1:11111111-example');

const role = new iam.Role(stack, 'Role', {
  assumedBy: builder.createPrincipal({
    repository: {
      condition: 'StringLike',
      values: ['catnekaise/*'],
    },
    environment: ['dev', 'test'],
  }),
});
```
