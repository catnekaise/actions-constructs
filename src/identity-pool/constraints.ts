import { ClaimConstraint, ConditionOperator, Constraint, ConstraintAssembleContext, ConstraintPolicyMutation } from '@catnekaise/cdk-iam-utilities';
import { Annotations } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GhaClaim } from './claims';

export class GitHubActionsClaimConstraint extends ClaimConstraint {

  public static readonly SelfHosted = new GitHubActionsClaimConstraint(ConditionOperator.STRING_EQUALS, GhaClaim.RUNNER_ENVIRONMENT, ['self-hosted']);

  static environmentEquals(...environments: string[]): GitHubActionsClaimConstraint {

    if (environments.length === 0) {
      throw new Error('Provide the value of at least one environment');
    }

    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_EQUALS, GhaClaim.ENVIRONMENT, environments);
  }

  static repositoryLike(...repositories: string[]): GitHubActionsClaimConstraint {

    if (repositories.length === 0) {
      throw new Error('Provide the value of at least one repository');
    }

    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_LIKE, GhaClaim.REPOSITORY, repositories);
  }

  static actorEquals(...actors: string[]): GitHubActionsClaimConstraint {

    if (actors.length === 0) {
      throw new Error('Provide the value of at least one actor (GitHub user)');
    }

    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_EQUALS, GhaClaim.ACTOR, actors);
  }

  /**
   * Value(s) of GitHub organizations or users running GitHub Actions
   * @param owners
   */
  static repoOwners(...owners: string[]): GitHubActionsClaimConstraint {

    if (!owners || owners.length === 0) {
      throw new Error('Provide the value of at least one GitHub organization or user');
    }

    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_LIKE, GhaClaim.REPOSITORY, owners.map(x => `${x}/*`));
  }

  /**
   *
   * @param organization Name of organization or user
   * @param repositoryName Name of repository
   * @param filename Default value is '*'
   * @param ref Default value is '*'
   */
  static jobWorkflowLike(organization: string, repositoryName: string, filename?: string, ref?: string): GitHubActionsClaimConstraint {

    filename = filename ?? '*';
    ref = ref ?? '*';
    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_LIKE, GhaClaim.JOB_WORKFLOW_REF, [`${organization}/${repositoryName}/.github/workflows/${filename}@${ref}`]);
  }

  static claimLike(claim: GhaClaim, ...values: string[]): GitHubActionsClaimConstraint {

    if (values.length === 0) {
      throw new Error(`Provide at least one value for claim ${claim}`);
    }

    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_LIKE, claim, values);
  }

  static claimEquals(claim: GhaClaim, value: string, ...additionalValues: string[]): GitHubActionsClaimConstraint {
    return new GitHubActionsClaimConstraint(ConditionOperator.STRING_EQUALS, claim, [value, ...additionalValues]);
  }

  static claimCondition(operator: ConditionOperator, claim: GhaClaim, ...values: string[]): GitHubActionsClaimConstraint {

    if (values.length === 0) {
      throw new Error('Provide at least one value');
    }

    return new GitHubActionsClaimConstraint(operator, claim, values);
  }

  constructor(operator: ConditionOperator, claim: GhaClaim, values: string[]) {
    super(operator, claim, values);
  }


  assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[] {

    if (['repository', 'job_workflow_ref'].includes(this.claim) && this.operator.includes('StringLike')) {
      annotateRepositoryLikeClaims(scope, this.claim, this.values);
    }

    return super.assemble(scope, context);
  }
}

function annotateRepositoryLikeClaims(scope: Construct, claim: string, values: string[]): void {

  if (claim === 'job_workflow_ref') {
    for (const value of values.filter(matchesAnyRepoInOrganization)) {
      Annotations.of(scope).addWarning(`Matching ${value} on claim job_workflow_ref would match a workflow in any repository of your organization.`);
    }
  }

  if (values.filter(matchesMoreThanOneOrganization).length > 0) {
    throw new Error('Matching would match more than a single GitHub organization or user.');
  }
}

function matchesAnyRepoInOrganization(value: string): boolean {

  if (value.match(/^[\w-]+\/\*.*/)) {
    return true;
  }

  return false;

}

function matchesMoreThanOneOrganization(value: string): boolean {

  if (value.split('/')[0].includes('*')) {
    return true;
  }

  return false;

}

export abstract class ActionsIdentityConstraints {

  protected constructor() {
  }

  protected abstract addConstraint(constraint: Constraint): void;

  environmentEquals(environment: string, ...additionalEnvironments: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.environmentEquals(environment, ...additionalEnvironments));
    return this;
  }

  repositoryLike(repository: string, ...additionalRepositories: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.repositoryLike(repository, ...additionalRepositories));

    return this;
  }

  repositoryEquals(repository: string, ...additionalRepositories: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.claimEquals(GhaClaim.REPOSITORY, repository, ...additionalRepositories));

    return this;
  }

  approvedBy(...actors: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.actorEquals(...actors));

    return this;
  }

  whenSelfHosted(): this {
    this.addConstraint(GitHubActionsClaimConstraint.SelfHosted);
    return this;
  }

  claimLike(claim: GhaClaim, value: string, ...additionalValues: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.claimLike(claim, value, ...additionalValues));

    return this;
  }

  claimEquals(claim: GhaClaim, value: string, ...additionalValues: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.claimEquals(claim, value, ...additionalValues));

    return this;
  }

  claimCondition(operator: ConditionOperator, claim: GhaClaim, ...values: string[]): this {

    this.addConstraint(GitHubActionsClaimConstraint.claimCondition(operator, claim, ...values));

    return this;
  }

  repoOrganisations(organization: string, ...additionalOrganizations: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.repoOwners(organization, ...additionalOrganizations));
    return this;
  }

  /**
   *
   * @param organization Name of organization or user
   * @param repositoryName Name of repository
   * @param filename Default value is '*'
   * @param ref Default value is '*'
   */
  jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): this {

    this.addConstraint(GitHubActionsClaimConstraint.jobWorkflowLike(
      organization,
      repositoryName ?? '*',
      filename,
      ref,
    ));

    return this;
  }

  refLike(...refs: string[]): this {
    this.addConstraint(GitHubActionsClaimConstraint.claimLike(GhaClaim.REF, ...refs));
    return this;
  }

}
