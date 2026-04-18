---
title: UpdateRequestSocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: UpdateRequestSocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:11

Project Structure Update Request WebSocket - Manage update requests with workflow.
Type-based protocol: list, get, create, update, delete, submit, startWork, complete, merge,
dispute, resolveDispute, comment, watch, unwatch.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`UpdateRequestSocketEvents`\>

## Constructors

### Constructor

```ts
new UpdateRequestSocket(connectionManager: SocketConnectionManager, socketName: string): UpdateRequestSocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:14

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'projectStructureUpdateRequest'` |

#### Returns

`UpdateRequestSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### comment()

```ts
comment(
   id: string, 
   comment: string, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:95

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `comment` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### complete()

```ts
complete(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:79

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### create()

```ts
create(request: CreateUpdateRequestRequest, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `CreateUpdateRequestRequest` |
| `requestId?` | `string` |

#### Returns

`void`

***

### delete()

```ts
delete(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:70

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### dispute()

```ts
dispute(
   id: string, 
   reason: string, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `reason` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<UpdateRequestSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`UpdateRequestSocketEvents`\[`K`\]\> |

#### Returns

`boolean`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`emit`](TypedEventEmitter.md#emit)

***

### get()

```ts
get(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### list()

```ts
list(filter?: unknown, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter?` | `unknown` |
| `requestId?` | `string` |

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

### merge()

```ts
merge(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:82

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### off()

```ts
off<K>(event: K, listener: UpdateRequestSocketEvents[K]): this;
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
| `listener` | `UpdateRequestSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: UpdateRequestSocketEvents[K]): this;
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
| `listener` | `UpdateRequestSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: UpdateRequestSocketEvents[K]): this;
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
| `listener` | `UpdateRequestSocketEvents`\[`K`\] |

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

***

### resolveDispute()

```ts
resolveDispute(
   id: string, 
   resolution: unknown, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:88

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `resolution` | `unknown` |
| `requestId?` | `string` |

#### Returns

`void`

***

### startWork()

```ts
startWork(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:76

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### submit()

```ts
submit(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:73

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### unwatch()

```ts
unwatch(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:101

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`

***

### update()

```ts
update(
   id: string, 
   data: UpdateUpdateRequestRequest, 
   requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:67

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateUpdateRequestRequest` |
| `requestId?` | `string` |

#### Returns

`void`

***

### watch()

```ts
watch(id: string, requestId?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/update-request.socket.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `requestId?` | `string` |

#### Returns

`void`
