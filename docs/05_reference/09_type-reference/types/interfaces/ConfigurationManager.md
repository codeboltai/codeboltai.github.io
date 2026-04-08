---
title: ConfigurationManager
---

[**@codebolt/types**](../index)

***

# Interface: ConfigurationManager

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:365

## Methods

### delete()

```ts
delete(key: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:369

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

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:366

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

### getAll()

```ts
getAll(): Record<string, any>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:370

#### Returns

`Record`\<`string`, `any`\>

***

### has()

```ts
has(key: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:368

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`boolean`

***

### merge()

```ts
merge(config: Record<string, any>): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:371

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `Record`\<`string`, `any`\> |

#### Returns

`void`

***

### set()

```ts
set<T>(key: string, value: T): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:367

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

***

### validate()

```ts
validate(schema: any): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:372

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `any` |

#### Returns

`boolean`
