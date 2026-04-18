---
title: SocketIOClient
---

[**@codebolt/client-sdk**](../index)

***

# Class: SocketIOClient

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:13

## Constructors

### Constructor

```ts
new SocketIOClient(url: string, options: SocketIOClientOptions): SocketIOClient;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `options` | [`SocketIOClientOptions`](../interfaces/SocketIOClientOptions) |

#### Returns

`SocketIOClient`

## Accessors

### isConnected

#### Get Signature

```ts
get isConnected(): boolean;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:23

##### Returns

`boolean`

## Methods

### connect()

```ts
connect(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:27

#### Returns

`Promise`\<`void`\>

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:51

#### Returns

`void`

***

### emit()

```ts
emit(event: string, ...args: unknown[]): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `unknown`[] |

#### Returns

`void`

***

### joinRoom()

```ts
joinRoom(room: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:86

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `room` | `string` |

#### Returns

`void`

***

### leaveRoom()

```ts
leaveRoom(room: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:90

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `room` | `string` |

#### Returns

`void`

***

### off()

```ts
off(event: string, handler?: (...args: unknown[]) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:70

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `handler?` | (...`args`: `unknown`[]) => `void` |

#### Returns

`void`

***

### on()

```ts
on(event: string, handler: (...args: unknown[]) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

`void`

***

### once()

```ts
once(event: string, handler: (...args: unknown[]) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socketio-client.ts:80

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Returns

`void`
