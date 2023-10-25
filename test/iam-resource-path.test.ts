import { ActionsIdentityIamResourcePathBuilder, ClaimMapping } from '../src';

describe('IAM Resource Path', () => {

  it('should work with claim', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromDefaults('repository'));

    expect(builder.text('prefix').value('test', 'repository', '*').toString()).toEqual('prefix/test/${aws:principalTag/repo}/*');

  });

  it('should work with multiple claims', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      repository: 'a',
      repository_owner: 'b',
      repository_owner_id: 'c',
    }));

    const value = builder.claim('repository_owner')
      .claim('repository_owner_id')
      .claim('repository')
      .text('*')
      .toString();

    expect(value).toEqual('${aws:principalTag/b}/${aws:principalTag/c}/${aws:principalTag/a}/*');

  });

  it('should throw error when using unmapped claims', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromDefaults('repository'));

    expect(() => builder.claim('environment')).toThrow();
    expect(() => builder.value('enterprise')).toThrow();

  });

  it('should be immutable builders', () => {

    const builder = ActionsIdentityIamResourcePathBuilder.fromClaimMapping(ClaimMapping.fromClaimsWithTagName({
      repository: 'repo',
      repository_owner: 'owner',
      repository_owner_id: 'ownerId',
    }));

    const builder2 = builder.claim('repository_owner');
    builder2.text('omitted');

    let builder3 = builder2.value('repository');
    builder3 = builder3.text('*');

    expect(builder.toString()).toEqual('');
    expect(builder2.toString()).toEqual('${aws:principalTag/owner}');
    expect(builder3.toString()).toEqual('${aws:principalTag/owner}/${aws:principalTag/repo}/*');

  });

});
