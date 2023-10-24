export type AuthenticatedMethodReference = 'authenticated' | 'host' | 'arn';

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
