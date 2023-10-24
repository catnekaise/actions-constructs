import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { ActionsIdentityChainedPrincipalBuilder, ChainedPrincipalConditions, ClaimMapping } from '../src';

describe('Chained Principal Builder', () => {

  it('Should have trust policy based on builder input', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });


    const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      environment: 'env',
      repository: 'repo',
    }))
      .passesClaim('environment', 'repository')
      .claimEquals('repository', 'catnekaise/actions-constructs');

    new iam.Role(stack, 'Role', { assumedBy: builder.createPrincipalAssumedBy(new iam.AccountRootPrincipal()) });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Condition: {
              // eslint-disable-next-line quote-props
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:requestTag/env': '${aws:principalTag/env}',
                'aws:requestTag/repo': '${aws:principalTag/repo}',
                'aws:principalTag/repo': 'catnekaise/actions-constructs',
              },
              'ForAllValues:StringEquals': {
                'aws:tagKeys': ['env', 'repo'],
              },
            },
            Effect: 'Allow',
          },
        ],
      },
    });
  });

  it('Should be possible to append conditions', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      environment: 'test',
      repository: 'repo',
    }))
      .passesClaim('environment', 'repository')
      .claimLike('repository', 'catnekaise/*');


    const conditions = builder.createConditions() as ChainedPrincipalConditions;
    conditions.StringEquals['aws:SourceVpc'] = 'vpc-12345';

    new iam.Role(stack, 'role', { assumedBy: new iam.PrincipalWithConditions(new iam.AccountRootPrincipal(), conditions).withSessionTags() });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Condition: {
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:requestTag/test': '${aws:principalTag/test}',
                'aws:requestTag/repo': '${aws:principalTag/repo}',
                'aws:SourceVpc': 'vpc-12345',
              },
              StringLike: {
                'aws:principalTag/repo': 'catnekaise/*',
              },
            },
            Effect: 'Allow',
          },
        ],
      },
    });

  });

  it('Should have externalId and require identityPoolId', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      environment: 'env',
      repository: 'repo',
    }))
      .passesClaim('environment', 'repository')
      .claimEquals('repository', 'catnekaise/actions-constructs')
      .requireExternalId('test')
      .requireIdentityPoolId('eu-west:11111111-example');

    new iam.Role(stack, 'Role', { assumedBy: builder.createPrincipalAssumedBy(new iam.AccountRootPrincipal()) });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Condition: {
              // eslint-disable-next-line quote-props
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:requestTag/env': '${aws:principalTag/env}',
                'aws:requestTag/repo': '${aws:principalTag/repo}',
                'aws:principalTag/repo': 'catnekaise/actions-constructs',
                'sts:externalId': 'test',
                'cognito-identity.amazonaws.com:aud': 'eu-west:11111111-example',
              },
              'ForAllValues:StringEquals': {
                'aws:tagKeys': ['env', 'repo'],
              },
            },
            Effect: 'Allow',
          },
        ],
      },
    });

  });


  it('Should throw', () => {

    new cdk.Stack(new cdk.App(), 'TestStack');

    const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      environment: 'test',
      repository: 'repo',
    }));

    expect(() => builder.claimEquals('job_workflow_ref', 'test')).toThrow();
    expect(() => builder.passesClaim('job_workflow_ref')).toThrow();
    expect(() => builder.claimLike('job_workflow_ref', 'test')).toThrow();

  });

  it('should also work', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const builder = ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      environment: 'test',
      repository: 'repo',
    }))
      .passesClaim('environment', 'repository')
      .claimLike('repository', 'catnekaise/*');

    new iam.Role(stack, 'role', { assumedBy: builder.createPrincipalAssumedBy(new iam.AccountRootPrincipal()) });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Condition: {
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:requestTag/test': '${aws:principalTag/test}',
                'aws:requestTag/repo': '${aws:principalTag/repo}',
              },
              StringLike: {
                'aws:principalTag/repo': 'catnekaise/*',
              },
            },
            Effect: 'Allow',
          },
        ],
      },
    });
  });

});
