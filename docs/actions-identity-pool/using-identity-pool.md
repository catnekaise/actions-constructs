# Using Cognito Identity
I recommend reading https://catnekaise.github.io/github-actions-abac-aws/cognito-identity/ if you have not yet done so.

## Enhanced (Simplified) AuthFlow
A re-usable action that can either be used directly or as a **template** can be found at [catnekaise/cognito-idpool-auth](https://github.com/catnekaise/cognito-idpool-auth).

Replace values in `POOL_ID`, `AWS_ACCOUNT_ID` and `AWS_DEFAULT_REGION` to match your Cognito Identity Pool deployment. Optionally replace `AUDIENCE` if using a different value.

```yaml
on:
  workflow_dispatch:
env:
  AWS_DEFAULT_REGION: "eu-west-1"
jobs:
  job1:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - id: authenticate
        name: "Authenticate"
        env:
          POOL_ID: "eu-west-1:11111111-example"
          AWS_ACCOUNT_ID: "111111111111"
          AUDIENCE: "cognito-identity.amazonaws.com"
        run: |
          # https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#updating-your-actions-for-oidc
          tokenResponse=$(curl -sLS -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=$AUDIENCE")
          token=$(echo "$tokenResponse" | jq -r '.value')

          # https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cognito-identity/get-id.html
          getIdResponse=$(aws cognito-identity get-id --identity-pool-id "$POOL_ID" --account-id "$AWS_ACCOUNT_ID" --logins '{"token.actions.githubusercontent.com":"'$token'"}')
          identityId=$(echo "$getIdResponse" | jq -rc '.IdentityId')

          # https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cognito-identity/get-credentials-for-identity.html
          awsCredentials=$(aws cognito-identity get-credentials-for-identity --identity-id "$identityId" --logins '{"token.actions.githubusercontent.com":"'$token'"}')

          awsAccessKeyId=$(echo "$awsCredentials" | jq -r '.Credentials.AccessKeyId')
          awsSecretAccessKey=$(echo "$awsCredentials" | jq -r '.Credentials.SecretKey')
          awsSessionToken=$(echo "$awsCredentials" | jq -r '.Credentials.SessionToken')

          echo "::add-mask::$awsAccessKeyId"
          echo "::add-mask::$awsSecretAccessKey"
          echo "::add-mask::$awsSessionToken"

          echo "AWS_ACCESS_KEY_ID=$awsAccessKeyId" >> "$GITHUB_ENV"
          echo "AWS_SECRET_ACCESS_KEY=$awsSecretAccessKey" >> "$GITHUB_ENV"
          echo "AWS_SESSION_TOKEN=$awsSessionToken" >> "$GITHUB_ENV"

      - name: "STS Get Caller Identity"
        run: |
          aws sts get-caller-identity
```


### Basic (Classic) AuthFlow
A re-usable action that can either be used directly or as a **template** can be found at [catnekaise/cognito-idpool-basic-auth](https://github.com/catnekaise/cognito-idpool-basic-auth). This action is different than the one above.

Replace values in `POOL_ID`, `AWS_ACCOUNT_ID`, `AWS_ROLE_ARN` and `AWS_DEFAULT_REGION` to match your Cognito Identity Pool deployment. Optionally replace `AUDIENCE` if using a different value.

```yaml
on:
  workflow_dispatch:
env:
  AWS_DEFAULT_REGION: "eu-west-1"
jobs:
  job1:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - id: authenticate
        name: "Authenticate"
        env:
          POOL_ID: "eu-west-1:11111111-example"
          AWS_ACCOUNT_ID: "111111111111"
          AUDIENCE: "cognito-identity.amazonaws.com"
          AWS_ROLE_ARN: "arn:aws:iam::111111111111:role/my-role-name"
        run: |
          # https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#updating-your-actions-for-oidc
          tokenResponse=$(curl -sLS -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=$AUDIENCE")
          token=$(echo "$tokenResponse" | jq -r '.value')

          # https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cognito-identity/get-id.html
          getIdResponse=$(aws cognito-identity get-id --identity-pool-id "$POOL_ID" --account-id "$AWS_ACCOUNT_ID" --logins '{"token.actions.githubusercontent.com":"'$token'"}')
          identityId=$(echo "$getIdResponse" | jq -rc '.IdentityId')

          # https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cognito-identity/get-open-id-token.html
          cognitoIdentityTokenResponse=$(aws cognito-identity get-open-id-token --identity-id $identityId --logins '{"token.actions.githubusercontent.com":"'$token'"}')
          cognitoIdentityOidcAccessToken=$(echo "$cognitoIdentityTokenResponse" | jq -r '.Token')

          # https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role-with-web-identity.html
          awsCredentials=$(aws sts assume-role-with-web-identity \
          --role-session-name "my-session-name" \
          --role-arn $AWS_ROLE_ARN \
          --web-identity-token "$cognitoIdentityOidcAccessToken")

          awsAccessKeyId=$(echo "$awsCredentials" | jq -r '.Credentials.AccessKeyId')
          awsSecretAccessKey=$(echo "$awsCredentials" | jq -r '.Credentials.SecretAccessKey')
          awsSessionToken=$(echo "$awsCredentials" | jq -r '.Credentials.SessionToken')

          echo "::add-mask::$awsAccessKeyId"
          echo "::add-mask::$awsSecretAccessKey"
          echo "::add-mask::$awsSessionToken"

          echo "AWS_ACCESS_KEY_ID=$awsAccessKeyId" >> "$GITHUB_ENV"
          echo "AWS_SECRET_ACCESS_KEY=$awsSecretAccessKey" >> "$GITHUB_ENV"
          echo "AWS_SESSION_TOKEN=$awsSessionToken" >> "$GITHUB_ENV"
          
      - name: "STS Get Caller Identity"
        run: |
          aws sts get-caller-identity
```
