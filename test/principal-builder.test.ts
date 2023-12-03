import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { ActionsIdentityPrincipalBuilder, ClaimMapping, GhaClaim } from '../src';

describe('Principal Builder', () => {

  it('Should work', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const claimMapping = ClaimMapping.fromDefaults(GhaClaim.REPOSITORY, GhaClaim.REPOSITORY_VISIBILITY);

    const builder = ActionsIdentityPrincipalBuilder.create(claimMapping, 'eu-west-1:11111111-example');

    new iam.Role(stack, 'Role', {
      assumedBy: builder.createPrincipal({
        repository: {
          condition: 'StringLike',
          values: ['catnekaise/*'],
        },
      }),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument:
        {
          Statement: [
            {
              Action: [
                'sts:AssumeRoleWithWebIdentity',
                'sts:TagSession',
              ],
              Condition: {
                'StringEquals': {
                  'cognito-identity.amazonaws.com:aud': 'eu-west-1:11111111-example',

                },
                'StringLike': {
                  'aws:requestTag/repo': ['catnekaise/*'],
                },
                'ForAnyValue:StringLike': {
                  'cognito-identity.amazonaws.com:amr': 'token.actions.githubusercontent.com',
                },
              },
              Effect: 'Allow',
              Principal: {
                Federated: 'cognito-identity.amazonaws.com',
              },
            },
          ],
          Version: '2012-10-17',
        },
    });

  });

});
