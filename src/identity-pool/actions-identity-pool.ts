import { Annotations } from 'aws-cdk-lib';
import { CfnIdentityPoolRoleAttachment } from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { ActionsIdentityPoolBase, ActionsIdentityPoolBaseProps } from './base-identity-pool';
import { GhaClaim } from './claims';

export interface ActionsIdentityPoolProps extends ActionsIdentityPoolBaseProps {

  /**
   * Create authenticated role or use first role assigned in role mappings
   */
  readonly authenticatedRole: 'create' | 'useFirstAssigned';

  /**
   * When no rule matches, request should be denied or use default authenticated role
   */
  readonly roleResolution?: 'deny' | 'defaultAuthenticatedRole';
}

export class ActionsIdentityPool extends ActionsIdentityPoolBase {

  private authenticatedRole: iam.Role | undefined;
  private roleAttachment: CfnIdentityPoolRoleAttachment | undefined;
  private rolesAttached = 0;

  constructor(scope: Construct, id: string, private readonly props: ActionsIdentityPoolProps) {
    super(scope, id, props);


    if (props.authenticatedRole === 'create') {
      this.authenticatedRole = new iam.Role(this, 'AuthenticatedRole', {
        assumedBy: this.createPrincipalForPool(this.props.principalClaimRequirements, 'authenticated'),
        roleName: this.props.authenticatedRoleName,
      });
    }

  }

  /**
   * When using `useFirstAssigned` authenticatedRole, this is undefined until first assignment
   */
  get defaultAuthenticatedRole(): iam.Role | undefined {
    return this.authenticatedRole;
  }

  assignRoleWhenClaimContains(role: iam.Role, claim: GhaClaim, value: string): this {

    this.assignRole(role, claim, 'Contains', value);

    return this;
  }

  /**
   * Assign role when claim equals value
   */
  assignRoleWhenClaimEquals(role: iam.Role, claim: GhaClaim, value: string): this {

    this.assignRole(role, claim, 'Equals', value);

    return this;
  }

  /**
   * Assign role when "sub" claim starts with value
   */
  assignRoleWhenClaimStartsWith(role: iam.Role, claim: GhaClaim, value: string): this {

    this.assignRole(role, claim, 'StartsWith', value);

    return this;
  }

  private assignRole(role: iam.Role, claim: string, matchType: 'Equals' | 'Contains' | 'StartsWith', value: string): void {

    let roleAttachment: CfnIdentityPoolRoleAttachment;

    if (!this.roleAttachment) {

      let authRole: iam.Role;

      if (this.authenticatedRole) {
        authRole = this.authenticatedRole;
      } else {
        authRole = role;
      }

      this.authenticatedRole = authRole;

      roleAttachment = new CfnIdentityPoolRoleAttachment(this, 'RoleAttachment', {
        identityPoolId: this.identityPoolId,
        roles: {
          authenticated: authRole.roleArn,
        },
        roleMappings: {
          oidc: {
            ambiguousRoleResolution: this.props?.roleResolution === 'defaultAuthenticatedRole' ? 'AuthenticatedRole' : 'Deny',
            type: 'Rules',
            identityProvider: this.openIdConnectProvider.openIdConnectProviderArn,
            rulesConfiguration: {
              rules: [
                {
                  claim,
                  matchType,
                  value,
                  roleArn: role.roleArn,
                },
              ],
            },
          },
        },
      });

      this.roleAttachment = roleAttachment;
      this.rolesAttached++;

      return;
    } else {
      roleAttachment = this.roleAttachment;
    }

    const roleIndex = this.rolesAttached + 1;


    if (roleIndex >= 25) {
      Annotations.of(this).addError('Can only attach a maximum of 25 roles');
      return;
    }

    roleAttachment.addOverride(`Properties.RoleMappings.oidc.RulesConfiguration.Rules.${roleIndex}`, {
      Claim: claim,
      MatchType: matchType,
      Value: value,
      RoleARN: role.roleArn,
    });

    this.rolesAttached = roleIndex;
  }
}
