---
title: ReviewMergeSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: ReviewMergeSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:10

Review/Merge Request WebSocket - Manage merge requests, reviews, pheromones, locks, and proposed jobs.
Action-based protocol with ~25 actions.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`ReviewMergeSocketEvents`\>

## Constructors

### Constructor

```ts
new ReviewMergeSocket(connectionManager: SocketConnectionManager, socketName: string): ReviewMergeSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:13

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'reviewMergeRequest'` |

#### Returns

`ReviewMergeSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### addLinkedJob()

```ts
addLinkedJob(mergeRequestId: string, jobId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:82

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mergeRequestId` | `string` |
| `jobId` | `string` |

#### Returns

`void`

***

### addReview()

```ts
addReview(mergeRequestId: string, review: AddReviewFeedbackRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:71

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mergeRequestId` | `string` |
| `review` | `AddReviewFeedbackRequest` |

#### Returns

`void`

***

### addUnlockRequest()

```ts
addUnlockRequest(request: CreateUnlockRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:130

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `CreateUnlockRequest` |

#### Returns

`void`

***

### approveProposedJob()

```ts
approveProposedJob(proposalId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:144

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `proposalId` | `string` |

#### Returns

`void`

***

### approveUnlockRequest()

```ts
approveUnlockRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### byAgent()

```ts
byAgent(agentId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`void`

***

### bySwarm()

```ts
bySwarm(swarmId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `swarmId` | `string` |

#### Returns

`void`

***

### convertProposedJob()

```ts
convertProposedJob(proposalId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:150

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `proposalId` | `string` |

#### Returns

`void`

***

### create()

```ts
create(data: CreateReviewMergeRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateReviewMergeRequest` |

#### Returns

`void`

***

### delete()

```ts
delete(id: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

***

### depositPheromone()

```ts
depositPheromone(pheromone: AddPheromoneRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:113

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pheromone` | `AddPheromoneRequest` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<ReviewMergeSocketEvents[K]>): boolean;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:54

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| ...`args` | `Parameters`\<`ReviewMergeSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### get()

```ts
get(id: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

***

### getPheromonesAggregated()

```ts
getPheromonesAggregated(filter?: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:110

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |

#### Returns

`void`

***

### getPheromoneTypes()

```ts
getPheromoneTypes(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:107

#### Returns

`void`

***

### isLocked()

```ts
isLocked(resourceId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:127

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceId` | `string` |

#### Returns

`void`

***

### list()

```ts
list(filter?: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:54

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |

#### Returns

`void`

***

### listenerCount()

```ts
listenerCount(event: string): number;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |

#### Returns

`number`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`listenerCount`](TypedEventEmitter.md#listenercount)

***

### lock()

```ts
lock(resourceId: string, lockData?: LockReviewRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:121

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceId` | `string` |
| `lockData?` | `LockReviewRequest` |

#### Returns

`void`

***

### merge()

```ts
merge(id: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

***

### off()

```ts
off<K>(event: K, listener: ReviewMergeSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:35

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `ReviewMergeSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: ReviewMergeSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:27

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `ReviewMergeSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: ReviewMergeSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:46

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `ReviewMergeSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### pending()

```ts
pending(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:90

#### Returns

`void`

***

### proposeJob()

```ts
proposeJob(proposal: AddProposedJobRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `proposal` | `AddProposedJobRequest` |

#### Returns

`void`

***

### readyToMerge()

```ts
readyToMerge(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:93

#### Returns

`void`

***

### rejectProposedJob()

```ts
rejectProposedJob(proposalId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:147

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `proposalId` | `string` |

#### Returns

`void`

***

### rejectUnlockRequest()

```ts
rejectUnlockRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:136

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### removeAllListeners()

```ts
removeAllListeners(event?: string): this;
```

Defined in: CodeBolt/packages/clientsdk/src/core/event-emitter.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `string` |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`removeAllListeners`](TypedEventEmitter.md#removealllisteners)

***

### removeLinkedJob()

```ts
removeLinkedJob(mergeRequestId: string, jobId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mergeRequestId` | `string` |
| `jobId` | `string` |

#### Returns

`void`

***

### removePheromone()

```ts
removePheromone(pheromoneId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:116

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pheromoneId` | `string` |

#### Returns

`void`

***

### statistics()

```ts
statistics(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:102

#### Returns

`void`

***

### unlock()

```ts
unlock(resourceId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceId` | `string` |

#### Returns

`void`

***

### update()

```ts
update(id: string, data: UpdateReviewMergeRequest): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateReviewMergeRequest` |

#### Returns

`void`

***

### updateStatus()

```ts
updateStatus(id: string, status: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/review-merge.socket.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `status` | `string` |

#### Returns

`void`
