---
title: CacheManager
---

[**@codebolt/types**](../index)

***

# Interface: CacheManager

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:163

## Methods

### clear()

```ts
clear(): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:167

#### Returns

`void`

***

### delete()

```ts
delete(key: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:166

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`boolean`

***

### get()

```ts
get<T>(key: string): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:164

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`T`

***

### set()

```ts
set<T>(
   key: string, 
   value: T, 
   ttl?: number): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:165

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `T` |
| `ttl?` | `number` |

#### Returns

`void`

***

### size()

```ts
size(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:168

#### Returns

`number`
