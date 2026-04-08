---
title: CircuitBreaker
---

[**@codebolt/types**](../index)

***

# Interface: CircuitBreaker

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:562

## Methods

### execute()

```ts
execute<T>(operation: () => Promise<T>): Promise<T>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:563

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operation` | () => `Promise`\<`T`\> |

#### Returns

`Promise`\<`T`\>

***

### forceClose()

```ts
forceClose(): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:568

#### Returns

`void`

***

### forceOpen()

```ts
forceOpen(): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:567

#### Returns

`void`

***

### getFailureRate()

```ts
getFailureRate(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:565

#### Returns

`number`

***

### getState()

```ts
getState(): "open" | "closed" | "half-open";
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:564

#### Returns

`"open"` \| `"closed"` \| `"half-open"`

***

### reset()

```ts
reset(): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:566

#### Returns

`void`
