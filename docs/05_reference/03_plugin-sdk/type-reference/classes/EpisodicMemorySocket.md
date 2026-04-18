---
title: EpisodicMemorySocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: EpisodicMemorySocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:9

Episodic Memory WebSocket - Query and subscribe to episodic memory events.
Action-based protocol with join/leave for targeted updates.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`EpisodicMemorySocketEvents`\>

## Constructors

### Constructor

```ts
new EpisodicMemorySocket(connectionManager: SocketConnectionManager, socketName: string): EpisodicMemorySocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:12

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'episodicMemory'` |

#### Returns

`EpisodicMemorySocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<EpisodicMemorySocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`EpisodicMemorySocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### getAgents()

```ts
getAgents(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:72

#### Returns

`void`

***

### getEventTypes()

```ts
getEventTypes(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:64

#### Returns

`void`

***

### getTags()

```ts
getTags(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:68

#### Returns

`void`

***

### join()

```ts
join(memoryId: string, projectPath?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `memoryId` | `string` |
| `projectPath?` | `string` |

#### Returns

`void`

***

### leave()

```ts
leave(memoryId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `memoryId` | `string` |

#### Returns

`void`

***

### list()

```ts
list(filter?: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:76

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

### off()

```ts
off<K>(event: K, listener: EpisodicMemorySocketEvents[K]): this;
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
| `listener` | `EpisodicMemorySocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: EpisodicMemorySocketEvents[K]): this;
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
| `listener` | `EpisodicMemorySocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: EpisodicMemorySocketEvents[K]): this;
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
| `listener` | `EpisodicMemorySocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### query()

```ts
query(query: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/episodic-memory.socket.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `unknown` |

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
