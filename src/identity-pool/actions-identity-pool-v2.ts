
import { Constraint } from '@catnekaise/cdk-iam-utilities';
import * as cdk from 'aws-cdk-lib';
import { Aspects, CfnOutput, Stack } from 'aws-cdk-lib';
import { CfnIdentityPool, CfnIdentityPoolPrincipalTag, CfnIdentityPoolRoleAttachment } from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Role } from 'aws-cdk-lib/aws-iam';
import { Construct, IConstruct } from 'constructs';
import { ActionsIdentityMappedClaims, GhaClaim } from './claims';
import { ActionsIdentityPolicyUtility } from './policy-utility';
import { AuthenticatedMethodReference, EnhancedFlowRoleResolution } from './types';

export enum EnhancedFlowMatchType {
  EQUALS = 'Equals',
  CONTAINS = 'Contains',
  STARTS_WITH = 'StartsWith',
  NOT_EQUALS = 'NotEquals',
}

export interface ActionsIdentityPoolV2Props {

  /**
   * Mapped Claims for this Identity Pool
   */
  readonly mappedClaims: ActionsIdentityMappedClaims;

  /**
   * Constraints for the default authenticated role created in this pool
   *
   * ```ts
   * new ActionsIdentityPoolV2(this,'Pool', {
   *   authenticatedRoleConstraints: [
   *    GitHubActionsClaimConstraint.repoOwners(`catnekaise`),
   *    // additional constraints
   *   ]
   * });
   * ```
   */
  readonly authenticatedRoleConstraints: Constraint[];

  /**
   * Name of authenticated role when creating role.
   */
  readonly authenticatedRoleName?: string;

  /**
   * Provide this or attempt will be made to import OpenIdConnectProvider using defaults
   * @default Attempts to imports OIDC Provider from AWS Account
   */
  readonly openIdConnectProvider?: iam.IOpenIdConnectProvider;

  /**
   * Name of the Identity Pool
   */
  readonly identityPoolName?: string;

  /**
   * Authenticated Method Reference.
   *
   * authenticated = authenticated (default)
   *
   * host = token.actions.githubusercontent.com
   *
   * arn = arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*
   *
   * @default authenticated
   */
  readonly authenticatedMethodReference?: AuthenticatedMethodReference;

  /**
   * Export name for the CfnOutput containing the Identity Pool ID
   */
  readonly poolIdExportName?: string;

  /**
   * Use Enhanced (Simplified) AuthFlow instead of Basic
   * @default false
   */
  readonly useEnhancedAuthFlow?: boolean;

  /**
   * Only applicable when setting `useEnhancedFlow` to `true`
   * @default deny
   */
  readonly enhancedFlowRoleResolution?: EnhancedFlowRoleResolution;

  /**
   * Set removal policy
   */
  readonly removalPolicy?: cdk.RemovalPolicy;

}

export class ActionsIdentityPoolV2 extends Construct {

  public readonly defaultAuthenticatedRole: iam.Role;
  private readonly identityPool: CfnIdentityPool;
  private readonly openIdConnectProvider: iam.IOpenIdConnectProvider;

  private readonly roleAttachment: CfnIdentityPoolRoleAttachment;
  private rolesAttachedIndex = -1;

  constructor(scope: Construct, id: string, private readonly props: ActionsIdentityPoolV2Props) {
    super(scope, id);

    if (props.authenticatedRoleConstraints.length === 0) {
      throw new Error('At least one constraint has to be defined in authenticatedRoleRequiredConstraints');
    }

    this.openIdConnectProvider = props.openIdConnectProvider ??
      iam.OpenIdConnectProvider.fromOpenIdConnectProviderArn(this, 'IdentityProvider', `arn:aws:iam::${Stack.of(this).account}:oidc-provider/token.actions.githubusercontent.com`);


    this.identityPool = new CfnIdentityPool(this, 'Pool', {

      identityPoolName: props.identityPoolName,
      allowUnauthenticatedIdentities: false,
      allowClassicFlow: props.useEnhancedAuthFlow !== true,
      openIdConnectProviderArns: [
        this.openIdConnectProvider.openIdConnectProviderArn,
      ],
    });

    const principalTags: { [key: string]: string } = {};

    for (const claim of props.mappedClaims.claims) {
      principalTags[claim.tagName] = claim.name;
    }

    const principalTagging = new CfnIdentityPoolPrincipalTag(this, 'PrincipalTags', {
      identityPoolId: this.identityPoolId,
      identityProviderName: this.openIdConnectProvider.openIdConnectProviderArn,
      principalTags,
    });

    new CfnOutput(this, 'PoolId', {
      value: this.identityPool.ref,
      exportName: props.poolIdExportName,
    });

    const builder = this.policyUtility.newPrincipalBuilder(AuthenticatedMethodReference.AUTHENTICATED);

    props.authenticatedRoleConstraints.forEach(x => builder.add(x));

    this.defaultAuthenticatedRole = new iam.Role(this, 'AuthenticatedRole', {
      assumedBy: builder.createPrincipal(this),
      roleName: props.authenticatedRoleName,
    });

    this.roleAttachment = new CfnIdentityPoolRoleAttachment(this, 'RoleAttachment', {
      identityPoolId: this.identityPoolId,
      roles: {
        authenticated: this.defaultAuthenticatedRole.roleArn,
      },
      roleMappings: props.useEnhancedAuthFlow === true ? {
        oidc: {
          ambiguousRoleResolution: props?.enhancedFlowRoleResolution === EnhancedFlowRoleResolution.USE_DEFAULT_AUTHENTICATED_ROLE ? 'AuthenticatedRole' : 'Deny',
          type: 'Rules',
          identityProvider: this.openIdConnectProvider.openIdConnectProviderArn,
          rulesConfiguration: {
            rules: [],
          },
        },
      } : undefined,
    });

    if (props.removalPolicy) {
      this.identityPool.applyRemovalPolicy(props.removalPolicy);
      principalTagging.applyRemovalPolicy(props.removalPolicy);
      this.roleAttachment.applyRemovalPolicy(props.removalPolicy);
    }

    if (!props.useEnhancedAuthFlow) {
      return;
    }

    const _this = this;

    Aspects.of(this).add({
      visit(node: IConstruct) {

        if (node instanceof CfnIdentityPoolRoleAttachment && _this.rolesAttachedIndex < 0) {
          throw new Error('Need to add at least one role assignment (pool.enhancedFlowAssignRole(...)) to create an identity pool with Enhanced AuthFlow.');
        }
      },
    });

  }

  get identityPoolId(): string {
    return this.identityPool.ref;
  }

  get policyUtility(): ActionsIdentityPolicyUtility {

    return ActionsIdentityPolicyUtility.create(this, {
      claimsContext: this.props.mappedClaims.toClaimsContext(),
      identityPoolId: this.identityPoolId,
      identityPoolAccountId: Stack.of(this).account,
      defaultAmr: AuthenticatedMethodReference.AUTHENTICATED,
      identityPoolUsesEnhancedFlow: this.props.useEnhancedAuthFlow,

    });
  }

  enhancedFlowAssignRole(role: Role, claim: GhaClaim, matchType: EnhancedFlowMatchType, value: string): this {

    if (this.props.useEnhancedAuthFlow !== true) {
      throw new Error('Roles can only be assigned when using the Enhanced (Simplified) AuthFlow.');
    }

    const roleIndex = this.rolesAttachedIndex + 1;

    if (roleIndex >= 24) {
      throw new Error('Can only attach a maximum of 25 roles');
    }

    this.roleAttachment.addOverride(`Properties.RoleMappings.oidc.RulesConfiguration.Rules.${roleIndex}`, {
      Claim: claim,
      MatchType: matchType,
      Value: value,
      RoleARN: role.roleArn,
    });

    this.rolesAttachedIndex = roleIndex;
    return this;
  }

}
