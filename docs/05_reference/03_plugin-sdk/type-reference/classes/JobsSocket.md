---
title: JobsSocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: JobsSocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:10

Jobs WebSocket - Manage jobs, pheromones, splits, locks, bids, and blockers.
Action-based protocol with ~35 actions.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`JobsSocketEvents`\>

## Constructors

### Constructor

```ts
new JobsSocket(connectionManager: SocketConnectionManager): JobsSocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) |

#### Returns

`JobsSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### acceptBid()

```ts
acceptBid(bidId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:119

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bidId` | `string` |

#### Returns

`void`

***

### acceptSplit()

```ts
acceptSplit(splitId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `splitId` | `string` |

#### Returns

`void`

***

### acquireLock()

```ts
acquireLock(lock: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:88

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lock` | `unknown` |

#### Returns

`void`

***

### addBid()

```ts
addBid(bid: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:113

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bid` | `unknown` |

#### Returns

`void`

***

### addBlocker()

```ts
addBlocker(blocker: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:127

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blocker` | `unknown` |

#### Returns

`void`

***

### addPheromoneType()

```ts
addPheromoneType(type: CreatePheromoneTypeRequest): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `CreatePheromoneTypeRequest` |

#### Returns

`void`

***

### addUnlockRequest()

```ts
addUnlockRequest(request: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `unknown` |

#### Returns

`void`

***

### approveUnlockRequest()

```ts
approveUnlockRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:102

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### blocked()

```ts
blocked(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:44

#### Returns

`void`

***

### checkLock()

```ts
checkLock(resourceId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:94

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceId` | `string` |

#### Returns

`void`

***

### deleteSplit()

```ts
deleteSplit(splitId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:80

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `splitId` | `string` |

#### Returns

`void`

***

### deleteUnlockRequest()

```ts
deleteUnlockRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:108

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### depositPheromone()

```ts
depositPheromone(pheromone: PheromoneDepositRequest): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pheromone` | `PheromoneDepositRequest` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<JobsSocketEvents[K]>): boolean;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:54

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| ...`args` | `Parameters`\<`JobsSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### get()

```ts
get(jobId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jobId` | `string` |

#### Returns

`void`

***

### getAggregatedPheromones()

```ts
getAggregatedPheromones(filter?: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |

#### Returns

`void`

***

### getEvent()

```ts
getEvent(eventId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventId` | `string` |

#### Returns

`void`

***

### getPheromones()

```ts
getPheromones(filter?: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |

#### Returns

`void`

***

### getPheromonesWithDecay()

```ts
getPheromonesWithDecay(filter?: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:72

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

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:49

#### Returns

`void`

***

### groups()

```ts
groups(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:35

#### Returns

`void`

***

### labels()

```ts
labels(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:38

#### Returns

`void`

***

### list()

```ts
list(filter?: JobListFilters): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `JobListFilters` |

#### Returns

`void`

***

### listBids()

```ts
listBids(jobId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jobId` | `string` |

#### Returns

`void`

***

### listenerCount()

```ts
listenerCount(event: string): number;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |

#### Returns

`number`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`listenerCount`](TypedEventEmitter.md#listenercount)

***

### listEvents()

```ts
listEvents(filter?: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:138

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |

#### Returns

`void`

***

### off()

```ts
off<K>(event: K, listener: JobsSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:35

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `JobsSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: JobsSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:27

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `JobsSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: JobsSocketEvents[K]): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:46

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| `listener` | `JobsSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### proposeSplit()

```ts
proposeSplit(split: CreateSplitProposalRequest): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `split` | `CreateSplitProposalRequest` |

#### Returns

`void`

***

### ready()

```ts
ready(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:41

#### Returns

`void`

***

### rejectUnlockRequest()

```ts
rejectUnlockRequest(requestId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:105

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

***

### releaseLock()

```ts
releaseLock(lockId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:91

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lockId` | `string` |

#### Returns

`void`

***

### removeAllListeners()

```ts
removeAllListeners(event?: string): this;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event?` | `string` |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`removeAllListeners`](TypedEventEmitter.md#removealllisteners)

***

### removeBlocker()

```ts
removeBlocker(blockerId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:130

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockerId` | `string` |

#### Returns

`void`

***

### removePheromone()

```ts
removePheromone(pheromoneId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pheromoneId` | `string` |

#### Returns

`void`

***

### removePheromoneType()

```ts
removePheromoneType(typeId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `typeId` | `string` |

#### Returns

`void`

***

### resolveBlocker()

```ts
resolveBlocker(blockerId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockerId` | `string` |

#### Returns

`void`

***

### withdrawBid()

```ts
withdrawBid(bidId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/jobs.socket.ts:116

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bidId` | `string` |

#### Returns

`void`
