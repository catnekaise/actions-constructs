export const GitHubActionClaims = [
  'jti',
  'sub',
  'environment',
  'aud',
  'ref',
  'sha',
  'repository',
  'repository_owner',
  'actor_id',
  'repository_visibility',
  'repository_id',
  'repository_owner_id',
  'run_id',
  'run_number',
  'run_attempt',
  'runner_environment',
  'actor',
  'workflow',
  'head_ref',
  'base_ref',
  'event_name',
  'ref_type',
  'job_workflow_ref',
  'workflow_ref',
  'iss',
  'enterprise',
  // excluding: nbf, exp, iat
] as const;

export type GhaClaim = typeof GitHubActionClaims[number];

export const LibraryClaimTagNameAbbreviations: { [key: string]: string } = {
  repository_owner: 'owner',
  repository: 'repo',
  runner_environment: 'runEnv',
  job_workflow_ref: 'jWorkRef',
  environment: 'env',
  enterprise: 'ent',
  run_id: 'runId',
  run_number: 'run',
  run_attempt: 'attempt',
  repository_visibility: 'repoVis',
  repository_owner_id: 'ownerId',
  repository_id: 'repoId',
  event_name: 'event',
  actor_id: 'actorId',
  workflow_ref: 'workRef',
};

export interface MappedClaim {
  readonly tagName: string;
  readonly claim: GhaClaim;
}

export type PartialGhaClaims = Partial<{ [K in typeof GitHubActionClaims[number]]: string }>;

export function createMappedClaims(claims: GhaClaim[] | PartialGhaClaims): MappedClaim[] {

  const mappedClaims: MappedClaim[] = [];

  if (Array.isArray(claims)) {
    for (const claim of claims) {

      if (!GitHubActionClaims.includes(claim)) {
        throw new Error(`${claim} is not a known GitHub Actions claim`);
      }

      mappedClaims.push({
        claim,
        tagName: LibraryClaimTagNameAbbreviations[claim] ?? claim,
      });
    }

    return mappedClaims;
  }

  for (const key of Object.keys(claims)) {

    if (!GitHubActionClaims.includes(key as GhaClaim)) {
      throw new Error(`${key} is not a known GitHub Actions claim`);
    }

    const claim = key as GhaClaim;

    mappedClaims.push({
      claim,
      tagName: claims[claim as never],
    });
  }

  return mappedClaims;
}

export class ClaimMapping {

  static fromDefaults(claim: GhaClaim, ...additionalClaims: GhaClaim[]): ClaimMapping {
    return new ClaimMapping(createMappedClaims([claim, ...additionalClaims]));
  }

  static fromClaimsAsTagNames(claim: GhaClaim, ...additionalClaims: GhaClaim[]): ClaimMapping {

    return new ClaimMapping([claim, ...additionalClaims].map(x => ({
      claim: x,
      tagName: x,
    })));
  }

  /**
   * Available in TypeScript only
   * @jsii ignore
   **/
  static fromClaimsWithTagName(claims: PartialGhaClaims): ClaimMapping {
    return new ClaimMapping(createMappedClaims(claims as never));
  }


  static fromCustomTagNames(claims: { [key: string]: string }): ClaimMapping {
    return new ClaimMapping(createMappedClaims(claims as never));
  }

  private readonly _claims: MappedClaim[];

  private constructor(claims: MappedClaim[]) {
    this._claims = claims;
  }

  get mappedClaims(): MappedClaim[] {
    return this._claims.map(x => ({ ...x }));
  }
}
