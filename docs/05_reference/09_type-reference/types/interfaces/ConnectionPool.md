---
title: ConnectionPool
---

[**@codebolt/types**](../index)

***

# Interface: ConnectionPool

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:408

## Methods

### acquire()

```ts
acquire(): Promise<any>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:409

#### Returns

`Promise`\<`any`\>

***

### available()

```ts
available(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:413

#### Returns

`number`

***

### close()

```ts
close(): Promise<void>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:415

#### Returns

`Promise`\<`void`\>

***

### destroy()

```ts
destroy(connection: any): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:411

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connection` | `any` |

#### Returns

`void`

***

### pending()

```ts
pending(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:414

#### Returns

`number`

***

### release()

```ts
release(connection: any): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:410

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connection` | `any` |

#### Returns

`void`

***

### size()

```ts
size(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:412

#### Returns

`number`
