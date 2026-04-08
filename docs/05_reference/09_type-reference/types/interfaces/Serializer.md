---
title: Serializer
---

[**@codebolt/types**](../index)

***

# Interface: Serializer\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:481

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Methods

### deserialize()

```ts
deserialize(data: string | Uint8Array<ArrayBuffer>): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:483

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| `Uint8Array`\<`ArrayBuffer`\> |

#### Returns

`T`

***

### getContentType()

```ts
getContentType(): string;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:484

#### Returns

`string`

***

### serialize()

```ts
serialize(data: T): string | Uint8Array<ArrayBuffer>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:482

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `T` |

#### Returns

`string` \| `Uint8Array`\<`ArrayBuffer`\>
