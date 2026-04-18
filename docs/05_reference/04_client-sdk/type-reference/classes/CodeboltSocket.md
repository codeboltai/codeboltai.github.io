---
title: CodeboltSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: CodeboltSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/codebolt.socket.ts:9

Codebolt Agent WebSocket - Agent connection for CLI message processing.
Connects with agentId, parentId, threadToken, instanceId params.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`CodeboltSocketEvents`\>

## Constructors

### Constructor

```ts
new CodeboltSocket(connectionManager: SocketConnectionManager, socketName: string): CodeboltSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/codebolt.socket.ts:12

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'codebolt'` |

#### Returns

`CodeboltSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### connect()

```ts
connect(params: {
  agentId: string;
  instanceId?: string;
  parentId?: string;
  threadToken?: string;
}): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/codebolt.socket.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `agentId`: `string`; `instanceId?`: `string`; `parentId?`: `string`; `threadToken?`: `string`; \} |
| `params.agentId` | `string` |
| `params.instanceId?` | `string` |
| `params.parentId?` | `string` |
| `params.threadToken?` | `string` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<CodeboltSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`CodeboltSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

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
off<K>(event: K, listener: CodeboltSocketEvents[K]): this;
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
| `listener` | `CodeboltSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: CodeboltSocketEvents[K]): this;
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
| `listener` | `CodeboltSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: CodeboltSocketEvents[K]): this;
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
| `listener` | `CodeboltSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

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

### sendMessage()

```ts
sendMessage(message: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/codebolt.socket.ts:63

Send a CLI message to the agent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `unknown` |

#### Returns

`void`
