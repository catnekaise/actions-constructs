import * as iam from 'aws-cdk-lib/aws-iam';
import { ClaimMapping, GhaClaim, PartialGhaClaims } from '../claims';
import { AuthenticatedMethodReference, PrincipalClaimRequirementCondition, PrincipalClaimRequirements } from '../types';

export interface ActionsIdentityPoolPrincipalBuilderOptions {
  readonly amr?: AuthenticatedMethodReference;
  readonly identityPoolId: string;
  readonly claimMapping: ClaimMapping;
  readonly openIdConnectProviderArn?: string;
}

interface ActionsIdentityPoolPrincipalConditions {
  StringEquals: {
    'cognito-identity.amazonaws.com:aud': string;
  } & { [key: string]: string | string[] };
  StringLike?: { [key: string]: string | string[] };
  'ForAnyValue:StringLike': {
    'cognito-identity.amazonaws.com:amr': string;
  };
}

export class ActionsIdentityPrincipalBuilder {

  // eslint-disable-next-line max-len
  static create(claimMapping: ClaimMapping, identityPoolId: string, amr?: AuthenticatedMethodReference, openIdConnectProviderArn?: string): ActionsIdentityPrincipalBuilder {
    return new ActionsIdentityPrincipalBuilder({
      claimMapping,
      identityPoolId,
      amr,
      openIdConnectProviderArn,
    });
  }

  private constructor(private readonly options: ActionsIdentityPoolPrincipalBuilderOptions) {
  }

  createPrincipal(requirements: PrincipalClaimRequirements, amr?: AuthenticatedMethodReference): iam.IPrincipal {

    const conditions: ActionsIdentityPoolPrincipalConditions = {
      'StringEquals': {
        'cognito-identity.amazonaws.com:aud': this.options.identityPoolId,
      },
      'ForAnyValue:StringLike': {
        'cognito-identity.amazonaws.com:amr': this.getAmrValue(amr),
      },
    };

    let requirementsApplied = 0;
    const equalityClaims: GhaClaim[] = [GhaClaim.REPOSITORY_OWNER, GhaClaim.ACTOR, GhaClaim.ACTOR_ID];
    const conditionClaims: GhaClaim[] = [GhaClaim.JOB_WORKFLOW_REF, GhaClaim.WORKFLOW_REF, GhaClaim.REPOSITORY, GhaClaim.ENVIRONMENT];

    const useClaims: { [key: string]: PrincipalClaimRequirementCondition } = {};

    if (requirements.runnerEnvironment) {

      if (!['github-hosted', 'self-hosted'].includes(requirements.runnerEnvironment)) {
        throw new Error('runnerEnvironment needs to be set to either "github-hosted" or "self-hosted".');
      }

      useClaims.runner_environment = {
        values: [requirements.runnerEnvironment],
        condition: 'StringEquals',
      };
    }

    for (const claim of equalityClaims) {

      const reqKey = principalClaimReqProperties[claim] ?? claim;

      if (!(reqKey in requirements)) {
        continue;
      }

      useClaims[claim] = {
        values: requirements[reqKey as never],
        condition: 'StringEquals',
      };
    }

    for (const claim of conditionClaims) {

      const reqKey = principalClaimReqProperties[claim] ?? claim;

      if (!(reqKey in requirements)) {
        continue;
      }

      useClaims[claim] = requirements[reqKey as never];
    }

    for (const claim of Object.keys(useClaims)) {

      if (!(claim in useClaims)) {
        continue;
      }

      const mappedClaim = this.options.claimMapping.mappedClaims.find(x => x.claim === claim);

      if (!mappedClaim) {
        throw new Error(`Map claim ${claim} in order to use it in the trust policy`);
      }

      const requirement = useClaims[claim];

      if (requirement.values.length === 0) {
        throw new Error(`At least one value has to be provided for required claim "${claim}".`);
      }

      if (requirement.condition === 'StringLike') {

        if (!conditions.StringLike) {
          conditions.StringLike = {};
        }

        conditions.StringLike[`aws:requestTag/${mappedClaim.tagName}`] = requirement.values;
      } else {
        conditions.StringEquals[`aws:requestTag/${mappedClaim.tagName}`] = requirement.values;
      }

      requirementsApplied++;
    }

    if (requirementsApplied === 0) {
      throw new Error('Provide at least one required claim for the principal.');
    }

    return new iam.PrincipalWithConditions(new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {}, 'sts:AssumeRoleWithWebIdentity'),
      conditions as never)
      .withSessionTags();
  }

  protected getAmrValue(amr?: AuthenticatedMethodReference): string {

    const useAmr = amr ?? this.options.amr;

    if (!useAmr) {
      return 'token.actions.githubusercontent.com';
    }

    switch (useAmr) {
      case AuthenticatedMethodReference.AUTHENTICATED:
        return 'authenticated';
      case AuthenticatedMethodReference.ARN:
        if (!this.options.openIdConnectProviderArn) {
          throw new Error('Cannot set arn as it has not been provided to builder');
        }
        return `${this.options.openIdConnectProviderArn}:OIDC:*`;
      default:
        return 'token.actions.githubusercontent.com';
    }
  }
}

const principalClaimReqProperties: PartialGhaClaims = {
  job_workflow_ref: 'jobWorkflowRef',
  actor_id: 'actorId',
  repository_owner: 'repositoryOwner',
  runner_environment: 'runnerEnvironment',
  workflow_ref: 'workflowRef',
};
