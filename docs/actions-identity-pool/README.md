# Actions Identity Pool
Use these constructs to create an `Amazon Cognito Identity Pool` that enables GitHub Actions [OpenID Connect identities](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) to request temporary AWS Credentials. The temporary AWS Credentials will have principal/session tags corresponding with [access token claims](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token) which enables attribute based access control (ABAC) in AWS.

## Constructs
- [ActionsIdentityPool](./actions-identity-pool.md)
- [ActionsIdentityPoolBasic](./actions-identity-pool-basic.md)

## Utils
- [Chained Principal Builder](./util/chained-principal-builder.md)
- [IAM Resource Path Builder](./util/iam-resource-path.md)
- [Principal Builder](./util/principal-builder.md)
