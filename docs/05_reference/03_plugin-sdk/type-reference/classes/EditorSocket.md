---
title: EditorSocket
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: EditorSocket

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:11

Editor (Monaco) WebSocket - File operations and folder watching.
Supports readFolder, writeFile, deleteFile, createFile, createFolder,
moveItem, watchFolder, unwatchFolder.

## Extends

- [`TypedEventEmitter`](TypedEventEmitter)\<`EditorSocketEvents`\>

## Constructors

### Constructor

```ts
new EditorSocket(connectionManager: SocketConnectionManager, socketName: string): EditorSocket;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:14

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `connectionManager` | [`SocketConnectionManager`](SocketConnectionManager) | `undefined` |
| `socketName` | `string` | `'monaco'` |

#### Returns

`EditorSocket`

#### Overrides

[`TypedEventEmitter`](TypedEventEmitter).[`constructor`](TypedEventEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="listeners"></a> `listeners` | `protected` | `Map`\<`string` \| `symbol`, `Set`\<(...`args`: `any`[]) => `void`\>\> | [`TypedEventEmitter`](TypedEventEmitter).[`listeners`](TypedEventEmitter.md#listeners) | [CodeBolt/packages/pluginSdk/src/core/event-emitter.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/event-emitter.ts#L24) |

## Methods

### createFile()

```ts
createFile(path: string, content?: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:90

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `content?` | `string` |

#### Returns

`void`

***

### createFolder()

```ts
createFolder(path: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`void`

***

### deleteFile()

```ts
deleteFile(path: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`void`

***

### emit()

```ts
emit<K>(event: K, ...args: Parameters<EditorSocketEvents[K]>): boolean;
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
| ...`args` | `Parameters`\<`EditorSocketEvents`\[`K`\]\> |

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

### moveItem()

```ts
moveItem(oldPath: string, newPath: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:105

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldPath` | `string` |
| `newPath` | `string` |

#### Returns

`void`

***

### off()

```ts
off<K>(event: K, listener: EditorSocketEvents[K]): this;
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
| `listener` | `EditorSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`off`](TypedEventEmitter.md#off)

***

### on()

```ts
on<K>(event: K, listener: EditorSocketEvents[K]): this;
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
| `listener` | `EditorSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`on`](TypedEventEmitter.md#on)

***

### once()

```ts
once<K>(event: K, listener: EditorSocketEvents[K]): this;
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
| `listener` | `EditorSocketEvents`\[`K`\] |

#### Returns

`this`

#### Inherited from

[`TypedEventEmitter`](TypedEventEmitter).[`once`](TypedEventEmitter.md#once)

***

### ping()

```ts
ping(): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:127

#### Returns

`void`

***

### readFolder()

```ts
readFolder(path: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:68

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

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

### unwatchFolder()

```ts
unwatchFolder(path: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:120

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`void`

***

### watchFolder()

```ts
watchFolder(path: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:113

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`void`

***

### writeFile()

```ts
writeFile(path: string, content: string): void;
```

Defined in: CodeBolt/packages/pluginSdk/src/sockets/editor.socket.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `content` | `string` |

#### Returns

`void`
