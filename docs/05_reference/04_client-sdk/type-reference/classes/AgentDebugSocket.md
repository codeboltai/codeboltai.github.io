---
title: AgentDebugSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentDebugSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:9

Agent Debug WebSocket - Debug agent sessions with subscribe support.
Subscribe-based: list, get, get-logs, subscribe/unsubscribe for session events.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`AgentDebugSocketEvents`\>

## Constructors

### Constructor

```ts
new AgentDebugSocket(connectionManager: SocketConnectionManager, socketName: string): AgentDebugSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:12

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'agentDebug'` |

#### Returns

`AgentDebugSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<AgentDebugSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`AgentDebugSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### get()

```ts
get(sessionId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:91

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`void`

***

### getLogs()

```ts
getLogs(sessionId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:94

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`void`

***

### list()

```ts
list(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:88

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

### off()

```ts
off<K>(event: K, listener: AgentDebugSocketEvents[K]): this;
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
| `listener` | `AgentDebugSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: AgentDebugSocketEvents[K]): this;
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
| `listener` | `AgentDebugSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: AgentDebugSocketEvents[K]): this;
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
| `listener` | `AgentDebugSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### ping()

```ts
ping(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:103

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

### subscribe()

```ts
subscribe(sessionId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:97

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`void`

***

### unsubscribe()

```ts
unsubscribe(sessionId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/agent-debug.socket.ts:100

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`void`
