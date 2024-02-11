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


### ActionsIdentityPoolV2 <a name="ActionsIdentityPoolV2" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer"></a>

```typescript
import { ActionsIdentityPoolV2 } from '@catnekaise/actions-constructs'

new ActionsIdentityPoolV2(scope: Construct, id: string, props: ActionsIdentityPoolV2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer.parameter.props">props</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props">ActionsIdentityPoolV2Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.Initializer.parameter.props"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props">ActionsIdentityPoolV2Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.enhancedFlowAssignRole">enhancedFlowAssignRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `enhancedFlowAssignRole` <a name="enhancedFlowAssignRole" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.enhancedFlowAssignRole"></a>

```typescript
public enhancedFlowAssignRole(role: Role, claim: GhaClaim, matchType: EnhancedFlowMatchType, value: string): ActionsIdentityPoolV2
```

###### `role`<sup>Required</sup> <a name="role" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.enhancedFlowAssignRole.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.Role

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.enhancedFlowAssignRole.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `matchType`<sup>Required</sup> <a name="matchType" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.enhancedFlowAssignRole.parameter.matchType"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.EnhancedFlowMatchType">EnhancedFlowMatchType</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.enhancedFlowAssignRole.parameter.value"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.isConstruct"></a>

```typescript
import { ActionsIdentityPoolV2 } from '@catnekaise/actions-constructs'

ActionsIdentityPoolV2.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.defaultAuthenticatedRole">defaultAuthenticatedRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.policyUtility">policyUtility</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility">ActionsIdentityPolicyUtility</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `defaultAuthenticatedRole`<sup>Required</sup> <a name="defaultAuthenticatedRole" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.defaultAuthenticatedRole"></a>

```typescript
public readonly defaultAuthenticatedRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `policyUtility`<sup>Required</sup> <a name="policyUtility" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2.property.policyUtility"></a>

```typescript
public readonly policyUtility: ActionsIdentityPolicyUtility;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility">ActionsIdentityPolicyUtility</a>

---


## Structs <a name="Structs" id="Structs"></a>

### ActionsIdentityPolicyUtilitySettings <a name="ActionsIdentityPolicyUtilitySettings" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.Initializer"></a>

```typescript
import { ActionsIdentityPolicyUtilitySettings } from '@catnekaise/actions-constructs'

const actionsIdentityPolicyUtilitySettings: ActionsIdentityPolicyUtilitySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.claimsContext">claimsContext</a></code> | <code>@catnekaise/cdk-iam-utilities.IClaimsContext</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.basePrincipalConstraints">basePrincipalConstraints</a></code> | <code>@catnekaise/cdk-iam-utilities.Constraint[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.defaultAmr">defaultAmr</a></code> | <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.identityPoolAccountId">identityPoolAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.identityPoolUsesEnhancedFlow">identityPoolUsesEnhancedFlow</a></code> | <code>boolean</code> | *No description.* |

---

##### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* @catnekaise/cdk-iam-utilities.IClaimsContext

---

##### `basePrincipalConstraints`<sup>Optional</sup> <a name="basePrincipalConstraints" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.basePrincipalConstraints"></a>

```typescript
public readonly basePrincipalConstraints: Constraint[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Constraint[]

---

##### `defaultAmr`<sup>Optional</sup> <a name="defaultAmr" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.defaultAmr"></a>

```typescript
public readonly defaultAmr: AuthenticatedMethodReference;
```

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

##### `identityPoolAccountId`<sup>Optional</sup> <a name="identityPoolAccountId" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.identityPoolAccountId"></a>

```typescript
public readonly identityPoolAccountId: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Optional</sup> <a name="identityPoolId" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `identityPoolUsesEnhancedFlow`<sup>Optional</sup> <a name="identityPoolUsesEnhancedFlow" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings.property.identityPoolUsesEnhancedFlow"></a>

```typescript
public readonly identityPoolUsesEnhancedFlow: boolean;
```

- *Type:* boolean

---

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

### ActionsIdentityPoolV2Props <a name="ActionsIdentityPoolV2Props" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.Initializer"></a>

```typescript
import { ActionsIdentityPoolV2Props } from '@catnekaise/actions-constructs'

const actionsIdentityPoolV2Props: ActionsIdentityPoolV2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.authenticatedRoleConstraints">authenticatedRoleConstraints</a></code> | <code>@catnekaise/cdk-iam-utilities.Constraint[]</code> | Constraints for the default authenticated role created in this pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims">ActionsIdentityMappedClaims</a></code> | Mapped Claims for this Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.authenticatedMethodReference">authenticatedMethodReference</a></code> | <code><a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a></code> | Authenticated Method Reference. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.authenticatedRoleName">authenticatedRoleName</a></code> | <code>string</code> | Name of authenticated role when creating role. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.enhancedFlowRoleResolution">enhancedFlowRoleResolution</a></code> | <code><a href="#@catnekaise/actions-constructs.EnhancedFlowRoleResolution">EnhancedFlowRoleResolution</a></code> | Only applicable when setting `useEnhancedFlow` to `true`. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.identityPoolName">identityPoolName</a></code> | <code>string</code> | Name of the Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.openIdConnectProvider">openIdConnectProvider</a></code> | <code>aws-cdk-lib.aws_iam.IOpenIdConnectProvider</code> | Provide this or attempt will be made to import OpenIdConnectProvider using defaults. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.poolIdExportName">poolIdExportName</a></code> | <code>string</code> | Export name for the CfnOutput containing the Identity Pool ID. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Set removal policy. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.useEnhancedAuthFlow">useEnhancedAuthFlow</a></code> | <code>boolean</code> | Use Enhanced (Simplified) AuthFlow instead of Basic. |

---

##### `authenticatedRoleConstraints`<sup>Required</sup> <a name="authenticatedRoleConstraints" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.authenticatedRoleConstraints"></a>

```typescript
public readonly authenticatedRoleConstraints: Constraint[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Constraint[]

Constraints for the default authenticated role created in this pool.

```ts
new ActionsIdentityPoolV2(this,'Pool', {
  authenticatedRoleConstraints: [
   GitHubActionsClaimConstraint.repoOwners(`catnekaise`),
   // additional constraints
  ]
});
```

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: ActionsIdentityMappedClaims;
```

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims">ActionsIdentityMappedClaims</a>

Mapped Claims for this Identity Pool.

---

##### `authenticatedMethodReference`<sup>Optional</sup> <a name="authenticatedMethodReference" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.authenticatedMethodReference"></a>

```typescript
public readonly authenticatedMethodReference: AuthenticatedMethodReference;
```

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>
- *Default:* authenticated

Authenticated Method Reference.

authenticated = authenticated (default)

host = token.actions.githubusercontent.com

arn = arn:aws:iam::111111111111:oidc-provider/token.actions.githubusercontent.com:OIDC:*

---

##### `authenticatedRoleName`<sup>Optional</sup> <a name="authenticatedRoleName" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.authenticatedRoleName"></a>

```typescript
public readonly authenticatedRoleName: string;
```

- *Type:* string

Name of authenticated role when creating role.

---

##### `enhancedFlowRoleResolution`<sup>Optional</sup> <a name="enhancedFlowRoleResolution" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.enhancedFlowRoleResolution"></a>

```typescript
public readonly enhancedFlowRoleResolution: EnhancedFlowRoleResolution;
```

- *Type:* <a href="#@catnekaise/actions-constructs.EnhancedFlowRoleResolution">EnhancedFlowRoleResolution</a>
- *Default:* deny

Only applicable when setting `useEnhancedFlow` to `true`.

---

##### `identityPoolName`<sup>Optional</sup> <a name="identityPoolName" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.identityPoolName"></a>

```typescript
public readonly identityPoolName: string;
```

- *Type:* string

Name of the Identity Pool.

---

##### `openIdConnectProvider`<sup>Optional</sup> <a name="openIdConnectProvider" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.openIdConnectProvider"></a>

```typescript
public readonly openIdConnectProvider: IOpenIdConnectProvider;
```

- *Type:* aws-cdk-lib.aws_iam.IOpenIdConnectProvider
- *Default:* Attempts to imports OIDC Provider from AWS Account

Provide this or attempt will be made to import OpenIdConnectProvider using defaults.

---

##### `poolIdExportName`<sup>Optional</sup> <a name="poolIdExportName" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.poolIdExportName"></a>

```typescript
public readonly poolIdExportName: string;
```

- *Type:* string

Export name for the CfnOutput containing the Identity Pool ID.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

Set removal policy.

---

##### `useEnhancedAuthFlow`<sup>Optional</sup> <a name="useEnhancedAuthFlow" id="@catnekaise/actions-constructs.ActionsIdentityPoolV2Props.property.useEnhancedAuthFlow"></a>

```typescript
public readonly useEnhancedAuthFlow: boolean;
```

- *Type:* boolean
- *Default:* false

Use Enhanced (Simplified) AuthFlow instead of Basic.

---

### BuilderSettings <a name="BuilderSettings" id="@catnekaise/actions-constructs.BuilderSettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.BuilderSettings.Initializer"></a>

```typescript
import { BuilderSettings } from '@catnekaise/actions-constructs'

const builderSettings: BuilderSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.BuilderSettings.property.claimsContext">claimsContext</a></code> | <code>@catnekaise/cdk-iam-utilities.IClaimsContext</code> | *No description.* |

---

##### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/actions-constructs.BuilderSettings.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* @catnekaise/cdk-iam-utilities.IClaimsContext

---

### ChainedPrincipalCreateOptions <a name="ChainedPrincipalCreateOptions" id="@catnekaise/actions-constructs.ChainedPrincipalCreateOptions"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ChainedPrincipalCreateOptions.Initializer"></a>

```typescript
import { ChainedPrincipalCreateOptions } from '@catnekaise/actions-constructs'

const chainedPrincipalCreateOptions: ChainedPrincipalCreateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalCreateOptions.property.passClaims">passClaims</a></code> | <code>@catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings</code> | *No description.* |

---

##### `passClaims`<sup>Optional</sup> <a name="passClaims" id="@catnekaise/actions-constructs.ChainedPrincipalCreateOptions.property.passClaims"></a>

```typescript
public readonly passClaims: PassClaimsConstraintSettings;
```

- *Type:* @catnekaise/cdk-iam-utilities.PassClaimsConstraintSettings

---

### ConstrainerSettings <a name="ConstrainerSettings" id="@catnekaise/actions-constructs.ConstrainerSettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.ConstrainerSettings.Initializer"></a>

```typescript
import { ConstrainerSettings } from '@catnekaise/actions-constructs'

const constrainerSettings: ConstrainerSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ConstrainerSettings.property.claimsContext">claimsContext</a></code> | <code>@catnekaise/cdk-iam-utilities.IClaimsContext</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstrainerSettings.property.policyType">policyType</a></code> | <code>@catnekaise/cdk-iam-utilities.PolicyType</code> | *No description.* |

---

##### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/actions-constructs.ConstrainerSettings.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* @catnekaise/cdk-iam-utilities.IClaimsContext

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@catnekaise/actions-constructs.ConstrainerSettings.property.policyType"></a>

```typescript
public readonly policyType: PolicyType;
```

- *Type:* @catnekaise/cdk-iam-utilities.PolicyType

---

### GrantOrgRoleChainSettings <a name="GrantOrgRoleChainSettings" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings"></a>

#### Initializer <a name="Initializer" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings.Initializer"></a>

```typescript
import { GrantOrgRoleChainSettings } from '@catnekaise/actions-constructs'

const grantOrgRoleChainSettings: GrantOrgRoleChainSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.excludeAccountIds">excludeAccountIds</a></code> | <code>string[]</code> | Prevent assuming roles in these accounts. |
| <code><a href="#@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.resourceOrgPaths">resourceOrgPaths</a></code> | <code>string[]</code> | Require roles to exist under specified organization paths. |
| <code><a href="#@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.resourceOrgPathStringEquals">resourceOrgPathStringEquals</a></code> | <code>boolean</code> | Match resourcePaths using StringEquals instead of StringLike. |
| <code><a href="#@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.roleHasResourceTags">roleHasResourceTags</a></code> | <code>{[ key: string ]: string}</code> | Role has resource tags matching specified values. |
| <code><a href="#@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.rolePath">rolePath</a></code> | <code>string</code> | Require that roles exist under this path for sts:AssumeRole. |

---

##### `excludeAccountIds`<sup>Optional</sup> <a name="excludeAccountIds" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.excludeAccountIds"></a>

```typescript
public readonly excludeAccountIds: string[];
```

- *Type:* string[]

Prevent assuming roles in these accounts.

---

##### `resourceOrgPaths`<sup>Optional</sup> <a name="resourceOrgPaths" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.resourceOrgPaths"></a>

```typescript
public readonly resourceOrgPaths: string[];
```

- *Type:* string[]

Require roles to exist under specified organization paths.

---

##### `resourceOrgPathStringEquals`<sup>Optional</sup> <a name="resourceOrgPathStringEquals" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.resourceOrgPathStringEquals"></a>

```typescript
public readonly resourceOrgPathStringEquals: boolean;
```

- *Type:* boolean

Match resourcePaths using StringEquals instead of StringLike.

---

##### `roleHasResourceTags`<sup>Optional</sup> <a name="roleHasResourceTags" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.roleHasResourceTags"></a>

```typescript
public readonly roleHasResourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Role has resource tags matching specified values.

If tag value matches a known GitHub Actions claim, then value is changed to `${aws:PrincipalTag/value}`

---

##### `rolePath`<sup>Optional</sup> <a name="rolePath" id="@catnekaise/actions-constructs.GrantOrgRoleChainSettings.property.rolePath"></a>

```typescript
public readonly rolePath: string;
```

- *Type:* string

Require that roles exist under this path for sts:AssumeRole.

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



### ActionsIdentityConstraints <a name="ActionsIdentityConstraints" id="@catnekaise/actions-constructs.ActionsIdentityConstraints"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.Initializer"></a>

```typescript
import { ActionsIdentityConstraints } from '@catnekaise/actions-constructs'

new ActionsIdentityConstraints()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityConstraints.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.ActionsIdentityConstraints.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```




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



### ActionsIdentityIamResourcePathBuilderV2 <a name="ActionsIdentityIamResourcePathBuilderV2" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.toString">toString</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.asStringWithSeparator">asStringWithSeparator</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.claim">claim</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.policyVariable">policyVariable</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.text">text</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.value">value</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.toString"></a>

```typescript
public toString(): string
```

##### `asStringWithSeparator` <a name="asStringWithSeparator" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.asStringWithSeparator"></a>

```typescript
public asStringWithSeparator(separator: string): string
```

###### `separator`<sup>Required</sup> <a name="separator" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.asStringWithSeparator.parameter.separator"></a>

- *Type:* string

---

##### `claim` <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.claim"></a>

```typescript
public claim(claim: GhaClaim, additionalClaims: GhaClaim): ActionsIdentityIamResourcePathBuilderV2
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.claim.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.claim.parameter.additionalClaims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `policyVariable` <a name="policyVariable" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.policyVariable"></a>

```typescript
public policyVariable(value: PolicyVariable): ActionsIdentityIamResourcePathBuilderV2
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.policyVariable.parameter.value"></a>

- *Type:* @catnekaise/cdk-iam-utilities.PolicyVariable

---

##### `text` <a name="text" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.text"></a>

```typescript
public text(value: string, additionalValues: string): ActionsIdentityIamResourcePathBuilderV2
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.text.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.text.parameter.additionalValues"></a>

- *Type:* string

---

##### `value` <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.value"></a>

```typescript
public value(value: string, additionalValues: string): ActionsIdentityIamResourcePathBuilderV2
```

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.value.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.value.parameter.additionalValues"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.fromMappedClaims">fromMappedClaims</a></code> | *No description.* |

---

##### `fromMappedClaims` <a name="fromMappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.fromMappedClaims"></a>

```typescript
import { ActionsIdentityIamResourcePathBuilderV2 } from '@catnekaise/actions-constructs'

ActionsIdentityIamResourcePathBuilderV2.fromMappedClaims(mappedClaims: IMappedClaims)
```

###### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityIamResourcePathBuilderV2.fromMappedClaims.parameter.mappedClaims"></a>

- *Type:* @catnekaise/cdk-iam-utilities.IMappedClaims

---



### ActionsIdentityMappedClaims <a name="ActionsIdentityMappedClaims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims"></a>

- *Implements:* @catnekaise/cdk-iam-utilities.IMappedClaims

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.Initializer"></a>

```typescript
import { ActionsIdentityMappedClaims } from '@catnekaise/actions-constructs'

new ActionsIdentityMappedClaims(_claims: Claim[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.Initializer.parameter._claims">_claims</a></code> | <code>@catnekaise/cdk-iam-utilities.Claim[]</code> | *No description.* |

---

##### `_claims`<sup>Required</sup> <a name="_claims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.Initializer.parameter._claims"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Claim[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toClaimsContext">toClaimsContext</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toConfigureAwsCredentialsPassClaims">toConfigureAwsCredentialsPassClaims</a></code> | Use this if you want to use https://github.com/aws-actions/configure-aws-credentials for performing role chaining. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaims">toPassClaims</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaimsCustom">toPassClaimsCustom</a></code> | *No description.* |

---

##### `toClaimsContext` <a name="toClaimsContext" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toClaimsContext"></a>

```typescript
public toClaimsContext(): IClaimsContext
```

##### `toConfigureAwsCredentialsPassClaims` <a name="toConfigureAwsCredentialsPassClaims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toConfigureAwsCredentialsPassClaims"></a>

```typescript
public toConfigureAwsCredentialsPassClaims(): PassClaimsConstraintSettings
```

Use this if you want to use https://github.com/aws-actions/configure-aws-credentials for performing role chaining.

##### `toPassClaims` <a name="toPassClaims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaims"></a>

```typescript
public toPassClaims(claims: GhaClaim): PassClaimsConstraintSettings
```

###### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaims.parameter.claims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `toPassClaimsCustom` <a name="toPassClaimsCustom" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaimsCustom"></a>

```typescript
public toPassClaimsCustom(claims: {[ key: string ]: string}, allowAnyTags?: boolean, specificallyAllowedTags?: string[]): PassClaimsConstraintSettings
```

###### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaimsCustom.parameter.claims"></a>

- *Type:* {[ key: string ]: string}

---

###### `allowAnyTags`<sup>Optional</sup> <a name="allowAnyTags" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaimsCustom.parameter.allowAnyTags"></a>

- *Type:* boolean

---

###### `specificallyAllowedTags`<sup>Optional</sup> <a name="specificallyAllowedTags" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.toPassClaimsCustom.parameter.specificallyAllowedTags"></a>

- *Type:* string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.create">create</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createCustom">createCustom</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createWithAbbreviations">createWithAbbreviations</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.create"></a>

```typescript
import { ActionsIdentityMappedClaims } from '@catnekaise/actions-constructs'

ActionsIdentityMappedClaims.create(claim: GhaClaim, additionalClaims: GhaClaim)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.create.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.create.parameter.additionalClaims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `createCustom` <a name="createCustom" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createCustom"></a>

```typescript
import { ActionsIdentityMappedClaims } from '@catnekaise/actions-constructs'

ActionsIdentityMappedClaims.createCustom(claims: {[ key: string ]: string})
```

###### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createCustom.parameter.claims"></a>

- *Type:* {[ key: string ]: string}

---

##### `createWithAbbreviations` <a name="createWithAbbreviations" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createWithAbbreviations"></a>

```typescript
import { ActionsIdentityMappedClaims } from '@catnekaise/actions-constructs'

ActionsIdentityMappedClaims.createWithAbbreviations(claim: GhaClaim, additionalClaims: GhaClaim)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createWithAbbreviations.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.createWithAbbreviations.parameter.additionalClaims"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityMappedClaims.property.claims">claims</a></code> | <code>@catnekaise/cdk-iam-utilities.Claim[]</code> | *No description.* |

---

##### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/actions-constructs.ActionsIdentityMappedClaims.property.claims"></a>

```typescript
public readonly claims: Claim[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Claim[]

---


### ActionsIdentityPolicyUtility <a name="ActionsIdentityPolicyUtility" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrain">constrain</a></code> | Append a policy with conditions contextual to GitHub Actions claims. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrainGrant">constrainGrant</a></code> | Append a grant with conditions contextual to GitHub Actions claims. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.grantOrganizationRoleChain">grantOrganizationRoleChain</a></code> | Grant role permissions to assume roles in any organization account. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.newChainedPrincipalBuilder">newChainedPrincipalBuilder</a></code> | Use this to create principals that should be assumable by roles that have been assumed via a ActionsIdentityPoolV2. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.newPrincipalBuilder">newPrincipalBuilder</a></code> | Use this to create principals that should allow assumption via a Cognito Identity Pool. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.policyVar">policyVar</a></code> | Create a policy variable. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.principalTagConditionKey">principalTagConditionKey</a></code> | Create a principal tag for claim. |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.resourcePath">resourcePath</a></code> | Build a resource path for an IAM Policy. |

---

##### `constrain` <a name="constrain" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrain"></a>

```typescript
public constrain(policyStatement: PolicyStatement, scope?: Construct): PolicyStatementConstrainer
```

Append a policy with conditions contextual to GitHub Actions claims.

###### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrain.parameter.policyStatement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrain.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `constrainGrant` <a name="constrainGrant" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrainGrant"></a>

```typescript
public constrainGrant(grant: Grant, scope?: Construct): GrantConstrainer
```

Append a grant with conditions contextual to GitHub Actions claims.

###### `grant`<sup>Required</sup> <a name="grant" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrainGrant.parameter.grant"></a>

- *Type:* aws-cdk-lib.aws_iam.Grant

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.constrainGrant.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `grantOrganizationRoleChain` <a name="grantOrganizationRoleChain" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.grantOrganizationRoleChain"></a>

```typescript
public grantOrganizationRoleChain(identity: IGrantable, settings: GrantOrgRoleChainSettings): Grant
```

Grant role permissions to assume roles in any organization account.

###### `identity`<sup>Required</sup> <a name="identity" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.grantOrganizationRoleChain.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.grantOrganizationRoleChain.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GrantOrgRoleChainSettings">GrantOrgRoleChainSettings</a>

---

##### `newChainedPrincipalBuilder` <a name="newChainedPrincipalBuilder" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.newChainedPrincipalBuilder"></a>

```typescript
public newChainedPrincipalBuilder(): ChainedPrincipalBuilder
```

Use this to create principals that should be assumable by roles that have been assumed via a ActionsIdentityPoolV2.

##### `newPrincipalBuilder` <a name="newPrincipalBuilder" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.newPrincipalBuilder"></a>

```typescript
public newPrincipalBuilder(amr?: AuthenticatedMethodReference): PrincipalBuilder
```

Use this to create principals that should allow assumption via a Cognito Identity Pool.

###### `amr`<sup>Optional</sup> <a name="amr" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.newPrincipalBuilder.parameter.amr"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.AuthenticatedMethodReference">AuthenticatedMethodReference</a>

---

##### `policyVar` <a name="policyVar" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.policyVar"></a>

```typescript
public policyVar(claim: GhaClaim): PolicyVariable
```

Create a policy variable.

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.policyVar.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `principalTagConditionKey` <a name="principalTagConditionKey" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.principalTagConditionKey"></a>

```typescript
public principalTagConditionKey(claim: GhaClaim): AwsPrincipalTagConditionKey
```

Create a principal tag for claim.

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.principalTagConditionKey.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `resourcePath` <a name="resourcePath" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.resourcePath"></a>

```typescript
public resourcePath(value: string): ActionsIdentityIamResourcePathBuilderV2
```

Build a resource path for an IAM Policy.

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.resourcePath.parameter.value"></a>

- *Type:* string

Mix of strings and claims.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.create"></a>

```typescript
import { ActionsIdentityPolicyUtility } from '@catnekaise/actions-constructs'

ActionsIdentityPolicyUtility.create(scope: Construct, settings: ActionsIdentityPolicyUtilitySettings)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.create.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtilitySettings">ActionsIdentityPolicyUtilitySettings</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.property.claimsContext">claimsContext</a></code> | <code>@catnekaise/cdk-iam-utilities.IClaimsContext</code> | *No description.* |

---

##### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/actions-constructs.ActionsIdentityPolicyUtility.property.claimsContext"></a>

```typescript
public readonly claimsContext: IClaimsContext;
```

- *Type:* @catnekaise/cdk-iam-utilities.IClaimsContext

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



### ChainedPrincipal <a name="ChainedPrincipal" id="@catnekaise/actions-constructs.ChainedPrincipal"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ChainedPrincipal.Initializer"></a>

```typescript
import { ChainedPrincipal } from '@catnekaise/actions-constructs'

new ChainedPrincipal(principal: PrincipalWithConditions, sessionTags: boolean, externalIds: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.Initializer.parameter.principal">principal</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalWithConditions</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.Initializer.parameter.sessionTags">sessionTags</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.Initializer.parameter.externalIds">externalIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `principal`<sup>Required</sup> <a name="principal" id="@catnekaise/actions-constructs.ChainedPrincipal.Initializer.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.PrincipalWithConditions

---

##### `sessionTags`<sup>Required</sup> <a name="sessionTags" id="@catnekaise/actions-constructs.ChainedPrincipal.Initializer.parameter.sessionTags"></a>

- *Type:* boolean

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="@catnekaise/actions-constructs.ChainedPrincipal.Initializer.parameter.externalIds"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.addToAssumeRolePolicy">addToAssumeRolePolicy</a></code> | Add the principal to the AssumeRolePolicyDocument. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.dedupeString">dedupeString</a></code> | Return whether or not this principal is equal to the given principal. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.toJSON">toJSON</a></code> | JSON-ify the principal. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.toString">toString</a></code> | Returns a string representation of an object. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.withConditions">withConditions</a></code> | Returns a new PrincipalWithConditions using this principal as the base, with the passed conditions added. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.withSessionTags">withSessionTags</a></code> | Returns a new principal using this principal as the base, with session tags enabled. |

---

##### `addToAssumeRolePolicy` <a name="addToAssumeRolePolicy" id="@catnekaise/actions-constructs.ChainedPrincipal.addToAssumeRolePolicy"></a>

```typescript
public addToAssumeRolePolicy(doc: PolicyDocument): void
```

Add the principal to the AssumeRolePolicyDocument.

Add the statements to the AssumeRolePolicyDocument necessary to give this principal
permissions to assume the given role.

###### `doc`<sup>Required</sup> <a name="doc" id="@catnekaise/actions-constructs.ChainedPrincipal.addToAssumeRolePolicy.parameter.doc"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

---

##### `addToPolicy` <a name="addToPolicy" id="@catnekaise/actions-constructs.ChainedPrincipal.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="@catnekaise/actions-constructs.ChainedPrincipal.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="@catnekaise/actions-constructs.ChainedPrincipal.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(_statement: PolicyStatement): AddToPrincipalPolicyResult
```

Add to the policy of this principal.

###### `_statement`<sup>Required</sup> <a name="_statement" id="@catnekaise/actions-constructs.ChainedPrincipal.addToPrincipalPolicy.parameter._statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `dedupeString` <a name="dedupeString" id="@catnekaise/actions-constructs.ChainedPrincipal.dedupeString"></a>

```typescript
public dedupeString(): string
```

Return whether or not this principal is equal to the given principal.

##### `toJSON` <a name="toJSON" id="@catnekaise/actions-constructs.ChainedPrincipal.toJSON"></a>

```typescript
public toJSON(): {[ key: string ]: string[]}
```

JSON-ify the principal.

Used when JSON.stringify() is called

##### `toString` <a name="toString" id="@catnekaise/actions-constructs.ChainedPrincipal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of an object.

##### `withConditions` <a name="withConditions" id="@catnekaise/actions-constructs.ChainedPrincipal.withConditions"></a>

```typescript
public withConditions(conditions: {[ key: string ]: any}): PrincipalBase
```

Returns a new PrincipalWithConditions using this principal as the base, with the passed conditions added.

When there is a value for the same operator and key in both the principal and the
conditions parameter, the value from the conditions parameter will be used.

###### `conditions`<sup>Required</sup> <a name="conditions" id="@catnekaise/actions-constructs.ChainedPrincipal.withConditions.parameter.conditions"></a>

- *Type:* {[ key: string ]: any}

---

##### `withSessionTags` <a name="withSessionTags" id="@catnekaise/actions-constructs.ChainedPrincipal.withSessionTags"></a>

```typescript
public withSessionTags(): PrincipalBase
```

Returns a new principal using this principal as the base, with session tags enabled.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Return the policy fragment that identifies this principal in a Policy. |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipal.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="@catnekaise/actions-constructs.ChainedPrincipal.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@catnekaise/actions-constructs.ChainedPrincipal.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="@catnekaise/actions-constructs.ChainedPrincipal.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Return the policy fragment that identifies this principal in a Policy.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="@catnekaise/actions-constructs.ChainedPrincipal.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---


### ChainedPrincipalBuilder <a name="ChainedPrincipalBuilder" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.add">add</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.createPrincipalAssumedBy">createPrincipalAssumedBy</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```

##### `add` <a name="add" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.add"></a>

```typescript
public add(constraint: Constraint, additionalConstraints: Constraint): ChainedPrincipalBuilder
```

###### `constraint`<sup>Required</sup> <a name="constraint" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.add.parameter.constraint"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint

---

###### `additionalConstraints`<sup>Required</sup> <a name="additionalConstraints" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.add.parameter.additionalConstraints"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint

---

##### `createPrincipalAssumedBy` <a name="createPrincipalAssumedBy" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.createPrincipalAssumedBy"></a>

```typescript
public createPrincipalAssumedBy(scope: Construct, principal: IPrincipal, options?: ChainedPrincipalCreateOptions): IPrincipal
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.createPrincipalAssumedBy.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `principal`<sup>Required</sup> <a name="principal" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.createPrincipalAssumedBy.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

###### `options`<sup>Optional</sup> <a name="options" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.createPrincipalAssumedBy.parameter.options"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ChainedPrincipalCreateOptions">ChainedPrincipalCreateOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.create"></a>

```typescript
import { ChainedPrincipalBuilder } from '@catnekaise/actions-constructs'

ChainedPrincipalBuilder.create(claimsContext: IClaimsContext)
```

###### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.create.parameter.claimsContext"></a>

- *Type:* @catnekaise/cdk-iam-utilities.IClaimsContext

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ChainedPrincipalBuilder.property.constraints">constraints</a></code> | <code>@catnekaise/cdk-iam-utilities.Constraint[]</code> | *No description.* |

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/actions-constructs.ChainedPrincipalBuilder.property.constraints"></a>

```typescript
public readonly constraints: Constraint[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Constraint[]

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
| <code><a href="#@catnekaise/actions-constructs.ClaimMapping.property.claims">claims</a></code> | <code>@catnekaise/cdk-iam-utilities.Claim[]</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ClaimMapping.property.mappedClaims">mappedClaims</a></code> | <code><a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]</code> | *No description.* |

---

##### `claims`<sup>Required</sup> <a name="claims" id="@catnekaise/actions-constructs.ClaimMapping.property.claims"></a>

```typescript
public readonly claims: Claim[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Claim[]

---

##### `mappedClaims`<sup>Required</sup> <a name="mappedClaims" id="@catnekaise/actions-constructs.ClaimMapping.property.mappedClaims"></a>

```typescript
public readonly mappedClaims: MappedClaim[];
```

- *Type:* <a href="#@catnekaise/actions-constructs.MappedClaim">MappedClaim</a>[]

---


### Constrainer <a name="Constrainer" id="@catnekaise/actions-constructs.Constrainer"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.Constrainer.Initializer"></a>

```typescript
import { Constrainer } from '@catnekaise/actions-constructs'

new Constrainer(settings: ConstrainerSettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a></code> | *No description.* |

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.Constrainer.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.Constrainer.hasResourceTagEqualToClaim">hasResourceTagEqualToClaim</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.Constrainer.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.Constrainer.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.Constrainer.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.Constrainer.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.Constrainer.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.Constrainer.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.Constrainer.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.Constrainer.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.Constrainer.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.Constrainer.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.Constrainer.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.Constrainer.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.Constrainer.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.Constrainer.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.Constrainer.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.Constrainer.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.Constrainer.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.Constrainer.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.Constrainer.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.Constrainer.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.Constrainer.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.Constrainer.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.Constrainer.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.Constrainer.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.Constrainer.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.Constrainer.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.Constrainer.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.Constrainer.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.Constrainer.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.Constrainer.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.Constrainer.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.Constrainer.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.Constrainer.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.Constrainer.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```

##### `hasResourceTagEqualToClaim` <a name="hasResourceTagEqualToClaim" id="@catnekaise/actions-constructs.Constrainer.hasResourceTagEqualToClaim"></a>

```typescript
public hasResourceTagEqualToClaim(resourceTagName: string, claim: GhaClaim): Constrainer
```

###### `resourceTagName`<sup>Required</sup> <a name="resourceTagName" id="@catnekaise/actions-constructs.Constrainer.hasResourceTagEqualToClaim.parameter.resourceTagName"></a>

- *Type:* string

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.Constrainer.hasResourceTagEqualToClaim.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---




### ConstraintsBuilder <a name="ConstraintsBuilder" id="@catnekaise/actions-constructs.ConstraintsBuilder"></a>

- *Implements:* @catnekaise/cdk-iam-utilities.IConstraintsBuilder

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.ConstraintsBuilder.Initializer"></a>

```typescript
import { ConstraintsBuilder } from '@catnekaise/actions-constructs'

new ConstraintsBuilder(settings: BuilderSettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/actions-constructs.BuilderSettings">BuilderSettings</a></code> | *No description.* |

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.ConstraintsBuilder.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.BuilderSettings">BuilderSettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.ConstraintsBuilder.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.ConstraintsBuilder.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.ConstraintsBuilder.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.ConstraintsBuilder.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.ConstraintsBuilder.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.ConstraintsBuilder.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.ConstraintsBuilder.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.ConstraintsBuilder.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.ConstraintsBuilder.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.ConstraintsBuilder.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.ConstraintsBuilder.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.ConstraintsBuilder.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.ConstraintsBuilder.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.ConstraintsBuilder.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.ConstraintsBuilder.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.ConstraintsBuilder.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.ConstraintsBuilder.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.ConstraintsBuilder.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.ConstraintsBuilder.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.ConstraintsBuilder.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.ConstraintsBuilder.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.ConstraintsBuilder.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.ConstraintsBuilder.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.ConstraintsBuilder.property.constraints">constraints</a></code> | <code>@catnekaise/cdk-iam-utilities.Constraint[]</code> | *No description.* |

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/actions-constructs.ConstraintsBuilder.property.constraints"></a>

```typescript
public readonly constraints: Constraint[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Constraint[]

---


### GitHubActionsClaimConstraint <a name="GitHubActionsClaimConstraint" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

new GitHubActionsClaimConstraint(operator: ConditionOperator, claim: GhaClaim, values: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer.parameter.operator">operator</a></code> | <code>@catnekaise/cdk-iam-utilities.ConditionOperator</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer.parameter.claim">claim</a></code> | <code><a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer.parameter.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

##### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.Initializer.parameter.values"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.assemble">assemble</a></code> | *No description.* |

---

##### `assemble` <a name="assemble" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.assemble"></a>

```typescript
public assemble(scope: Construct, context: ConstraintAssembleContext): ConstraintPolicyMutation[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.assemble.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `context`<sup>Required</sup> <a name="context" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.assemble.parameter.context"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConstraintAssembleContext

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.actorEquals">actorEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.repoOwners">repoOwners</a></code> | Value(s) of GitHub organizations or users running GitHub Actions. |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.repositoryLike">repositoryLike</a></code> | *No description.* |

---

##### `actorEquals` <a name="actorEquals" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.actorEquals"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.actorEquals(actors: string)
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.actorEquals.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimCondition"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string)
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimEquals"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.claimEquals(claim: GhaClaim, value: string, additionalValues: string)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimLike"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.claimLike(claim: GhaClaim, values: string)
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.claimLike.parameter.values"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.environmentEquals"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.environmentEquals(environments: string)
```

###### `environments`<sup>Required</sup> <a name="environments" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.environmentEquals.parameter.environments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.jobWorkflowLike"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.jobWorkflowLike(organization: string, repositoryName: string, filename?: string, ref?: string)
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `repoOwners` <a name="repoOwners" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.repoOwners"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.repoOwners(owners: string)
```

Value(s) of GitHub organizations or users running GitHub Actions.

###### `owners`<sup>Required</sup> <a name="owners" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.repoOwners.parameter.owners"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.repositoryLike"></a>

```typescript
import { GitHubActionsClaimConstraint } from '@catnekaise/actions-constructs'

GitHubActionsClaimConstraint.repositoryLike(repositories: string)
```

###### `repositories`<sup>Required</sup> <a name="repositories" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.repositoryLike.parameter.repositories"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.claim">claim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.operator">operator</a></code> | <code>@catnekaise/cdk-iam-utilities.ConditionOperator</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.claim"></a>

```typescript
public readonly claim: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.operator"></a>

```typescript
public readonly operator: ConditionOperator;
```

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

##### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.SelfHosted">SelfHosted</a></code> | <code><a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint">GitHubActionsClaimConstraint</a></code> | *No description.* |

---

##### `SelfHosted`<sup>Required</sup> <a name="SelfHosted" id="@catnekaise/actions-constructs.GitHubActionsClaimConstraint.property.SelfHosted"></a>

```typescript
public readonly SelfHosted: GitHubActionsClaimConstraint;
```

- *Type:* <a href="#@catnekaise/actions-constructs.GitHubActionsClaimConstraint">GitHubActionsClaimConstraint</a>

---

### GrantConstrainer <a name="GrantConstrainer" id="@catnekaise/actions-constructs.GrantConstrainer"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.GrantConstrainer.Initializer"></a>

```typescript
import { GrantConstrainer } from '@catnekaise/actions-constructs'

new GrantConstrainer(scope: Construct, grant: Grant, settings: ConstrainerSettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.Initializer.parameter.grant">grant</a></code> | <code>aws-cdk-lib.aws_iam.Grant</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.GrantConstrainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `grant`<sup>Required</sup> <a name="grant" id="@catnekaise/actions-constructs.GrantConstrainer.Initializer.parameter.grant"></a>

- *Type:* aws-cdk-lib.aws_iam.Grant

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.GrantConstrainer.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.hasResourceTagEqualToClaim">hasResourceTagEqualToClaim</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.add">add</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.GrantConstrainer.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.GrantConstrainer.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.GrantConstrainer.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.GrantConstrainer.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GrantConstrainer.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.GrantConstrainer.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.GrantConstrainer.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GrantConstrainer.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.GrantConstrainer.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.GrantConstrainer.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.GrantConstrainer.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GrantConstrainer.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.GrantConstrainer.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.GrantConstrainer.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.GrantConstrainer.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.GrantConstrainer.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.GrantConstrainer.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.GrantConstrainer.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.GrantConstrainer.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.GrantConstrainer.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.GrantConstrainer.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.GrantConstrainer.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.GrantConstrainer.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.GrantConstrainer.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.GrantConstrainer.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.GrantConstrainer.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.GrantConstrainer.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.GrantConstrainer.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.GrantConstrainer.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.GrantConstrainer.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.GrantConstrainer.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.GrantConstrainer.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.GrantConstrainer.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.GrantConstrainer.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```

##### `hasResourceTagEqualToClaim` <a name="hasResourceTagEqualToClaim" id="@catnekaise/actions-constructs.GrantConstrainer.hasResourceTagEqualToClaim"></a>

```typescript
public hasResourceTagEqualToClaim(resourceTagName: string, claim: GhaClaim): Constrainer
```

###### `resourceTagName`<sup>Required</sup> <a name="resourceTagName" id="@catnekaise/actions-constructs.GrantConstrainer.hasResourceTagEqualToClaim.parameter.resourceTagName"></a>

- *Type:* string

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.GrantConstrainer.hasResourceTagEqualToClaim.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `add` <a name="add" id="@catnekaise/actions-constructs.GrantConstrainer.add"></a>

```typescript
public add(constraint: Constraint): GrantConstrainer
```

###### `constraint`<sup>Required</sup> <a name="constraint" id="@catnekaise/actions-constructs.GrantConstrainer.add.parameter.constraint"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.GrantConstrainer.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.GrantConstrainer.create"></a>

```typescript
import { GrantConstrainer } from '@catnekaise/actions-constructs'

GrantConstrainer.create(scope: Construct, grant: Grant, settings: ConstrainerSettings)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.GrantConstrainer.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `grant`<sup>Required</sup> <a name="grant" id="@catnekaise/actions-constructs.GrantConstrainer.create.parameter.grant"></a>

- *Type:* aws-cdk-lib.aws_iam.Grant

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.GrantConstrainer.create.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a>

---



### PolicyStatementConstrainer <a name="PolicyStatementConstrainer" id="@catnekaise/actions-constructs.PolicyStatementConstrainer"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer"></a>

```typescript
import { PolicyStatementConstrainer } from '@catnekaise/actions-constructs'

new PolicyStatementConstrainer(scope: Construct, policyStatement: PolicyStatement, settings: ConstrainerSettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer.parameter.policyStatement">policyStatement</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement</code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer.parameter.policyStatement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.hasResourceTagEqualToClaim">hasResourceTagEqualToClaim</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.add">add</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```

##### `hasResourceTagEqualToClaim` <a name="hasResourceTagEqualToClaim" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.hasResourceTagEqualToClaim"></a>

```typescript
public hasResourceTagEqualToClaim(resourceTagName: string, claim: GhaClaim): Constrainer
```

###### `resourceTagName`<sup>Required</sup> <a name="resourceTagName" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.hasResourceTagEqualToClaim.parameter.resourceTagName"></a>

- *Type:* string

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.hasResourceTagEqualToClaim.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

##### `add` <a name="add" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.add"></a>

```typescript
public add(constraint: Constraint): PolicyStatementConstrainer
```

###### `constraint`<sup>Required</sup> <a name="constraint" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.add.parameter.constraint"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PolicyStatementConstrainer.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.create"></a>

```typescript
import { PolicyStatementConstrainer } from '@catnekaise/actions-constructs'

PolicyStatementConstrainer.create(scope: Construct, policyStatement: PolicyStatement, settings: ConstrainerSettings)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.create.parameter.policyStatement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

###### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.PolicyStatementConstrainer.create.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.ConstrainerSettings">ConstrainerSettings</a>

---



### PrincipalBuilder <a name="PrincipalBuilder" id="@catnekaise/actions-constructs.PrincipalBuilder"></a>

#### Initializers <a name="Initializers" id="@catnekaise/actions-constructs.PrincipalBuilder.Initializer"></a>

```typescript
import { PrincipalBuilder } from '@catnekaise/actions-constructs'

new PrincipalBuilder(settings: BuilderSettings)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.Initializer.parameter.settings">settings</a></code> | <code><a href="#@catnekaise/actions-constructs.BuilderSettings">BuilderSettings</a></code> | *No description.* |

---

##### `settings`<sup>Required</sup> <a name="settings" id="@catnekaise/actions-constructs.PrincipalBuilder.Initializer.parameter.settings"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.BuilderSettings">BuilderSettings</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.approvedBy">approvedBy</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.claimCondition">claimCondition</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.claimEquals">claimEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.claimLike">claimLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.environmentEquals">environmentEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.jobWorkflowLike">jobWorkflowLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.refLike">refLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.repoOrganisations">repoOrganisations</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.repositoryEquals">repositoryEquals</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.repositoryLike">repositoryLike</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.whenSelfHosted">whenSelfHosted</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.add">add</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.createPrincipal">createPrincipal</a></code> | *No description.* |

---

##### `approvedBy` <a name="approvedBy" id="@catnekaise/actions-constructs.PrincipalBuilder.approvedBy"></a>

```typescript
public approvedBy(actors: string): ActionsIdentityConstraints
```

###### `actors`<sup>Required</sup> <a name="actors" id="@catnekaise/actions-constructs.PrincipalBuilder.approvedBy.parameter.actors"></a>

- *Type:* string

---

##### `claimCondition` <a name="claimCondition" id="@catnekaise/actions-constructs.PrincipalBuilder.claimCondition"></a>

```typescript
public claimCondition(operator: ConditionOperator, claim: GhaClaim, values: string): ActionsIdentityConstraints
```

###### `operator`<sup>Required</sup> <a name="operator" id="@catnekaise/actions-constructs.PrincipalBuilder.claimCondition.parameter.operator"></a>

- *Type:* @catnekaise/cdk-iam-utilities.ConditionOperator

---

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PrincipalBuilder.claimCondition.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `values`<sup>Required</sup> <a name="values" id="@catnekaise/actions-constructs.PrincipalBuilder.claimCondition.parameter.values"></a>

- *Type:* string

---

##### `claimEquals` <a name="claimEquals" id="@catnekaise/actions-constructs.PrincipalBuilder.claimEquals"></a>

```typescript
public claimEquals(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PrincipalBuilder.claimEquals.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.PrincipalBuilder.claimEquals.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.PrincipalBuilder.claimEquals.parameter.additionalValues"></a>

- *Type:* string

---

##### `claimLike` <a name="claimLike" id="@catnekaise/actions-constructs.PrincipalBuilder.claimLike"></a>

```typescript
public claimLike(claim: GhaClaim, value: string, additionalValues: string): ActionsIdentityConstraints
```

###### `claim`<sup>Required</sup> <a name="claim" id="@catnekaise/actions-constructs.PrincipalBuilder.claimLike.parameter.claim"></a>

- *Type:* <a href="#@catnekaise/actions-constructs.GhaClaim">GhaClaim</a>

---

###### `value`<sup>Required</sup> <a name="value" id="@catnekaise/actions-constructs.PrincipalBuilder.claimLike.parameter.value"></a>

- *Type:* string

---

###### `additionalValues`<sup>Required</sup> <a name="additionalValues" id="@catnekaise/actions-constructs.PrincipalBuilder.claimLike.parameter.additionalValues"></a>

- *Type:* string

---

##### `environmentEquals` <a name="environmentEquals" id="@catnekaise/actions-constructs.PrincipalBuilder.environmentEquals"></a>

```typescript
public environmentEquals(environment: string, additionalEnvironments: string): ActionsIdentityConstraints
```

###### `environment`<sup>Required</sup> <a name="environment" id="@catnekaise/actions-constructs.PrincipalBuilder.environmentEquals.parameter.environment"></a>

- *Type:* string

---

###### `additionalEnvironments`<sup>Required</sup> <a name="additionalEnvironments" id="@catnekaise/actions-constructs.PrincipalBuilder.environmentEquals.parameter.additionalEnvironments"></a>

- *Type:* string

---

##### `jobWorkflowLike` <a name="jobWorkflowLike" id="@catnekaise/actions-constructs.PrincipalBuilder.jobWorkflowLike"></a>

```typescript
public jobWorkflowLike(organization: string, repositoryName?: string, filename?: string, ref?: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.PrincipalBuilder.jobWorkflowLike.parameter.organization"></a>

- *Type:* string

Name of organization or user.

---

###### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@catnekaise/actions-constructs.PrincipalBuilder.jobWorkflowLike.parameter.repositoryName"></a>

- *Type:* string

Name of repository.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@catnekaise/actions-constructs.PrincipalBuilder.jobWorkflowLike.parameter.filename"></a>

- *Type:* string

Default value is '*'.

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@catnekaise/actions-constructs.PrincipalBuilder.jobWorkflowLike.parameter.ref"></a>

- *Type:* string

Default value is '*'.

---

##### `refLike` <a name="refLike" id="@catnekaise/actions-constructs.PrincipalBuilder.refLike"></a>

```typescript
public refLike(refs: string): ActionsIdentityConstraints
```

###### `refs`<sup>Required</sup> <a name="refs" id="@catnekaise/actions-constructs.PrincipalBuilder.refLike.parameter.refs"></a>

- *Type:* string

---

##### `repoOrganisations` <a name="repoOrganisations" id="@catnekaise/actions-constructs.PrincipalBuilder.repoOrganisations"></a>

```typescript
public repoOrganisations(organization: string, additionalOrganizations: string): ActionsIdentityConstraints
```

###### `organization`<sup>Required</sup> <a name="organization" id="@catnekaise/actions-constructs.PrincipalBuilder.repoOrganisations.parameter.organization"></a>

- *Type:* string

---

###### `additionalOrganizations`<sup>Required</sup> <a name="additionalOrganizations" id="@catnekaise/actions-constructs.PrincipalBuilder.repoOrganisations.parameter.additionalOrganizations"></a>

- *Type:* string

---

##### `repositoryEquals` <a name="repositoryEquals" id="@catnekaise/actions-constructs.PrincipalBuilder.repositoryEquals"></a>

```typescript
public repositoryEquals(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.PrincipalBuilder.repositoryEquals.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.PrincipalBuilder.repositoryEquals.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `repositoryLike` <a name="repositoryLike" id="@catnekaise/actions-constructs.PrincipalBuilder.repositoryLike"></a>

```typescript
public repositoryLike(repository: string, additionalRepositories: string): ActionsIdentityConstraints
```

###### `repository`<sup>Required</sup> <a name="repository" id="@catnekaise/actions-constructs.PrincipalBuilder.repositoryLike.parameter.repository"></a>

- *Type:* string

---

###### `additionalRepositories`<sup>Required</sup> <a name="additionalRepositories" id="@catnekaise/actions-constructs.PrincipalBuilder.repositoryLike.parameter.additionalRepositories"></a>

- *Type:* string

---

##### `whenSelfHosted` <a name="whenSelfHosted" id="@catnekaise/actions-constructs.PrincipalBuilder.whenSelfHosted"></a>

```typescript
public whenSelfHosted(): ActionsIdentityConstraints
```

##### `add` <a name="add" id="@catnekaise/actions-constructs.PrincipalBuilder.add"></a>

```typescript
public add(constraint: Constraint, additionalConstraints: Constraint): PrincipalBuilder
```

###### `constraint`<sup>Required</sup> <a name="constraint" id="@catnekaise/actions-constructs.PrincipalBuilder.add.parameter.constraint"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint

---

###### `additionalConstraints`<sup>Required</sup> <a name="additionalConstraints" id="@catnekaise/actions-constructs.PrincipalBuilder.add.parameter.additionalConstraints"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint

---

##### `createPrincipal` <a name="createPrincipal" id="@catnekaise/actions-constructs.PrincipalBuilder.createPrincipal"></a>

```typescript
public createPrincipal(scope: Construct): IPrincipal
```

###### `scope`<sup>Required</sup> <a name="scope" id="@catnekaise/actions-constructs.PrincipalBuilder.createPrincipal.parameter.scope"></a>

- *Type:* constructs.Construct

Any construct will do.

Is used for annotating warnings

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@catnekaise/actions-constructs.PrincipalBuilder.create"></a>

```typescript
import { PrincipalBuilder } from '@catnekaise/actions-constructs'

PrincipalBuilder.create(claimsContext: IClaimsContext, constraints: Constraint[])
```

###### `claimsContext`<sup>Required</sup> <a name="claimsContext" id="@catnekaise/actions-constructs.PrincipalBuilder.create.parameter.claimsContext"></a>

- *Type:* @catnekaise/cdk-iam-utilities.IClaimsContext

---

###### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/actions-constructs.PrincipalBuilder.create.parameter.constraints"></a>

- *Type:* @catnekaise/cdk-iam-utilities.Constraint[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@catnekaise/actions-constructs.PrincipalBuilder.property.constraints">constraints</a></code> | <code>@catnekaise/cdk-iam-utilities.Constraint[]</code> | *No description.* |

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@catnekaise/actions-constructs.PrincipalBuilder.property.constraints"></a>

```typescript
public readonly constraints: Constraint[];
```

- *Type:* @catnekaise/cdk-iam-utilities.Constraint[]

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


##### ~~`ARN`~~ <a name="ARN" id="@catnekaise/actions-constructs.AuthenticatedMethodReference.ARN"></a>

- *Deprecated:* Use `AuthenticatedMethodReference.HOST` if needing more specificity than `authenticated`

---


### EnhancedFlowMatchType <a name="EnhancedFlowMatchType" id="@catnekaise/actions-constructs.EnhancedFlowMatchType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@catnekaise/actions-constructs.EnhancedFlowMatchType.EQUALS">EQUALS</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.EnhancedFlowMatchType.CONTAINS">CONTAINS</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.EnhancedFlowMatchType.STARTS_WITH">STARTS_WITH</a></code> | *No description.* |
| <code><a href="#@catnekaise/actions-constructs.EnhancedFlowMatchType.NOT_EQUALS">NOT_EQUALS</a></code> | *No description.* |

---

##### `EQUALS` <a name="EQUALS" id="@catnekaise/actions-constructs.EnhancedFlowMatchType.EQUALS"></a>

---


##### `CONTAINS` <a name="CONTAINS" id="@catnekaise/actions-constructs.EnhancedFlowMatchType.CONTAINS"></a>

---


##### `STARTS_WITH` <a name="STARTS_WITH" id="@catnekaise/actions-constructs.EnhancedFlowMatchType.STARTS_WITH"></a>

---


##### `NOT_EQUALS` <a name="NOT_EQUALS" id="@catnekaise/actions-constructs.EnhancedFlowMatchType.NOT_EQUALS"></a>

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

