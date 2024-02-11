import { Annotations } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { AuthenticatedMethodReference } from './types';

export function getAmrValue(scope: Construct, amr?: AuthenticatedMethodReference, openIdConnectProvider?: iam.IOpenIdConnectProvider): string {

  if (!amr) {
    return 'authenticated';
  }

  switch (amr) {
    case AuthenticatedMethodReference.HOST:
      return 'token.actions.githubusercontent.com';
    case AuthenticatedMethodReference.ARN:
      if (!openIdConnectProvider) {
        throw new Error('Cannot create ARN AMR without providing the openIdConnectProvider');
      }
      Annotations.of(scope).addWarning('In the context of this library, specifying AuthenticatedMethodReference of type `ARN` is deprecated.');
      return `${openIdConnectProvider.openIdConnectProviderArn}:OIDC:*`;
    default:
      return 'authenticated';
  }
}
