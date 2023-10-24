import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Role } from 'aws-cdk-lib/aws-iam';
import { ActionsIdentityPool, ActionsIdentityPoolProps, ClaimMapping } from '../src';

describe('ActionsIdentityPool - Common', () => {

  it('Should create using fromDefaults', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id'),
      identityPoolName: 'ActionsPoolTest',
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['foo'] },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPool', {
      IdentityPoolName: 'ActionsPoolTest',
    });

    template.hasResourceProperties('AWS::Cognito::IdentityPoolPrincipalTag', {
      PrincipalTags: {
        repo: 'repository',
        ownerId: 'repository_owner_id',
      },
    });

  });

  it('Should create using fromClaimsWithTagName', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromClaimsWithTagName({
        repository: 'repository',
        repository_owner_id: 'test',
      }),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['foo'] },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPool', {});

    template.hasResourceProperties('AWS::Cognito::IdentityPoolPrincipalTag', {
      PrincipalTags: {
        repository: 'repository',
        test: 'repository_owner_id',
      },
    });

  });

  it('Should error when duplicate tag name', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromClaimsWithTagName({
        // Attempt assign two different claims to same tag name
        repository: 'repository',
        repository_owner_id: 'repository',
      }),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['foo'] },
    });

    const err = pool.node.metadata.filter(x => x.type === 'aws:cdk:error');
    expect(err).toHaveLength(1);

  });

  it('Should error when more than 25 role', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner', 'environment', 'enterprise'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['foo'] },
    });

    const role = new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
    });

    for (let i = 0; i < 25; i++) {
      pool.assignRoleWhenClaimEquals(role, 'repository', 'test/test' + i);
    }

    expect(pool.node.metadata.filter(x => x.type === 'aws:cdk:error')).toHaveLength(1);

  });

  it('Should Create Authenticated Role', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id', 'repository_owner'),
      authenticatedRole: 'create',
      authenticatedRoleName: 'DefaultAuthRole',
      principalClaimRequirements: { repositoryOwner: ['foo'] },
    });

    pool.assignRoleWhenClaimEquals(pool.defaultAuthenticatedRole as iam.Role, 'repository', 'catnekaise/example-repo');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'DefaultAuthRole',
    });

    expect(pool.defaultAuthenticatedRole).toBeTruthy();

  });

  it('Should Use First Assigned Role', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id', 'repository_owner'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
    });

    const role = new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
    });


    expect(pool.defaultAuthenticatedRole).toBeFalsy();

    pool.assignRoleWhenClaimEquals(role, 'repository', 'catnekaise/actions-constructs');

    expect(pool.defaultAuthenticatedRole).toBeTruthy();

  });

  it('Should have utilities', () => {
    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromClaimsWithTagName({
        // Attempt assign two different claims to same tag name
        repository: 'test',
        repository_owner: 'repository_owner',
      }),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
    });

    expect(pool.util.iamResourcePath.claim('repository').toString()).toEqual('${aws:principalTag/test}');

    expect(pool.util.chainedPrincipal.createConditions()).toBeTruthy();

  });

});

describe('ActionsIdentityPool - Trust Policies', () => {

  it('Should have trust policy by defaults', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id', 'repository_owner'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: {
        repository: {
          condition: 'StringEquals',
          values: ['catnekaise/actions-constructs'],
        },
      },

    });

    new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
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
                  'cognito-identity.amazonaws.com:aud': {
                    Ref: Match.anyValue(),
                  },
                  'aws:requestTag/repo': ['catnekaise/actions-constructs'],
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

  it('Should have trust policy with many claim requirements', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner', 'environment', 'enterprise', 'job_workflow_ref', 'runner_environment'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },

    });

    new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool({
        repositoryOwner: ['test'],
        environment: {
          condition: 'StringEquals',
          values: ['prod'],
        },
        runnerEnvironment: 'self-hosted',
        repository: {
          values: ['catnekaise/example-repo'],
          condition: 'StringEquals',
        },
        jobWorkflowRef: {
          condition: 'StringLike',
          values: ['catnekaise/example-workflows/*@refs/heads/main'],
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
                  'cognito-identity.amazonaws.com:aud': {
                    Ref: Match.anyValue(),
                  },
                  'aws:requestTag/owner': ['test'],
                  'aws:requestTag/env': ['prod'],
                  'aws:requestTag/repo': ['catnekaise/example-repo'],

                },
                'StringLike': {
                  'aws:requestTag/jWorkRef': ['catnekaise/example-workflows/*@refs/heads/main'],
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

  it('Should error when attempting to create principal requiring unmapped claim', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner', 'enterprise'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },

    });

    expect(() => pool.createPrincipalForPool({
      repositoryOwner: ['test'],
      environment: {
        condition: 'StringEquals',
        values: ['prod'],
      },
    })).toThrow();

  });

  it('Should use amr authenticated', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id', 'repository_owner'),
      authenticatedRole: 'create',
      authenticatedRoleName: 'role',
      authenticatedMethodReference: 'authenticated',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
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
                  'cognito-identity.amazonaws.com:aud': {
                    Ref: Match.anyValue(),
                  },
                },
                'ForAnyValue:StringLike': {
                  'cognito-identity.amazonaws.com:amr': 'authenticated',
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

  it('Should use amr arn', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id', 'repository_owner'),
      authenticatedRole: 'useFirstAssigned',
      authenticatedRoleName: 'role',
      authenticatedMethodReference: 'arn',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
    });

    new iam.Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
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
                  'cognito-identity.amazonaws.com:aud': {
                    Ref: Match.anyValue(),
                  },
                },
                'ForAnyValue:StringLike': {
                  'cognito-identity.amazonaws.com:amr': 'arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*',
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

  it('Should use amr default', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner'),
      authenticatedRole: 'create',
      authenticatedMethodReference: 'host',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
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
                  'cognito-identity.amazonaws.com:aud': {
                    Ref: Match.anyValue(),
                  },
                },
                'ForAnyValue:StringLike': {
                  'cognito-identity.amazonaws.com:amr': 'authenticated',
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

describe('ActionsIdentityPool - Rules', () => {

  it('Should have a single rule', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const props: ActionsIdentityPoolProps = {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner', 'environment', 'enterprise'),
      openIdConnectProvider: undefined,
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
    };

    const pool = new ActionsIdentityPool(stack, 'Pool', props);

    const role = new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
    });

    pool.assignRoleWhenClaimEquals(role, 'repository', 'test/test');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPoolRoleAttachment', {
      RoleMappings: {
        oidc: {
          AmbiguousRoleResolution: 'Deny',
          IdentityProvider: 'arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com',
          RulesConfiguration: {
            Rules: [
              {
                Claim: 'repository',
                MatchType: 'Equals',
                RoleARN: Match.anyValue(),
                Value: 'test/test',
              },
            ],
          },
        },
      },
    });

  });

  it('Should have two rules', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner', 'environment', 'enterprise'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },
    });

    const role = new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
    });

    pool.assignRoleWhenClaimEquals(role, 'repository', 'test/test');
    pool.assignRoleWhenClaimContains(role, 'sub', 'repository_owner:test:environment:dev');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPoolRoleAttachment', {
      RoleMappings: {
        oidc: {
          AmbiguousRoleResolution: 'Deny',
          IdentityProvider: 'arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com',
          RulesConfiguration: {
            Rules: Match.arrayWith([
              {
                Claim: 'repository',
                MatchType: 'Equals',
                RoleARN: Match.anyValue(),
                Value: 'test/test',
              },
              {
                Claim: 'sub',
                MatchType: 'Contains',
                RoleARN: Match.anyValue(),
                Value: 'repository_owner:test:environment:dev',
              },
            ]),
          },
        },
      },
    });

  });

  it('Rule uses MatchType StartsWith', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const pool = new ActionsIdentityPool(stack, 'Pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner', 'environment', 'enterprise'),
      authenticatedRole: 'useFirstAssigned',
      principalClaimRequirements: { repositoryOwner: ['catnekaise'] },

    });

    const role = new Role(stack, 'Role', {
      assumedBy: pool.createPrincipalForPool(),
    });

    pool.assignRoleWhenClaimStartsWith(role, 'sub', 'repository_owner:test:environment:dev');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPoolRoleAttachment', {
      RoleMappings: {
        oidc: {
          AmbiguousRoleResolution: 'Deny',
          IdentityProvider: 'arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com',
          RulesConfiguration: {
            Rules: [
              {
                Claim: 'sub',
                MatchType: 'StartsWith',
                RoleARN: Match.anyValue(),
                Value: 'repository_owner:test:environment:dev',
              },
            ],
          },
        },
      },
    });
  });

});
