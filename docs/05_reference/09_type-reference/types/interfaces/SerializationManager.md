---
title: SerializationManager
---

[**@codebolt/types**](../index)

***

# Interface: SerializationManager

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:487

## Methods

### deserialize()

```ts
deserialize(data: string | Uint8Array<ArrayBuffer>, format?: string): any;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:492

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| `Uint8Array`\<`ArrayBuffer`\> |
| `format?` | `string` |

#### Returns

`any`

***

### get()

```ts
get(name: string): Serializer<any>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:490

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Serializer`](Serializer)\<`any`\>

***

### register()

```ts
register(name: string, serializer: Serializer): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:488

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `serializer` | [`Serializer`](Serializer) |

#### Returns

`void`

***

### serialize()

```ts
serialize(data: any, format?: string): string | Uint8Array<ArrayBuffer>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:491

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |
| `format?` | `string` |

#### Returns

`string` \| `Uint8Array`\<`ArrayBuffer`\>

***

### unregister()

```ts
unregister(name: string): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:489

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`
