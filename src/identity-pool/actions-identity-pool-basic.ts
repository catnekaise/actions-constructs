import { CfnIdentityPoolRoleAttachment } from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { ActionsIdentityPoolBase, ActionsIdentityPoolBaseProps } from './base-identity-pool';
import { AuthenticatedMethodReference } from './types';

export interface ActionsIdentityPoolBasicProps extends ActionsIdentityPoolBaseProps {
}

export class ActionsIdentityPoolBasic extends ActionsIdentityPoolBase {

  private readonly authenticatedRole: iam.Role;

  constructor(scope: Construct, id: string, props: ActionsIdentityPoolBasicProps) {
    super(scope, id, props, true);

    this.authenticatedRole = new iam.Role(this, 'AuthenticatedRole', {
      assumedBy: this.createPrincipalForPool(props.principalClaimRequirements, AuthenticatedMethodReference.AUTHENTICATED),
      roleName: props.authenticatedRoleName,
    });

    new CfnIdentityPoolRoleAttachment(this, 'RoleAttachment', {
      identityPoolId: this.identityPoolId,
      roles: {
        authenticated: this.authenticatedRole.roleArn,
      },
    });
  }

  get defaultAuthenticatedRole(): iam.Role {
    return this.authenticatedRole;
  }

}
