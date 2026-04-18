---
title: DebugSocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: DebugSocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/debug.socket.ts:9

Chat Debug WebSocket - Passive debug connection for chat messages.
Server broadcasts debug data to connected clients.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`DebugSocketEvents`\>

## Constructors

### Constructor

```ts
new DebugSocket(connectionManager: SocketConnectionManager, socketName: string): DebugSocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/debug.socket.ts:12

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'chatDebug'` |

#### Returns

`DebugSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<DebugSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`DebugSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

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
off<K>(event: K, listener: DebugSocketEvents[K]): this;
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
| `listener` | `DebugSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: DebugSocketEvents[K]): this;
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
| `listener` | `DebugSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: DebugSocketEvents[K]): this;
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
| `listener` | `DebugSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

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
