---
title: WsClient
---

[**@codebolt/client-sdk**](../index)

***

# Class: WsClient

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:10

## Constructors

### Constructor

```ts
new WsClient(url: string, options: WsClientOptions): WsClient;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `options` | [`WsClientOptions`](../interfaces/WsClientOptions) |

#### Returns

`WsClient`

## Accessors

### isConnected

#### Get Signature

```ts
get isConnected(): boolean;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:32

##### Returns

`boolean`

## Methods

### connect()

```ts
connect(queryParams?: Record<string, string>): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `queryParams?` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`void`\>

***

### disconnect()

```ts
disconnect(): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:103

#### Returns

`void`

***

### onClose()

```ts
onClose(handler: () => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:128

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | () => `void` |

#### Returns

`void`

***

### onError()

```ts
onError(handler: (error: Error) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:132

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (`error`: `Error`) => `void` |

#### Returns

`void`

***

### onMessage()

```ts
onMessage(handler: (data: unknown) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (`data`: `unknown`) => `void` |

#### Returns

`void`

***

### removeCloseHandler()

```ts
removeCloseHandler(handler: () => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:140

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | () => `void` |

#### Returns

`void`

***

### removeErrorHandler()

```ts
removeErrorHandler(handler: (error: Error) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:144

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (`error`: `Error`) => `void` |

#### Returns

`void`

***

### removeMessageHandler()

```ts
removeMessageHandler(handler: (data: unknown) => void): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:136

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (`data`: `unknown`) => `void` |

#### Returns

`void`

***

### send()

```ts
send(data: string | object): void;
```

Defined in: CodeBolt/packages/clientsdk/src/core/ws-client.ts:115

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| `object` |

#### Returns

`void`
