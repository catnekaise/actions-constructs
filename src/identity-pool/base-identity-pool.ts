import { Annotations, CfnOutput, Stack } from 'aws-cdk-lib';
import { CfnIdentityPool, CfnIdentityPoolPrincipalTag } from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { ClaimMapping, MappedClaim } from './claims';
import { AuthenticatedMethodReference, PrincipalClaimRequirements } from './types';
import { ActionsIdentityChainedPrincipalBuilder, ActionsIdentityIamResourcePathBuilder, ActionsIdentityPrincipalBuilder } from './util';

export interface ActionsIdentityPoolBaseProps {

  /**
   * Provide this or attempt will be made to import OpenIdConnectProvider using defaults
   */
  readonly openIdConnectProvider?: iam.IOpenIdConnectProvider;

  /**
   * Name of the Identity Pool
   */
  readonly identityPoolName?: string;

  /**
   *
   */
  readonly claimMapping: ClaimMapping;


  /**
   * Name of authenticated role when creating role.
   */
  readonly authenticatedRoleName?: string;

  /**
   * Authenticated Method Reference.
   *
   * authenticated = authenticated
   *
   * host = token.actions.githubusercontent.com
   *
   * arn = arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*
   */
  readonly authenticatedMethodReference?: AuthenticatedMethodReference;

  /**
   * Required claims used when not passing any to this.createPrincipalForPool()
   */
  readonly principalClaimRequirements: PrincipalClaimRequirements;

  /**
   * Export name for the CfnOutput containing the Identity Pool ID
   */
  readonly poolIdExportName?: string;
}


export abstract class ActionsIdentityPoolBase extends Construct {

  private readonly _mappedClaims: MappedClaim[];
  private readonly identityPool: CfnIdentityPool;
  protected readonly openIdConnectProvider: iam.IOpenIdConnectProvider;

  protected constructor(scope: Construct, id: string, private readonly baseProps: ActionsIdentityPoolBaseProps, allowClassicFlow?: true | undefined) {
    super(scope, id);

    this._mappedClaims = baseProps.claimMapping.mappedClaims;


    const tagNames = this._mappedClaims.map(x => x.tagName);

    if (this._mappedClaims.length !== new Set(tagNames).size) {
      Annotations.of(this).addError('More than one claim provided maps to the same tag name. Use unique tag names for each claim to map.');
    }

    if (this._mappedClaims.length === 0) {
      Annotations.of(this).addError('No claims have been mapped');
    }

    const enterpriseSlug = scope.node.tryGetContext('@catnekaise/actions-identity-pool:enterpriseSlug');
    let idpSuffix = '';

    if (enterpriseSlug && typeof enterpriseSlug === 'string' && enterpriseSlug.match(/^[a-zA-Z0-9-]+$/)) {
      idpSuffix = `/${enterpriseSlug}`;
    }

    this.openIdConnectProvider = baseProps.openIdConnectProvider ??
      iam.OpenIdConnectProvider.fromOpenIdConnectProviderArn(this, 'IdentityProvider', `arn:aws:iam::${Stack.of(this).account}:oidc-provider/token.actions.githubusercontent.com${idpSuffix}`);


    this.identityPool = new CfnIdentityPool(this, 'Pool', {
      identityPoolName: baseProps.identityPoolName,
      allowUnauthenticatedIdentities: false,
      allowClassicFlow,
      openIdConnectProviderArns: [
        this.openIdConnectProvider.openIdConnectProviderArn,
      ],
    });

    const principalTags = this.mappedClaims.reduce((tags, mappedClaim) => {

      tags[mappedClaim.tagName] = mappedClaim.claim;

      return tags;

    }, {} as { [key: string]: string });

    new CfnIdentityPoolPrincipalTag(this, 'PrincipalTags', {
      identityPoolId: this.identityPoolId,
      identityProviderName: this.openIdConnectProvider.openIdConnectProviderArn,
      principalTags,
    });

    new CfnOutput(this, 'PoolId', {
      value: this.identityPool.ref,
      exportName: baseProps.poolIdExportName,
    });
  }

  get identityPoolId(): string {
    return this.identityPool.ref;
  }

  get mappedClaims(): MappedClaim[] {
    return this._mappedClaims.map(x => ({ ...x }));
  }

  get util(): ActionsIdentityPoolUtils {
    return new ActionsIdentityPoolUtils(this.baseProps.claimMapping);
  }

  /**
   * Create Principal with default Trust Policy for this Identity Pool
   */
  createPrincipalForPool(requirements?: PrincipalClaimRequirements, amr?: AuthenticatedMethodReference): iam.IPrincipal {

    // eslint-disable-next-line max-len
    return ActionsIdentityPrincipalBuilder.create(this.baseProps.claimMapping, this.identityPoolId, this.baseProps.authenticatedMethodReference, this.openIdConnectProvider.openIdConnectProviderArn)
      .createPrincipal(requirements ?? this.baseProps.principalClaimRequirements, amr);
  }
}

export class ActionsIdentityPoolUtils {

  constructor(private readonly claimMapping: ClaimMapping) {
  }

  get chainedPrincipal(): ActionsIdentityChainedPrincipalBuilder {
    return ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(this.claimMapping);
  }

  get iamResourcePath(): ActionsIdentityIamResourcePathBuilder {
    return ActionsIdentityIamResourcePathBuilder.fromClaimMapping(this.claimMapping);
  }

}
