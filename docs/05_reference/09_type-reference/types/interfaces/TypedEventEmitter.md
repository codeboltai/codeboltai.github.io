---
title: TypedEventEmitter
---

[**@codebolt/types**](../index)

***

# Interface: TypedEventEmitter\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:239

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EventMap`](EventMap) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<T[K]>): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:242

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| ...`args` | `Parameters`\<`T`\[`K`\]\> |

#### Returns

`boolean`

***

### off()

```ts
off<K>(event: K, listener: T[K]): this;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:241

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `T`\[`K`\] |

#### Returns

`this`

***

### on()

```ts
on<K>(event: K, listener: T[K]): this;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:240

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `T`\[`K`\] |

#### Returns

`this`

***

### removeAllListeners()

```ts
removeAllListeners<K>(event?: K): this;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:243

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `K` |

#### Returns

`this`
