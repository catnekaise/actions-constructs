import { ClaimMapping, GhaClaim, GitHubActionClaims, MappedClaim } from '../claims';

export class ActionsIdentityIamResourcePathBuilder {

  static fromClaimMapping(claimMapping: ClaimMapping): ActionsIdentityIamResourcePathBuilder {
    return new ActionsIdentityIamResourcePathBuilder(claimMapping, []);
  }

  private constructor(private readonly claimMapping: ClaimMapping, private readonly path: string[]) {
  }

  private get mappedClaims(): MappedClaim[] {
    return this.claimMapping.mappedClaims;
  }

  /**
   * Value must be a mapped claim.
   */
  claim(value: GhaClaim, ...additionalValues: GhaClaim[]): ActionsIdentityIamResourcePathBuilder {

    const input: string[] = [];

    for (const claim of [value, ...additionalValues]) {

      const mappedClaim = this.mappedClaims.find(x => x.claim === claim);

      if (!mappedClaim) {
        throw new Error(`Claim ${claim} is not mapped`);
      }

      input.push(`$\{aws:principalTag/${mappedClaim.tagName}}`);
    }

    return new ActionsIdentityIamResourcePathBuilder(this.claimMapping, [...this.path, ...input]);

  }

  /**
   * Value can be anything. Providing a GitHub Actions Claim will not render a principalTag context key.
   */
  text(value: string, ...additionalValues: string[]): ActionsIdentityIamResourcePathBuilder {
    return new ActionsIdentityIamResourcePathBuilder(this.claimMapping, [...this.path, value, ...additionalValues]);
  }

  /**
   * Value can be anything. When value matches a known (mapped or not) GitHub Actions claim it will be treated as such.
   */
  value(value: string | GhaClaim, ...additionalValues: (string | GhaClaim)[]): ActionsIdentityIamResourcePathBuilder {

    const input: string[] = [];

    for (const val of [value, ...additionalValues]) {

      const isKnownClaim = GitHubActionClaims.includes(val as GhaClaim);
      const mappedClaim = this.mappedClaims.find(x => x.claim === val);

      if (mappedClaim) {
        input.push(`$\{aws:principalTag/${mappedClaim.tagName}}`);

        continue;
      } else if (!mappedClaim && isKnownClaim) {
        throw new Error('Cannot use value() with strings that are same value as a known GitHub Actions claim. Add string with text() instead.');
      }

      input.push(val);
    }

    return new ActionsIdentityIamResourcePathBuilder(this.claimMapping, [...this.path, ...input]);
  }

  toStringWithSeparator(separator: string): string {
    return this.path.join(separator);
  }

  toString(): string {
    return this.path.join('/');
  }

}
