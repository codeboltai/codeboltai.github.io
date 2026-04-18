---
title: SocketConnectionManager
---

[**@codebolt/client-sdk**](../index)

***

# Class: SocketConnectionManager

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:19

## Constructors

### Constructor

```ts
new SocketConnectionManager(baseUrl: string, config: CodeBoltConfig): SocketConnectionManager;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseUrl` | `string` |
| `config` | [`CodeBoltConfig`](../interfaces/CodeBoltConfig) |

#### Returns

`SocketConnectionManager`

## Methods

### addSubscriptions()

```ts
addSubscriptions(socketNames: string[]): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:87

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketNames` | `string`[] |

#### Returns

`void`

***

### autoConnect()

```ts
autoConnect(preset?: ConnectionPreset): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `preset?` | [`ConnectionPreset`](../enumerations/ConnectionPreset) |

#### Returns

`Promise`\<`void`\>

***

### connect()

```ts
connect(socketNames: string[]): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketNames` | `string`[] |

#### Returns

`Promise`\<`void`\>

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:157

#### Returns

`void`

***

### getActiveConnections()

```ts
getActiveConnections(): string[];
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:153

#### Returns

`string`[]

***

### onAllEvents()

```ts
onAllEvents(callback: (event: SocketEvent) => void): UnsubscribeFn;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:142

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`event`: [`SocketEvent`](../interfaces/SocketEvent)) => `void` |

#### Returns

[`UnsubscribeFn`](../type-aliases/UnsubscribeFn)

***

### onEvents()

```ts
onEvents(filter: EventFilter, callback: (event: SocketEvent) => void): UnsubscribeFn;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:146

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`EventFilter`](../interfaces/EventFilter) |
| `callback` | (`event`: [`SocketEvent`](../interfaces/SocketEvent)) => `void` |

#### Returns

[`UnsubscribeFn`](../type-aliases/UnsubscribeFn)

***

### removeSubscriptions()

```ts
removeSubscriptions(socketNames: string[]): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketNames` | `string`[] |

#### Returns

`void`

***

### sendToSocket()

```ts
sendToSocket(socketName: string, message: unknown): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:109

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketName` | `string` |
| `message` | `unknown` |

#### Returns

`void`

***

### subscribeToSocket()

```ts
subscribeToSocket(socketName: string, params?: Record<string, string>): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:123

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketName` | `string` |
| `params?` | `Record`\<`string`, `string`\> |

#### Returns

`void`

***

### unsubscribeFromSocket()

```ts
unsubscribeFromSocket(socketName: string): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/socket-connection-manager.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketName` | `string` |

#### Returns

`void`
