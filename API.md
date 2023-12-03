# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsIdentityPool <a name="ActionsIdentityPool" id="@catnekaise/actions-constructs.ActionsIdentityPool"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityPool.Initializer"></a>

```typescript
import { ActionsIdentityPool } from '@catnekaise/actions-constructs'

new ActionsIdentityPool(scope: Construct, id: string, props: ActionsIdentityPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.Initializer.parameter.props">props</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps">ActionsIdentityPoolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@catnekaise/actions-constructs.ActionsIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@catnekaise/actions-constructs.ActionsIdentityPool.Initializer.parameter.props"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps">ActionsIdentityPoolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.createPrincipalForPool">createPrincipalForPool</a></code> | Create Principal with default Trust Policy for this Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimContains">assignRoleWhenClaimContains</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimEquals">assignRoleWhenClaimEquals</a></code> | Assign role when claim equals value. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimStartsWith">assignRoleWhenClaimStartsWith</a></code> | Assign role when "sub" claim starts with value. |

---

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ActionsIdentityPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createPrincipalForPool` <a name="createPrincipalForPool" id="@catnekaise/actions-constructs.ActionsIdentityPool.createPrincipalForPool"></a>

```typescript
public createPrincipalForPool(requirements?: PrincipalClaimRequirements, amr?: AuthenticatedMethodReference): IPrincipal
```

Create Principal with default Trust Policy for this Identity Pool.

###### `requirements`<sup>Optional</sup> <a name="requirements" id="@catnekaise/actions-constructs.ActionsIdentityPool.createPrincipalForPool.parameter.requirements"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

---

###### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPool.createPrincipalForPool.parameter.amr"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

##### `assignRoleWhenClaimContains` <a name="assignRoleWhenClaimContains" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimContains"></a>

```typescript
public assignRoleWhenClaimContains(role: Role, claim: GhaClaim, value: string): ActionsIdentityPool
```

###### `role`<sup>Required</sup> <a name="role" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimContains.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.Role

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimContains.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimContains.parameter.value"></a>

- *Type:* string

---

##### `assignRoleWhenClaimEquals` <a name="assignRoleWhenClaimEquals" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimEquals"></a>

```typescript
public assignRoleWhenClaimEquals(role: Role, claim: GhaClaim, value: string): ActionsIdentityPool
```

Assign role when claim equals value.

###### `role`<sup>Required</sup> <a name="role" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimEquals.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.Role

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimEquals.parameter.value"></a>

- *Type:* string

---

##### `assignRoleWhenClaimStartsWith` <a name="assignRoleWhenClaimStartsWith" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimStartsWith"></a>

```typescript
public assignRoleWhenClaimStartsWith(role: Role, claim: GhaClaim, value: string): ActionsIdentityPool
```

Assign role when "sub" claim starts with value.

###### `role`<sup>Required</sup> <a name="role" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimStartsWith.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.Role

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimStartsWith.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityPool.assignRoleWhenClaimStartsWith.parameter.value"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@catnekaise/actions-constructs.ActionsIdentityPool.isConstruct"></a>

```typescript
import { ActionsIdentityPool } from '@catnekaise/actions-constructs'

ActionsIdentityPool.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@catnekaise/actions-constructs.ActionsIdentityPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.property.util">util</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils">ActionsIdentityPoolUtils</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPool.property.defaultAuthenticatedRole">defaultAuthenticatedRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | When using `useFirstAssigned` authenticatedRole, this is undefined until first assignment. |

---

##### `node`<sup>Required</sup> <a name="node" id="@catnekaise/actions-constructs.ActionsIdentityPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPool.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityPool.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: MappedClaim[];
```

- *Type:* <a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]

---

##### `util`<sup>Required</sup> <a name="util" id="@catnekaise/actions-constructs.ActionsIdentityPool.property.util"></a>

```typescript
public readonly util: ActionsIdentityPoolUtils;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils">ActionsIdentityPoolUtils</a>

---

##### `defaultAuthenticatedRole`<sup>Optional</sup> <a name="defaultAuthenticatedRole" id="@catnekaise/actions-constructs.ActionsIdentityPool.property.defaultAuthenticatedRole"></a>

```typescript
public readonly defaultAuthenticatedRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

When using `useFirstAssigned` authenticatedRole, this is undefined until first assignment.

---


### ActionsIdentityPoolBase <a name="ActionsIdentityPoolBase" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer"></a>

```typescript
import { ActionsIdentityPoolBase } from '@catnekaise/actions-constructs'

new ActionsIdentityPoolBase(scope: Construct, id: string, baseProps: ActionsIdentityPoolBaseProps, allowClassicFlow?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.baseProps">baseProps</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps">ActionsIdentityPoolBaseProps</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.allowClassicFlow">allowClassicFlow</a></code> | <code>boolean</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `baseProps`<sup>Required</sup> <a name="baseProps" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.baseProps"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps">ActionsIdentityPoolBaseProps</a>

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="allowClassicFlow" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.Initializer.parameter.allowClassicFlow"></a>

- *Type:* boolean

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.createPrincipalForPool">createPrincipalForPool</a></code> | Create Principal with default Trust Policy for this Identity Pool. |

---

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createPrincipalForPool` <a name="createPrincipalForPool" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.createPrincipalForPool"></a>

```typescript
public createPrincipalForPool(requirements?: PrincipalClaimRequirements, amr?: AuthenticatedMethodReference): IPrincipal
```

Create Principal with default Trust Policy for this Identity Pool.

###### `requirements`<sup>Optional</sup> <a name="requirements" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.createPrincipalForPool.parameter.requirements"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

---

###### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.createPrincipalForPool.parameter.amr"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.isConstruct"></a>

```typescript
import { ActionsIdentityPoolBase } from '@catnekaise/actions-constructs'

ActionsIdentityPoolBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.util">util</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils">ActionsIdentityPoolUtils</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: MappedClaim[];
```

- *Type:* <a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]

---

##### `util`<sup>Required</sup> <a name="util" id="@catnekaise/actions-constructs.ActionsIdentityPoolBase.property.util"></a>

```typescript
public readonly util: ActionsIdentityPoolUtils;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils">ActionsIdentityPoolUtils</a>

---


### ActionsIdentityPoolBasic <a name="ActionsIdentityPoolBasic" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer"></a>

```typescript
import { ActionsIdentityPoolBasic } from '@catnekaise/actions-constructs'

new ActionsIdentityPoolBasic(scope: Construct, id: string, props: ActionsIdentityPoolBasicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer.parameter.props">props</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps">ActionsIdentityPoolBasicProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.Initializer.parameter.props"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps">ActionsIdentityPoolBasicProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.createPrincipalForPool">createPrincipalForPool</a></code> | Create Principal with default Trust Policy for this Identity Pool. |

---

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createPrincipalForPool` <a name="createPrincipalForPool" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.createPrincipalForPool"></a>

```typescript
public createPrincipalForPool(requirements?: PrincipalClaimRequirements, amr?: AuthenticatedMethodReference): IPrincipal
```

Create Principal with default Trust Policy for this Identity Pool.

###### `requirements`<sup>Optional</sup> <a name="requirements" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.createPrincipalForPool.parameter.requirements"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

---

###### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.createPrincipalForPool.parameter.amr"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.isConstruct"></a>

```typescript
import { ActionsIdentityPoolBasic } from '@catnekaise/actions-constructs'

ActionsIdentityPoolBasic.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.util">util</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils">ActionsIdentityPoolUtils</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.defaultAuthenticatedRole">defaultAuthenticatedRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: MappedClaim[];
```

- *Type:* <a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]

---

##### `util`<sup>Required</sup> <a name="util" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.util"></a>

```typescript
public readonly util: ActionsIdentityPoolUtils;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils">ActionsIdentityPoolUtils</a>

---

##### `defaultAuthenticatedRole`<sup>Required</sup> <a name="defaultAuthenticatedRole" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasic.property.defaultAuthenticatedRole"></a>

```typescript
public readonly defaultAuthenticatedRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---


## Structs <a name="Structs" id="Structs"></a>

### ActionsIdentityPoolBaseProps <a name="ActionsIdentityPoolBaseProps" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.Initializer"></a>

```typescript
import { ActionsIdentityPoolBaseProps } from '@catnekaise/actions-constructs'

const actionsIdentityPoolBaseProps: ActionsIdentityPoolBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.claimMapping">claimMapping</a></code> | <code><a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.principalClaimRequirements">principalClaimRequirements</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a></code> | Required claims used when not passing any to this.createPrincipalForPool(). |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.authenticatedMethodReference">authenticatedMethodReference</a></code> | <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a></code> | Authenticated Method Reference. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.authenticatedRoleName">authenticatedRoleName</a></code> | <code>string</code> | Name of authenticated role when creating role. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | Name of the Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.openIdConnectProvider">openIdConnectProvider</a></code> | <code>aws-cdk-lib.aws_iam.IOpenIdConnectProvider</code> | Provide this or attempt will be made to import OpenIdConnectProvider using defaults. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.poolIdExportName">poolIdExportName</a></code> | <code>string</code> | Export name for the CfnOutput containing the Identity Pool ID. |

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.claimMapping"></a>

```typescript
public readonly claimMapping: ClaimMapping;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---

##### `principalClaimRequirements`<sup>Required</sup> <a name="principalClaimRequirements" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.principalClaimRequirements"></a>

```typescript
public readonly principalClaimRequirements: PrincipalClaimRequirements;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

Required claims used when not passing any to this.createPrincipalForPool().

---

##### `authenticatedMethodReference`<sup>Optional</sup> <a name="authenticatedMethodReference" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.authenticatedMethodReference"></a>

```typescript
public readonly authenticatedMethodReference: AuthenticatedMethodReference;
```

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

Authenticated Method Reference.

authenticated = authenticated

host = token.actions.githubusercontent.com

arn = arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*

---

##### `authenticatedRoleName`<sup>Optional</sup> <a name="authenticatedRoleName" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.authenticatedRoleName"></a>

```typescript
public readonly authenticatedRoleName: string;
```

- *Type:* string

Name of authenticated role when creating role.

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

Name of the Identity Pool.

---

##### `openIdConnectProvider`<sup>Optional</sup> <a name="openIdConnectProvider" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.openIdConnectProvider"></a>

```typescript
public readonly openIdConnectProvider: IOpenIdConnectProvider;
```

- *Type:* aws-cdk-lib.aws_iam.IOpenIdConnectProvider

Provide this or attempt will be made to import OpenIdConnectProvider using defaults.

---

##### `poolIdExportName`<sup>Optional</sup> <a name="poolIdExportName" id="@catnekaise/actions-constructs.ActionsIdentityPoolBaseProps.property.poolIdExportName"></a>

```typescript
public readonly poolIdExportName: string;
```

- *Type:* string

Export name for the CfnOutput containing the Identity Pool ID.

---

### ActionsIdentityPoolBasicProps <a name="ActionsIdentityPoolBasicProps" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.Initializer"></a>

```typescript
import { ActionsIdentityPoolBasicProps } from '@catnekaise/actions-constructs'

const actionsIdentityPoolBasicProps: ActionsIdentityPoolBasicProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.claimMapping">claimMapping</a></code> | <code><a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.principalClaimRequirements">principalClaimRequirements</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a></code> | Required claims used when not passing any to this.createPrincipalForPool(). |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.authenticatedMethodReference">authenticatedMethodReference</a></code> | <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a></code> | Authenticated Method Reference. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.authenticatedRoleName">authenticatedRoleName</a></code> | <code>string</code> | Name of authenticated role when creating role. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | Name of the Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.openIdConnectProvider">openIdConnectProvider</a></code> | <code>aws-cdk-lib.aws_iam.IOpenIdConnectProvider</code> | Provide this or attempt will be made to import OpenIdConnectProvider using defaults. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.poolIdExportName">poolIdExportName</a></code> | <code>string</code> | Export name for the CfnOutput containing the Identity Pool ID. |

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.claimMapping"></a>

```typescript
public readonly claimMapping: ClaimMapping;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---

##### `principalClaimRequirements`<sup>Required</sup> <a name="principalClaimRequirements" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.principalClaimRequirements"></a>

```typescript
public readonly principalClaimRequirements: PrincipalClaimRequirements;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

Required claims used when not passing any to this.createPrincipalForPool().

---

##### `authenticatedMethodReference`<sup>Optional</sup> <a name="authenticatedMethodReference" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.authenticatedMethodReference"></a>

```typescript
public readonly authenticatedMethodReference: AuthenticatedMethodReference;
```

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

Authenticated Method Reference.

authenticated = authenticated

host = token.actions.githubusercontent.com

arn = arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*

---

##### `authenticatedRoleName`<sup>Optional</sup> <a name="authenticatedRoleName" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.authenticatedRoleName"></a>

```typescript
public readonly authenticatedRoleName: string;
```

- *Type:* string

Name of authenticated role when creating role.

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

Name of the Identity Pool.

---

##### `openIdConnectProvider`<sup>Optional</sup> <a name="openIdConnectProvider" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.openIdConnectProvider"></a>

```typescript
public readonly openIdConnectProvider: IOpenIdConnectProvider;
```

- *Type:* aws-cdk-lib.aws_iam.IOpenIdConnectProvider

Provide this or attempt will be made to import OpenIdConnectProvider using defaults.

---

##### `poolIdExportName`<sup>Optional</sup> <a name="poolIdExportName" id="@catnekaise/actions-constructs.ActionsIdentityPoolBasicProps.property.poolIdExportName"></a>

```typescript
public readonly poolIdExportName: string;
```

- *Type:* string

Export name for the CfnOutput containing the Identity Pool ID.

---

### ActionsIdentityPoolPrincipalBuilderOptions <a name="ActionsIdentityPoolPrincipalBuilderOptions" id="@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.Initializer"></a>

```typescript
import { ActionsIdentityPoolPrincipalBuilderOptions } from '@catnekaise/actions-constructs'

const actionsIdentityPoolPrincipalBuilderOptions: ActionsIdentityPoolPrincipalBuilderOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.claimMapping">claimMapping</a></code> | <code><a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.amr">amr</a></code> | <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.openIdConnectProviderArn">openIdConnectProviderArn</a></code> | <code>string</code> | *No description.* |

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.claimMapping"></a>

```typescript
public readonly claimMapping: ClaimMapping;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.amr"></a>

```typescript
public readonly amr: AuthenticatedMethodReference;
```

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

##### `openIdConnectProviderArn`<sup>Optional</sup> <a name="openIdConnectProviderArn" id="@catnekaise/actions-constructs.ActionsIdentityPoolPrincipalBuilderOptions.property.openIdConnectProviderArn"></a>

```typescript
public readonly openIdConnectProviderArn: string;
```

- *Type:* string

---

### ActionsIdentityPoolProps <a name="ActionsIdentityPoolProps" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.Initializer"></a>

```typescript
import { ActionsIdentityPoolProps } from '@catnekaise/actions-constructs'

const actionsIdentityPoolProps: ActionsIdentityPoolProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.claimMapping">claimMapping</a></code> | <code><a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.principalClaimRequirements">principalClaimRequirements</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a></code> | Required claims used when not passing any to this.createPrincipalForPool(). |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.authenticatedMethodReference">authenticatedMethodReference</a></code> | <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a></code> | Authenticated Method Reference. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.authenticatedRoleName">authenticatedRoleName</a></code> | <code>string</code> | Name of authenticated role when creating role. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | Name of the Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.openIdConnectProvider">openIdConnectProvider</a></code> | <code>aws-cdk-lib.aws_iam.IOpenIdConnectProvider</code> | Provide this or attempt will be made to import OpenIdConnectProvider using defaults. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.poolIdExportName">poolIdExportName</a></code> | <code>string</code> | Export name for the CfnOutput containing the Identity Pool ID. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.authenticatedRole">authenticatedRole</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour">ActionsIdentityPoolAuthenticatedRoleBehaviour</a></code> | Create authenticated role or use first role assigned in role mappings. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.roleResolution">roleResolution</a></code> | <code><a href="#@catnekaise/actions-constructs.EnhancedFlowRoleResolution">EnhancedFlowRoleResolution</a></code> | When no rule matches, request should be denied or use default authenticated role. |

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.claimMapping"></a>

```typescript
public readonly claimMapping: ClaimMapping;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---

##### `principalClaimRequirements`<sup>Required</sup> <a name="principalClaimRequirements" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.principalClaimRequirements"></a>

```typescript
public readonly principalClaimRequirements: PrincipalClaimRequirements;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

Required claims used when not passing any to this.createPrincipalForPool().

---

##### `authenticatedMethodReference`<sup>Optional</sup> <a name="authenticatedMethodReference" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.authenticatedMethodReference"></a>

```typescript
public readonly authenticatedMethodReference: AuthenticatedMethodReference;
```

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

Authenticated Method Reference.

authenticated = authenticated

host = token.actions.githubusercontent.com

arn = arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*

---

##### `authenticatedRoleName`<sup>Optional</sup> <a name="authenticatedRoleName" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.authenticatedRoleName"></a>

```typescript
public readonly authenticatedRoleName: string;
```

- *Type:* string

Name of authenticated role when creating role.

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

Name of the Identity Pool.

---

##### `openIdConnectProvider`<sup>Optional</sup> <a name="openIdConnectProvider" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.openIdConnectProvider"></a>

```typescript
public readonly openIdConnectProvider: IOpenIdConnectProvider;
```

- *Type:* aws-cdk-lib.aws_iam.IOpenIdConnectProvider

Provide this or attempt will be made to import OpenIdConnectProvider using defaults.

---

##### `poolIdExportName`<sup>Optional</sup> <a name="poolIdExportName" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.poolIdExportName"></a>

```typescript
public readonly poolIdExportName: string;
```

- *Type:* string

Export name for the CfnOutput containing the Identity Pool ID.

---

##### `authenticatedRole`<sup>Required</sup> <a name="authenticatedRole" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.authenticatedRole"></a>

```typescript
public readonly authenticatedRole: ActionsIdentityPoolAuthenticatedRoleBehaviour;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour">ActionsIdentityPoolAuthenticatedRoleBehaviour</a>

Create authenticated role or use first role assigned in role mappings.

---

##### `roleResolution`<sup>Optional</sup> <a name="roleResolution" id="@catnekaise/actions-constructs.ActionsIdentityPoolProps.property.roleResolution"></a>

```typescript
public readonly roleResolution: EnhancedFlowRoleResolution;
```

- *Type:* <a href="#@catnekaise/actions-constructs.EnhancedFlowRoleResolution">EnhancedFlowRoleResolution</a>

When no rule matches, request should be denied or use default authenticated role.

---

### MappedClaim <a name="MappedClaim" id="@catnekaise/actions-constructs.MappedClaim"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.MappedClaim.Initializer"></a>

```typescript
import { MappedClaim } from '@catnekaise/actions-constructs'

const mappedClaim: MappedClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.MappedClaim.property.claim">claim</a></code> | <code><a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.MappedClaim.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |

---

##### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.MappedClaim.property.claim"></a>

```typescript
public readonly claim: GhaClaim;
```

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@catnekaise/actions-constructs.MappedClaim.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

### PrincipalClaimRequirementCondition <a name="PrincipalClaimRequirementCondition" id="@catnekaise/actions-constructs.PrincipalClaimRequirementCondition"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.PrincipalClaimRequirementCondition.Initializer"></a>

```typescript
import { PrincipalClaimRequirementCondition } from '@catnekaise/actions-constructs'

const principalClaimRequirementCondition: PrincipalClaimRequirementCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@catnekaise/actions-constructs.PrincipalClaimRequirementCondition.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.PrincipalClaimRequirementCondition.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

### PrincipalClaimRequirements <a name="PrincipalClaimRequirements" id="@catnekaise/actions-constructs.PrincipalClaimRequirements"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.Initializer"></a>

```typescript
import { PrincipalClaimRequirements } from '@catnekaise/actions-constructs'

const principalClaimRequirements: PrincipalClaimRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.actor">actor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.actorId">actorId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.environment">environment</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.repository">repository</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.repositoryOwner">repositoryOwner</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.runnerEnvironment">runnerEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements.property.workflowRef">workflowRef</a></code> | <code><a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a></code> | *No description.* |

---

##### `actor`<sup>Optional</sup> <a name="actor" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.actor"></a>

```typescript
public readonly actor: string[];
```

- *Type:* string[]

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.actorId"></a>

```typescript
public readonly actorId: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.environment"></a>

```typescript
public readonly environment: PrincipalClaimRequirementCondition;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a>

---

##### `jobWorkflowRef`<sup>Optional</sup> <a name="jobWorkflowRef" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.jobWorkflowRef"></a>

```typescript
public readonly jobWorkflowRef: PrincipalClaimRequirementCondition;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a>

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.repository"></a>

```typescript
public readonly repository: PrincipalClaimRequirementCondition;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a>

---

##### `repositoryOwner`<sup>Optional</sup> <a name="repositoryOwner" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.repositoryOwner"></a>

```typescript
public readonly repositoryOwner: string[];
```

- *Type:* string[]

---

##### `runnerEnvironment`<sup>Optional</sup> <a name="runnerEnvironment" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.runnerEnvironment"></a>

```typescript
public readonly runnerEnvironment: string;
```

- *Type:* string

---

##### `workflowRef`<sup>Optional</sup> <a name="workflowRef" id="@catnekaise/actions-constructs.PrincipalClaimRequirements.property.workflowRef"></a>

```typescript
public readonly workflowRef: PrincipalClaimRequirementCondition;
```

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirementCondition">PrincipalClaimRequirementCondition</a>

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsIdentityChainedPrincipalBuilder <a name="ActionsIdentityChainedPrincipalBuilder" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.createConditions">createConditions</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.createPrincipalAssumedBy">createPrincipalAssumedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.passesClaim">passesClaim</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.requireExternalId">requireExternalId</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.requireIdentityPoolId">requireIdentityPoolId</a></code> | *No description.* |

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityChainedPrincipalBuilder
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityChainedPrincipalBuilder
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `createConditions` <a name="createConditions" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.createConditions"></a>

```typescript
public createConditions(): {[ key: string ]: any}
```

##### `createPrincipalAssumedBy` <a name="createPrincipalAssumedBy" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.createPrincipalAssumedBy"></a>

```typescript
public createPrincipalAssumedBy(principal: IPrincipal): IPrincipal
```

###### `principal`<sup>Required</sup> <a name="principal" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.createPrincipalAssumedBy.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `passesClaim` <a name="passesClaim" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.passesClaim"></a>

```typescript
public passesClaim(claim: GhaClaim, additionalClaims: GhaClaim): ActionsIdentityChainedPrincipalBuilder
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.passesClaim.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.passesClaim.parameter.additionalClaims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `requireExternalId` <a name="requireExternalId" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.requireExternalId"></a>

```typescript
public requireExternalId(externalId: string): ActionsIdentityChainedPrincipalBuilder
```

###### `externalId`<sup>Required</sup> <a name="externalId" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.requireExternalId.parameter.externalId"></a>

- *Type:* string

---

##### `requireIdentityPoolId` <a name="requireIdentityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.requireIdentityPoolId"></a>

```typescript
public requireIdentityPoolId(identityPoolId: string): ActionsIdentityChainedPrincipalBuilder
```

###### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.requireIdentityPoolId.parameter.identityPoolId"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.fromClaimMapping">fromClaimMapping</a></code> | *No description.* |

---

##### `fromClaimMapping` <a name="fromClaimMapping" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.fromClaimMapping"></a>

```typescript
import { ActionsIdentityChainedPrincipalBuilder } from '@catnekaise/actions-constructs'

ActionsIdentityChainedPrincipalBuilder.fromClaimMapping(claimMapping: ClaimMapping)
```

###### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder.fromClaimMapping.parameter.claimMapping"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---



### ActionsIdentityIamResourcePathBuilder <a name="ActionsIdentityIamResourcePathBuilder" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.claim">claim</a></code> | Value must be a mapped claim. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.text">text</a></code> | Value can be anything. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.toStringWithSeparator">toStringWithSeparator</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.value">value</a></code> | Value can be anything. |

---

##### `claim` <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.claim"></a>

```typescript
public claim(value: GhaClaim, additionalValues: GhaClaim): ActionsIdentityIamResourcePathBuilder
```

Value must be a mapped claim.

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.claim.parameter.value"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.claim.parameter.additionalValues"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `text` <a name="text" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.text"></a>

```typescript
public text(value: string, additionalValues: string): ActionsIdentityIamResourcePathBuilder
```

Value can be anything.

Providing a GitHub Actions Claim will not render a principalTag context key.

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.text.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.text.parameter.additionalValues"></a>

- *Type:* string

---

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.toString"></a>

```typescript
public toString(): string
```

##### `toStringWithSeparator` <a name="toStringWithSeparator" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.toStringWithSeparator"></a>

```typescript
public toStringWithSeparator(separator: string): string
```

###### `separator`<sup>Required</sup> <a name="separator" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.toStringWithSeparator.parameter.separator"></a>

- *Type:* string

---

##### `value` <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.value"></a>

```typescript
public value(value: string, additionalValues: string): ActionsIdentityIamResourcePathBuilder
```

Value can be anything.

When value matches a known (mapped or not) GitHub Actions claim it will be treated as such.

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.value.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.value.parameter.additionalValues"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.fromClaimMapping">fromClaimMapping</a></code> | *No description.* |

---

##### `fromClaimMapping` <a name="fromClaimMapping" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.fromClaimMapping"></a>

```typescript
import { ActionsIdentityIamResourcePathBuilder } from '@catnekaise/actions-constructs'

ActionsIdentityIamResourcePathBuilder.fromClaimMapping(claimMapping: ClaimMapping)
```

###### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder.fromClaimMapping.parameter.claimMapping"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---



### ActionsIdentityPoolUtils <a name="ActionsIdentityPoolUtils" id="@catnekaise/actions-constructs.ActionsIdentityPoolUtils"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityPoolUtils.Initializer"></a>

```typescript
import { ActionsIdentityPoolUtils } from '@catnekaise/actions-constructs'

new ActionsIdentityPoolUtils(claimMapping: ClaimMapping)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils.Initializer.parameter.claimMapping">claimMapping</a></code> | <code><a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a></code> | *No description.* |

---

##### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityPoolUtils.Initializer.parameter.claimMapping"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils.property.chainedPrincipal">chainedPrincipal</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder">ActionsIdentityChainedPrincipalBuilder</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolUtils.property.iamResourcePath">iamResourcePath</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder">ActionsIdentityIamResourcePathBuilder</a></code> | *No description.* |

---

##### `chainedPrincipal`<sup>Required</sup> <a name="chainedPrincipal" id="@catnekaise/actions-constructs.ActionsIdentityPoolUtils.property.chainedPrincipal"></a>

```typescript
public readonly chainedPrincipal: ActionsIdentityChainedPrincipalBuilder;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityChainedPrincipalBuilder">ActionsIdentityChainedPrincipalBuilder</a>

---

##### `iamResourcePath`<sup>Required</sup> <a name="iamResourcePath" id="@catnekaise/actions-constructs.ActionsIdentityPoolUtils.property.iamResourcePath"></a>

```typescript
public readonly iamResourcePath: ActionsIdentityIamResourcePathBuilder;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilder">ActionsIdentityIamResourcePathBuilder</a>

---


### ActionsIdentityPrincipalBuilder <a name="ActionsIdentityPrincipalBuilder" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.createPrincipal">createPrincipal</a></code> | *No description.* |

---

##### `createPrincipal` <a name="createPrincipal" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.createPrincipal"></a>

```typescript
public createPrincipal(requirements: PrincipalClaimRequirements, amr?: AuthenticatedMethodReference): IPrincipal
```

###### `requirements`<sup>Required</sup> <a name="requirements" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.createPrincipal.parameter.requirements"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.PrincipalClaimRequirements">PrincipalClaimRequirements</a>

---

###### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.createPrincipal.parameter.amr"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.create"></a>

```typescript
import { ActionsIdentityPrincipalBuilder } from '@catnekaise/actions-constructs'

ActionsIdentityPrincipalBuilder.create(claimMapping: ClaimMapping, identityPoolId: string, amr?: AuthenticatedMethodReference, openIdConnectProviderArn?: string)
```

###### `claimMapping`<sup>Required</sup> <a name="claimMapping" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.create.parameter.claimMapping"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ClaimMapping">ClaimMapping</a>

---

###### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.create.parameter.identityPoolId"></a>

- *Type:* string

---

###### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.create.parameter.amr"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

###### `openIdConnectProviderArn`<sup>Optional</sup> <a name="openIdConnectProviderArn" id="@catnekaise/actions-constructs.ActionsIdentityPrincipalBuilder.create.parameter.openIdConnectProviderArn"></a>

- *Type:* string

---



### ClaimMapping <a name="ClaimMapping" id="@catnekaise/actions-constructs.ClaimMapping"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ClaimMapping.fromClaimsAsTagNames">fromClaimsAsTagNames</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ClaimMapping.fromCustomTagNames">fromCustomTagNames</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ClaimMapping.fromDefaults">fromDefaults</a></code> | *No description.* |

---

##### `fromClaimsAsTagNames` <a name="fromClaimsAsTagNames" id="@catnekaise/actions-constructs.ClaimMapping.fromClaimsAsTagNames"></a>

```typescript
import { ClaimMapping } from '@catnekaise/actions-constructs'

ClaimMapping.fromClaimsAsTagNames(claim: GhaClaim, additionalClaims: GhaClaim)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ClaimMapping.fromClaimsAsTagNames.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/actions-constructs.ClaimMapping.fromClaimsAsTagNames.parameter.additionalClaims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `fromCustomTagNames` <a name="fromCustomTagNames" id="@catnekaise/actions-constructs.ClaimMapping.fromCustomTagNames"></a>

```typescript
import { ClaimMapping } from '@catnekaise/actions-constructs'

ClaimMapping.fromCustomTagNames(claims: {[ key: string ]: string})
```

###### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/actions-constructs.ClaimMapping.fromCustomTagNames.parameter.claims"></a>

- *Type:* {[ key: string ]: string}

---

##### `fromDefaults` <a name="fromDefaults" id="@catnekaise/actions-constructs.ClaimMapping.fromDefaults"></a>

```typescript
import { ClaimMapping } from '@catnekaise/actions-constructs'

ClaimMapping.fromDefaults(claim: GhaClaim, additionalClaims: GhaClaim)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ClaimMapping.fromDefaults.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/actions-constructs.ClaimMapping.fromDefaults.parameter.additionalClaims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ClaimMapping.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]</code> | *No description.* |

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ClaimMapping.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: MappedClaim[];
```

- *Type:* <a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]

---



## Enums <a name="Enums" id="Enums"></a>

### ActionsIdentityPoolAuthenticatedRoleBehaviour <a name="ActionsIdentityPoolAuthenticatedRoleBehaviour" id="@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour.CREATE">CREATE</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour.USE_FIRST_ASSIGNED">USE_FIRST_ASSIGNED</a></code> | *No description.* |

---

##### `CREATE` <a name="CREATE" id="@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour.CREATE"></a>

---


##### `USE_FIRST_ASSIGNED` <a name="USE_FIRST_ASSIGNED" id="@catnekaise/actions-constructs.ActionsIdentityPoolAuthenticatedRoleBehaviour.USE_FIRST_ASSIGNED"></a>

---


### AuthenticatedMethodReference <a name="AuthenticatedMethodReference" id="@catnekaise/actions-constructs.AuthenticatedMethodReference"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference.AUTHENTICATED">AUTHENTICATED</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference.HOST">HOST</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference.ARN">ARN</a></code> | *No description.* |

---

##### `AUTHENTICATED` <a name="AUTHENTICATED" id="@catnekaise/actions-constructs.AuthenticatedMethodReference.AUTHENTICATED"></a>

---


##### `HOST` <a name="HOST" id="@catnekaise/actions-constructs.AuthenticatedMethodReference.HOST"></a>

---


##### `ARN` <a name="ARN" id="@catnekaise/actions-constructs.AuthenticatedMethodReference.ARN"></a>

---


### EnhancedFlowRoleResolution <a name="EnhancedFlowRoleResolution" id="@catnekaise/actions-constructs.EnhancedFlowRoleResolution"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.EnhancedFlowRoleResolution.DENY">DENY</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.EnhancedFlowRoleResolution.USE_DEFAULT_AUTHENTICATED_ROLE">USE_DEFAULT_AUTHENTICATED_ROLE</a></code> | *No description.* |

---

##### `DENY` <a name="DENY" id="@catnekaise/actions-constructs.EnhancedFlowRoleResolution.DENY"></a>

---


##### `USE_DEFAULT_AUTHENTICATED_ROLE` <a name="USE_DEFAULT_AUTHENTICATED_ROLE" id="@catnekaise/actions-constructs.EnhancedFlowRoleResolution.USE_DEFAULT_AUTHENTICATED_ROLE"></a>

---


### GhaClaim <a name="GhaClaim" id="@catnekaise/actions-constructs.GhaClaim"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.JTI">JTI</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.SUB">SUB</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.ENVIRONMENT">ENVIRONMENT</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.AUD">AUD</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REF">REF</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.SHA">SHA</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REPOSITORY">REPOSITORY</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REPOSITORY_OWNER">REPOSITORY_OWNER</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.ACTOR_ID">ACTOR_ID</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REPOSITORY_VISIBILITY">REPOSITORY_VISIBILITY</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REPOSITORY_ID">REPOSITORY_ID</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REPOSITORY_OWNER_ID">REPOSITORY_OWNER_ID</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.RUN_ID">RUN_ID</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.RUN_NUMBER">RUN_NUMBER</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.RUN_ATTEMPT">RUN_ATTEMPT</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.RUNNER_ENVIRONMENT">RUNNER_ENVIRONMENT</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.ACTOR">ACTOR</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.WORKFLOW">WORKFLOW</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.HEAD_REF">HEAD_REF</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.BASE_REF">BASE_REF</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.EVENT_NAME">EVENT_NAME</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.REF_TYPE">REF_TYPE</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.JOB_WORKFLOW_REF">JOB_WORKFLOW_REF</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.WORKFLOW_REF">WORKFLOW_REF</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.ISS">ISS</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GhaClaim.ENTERPRISE">ENTERPRISE</a></code> | *No description.* |

---

##### `JTI` <a name="JTI" id="@catnekaise/actions-constructs.GhaClaim.JTI"></a>

---


##### `SUB` <a name="SUB" id="@catnekaise/actions-constructs.GhaClaim.SUB"></a>

---


##### `ENVIRONMENT` <a name="ENVIRONMENT" id="@catnekaise/actions-constructs.GhaClaim.ENVIRONMENT"></a>

---


##### `AUD` <a name="AUD" id="@catnekaise/actions-constructs.GhaClaim.AUD"></a>

---


##### `REF` <a name="REF" id="@catnekaise/actions-constructs.GhaClaim.REF"></a>

---


##### `SHA` <a name="SHA" id="@catnekaise/actions-constructs.GhaClaim.SHA"></a>

---


##### `REPOSITORY` <a name="REPOSITORY" id="@catnekaise/actions-constructs.GhaClaim.REPOSITORY"></a>

---


##### `REPOSITORY_OWNER` <a name="REPOSITORY_OWNER" id="@catnekaise/actions-constructs.GhaClaim.REPOSITORY_OWNER"></a>

---


##### `ACTOR_ID` <a name="ACTOR_ID" id="@catnekaise/actions-constructs.GhaClaim.ACTOR_ID"></a>

---


##### `REPOSITORY_VISIBILITY` <a name="REPOSITORY_VISIBILITY" id="@catnekaise/actions-constructs.GhaClaim.REPOSITORY_VISIBILITY"></a>

---


##### `REPOSITORY_ID` <a name="REPOSITORY_ID" id="@catnekaise/actions-constructs.GhaClaim.REPOSITORY_ID"></a>

---


##### `REPOSITORY_OWNER_ID` <a name="REPOSITORY_OWNER_ID" id="@catnekaise/actions-constructs.GhaClaim.REPOSITORY_OWNER_ID"></a>

---


##### `RUN_ID` <a name="RUN_ID" id="@catnekaise/actions-constructs.GhaClaim.RUN_ID"></a>

---


##### `RUN_NUMBER` <a name="RUN_NUMBER" id="@catnekaise/actions-constructs.GhaClaim.RUN_NUMBER"></a>

---


##### `RUN_ATTEMPT` <a name="RUN_ATTEMPT" id="@catnekaise/actions-constructs.GhaClaim.RUN_ATTEMPT"></a>

---


##### `RUNNER_ENVIRONMENT` <a name="RUNNER_ENVIRONMENT" id="@catnekaise/actions-constructs.GhaClaim.RUNNER_ENVIRONMENT"></a>

---


##### `ACTOR` <a name="ACTOR" id="@catnekaise/actions-constructs.GhaClaim.ACTOR"></a>

---


##### `WORKFLOW` <a name="WORKFLOW" id="@catnekaise/actions-constructs.GhaClaim.WORKFLOW"></a>

---


##### `HEAD_REF` <a name="HEAD_REF" id="@catnekaise/actions-constructs.GhaClaim.HEAD_REF"></a>

---


##### `BASE_REF` <a name="BASE_REF" id="@catnekaise/actions-constructs.GhaClaim.BASE_REF"></a>

---


##### `EVENT_NAME` <a name="EVENT_NAME" id="@catnekaise/actions-constructs.GhaClaim.EVENT_NAME"></a>

---


##### `REF_TYPE` <a name="REF_TYPE" id="@catnekaise/actions-constructs.GhaClaim.REF_TYPE"></a>

---


##### `JOB_WORKFLOW_REF` <a name="JOB_WORKFLOW_REF" id="@catnekaise/actions-constructs.GhaClaim.JOB_WORKFLOW_REF"></a>

---


##### `WORKFLOW_REF` <a name="WORKFLOW_REF" id="@catnekaise/actions-constructs.GhaClaim.WORKFLOW_REF"></a>

---


##### `ISS` <a name="ISS" id="@catnekaise/actions-constructs.GhaClaim.ISS"></a>

---


##### `ENTERPRISE` <a name="ENTERPRISE" id="@catnekaise/actions-constructs.GhaClaim.ENTERPRISE"></a>

---

