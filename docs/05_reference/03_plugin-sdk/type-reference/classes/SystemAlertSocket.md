---
title: SystemAlertSocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: SystemAlertSocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:10

System Alert WebSocket - Manage and receive system alert events.
Mixed: send actions (get-all, create, update, remove, mark-read, clear-all)
and receive broadcast events (created, updated, removed, cleared).

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`SystemAlertSocketEvents`\>

## Constructors

### Constructor

```ts
new SystemAlertSocket(connectionManager: SocketConnectionManager, socketName: string): SystemAlertSocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:13

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'systemAlert'` |

#### Returns

`SystemAlertSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### clearAll()

```ts
clearAll(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:104

#### Returns

`void`

***

### create()

```ts
create(alert: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:92

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alert` | `unknown` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<SystemAlertSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`SystemAlertSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### getAll()

```ts
getAll(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:89

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

### markRead()

```ts
markRead(alertId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:101

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alertId` | `string` |

#### Returns

`void`

***

### off()

```ts
off<K>(event: K, listener: SystemAlertSocketEvents[K]): this;
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
| `listener` | `SystemAlertSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: SystemAlertSocketEvents[K]): this;
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
| `listener` | `SystemAlertSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: SystemAlertSocketEvents[K]): this;
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
| `listener` | `SystemAlertSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### ping()

```ts
ping(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:107

#### Returns

`void`

***

### remove()

```ts
remove(alertId: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alertId` | `string` |

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

### update()

```ts
update(alertId: string, data: unknown): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/system-alert.socket.ts:95

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alertId` | `string` |
| `data` | `unknown` |

#### Returns

`void`
