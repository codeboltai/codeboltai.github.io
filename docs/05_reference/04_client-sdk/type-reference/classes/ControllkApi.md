---
title: ControllkApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ControllkApi

Defined in: CodeBolt/packages/clientsdk/src/api/controllk.api.ts:10

Provides access to the controllk command interface.

Controllk is a low-level command dispatch endpoint used to send
structured commands directly to the CodeBolt runtime for execution.

## Constructors

### Constructor

```ts
new ControllkApi(http: HttpClient): ControllkApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/controllk.api.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ControllkApi`

## Methods

### send()

```ts
send(data: ControllkCommand): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/controllk.api.ts:27

Sends a command to the controllk endpoint.

Dispatches a structured command for the CodeBolt runtime to execute.
Commands are defined by their type and associated payload.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ControllkCommand` | The command to send, including its type and payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves with the command execution result

#### Example

```typescript
await client.controllk.send({ type: 'refresh', target: 'workspace' });
```
