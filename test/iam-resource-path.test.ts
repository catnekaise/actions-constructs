import { ActionsIdentityIamResourcePathBuilder, ClaimMapping, GhaClaim } from '../src';

describe('IAM Resource Path', () => {

  it('should work with claim', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromDefaults(GhaClaim.REPOSITORY));

    expect(builder.text('prefix').value('test', GhaClaim.REPOSITORY, '*').toString()).toEqual('prefix/test/${aws:principalTag/repo}/*');

  });

  it('should work with multiple claims', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      repository: 'a',
      repository_owner: 'b',
      repository_owner_id: 'c',
    }));

    const value = builder.claim(GhaClaim.REPOSITORY_OWNER)
      .claim(GhaClaim.REPOSITORY_OWNER_ID)
      .claim(GhaClaim.REPOSITORY)
      .text('*')
      .toString();

    expect(value).toEqual('${aws:principalTag/b}/${aws:principalTag/c}/${aws:principalTag/a}/*');

  });

  it('should throw error when using unmapped claims', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromDefaults(GhaClaim.REPOSITORY));

    expect(() => builder.claim(GhaClaim.ENVIRONMENT)).toThrow();
    expect(() => builder.value(GhaClaim.ENTERPRISE)).toThrow();

  });

  it('should be immutable builders', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      repository: 'repo',
      repository_owner: 'owner',
      repository_owner_id: 'ownerId',
    }));

    const builder2 = builder.claim(GhaClaim.REPOSITORY_OWNER);
    builder2.text('omitted');

    let builder3 = builder2.value(GhaClaim.REPOSITORY);
    builder3 = builder3.text('*');

    expect(builder.toString()).toEqual('');
    expect(builder2.toString()).toEqual('${aws:principalTag/owner}');
    expect(builder3.toString()).toEqual('${aws:principalTag/owner}/${aws:principalTag/repo}/*');

  });

});
