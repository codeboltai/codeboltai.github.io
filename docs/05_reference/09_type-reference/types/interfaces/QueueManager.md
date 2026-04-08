---
title: QueueManager
---

[**@codebolt/types**](../index)

***

# Interface: QueueManager\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:390

## Extended by

- [`PriorityQueue`](PriorityQueue)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Methods

### clear()

```ts
clear(): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:396

#### Returns

`void`

***

### dequeue()

```ts
dequeue(): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:392

#### Returns

`T`

***

### enqueue()

```ts
enqueue(item: T, priority?: number): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:391

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `priority?` | `number` |

#### Returns

`void`

***

### isEmpty()

```ts
isEmpty(): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:395

#### Returns

`boolean`

***

### peek()

```ts
peek(): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:393

#### Returns

`T`

***

### size()

```ts
size(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:394

#### Returns

`number`
