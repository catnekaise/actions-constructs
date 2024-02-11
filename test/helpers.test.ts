import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { AuthenticatedMethodReference, getAmrValue } from '../src';

describe('getAmr', () => {

  it('getAmr warns about ARN deprecation', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const providerArn = `arn:aws:iam::${stack.account}:oidc-provider/token.actions.githubusercontent.com`;
    const oidcProvider = iam.OpenIdConnectProvider.fromOpenIdConnectProviderArn(stack, 'Provider', providerArn);

    const value = getAmrValue(stack, AuthenticatedMethodReference.ARN, oidcProvider);

    expect(stack.node.metadata.length).toEqual(1);
    expect(stack.node.metadata[0].data).toContain('In the context of this library');
    expect(value.endsWith(':OIDC:*')).toBeTruthy();

  });

  it('getAmr throws error when not providing OpenIdConnectProvider and using ARN', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');
    expect(() => getAmrValue(stack, AuthenticatedMethodReference.ARN)).toThrow();

  });

  it('default is authenticated', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');
    expect(getAmrValue(stack)).toEqual('authenticated');

  });

  it('host is authenticated', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');
    expect(getAmrValue(stack, AuthenticatedMethodReference.HOST)).toEqual('token.actions.githubusercontent.com');

  });


});
