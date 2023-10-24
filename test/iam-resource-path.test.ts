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

});
