export enum AuthenticatedMethodReference {
  AUTHENTICATED = 'authenticated',
  HOST = 'host',
  /**
   * @deprecated Use `AuthenticatedMethodReference.HOST` if needing more specificity than `authenticated`
   */
  ARN = 'arn'
}

export enum EnhancedFlowRoleResolution {
  DENY = 'deny', // Default
  USE_DEFAULT_AUTHENTICATED_ROLE = 'defaultAuthenticatedRole',
}

export interface PrincipalClaimRequirementCondition {
  readonly condition: 'StringEquals' | 'StringLike';
  readonly values: string[];
}

export interface PrincipalClaimRequirements {
  readonly actor?: string[];
  readonly actorId?: string[];
  readonly environment?: PrincipalClaimRequirementCondition;
  readonly jobWorkflowRef?: PrincipalClaimRequirementCondition;
  readonly repository?: PrincipalClaimRequirementCondition;
  readonly repositoryOwner?: string[];
  readonly runnerEnvironment?: 'self-hosted' | 'github-hosted';
  readonly workflowRef?: PrincipalClaimRequirementCondition;
}
