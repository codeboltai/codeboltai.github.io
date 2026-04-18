---
title: LspSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: LspSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/lsp.socket.ts:9

Language Server Protocol (LSP) WebSocket - Connect to a language server.
Uses JSON-RPC over WebSocket. Connect with the target language as a path segment.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`LspSocketEvents`\>

## Constructors

### Constructor

```ts
new LspSocket(
   connectionManager: SocketConnectionManager, 
   language?: string, 
   socketName?: string): LspSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/lsp.socket.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) |
| `language?` | `string` |
| `socketName?` | `string` |

#### Returns

`LspSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<LspSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`LspSocketEvents`\[`K`\]\> |

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
off<K>(event: K, listener: LspSocketEvents[K]): this;
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
| `listener` | `LspSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: LspSocketEvents[K]): this;
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
| `listener` | `LspSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: LspSocketEvents[K]): this;
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
| `listener` | `LspSocketEvents`\[`K`\] |

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

### send()

```ts
send(message: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/lsp.socket.ts:52

Send a JSON-RPC message to the language server

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `unknown` |

#### Returns

`void`

***

### sendNotification()

```ts
sendNotification(method: string, params?: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/lsp.socket.ts:67

Send a JSON-RPC notification (no response expected)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `params?` | `unknown` |

#### Returns

`void`

***

### sendRequest()

```ts
sendRequest(
   method: string, 
   params?: unknown, 
   id?: string | number): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/lsp.socket.ts:57

Send a JSON-RPC request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `params?` | `unknown` |
| `id?` | `string` \| `number` |

#### Returns

`void`
