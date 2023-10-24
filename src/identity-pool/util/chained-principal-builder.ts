import * as iam from 'aws-cdk-lib/aws-iam';
import { ClaimMapping, GhaClaim } from '../claims';

export type ChainedPrincipalConditions = {
  StringEquals: { [key: string]: string | string[] } & {
    readonly 'aws:FederatedProvider': 'cognito-identity.amazonaws.com';
  };
  StringLike?: { [key: string]: string | string[] };
  'ForAllValues:StringEquals'?: {
    'aws:tagKeys'?: string[];
    'sts:TransitiveTagKeys'?: string[];
  };
  Null?: {
    'sts:TransitiveTagKeys': 'false';
  };
}

export class ActionsIdentityChainedPrincipalBuilder {

  static fromClaimMapping(claimMapping: ClaimMapping): ActionsIdentityChainedPrincipalBuilder {
    return new ActionsIdentityChainedPrincipalBuilder(claimMapping);
  }

  private readonly passClaims: GhaClaim[] = [];
  private readonly claimConditions: { [key: string]: ClaimCondition } = {};
  private readonly otherConditions: { [key: string]: string } = {};

  private constructor(private readonly claimMapping: ClaimMapping) {
  }

  claimEquals(claim: GhaClaim, value: string, ...additionalValues: string[]): this {

    this.validateAddingCondition(claim, 'StringEquals');

    this.claimConditions[claim].values.push(value, ...additionalValues);

    return this;
  }

  claimLike(claim: GhaClaim, value: string, ...additionalValues: string[]): this {

    this.validateAddingCondition(claim, 'StringLike');

    this.claimConditions[claim].values.push(value, ...additionalValues);
    return this;
  }

  createConditions(): { [key: string]: unknown } {

    const mappedClaims = this.claimMapping.mappedClaims;

    const conditions: ChainedPrincipalConditions = {
      StringEquals: {
        'aws:FederatedProvider': 'cognito-identity.amazonaws.com',
        ...this.otherConditions,
      },
    };

    const like: { [key: string]: string | string[] } = {};

    for (const key of Object.keys(this.claimConditions)) {

      const condition = this.claimConditions[key];
      const tagName = mappedClaims.find(x => x.claim === condition.claim)?.tagName ?? condition.claim;
      const value = condition.values.length === 1 ? condition.values[0] : condition.values;

      if (condition.type === 'StringEquals') {
        conditions.StringEquals[`aws:principalTag/${tagName}`] = value;
      } else {
        like[`aws:principalTag/${tagName}`] = value;
      }
    }

    for (const passedClaim of this.passClaims) {

      const tagName = mappedClaims.find(x => x.claim === passedClaim)?.tagName ?? passedClaim;

      conditions.StringEquals[`aws:requestTag/${tagName}`] = `$\{aws:principalTag/${tagName}}`;
    }

    if (Object.keys(like).length > 0) {
      conditions.StringLike = like;
    }

    if (this.passClaims.length > 0) {
      conditions['ForAllValues:StringEquals'] = {
        'aws:tagKeys': this.passClaims.map(x => mappedClaims.find(y => y.claim === x)?.tagName ?? x),
      };
    }

    return conditions;

  }

  createPrincipalAssumedBy(principal: iam.IPrincipal): iam.IPrincipal {

    const principalWithConditions = new iam.PrincipalWithConditions(principal, this.createConditions());

    return this.passClaims.length > 0 ? principalWithConditions.withSessionTags() : principalWithConditions;
  }

  passesClaim(claim: GhaClaim, ...additionalClaims: GhaClaim[]): this {

    for (const val of [claim, ...additionalClaims]) {

      if (!this.claimMapping.mappedClaims.find(x => x.claim === val)) {
        throw new Error(`Claim of type "${val}" is not a mapped claim. Add it as part of mapped claims in order to use it in the policy.`);
      }

      if (!this.passClaims.includes(val)) {
        this.passClaims.push(val);
      }
    }

    return this;
  }

  requireExternalId(externalId: string): this {
    this.otherConditions['sts:externalId'] = externalId;
    return this;
  }

  requireIdentityPoolId(identityPoolId: string): this {

    this.otherConditions['cognito-identity.amazonaws.com:aud'] = identityPoolId;

    return this;
  }

  private validateAddingCondition(claim: GhaClaim, type: 'StringEquals' | 'StringLike'): void {

    if (this.claimConditions[claim] && this.claimConditions[claim].type !== type) {
      throw new Error('Cannot require the same claim to both be StringEquals and StringLike in the same trust policy.');
    }

    if (!this.claimMapping.mappedClaims.find(x => x.claim === claim)) {
      throw new Error(`Claim of type "${claim}" is not a mapped claim. Add it as part of mapped claims in order to use it as a condition.`);
    }

    if (!this.claimConditions[claim]) {
      this.claimConditions[claim] = {
        claim,
        type,
        values: [],
      };
    }
  }
}

interface ClaimCondition {
  claim: GhaClaim;
  type: 'StringEquals' | 'StringLike';
  values: string[];
}
