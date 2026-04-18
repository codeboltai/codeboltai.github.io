---
title: IconViewSocket
---

[**@codebolt/client-sdk**](../index)

***

# Class: IconViewSocket

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:9

Icon View WebSocket - Subscribe to icon view updates.
Subscribe-based: subscribe/unsubscribe to specific views, get history/detail.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`IconViewSocketEvents`\>

## Constructors

### Constructor

```ts
new IconViewSocket(connManager: SocketConnectionManager, socketName: string): IconViewSocket;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:14

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'iconView'` |

#### Returns

`IconViewSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/clientsdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-emitter.ts#L24) |

## Methods

### emit()

```ts
emit<K>(event: K, ...args: Parameters<IconViewSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`IconViewSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### getDetail()

```ts
getDetail(messageId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:91

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageId` | `string` |

#### Returns

`void`

***

### getHistory()

```ts
getHistory(viewId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:87

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewId` | `string` |

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
off<K>(event: K, listener: IconViewSocketEvents[K]): this;
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
| `listener` | `IconViewSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: IconViewSocketEvents[K]): this;
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
| `listener` | `IconViewSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: IconViewSocketEvents[K]): this;
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
| `listener` | `IconViewSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### ping()

```ts
ping(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:95

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
subscribe(viewId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:79

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewId` | `string` |

#### Returns

`void`

***

### unsubscribe()

```ts
unsubscribe(viewId: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/sockets/icon-view.socket.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewId` | `string` |

#### Returns

`void`
