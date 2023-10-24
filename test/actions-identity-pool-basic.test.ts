import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ActionsIdentityPoolBasic, ClaimMapping } from '../src';

describe('ActionsIdentityPoolBasic', () => {

  it('Should create with claims', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    const pool = new ActionsIdentityPoolBasic(stack, 'pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id'),
      principalClaimRequirements: {
        repository: {
          condition: 'StringLike',
          values: ['foo'],
        },
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPoolPrincipalTag', {
      PrincipalTags: {
        repo: 'repository',
        ownerId: 'repository_owner_id',
      },
    });

    expect(pool.defaultAuthenticatedRole).toBeTruthy();
  });

  it('Should error when trying to use unknown claim', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    expect(() => new ActionsIdentityPoolBasic(stack, 'pool', {
      claimMapping: ClaimMapping.fromCustomTagNames({
        foo_claim: 'foo',
      }),
      principalClaimRequirements: {
        repositoryOwner: ['catnekaise'],
      },
    })).toThrowError();

  });

  it('Should error when trying to use unknown claims', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    expect(() => new ActionsIdentityPoolBasic(stack, 'pool', {
      claimMapping: ClaimMapping.fromDefaults('foo' as never),
      principalClaimRequirements: {
        repositoryOwner: ['catnekaise'],
      },
    })).toThrowError();

  });

  it('Should error when no claims', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    expect(() => new ActionsIdentityPoolBasic(stack, 'pool', {
      claimMapping: ClaimMapping.fromCustomTagNames({}),
      principalClaimRequirements: {
        repositoryOwner: ['catnekaise'],
      },
    })).toThrowError();

  });

  it('Should work with enterprise idp', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack', {
      env: {
        account: '111111111111',
        region: 'eu-west-1',
      },
    });
    stack.node.setContext('@catnekaise/actions-identity-pool:enterpriseSlug', 'fake-enterprise');

    new ActionsIdentityPoolBasic(stack, 'pool', {
      claimMapping: ClaimMapping.fromDefaults('repository', 'repository_owner_id'),
      identityPoolName: 'ActionsPoolTest',
      principalClaimRequirements: {
        repository: {
          condition: 'StringLike',
          values: ['foo'],
        },
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Cognito::IdentityPool', {
      IdentityPoolName: 'ActionsPoolTest',
      OpenIdConnectProviderARNs: ['arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com/fake-enterprise'],
    });

  });

});
