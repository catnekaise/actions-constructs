import { ConditionOperator } from '@catnekaise/cdk-iam-utilities';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Effect } from 'aws-cdk-lib/aws-iam';
import { ActionsIdentityMappedClaims, ActionsIdentityPolicyUtility, GhaClaim } from '../src';

describe('Policy Utility Testing', () => {

  it('should work with claim', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.JOB_WORKFLOW_REF,
      GhaClaim.RUNNER_ENVIRONMENT,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
    });

    const statement = new iam.PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['s3:GetObject'],
      resources: ['*'],
    });

    utility.constrain(statement)
      .whenSelfHosted()
      .jobWorkflowLike('catnekaise', 'example-repo')
      .approvedBy('djonser');

    const role = new iam.Role(stack, 'Role', {
      assumedBy: utility.newChainedPrincipalBuilder().repositoryLike('catnekaise/*')
        .createPrincipalAssumedBy(stack, new iam.AccountPrincipal('111111111111'), {
          passClaims: mappedClaims.toPassClaims(GhaClaim.REPOSITORY),
        }),
    });

    role.addToPolicy(statement);


    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Condition: {
              StringEquals: {
                'aws:PrincipalTag/actor': 'djonser',
                'aws:PrincipalTag/runner_environment': 'self-hosted',
              },
              StringLike: {

                'aws:PrincipalTag/job_workflow_ref': 'catnekaise/example-repo/.github/workflows/*@*',
              },
            },
          },
        ],
      },
    });

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Effect: 'Allow',
            Principal: {
              AWS: {
                'Fn::Join': [
                  '',
                  [
                    'arn:',
                    {
                      Ref: 'AWS::Partition',
                    },
                    ':iam::111111111111:root',
                  ],
                ],
              },
            },
            Condition: {
              'StringLike': {
                'aws:PrincipalTag/repository': 'catnekaise/*',
              },
              'StringEquals': {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:RequestTag/repository': '${aws:PrincipalTag/repository}',
              },
              'ForAllValues:StringEquals': {
                'aws:TagKeys': ['repository'],
              },
            },
          },
        ],
      },
    });

  });

  it('should not grant sts:TagSession when not passing claims', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.JOB_WORKFLOW_REF,
      GhaClaim.RUNNER_ENVIRONMENT,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
    });

    new iam.Role(stack, 'Role', {
      assumedBy: utility.newChainedPrincipalBuilder().claimLike(GhaClaim.REPOSITORY, 'catnekaise/*')
        .claimEquals(GhaClaim.JOB_WORKFLOW_REF, 'catnekaise/example-repo/.github/workflows/test.yaml@refs/heads/main')
        .claimCondition(ConditionOperator.STRING_NOT_LIKE, GhaClaim.ACTOR, 'test*')
        .createPrincipalAssumedBy(stack, new iam.AccountPrincipal('111111111111')),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Condition: {
              StringLike: {
                'aws:PrincipalTag/repository': 'catnekaise/*',
              },
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:PrincipalTag/job_workflow_ref': 'catnekaise/example-repo/.github/workflows/test.yaml@refs/heads/main',
              },
              StringNotLike: {
                'aws:PrincipalTag/actor': 'test*',
              },
            },
          },
        ],
      },
    });

  });

  it('should pass custom tag name', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.JOB_WORKFLOW_REF,
      GhaClaim.RUNNER_ENVIRONMENT,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
    });

    new iam.Role(stack, 'Role', {
      assumedBy: utility.newChainedPrincipalBuilder().repositoryLike('catnekaise/*')
        .createPrincipalAssumedBy(stack, new iam.AccountPrincipal('111111111111'), {
          passClaims: mappedClaims.toPassClaimsCustom({
            repository: 'repo',
          }),
        }),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Effect: 'Allow',
            Condition: {
              StringLike: {
                'aws:PrincipalTag/repository': 'catnekaise/*',
              },
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:RequestTag/repo': '${aws:PrincipalTag/repository}',
              },
            },
          },
        ],
      },
    });

  });

  it('should pass claims according to aws-actions/configure-aws-credentials', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.REF,
      GhaClaim.SHA,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
    });

    new iam.Role(stack, 'Role', {
      assumedBy: utility.newChainedPrincipalBuilder().repositoryLike('catnekaise/*')
        .refLike('refs/heads/main', 'refs/heads/dev')
        .createPrincipalAssumedBy(stack, new iam.AccountPrincipal('111111111111'), {
          passClaims: mappedClaims.toConfigureAwsCredentialsPassClaims(),
        }),
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: ['sts:AssumeRole', 'sts:TagSession'],
            Effect: 'Allow',
            Condition: {
              StringLike: {
                'aws:PrincipalTag/repository': 'catnekaise/*',
                'aws:PrincipalTag/ref': ['refs/heads/main', 'refs/heads/dev'],
              },
              StringEquals: {
                'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
                'aws:RequestTag/repository': '${aws:PrincipalTag/repository}',
                'aws:RequestTag/actor': '${aws:PrincipalTag/actor}',
                'aws:RequestTag/branch': '${aws:PrincipalTag/ref}',
                'aws:RequestTag/commit': '${aws:PrincipalTag/sha}',
              },
            },
          },
        ],
      },
    });

  });

});


describe('Grant Organization Role Chain', () => {

  it('should grant', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.REF,
      GhaClaim.ENVIRONMENT,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
      identityPoolId: 'eu-west:1a2b3c-examaple',
      identityPoolAccountId: '111111111111',
    });

    const role = new iam.Role(stack, 'Role', {
      assumedBy: utility.newPrincipalBuilder().repositoryLike('catnekaise/*')
        .createPrincipal(stack),
    });

    utility.grantOrganizationRoleChain(role, {
      rolePath: '/github-actions/',
      excludeAccountIds: ['333333333333'],
      roleHasResourceTags: {
        usedViaGitHubActions: '1',
        ghaEnvironment: GhaClaim.ENVIRONMENT,
      },
      resourceOrgPaths: ['o-example/r-ab12/ou-ab12-11111111/*'],
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: 'sts:TagSession',
            Effect: 'Allow',
            Resource: '*',
          },
          {
            Action: 'sts:AssumeRole',
            Resource: 'arn:aws:iam::*:role/github-actions/*',
            Condition: {
              'ForAnyValue:StringLike': {
                'aws:ResourceOrgPaths': [
                  'o-example/r-ab12/ou-ab12-11111111/*',
                ],
              },
              'StringEquals': {
                'aws:ResourceOrgID': '${aws:PrincipalOrgID}',
                'aws:ResourceTag/usedViaGitHubActions': '1',
                'aws:ResourceTag/ghaEnvironment': '${aws:PrincipalTag/environment}',
              },
              'StringNotEquals': {
                'aws:ResourceAccount': ['111111111111', '333333333333'],
              },

            },
          },
        ],
      },
    });

  });

  it('should throw error when invalid rolePath', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.REF,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
      identityPoolId: 'eu-west:1a2b3c-examaple',
      identityPoolAccountId: '111111111111',
    });

    const role = new iam.Role(stack, 'Role', {
      assumedBy: utility.newPrincipalBuilder().repositoryLike('catnekaise/*')
        .createPrincipal(stack),
    });

    expect(() => {
      utility.grantOrganizationRoleChain(role, {
        rolePath: '/missing-trailing-slash',
        excludeAccountIds: ['333333333333'],
        resourceOrgPaths: ['o-example/r-ab12/ou-ab12-11111111/*'],
      });
    }).toThrow();

  });

  it('should throw error when not providing rolePath or roleHasResourceTags', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const mappedClaims = ActionsIdentityMappedClaims.create(
      GhaClaim.REPOSITORY,
      GhaClaim.ACTOR,
      GhaClaim.REF,
    );
    const utility = ActionsIdentityPolicyUtility.create(stack, {
      claimsContext: mappedClaims.toClaimsContext(),
      identityPoolId: 'eu-west:1a2b3c-examaple',
      identityPoolAccountId: '111111111111',
    });

    const role = new iam.Role(stack, 'Role', {
      assumedBy: utility.newPrincipalBuilder().repositoryLike('catnekaise/*')
        .createPrincipal(stack),
    });

    expect(() => {
      utility.grantOrganizationRoleChain(role, {
        excludeAccountIds: ['333333333333'],
        resourceOrgPaths: ['o-example/r-ab12/ou-ab12-11111111/*'],
      });
    }).toThrow();

  });
});
