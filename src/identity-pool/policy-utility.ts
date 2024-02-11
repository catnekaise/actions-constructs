import {
  AwsPrincipalTagConditionKey,
  ClaimsIamResourcePathBuilder,
  ClaimsIamResourcePathBuilderSettings,
  ClaimsUtility,
  ConditionOperator,
  Constraint,
  ConstraintsUtility,
  GenericConstraint,
  GlobalConditionKey,
  IClaimsContext,
  IConstraintsBuilder,
  IMappedClaims,
  PassClaimsConstraint,
  PassClaimsConstraintSettings,
  PolicyType,
  PolicyVariable,
  PrincipalType,
  ResourceTagConstraint,
  StringConditionOperator,
  StsCognitoIdentityConstraint,
} from '@catnekaise/cdk-iam-utilities';
import { Annotations } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { PrincipalPolicyFragment } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { GhaClaim, GitHubActionClaims } from './claims';
import { ActionsIdentityConstraints, GitHubActionsClaimConstraint } from './constraints';
import { getAmrValue } from './helpers';
import { AuthenticatedMethodReference } from './types';

export interface ConstrainerSettings {
  readonly claimsContext: IClaimsContext;
  readonly policyType?: PolicyType;
}

export abstract class Constrainer extends ActionsIdentityConstraints {

  protected constructor(protected readonly settings: ConstrainerSettings) {
    super();
  }

  hasResourceTagEqualToClaim(resourceTagName: string, claim: GhaClaim): this {

    this.addConstraint(ResourceTagConstraint.create(
      StringConditionOperator.STRING_EQUALS,
      resourceTagName,
      PolicyVariable.principalTag(ClaimsUtility.forContext(this.settings.claimsContext).tagNameForClaim(claim)).toString(),
    ));

    return this;
  }
}


export class PolicyStatementConstrainer extends Constrainer {

  static create(scope: Construct, policyStatement: iam.PolicyStatement, settings: ConstrainerSettings): PolicyStatementConstrainer {
    return new PolicyStatementConstrainer(scope, policyStatement, settings);
  }

  protected constructor(
    private readonly scope: Construct,
    private readonly policyStatement: iam.PolicyStatement,
    settings: ConstrainerSettings,
  ) {
    super(settings);
  }

  protected addConstraint(constraint: Constraint): void {
    ConstraintsUtility.forConstraints([constraint])
      .appendPolicy(this.scope, {
        policyType: PolicyType.NonSpecific,
        claimsContext: this.settings.claimsContext,
      }, this.policyStatement);
  }


  add(constraint: Constraint): this {
    ConstraintsUtility.forConstraints([constraint])
      .appendPolicy(this.scope, {
        policyType: PolicyType.NonSpecific,
        claimsContext: this.settings.claimsContext,
      }, this.policyStatement);

    return this;
  }

}


export class GrantConstrainer extends Constrainer {


  static create(scope: Construct, grant: iam.Grant, settings: ConstrainerSettings): GrantConstrainer {
    return new GrantConstrainer(scope, grant, settings);
  }

  protected constructor(
    private readonly scope: Construct,
    private readonly grant: iam.Grant,
    settings: ConstrainerSettings,
  ) {
    super(settings);
  }

  protected addConstraint(constraint: Constraint): void {


    const util = ConstraintsUtility.forConstraints([constraint]);

    util.appendGrant(this.scope, {
      claimsContext: this.settings.claimsContext,
      policyType: this.settings.policyType ?? PolicyType.NonSpecific,
    }, this.grant);

  }

  add(constraint: Constraint): this {
    this.addConstraint(constraint);
    return this;
  }

}

export interface BuilderSettings {
  readonly claimsContext: IClaimsContext;
}

export abstract class ConstraintsBuilder extends ActionsIdentityConstraints implements IConstraintsBuilder {

  protected readonly addedConstraints: Constraint[] = [];

  protected constructor(protected readonly settings: BuilderSettings) {
    super();
  }

  get constraints(): Constraint[] {
    return this.addedConstraints;
  }


  // eslint-disable-next-line max-len
  protected applyToPolicyOfType(scope: Construct, statement: iam.PolicyStatement, policyType: PolicyType, additionalConstraints: Constraint[]): void {

    const constraints = this.constraints;
    constraints.push(...additionalConstraints);

    ConstraintsUtility.forConstraints(constraints).appendPolicy(scope, {
      policyType,
      claimsContext: this.settings.claimsContext,
    }, statement);

  }
}

export class PrincipalBuilder extends ConstraintsBuilder {


  static create(claimsContext: IClaimsContext, constraints: Constraint[]): PrincipalBuilder {

    const builder = new PrincipalBuilder({
      claimsContext,
    });

    constraints.forEach(x => builder.add(x));

    return builder;
  }

  protected addConstraint(constraint: Constraint): void {
    this.addedConstraints.push(constraint);
  }

  add(constraint: Constraint, ...additionalConstraints: Constraint[]): this {

    this.addedConstraints.push(constraint);
    additionalConstraints.forEach(x => this.addConstraint(x));

    return this;
  }

  /**
   * @param scope Any construct will do. Is used for annotating warnings
   */
  createPrincipal(scope: Construct): iam.IPrincipal {

    const stmt = new iam.PolicyStatement();

    if (this.constraints.filter(x => x instanceof GitHubActionsClaimConstraint).length === 0) {
      throw new Error('At least one GitHub Actions claim constraint shall be added to the trust policy');
    }

    this.applyToPolicyOfType(scope, stmt, PolicyType.trustPolicy(PrincipalType.Federated), []);

    const repoClaim = this.settings.claimsContext.mappedClaims.claims.find(x => x.name === GhaClaim.REPOSITORY);
    const repoOwnerClaim = this.settings.claimsContext.mappedClaims.claims.find(x => x.name === GhaClaim.REPOSITORY_OWNER);

    if (!repoClaim && !repoOwnerClaim) {
      Annotations.of(scope).addWarning('Not mapping either the repository claim or the repository_owner and then checking one of them in trust policy is not recommended.');
    } else if (repoClaim && !stmt.conditions.StringEquals?.[`aws:RequestTag/${repoClaim.tagName}`] && !stmt.conditions.StringLike?.[`aws:RequestTag/${repoClaim.tagName}`]) {
      Annotations.of(scope).addWarning('No conditions have been added to check value of the repository claim in this trust policy.');
    } else if (repoOwnerClaim && !stmt.conditions.StringEquals?.[`aws:RequestTag/${repoOwnerClaim.tagName}`]) {
      Annotations.of(scope).addWarning('No conditions have been added to check value of the repository_owner claim in this trust policy.');
    }


    return new iam.PrincipalWithConditions(new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {}, 'sts:AssumeRoleWithWebIdentity'),
      stmt.conditions)
      .withSessionTags();

  }
}

export class ChainedPrincipal extends iam.PrincipalBase {
  constructor(
    private readonly principal: iam.PrincipalWithConditions,
    private readonly sessionTags: boolean,
    private readonly externalIds: string[],
  ) {
    super();
  }

  public addToAssumeRolePolicy(doc: iam.PolicyDocument) {

    if (this.sessionTags) {
      const sessionPrincipal = new iam.SessionTagsPrincipal(this.principal);
      sessionPrincipal.addToAssumeRolePolicy(doc);
    } else {
      this.principal.addToAssumeRolePolicy(doc);
    }

    if (this.externalIds.length > 0) {
      doc.addStatements(new iam.PolicyStatement({
        effect: iam.Effect.DENY,
        actions: ['sts:AssumeRole'],
        conditions: {
          StringNotEquals: {
            'sts:ExternalId': this.externalIds.length === 1 ? this.externalIds[0] : this.externalIds,
          },
        },
        principals: [new iam.AnyPrincipal()],
      }));
    }

  }

  public get policyFragment(): PrincipalPolicyFragment {
    return this.principal.policyFragment;
  }

  dedupeString(): string | undefined {
    return '';
  }

}

export interface ChainedPrincipalCreateOptions {
  readonly passClaims?: PassClaimsConstraintSettings;
}

export interface GrantOrgRoleChainSettings {

  /**
   * Require that roles exist under this path for sts:AssumeRole
   */
  readonly rolePath?: string;

  /**
   * Role has resource tags matching specified values.
   * If tag value matches a known GitHub Actions claim, then value is changed to `${aws:PrincipalTag/value}`
   */
  readonly roleHasResourceTags?: { [key: string]: GhaClaim | string };

  /**
   * Prevent assuming roles in these accounts
   */
  readonly excludeAccountIds?: string[];

  /**
   * Require roles to exist under specified organization paths
   */
  readonly resourceOrgPaths?: string[];

  /**
   * Match resourcePaths using StringEquals instead of StringLike
   */
  readonly resourceOrgPathStringEquals?: boolean;
}


export class ChainedPrincipalBuilder extends ConstraintsBuilder {

  static create(claimsContext: IClaimsContext): ChainedPrincipalBuilder {

    return new ChainedPrincipalBuilder({
      claimsContext,
    });
  }

  private constructor(builderSettings: BuilderSettings) {
    super(builderSettings);
  }

  protected addConstraint(constraint: Constraint): void {
    this.addedConstraints.push(constraint);
  }

  add(constraint: Constraint, ...additionalConstraints: Constraint[]): this {

    this.addedConstraints.push(constraint);
    additionalConstraints.forEach(x => this.addConstraint(x));

    return this;
  }

  createPrincipalAssumedBy(scope: Construct, principal: iam.IPrincipal, options?: ChainedPrincipalCreateOptions): iam.IPrincipal {

    const stmt = new iam.PolicyStatement();

    const constraints = this.createPassClaimsConstraint(options);
    const passesClaims = constraints.length > 0;

    const fedProvider = new GenericConstraint(ConditionOperator.STRING_EQUALS, GlobalConditionKey.FederatedProvider, 'cognito-identity.amazonaws.com');
    constraints.push(fedProvider);

    this.applyToPolicyOfType(scope, stmt, PolicyType.trustPolicy(PrincipalType.Aws), constraints);

    const principalWithConditions = new iam.PrincipalWithConditions(principal, stmt.conditions);

    return new ChainedPrincipal(principalWithConditions, passesClaims, []);

  }

  private createPassClaimsConstraint(options?: ChainedPrincipalCreateOptions): Constraint[] {

    const claimsToBePassed = options?.passClaims;

    if (!claimsToBePassed || Object.keys(claimsToBePassed.claims).length === 0) {
      return [];
    }

    return [PassClaimsConstraint.create(claimsToBePassed)];
  }

}

export interface ActionsIdentityPolicyUtilitySettings {
  readonly claimsContext: IClaimsContext;
  // Required when using principalBuilder
  readonly identityPoolId?: string;
  readonly identityPoolAccountId?: string;
  readonly defaultAmr?: AuthenticatedMethodReference;
  readonly identityPoolUsesEnhancedFlow?: boolean;
  readonly basePrincipalConstraints?: Constraint[]; // Optional
}

export class ActionsIdentityIamResourcePathBuilderV2 extends ClaimsIamResourcePathBuilder {

  static fromMappedClaims(mappedClaims: IMappedClaims): ActionsIdentityIamResourcePathBuilderV2 {
    return new ActionsIdentityIamResourcePathBuilderV2({
      claimsContext: {
        mappedClaims,
        knownClaims: GitHubActionClaims as never,
      },
    }, []);
  }

  private constructor(settings: ClaimsIamResourcePathBuilderSettings, path: string[]) {
    super(settings, path);
  }

  claim(claim: GhaClaim, ...additionalClaims: GhaClaim[]): ActionsIdentityIamResourcePathBuilderV2 {
    return new ActionsIdentityIamResourcePathBuilderV2(this.options, this.appendClaim(claim, ...additionalClaims));
  }

  value(value: GhaClaim | string, ...additionalValues: (GhaClaim | string)[]): ActionsIdentityIamResourcePathBuilderV2 {

    const values = [value, ...additionalValues].map(x => {

      const valueLc = x.toLowerCase();
      if (GitHubActionClaims.includes(valueLc as never)) {
        return valueLc;
      }

      return x;

    });

    return new ActionsIdentityIamResourcePathBuilderV2(this.options, this.appendValue(...values));
  }

  text(value: string, ...additionalValues: string[]): ActionsIdentityIamResourcePathBuilderV2 {
    return new ActionsIdentityIamResourcePathBuilderV2(this.options, this.appendText(value, ...additionalValues));
  }

  policyVariable(value: PolicyVariable): ActionsIdentityIamResourcePathBuilderV2 {
    return new ActionsIdentityIamResourcePathBuilderV2(this.options, this.appendPolicyVariable(value));
  }

  asStringWithSeparator(separator: string): string {
    return this.path.join(separator);
  }

  toString(): string {
    return this.path.join('/');
  }

}

export class ActionsIdentityPolicyUtility {

  static create(scope: Construct, settings: ActionsIdentityPolicyUtilitySettings): ActionsIdentityPolicyUtility {
    return new ActionsIdentityPolicyUtility(scope, settings);
  }

  get claimsContext(): IClaimsContext {
    return this.utilitySettings.claimsContext;
  };

  private constructor(private readonly scope: Construct, private readonly utilitySettings: ActionsIdentityPolicyUtilitySettings) {
  }

  /**
   * Use this to create principals that should allow assumption via a Cognito Identity Pool
   */
  newPrincipalBuilder(amr?: AuthenticatedMethodReference): PrincipalBuilder {

    const {
      identityPoolId,
      defaultAmr,
    } = this.utilitySettings;

    if (!identityPoolId) {
      throw new Error('Cannot create a principal builder without providing the identity pool id');
    }

    const useAmr = getAmrValue(this.scope, amr ?? defaultAmr);

    const constraints = this.utilitySettings.basePrincipalConstraints ?? [];
    constraints.push(StsCognitoIdentityConstraint.identityPool(identityPoolId, useAmr));

    return PrincipalBuilder.create(this.claimsContext, constraints);
  }

  /**
   * Use this to create principals that should be assumable by roles that have been assumed via a ActionsIdentityPoolV2
   */
  newChainedPrincipalBuilder(): ChainedPrincipalBuilder {

    return ChainedPrincipalBuilder.create(this.claimsContext);
  }

  /**
   * Append a policy with conditions contextual to GitHub Actions claims
   */
  constrain(policyStatement: iam.PolicyStatement, scope?: Construct): PolicyStatementConstrainer {

    scope = scope ?? this.scope;

    return PolicyStatementConstrainer.create(scope, policyStatement, { claimsContext: this.claimsContext });
  }

  /**
   * Append a grant with conditions contextual to GitHub Actions claims
   */
  constrainGrant(grant: iam.Grant, scope?: Construct): GrantConstrainer {

    scope = scope ?? this.scope;

    return GrantConstrainer.create(scope, grant, { claimsContext: this.claimsContext });
  }

  /**
   * Build a resource path for an IAM Policy
   * @param value Mix of strings and claims
   */
  resourcePath(...value: (GhaClaim | string)[]): ActionsIdentityIamResourcePathBuilderV2 {
    let resourcePath = ActionsIdentityIamResourcePathBuilderV2.fromMappedClaims(this.claimsContext.mappedClaims);

    if (value.length > 0) {
      for (const valueElement of value) {
        resourcePath = resourcePath.value(valueElement);

      }
    }

    return resourcePath;
  }

  /**
   * Create a policy variable
   */
  policyVar(claim: GhaClaim): PolicyVariable {
    return PolicyVariable.principalTag(ClaimsUtility.forContext(this.claimsContext).tagNameForClaim(claim));
  }

  /**
   * Create a principal tag for claim
   */
  principalTagConditionKey(claim: GhaClaim): AwsPrincipalTagConditionKey {
    return AwsPrincipalTagConditionKey.tag(ClaimsUtility.forContext(this.claimsContext).tagNameForClaim(claim));
  }

  /**
   * Grant role permissions to assume roles in any organization account
   */
  grantOrganizationRoleChain(identity: iam.IGrantable, settings: GrantOrgRoleChainSettings): iam.Grant {

    const rolePath = settings.rolePath ?? '/';
    const roleArns = `arn:aws:iam::*:role${rolePath}*`;

    const assumeRoleStringEquals: { [key: string]: string | string[] } = {
      'aws:ResourceOrgID': PolicyVariable.principalOrgId().toString(),
    };
    const assumeRoleStringNotEquals: { [key: string]: string | string[] } = {};

    const roleHasResourceTags = settings.roleHasResourceTags ?? {};

    if (Object.keys(roleHasResourceTags).length > 0) {

      const util = ClaimsUtility.forContext(this.claimsContext);

      for (const key of Object.keys(roleHasResourceTags)) {

        let value = roleHasResourceTags[key];

        if (GitHubActionClaims.includes(value.toLowerCase() as never)) {
          value = PolicyVariable.principalTag(util.tagNameForClaim(value.toLowerCase())).toString();
        }

        assumeRoleStringEquals[GlobalConditionKey.resourceTag(key).toString()] = value;
      }
    } else if (rolePath === '/') {
      throw new Error('Provide a rolePath or at least one resourceTag that is required on roles that will be assuming roles.');
    }

    if (!rolePath.endsWith('/') || !rolePath.startsWith('/')) {
      throw new Error('A rolePath must begin and end with "/"');
    }

    const accountIds = [];

    if (this.utilitySettings.identityPoolAccountId) {
      accountIds.push(this.utilitySettings.identityPoolAccountId);
    }

    if (settings.excludeAccountIds && settings.excludeAccountIds.length > 0) {
      accountIds.push(...settings.excludeAccountIds);
    }

    if (accountIds.length > 0) {
      assumeRoleStringNotEquals['aws:ResourceAccount'] = accountIds.length === 1 ? accountIds[0] : accountIds;
    }

    const assumeRoleGrant: iam.GrantOnPrincipalOptions = {
      grantee: identity,
      actions: [
        'sts:AssumeRole',
      ],
      resourceArns: [
        roleArns,
      ],
      conditions: {
        StringEquals: assumeRoleStringEquals,
        StringNotEquals: assumeRoleStringNotEquals,
      },
    };

    if (settings.resourceOrgPaths?.length) {
      const operator = settings.resourceOrgPathStringEquals ? 'ForAnyValue:StringEquals' : 'ForAnyValue:StringLike';

      (assumeRoleGrant.conditions as any)[operator] = {
        'aws:ResourceOrgPaths': settings.resourceOrgPaths,
      };
    }


    const tagGrant = iam.Grant.addToPrincipal({
      grantee: identity,
      actions: [
        'sts:TagSession',
      ],
      resourceArns: [
        '*',
      ],
    });

    return tagGrant.combine(iam.Grant.addToPrincipal(assumeRoleGrant));

  }

}
