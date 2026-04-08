---
title: PriorityQueue
---

[**@codebolt/types**](../index)

***

# Interface: PriorityQueue\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:399

## Extends

- [`QueueManager`](QueueManager)\<`T`\>

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

#### Inherited from

[`QueueManager`](QueueManager).[`clear`](QueueManager.md#clear)

***

### dequeue()

```ts
dequeue(): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:392

#### Returns

`T`

#### Inherited from

[`QueueManager`](QueueManager).[`dequeue`](QueueManager.md#dequeue)

***

### dequeuePriority()

```ts
dequeuePriority(): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:401

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

#### Inherited from

[`QueueManager`](QueueManager).[`enqueue`](QueueManager.md#enqueue)

***

### enqueuePriority()

```ts
enqueuePriority(item: T, priority: number): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:400

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `priority` | `number` |

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

#### Inherited from

[`QueueManager`](QueueManager).[`isEmpty`](QueueManager.md#isempty)

***

### peek()

```ts
peek(): T;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:393

#### Returns

`T`

#### Inherited from

[`QueueManager`](QueueManager).[`peek`](QueueManager.md#peek)

***

### size()

```ts
size(): number;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:394

#### Returns

`number`

#### Inherited from

[`QueueManager`](QueueManager).[`size`](QueueManager.md#size)
