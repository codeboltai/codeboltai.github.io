---
title: SecurityManager
---

[**@codebolt/types**](../index)

***

# Interface: SecurityManager

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:441

## Methods

### authenticate()

```ts
authenticate(credentials: any): Promise<SecurityContext>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:442

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credentials` | `any` |

#### Returns

`Promise`\<[`SecurityContext`](SecurityContext)\>

***

### authorize()

```ts
authorize(action: string, resource?: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:443

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | `string` |
| `resource?` | `string` |

#### Returns

`boolean`

***

### hasPermission()

```ts
hasPermission(permission: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:446

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `permission` | `string` |

#### Returns

`boolean`

***

### revokeSession()

```ts
revokeSession(sessionId: string): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:445

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`void`

***

### validateSession()

```ts
validateSession(sessionId: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:444

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`boolean`
