import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as s3 from 'aws-cdk-lib/aws-s3';
import {
  ActionsIdentityMappedClaims,
  ActionsIdentityPoolV2,
  AuthenticatedMethodReference,
  EnhancedFlowMatchType,
  EnhancedFlowRoleResolution,
  GhaClaim,
  GitHubActionsClaimConstraint,
} from '../src';


describe('ActionsIdentityPoolV2', () => {

  it('Should create a basic pool', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack');

    const pool = new ActionsIdentityPoolV2(stack, 'Pool', {
      mappedClaims: ActionsIdentityMappedClaims.create(GhaClaim.REPOSITORY, GhaClaim.ACTOR, GhaClaim.ENVIRONMENT),
      authenticatedRoleConstraints: [
        GitHubActionsClaimConstraint.repoOwners('catnekaise'),
      ],
      identityPoolName: 'ActionsIdentityPoolV2',
      authenticatedRoleName: 'GhaCognito',
    });

    const util = pool.policyUtility;

    const bucket = new s3.Bucket(stack, 'Bucket');

    const grant = bucket.grantPut(pool.defaultAuthenticatedRole, util.resourcePath('cache', GhaClaim.REPOSITORY, '*'));


    pool.policyUtility.constrainGrant(grant)
      .repositoryLike('catnekaise/*');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPool', {
      IdentityPoolName: 'ActionsIdentityPoolV2',
    });

    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'GhaCognito',
    });

    template.hasResourceProperties('AWS::Cognito::IdentityPoolPrincipalTag', {
      PrincipalTags: {
        repository: GhaClaim.REPOSITORY,
        actor: GhaClaim.ACTOR,
        environment: GhaClaim.ENVIRONMENT,
      },
    });

    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Resource: {
              'Fn::Join': [
                '',
                [
                  Match.anyValue(),
                  '/cache/${aws:PrincipalTag/repository}/*',
                ],
              ],
            },
            Condition: {
              StringLike: {
                'aws:PrincipalTag/repository': 'catnekaise/*',
              },
            },
          },
        ],
      },
    });

    template.hasResourceProperties('AWS::Cognito::IdentityPoolRoleAttachment', {
      Roles: {
        authenticated: Match.anyValue(),
      },
    });
  });


  it('Should create an identity pool with enhanced auth-flow', () => {

    const stack = new cdk.Stack(new cdk.App(), 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });

    const pool = new ActionsIdentityPoolV2(stack, 'EnhancedPool', {
      mappedClaims: ActionsIdentityMappedClaims.createWithAbbreviations(GhaClaim.REPOSITORY, GhaClaim.ACTOR, GhaClaim.ENVIRONMENT),

      authenticatedRoleConstraints: [
        GitHubActionsClaimConstraint.repoOwners('catnekaise'),
      ],
      authenticatedMethodReference: AuthenticatedMethodReference.AUTHENTICATED,
      useEnhancedAuthFlow: true,
      enhancedFlowRoleResolution: EnhancedFlowRoleResolution.DENY,
      identityPoolName: 'ActionsIdentityPoolV2',
      authenticatedRoleName: 'GhaCognito',
      removalPolicy: RemovalPolicy.RETAIN,
    });

    pool.enhancedFlowAssignRole(pool.defaultAuthenticatedRole, GhaClaim.REPOSITORY, EnhancedFlowMatchType.STARTS_WITH, 'catnekaise/');

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPool', {
      IdentityPoolName: 'ActionsIdentityPoolV2',
    });

    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'GhaCognito',
    });

    template.hasResourceProperties('AWS::Cognito::IdentityPoolPrincipalTag', {
      PrincipalTags: {
        repo: GhaClaim.REPOSITORY,
        actor: GhaClaim.ACTOR,
        env: GhaClaim.ENVIRONMENT,
      },
    });

    template.hasResourceProperties('AWS::Cognito::IdentityPoolRoleAttachment', {
      Roles: {
        authenticated: Match.anyValue(),
      },
      RoleMappings: {
        oidc: {
          AmbiguousRoleResolution: 'Deny',
          IdentityProvider: 'arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com',
          RulesConfiguration: {
            Rules: [
              {
                Claim: GhaClaim.REPOSITORY,
                MatchType: 'StartsWith',
                RoleARN: Match.anyValue(),
                Value: 'catnekaise/',
              },
            ],
          },
        },
      },
    });

  });

});
