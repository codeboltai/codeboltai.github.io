---
title: IconViewApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: IconViewApi

Defined in: CodeBolt/packages/clientsdk/src/api/icon-view.api.ts:11

Provides access to the icon view conversation history and messages.

The icon view displays a compact, icon-based representation of agent
conversations. Use this API to retrieve history entries and individual
messages for rendering in the icon view UI.

## Constructors

### Constructor

```ts
new IconViewApi(http: HttpClient): IconViewApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/icon-view.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`IconViewApi`

## Methods

### batchHistory()

```ts
batchHistory(data: BatchIconViewHistoryRequest): Promise<Record<string, IconViewHistoryEntry[]>>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/icon-view.api.ts:50

Retrieves icon view history for multiple threads in a single request.

More efficient than calling [getHistory](#gethistory) individually for each
thread when you need history for several threads at once.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BatchIconViewHistoryRequest` | Request containing the list of thread IDs to fetch history for |

#### Returns

`Promise`\<`Record`\<`string`, `IconViewHistoryEntry`[]\>\>

A promise that resolves to a record mapping thread IDs to their IconViewHistoryEntry arrays

#### Example

```typescript
const batch = await client.iconView.batchHistory({
  threadIds: ['thread-abc', 'thread-def'],
});
const abcHistory = batch['thread-abc'];
```

***

### getHistory()

```ts
getHistory(threadId: string): Promise<IconViewHistoryEntry[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/icon-view.api.ts:29

Retrieves the icon view history for a specific conversation thread.

Returns a chronologically ordered list of history entries representing
the actions and messages that occurred within the thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the conversation thread |

#### Returns

`Promise`\<`IconViewHistoryEntry`[]\>

A promise that resolves to an array of IconViewHistoryEntry objects

#### Example

```typescript
const history = await client.iconView.getHistory('thread-abc');
history.forEach(entry => console.log(entry.type, entry.timestamp));
```

***

### getMessage()

```ts
getMessage(threadId: string, messageId: string): Promise<IconViewMessage>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/icon-view.api.ts:70

Retrieves a specific message from a conversation thread's icon view.

Returns the full details of a single message including its content,
metadata, and any associated icon view display information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the conversation thread |
| `messageId` | `string` | The unique identifier of the message within the thread |

#### Returns

`Promise`\<`IconViewMessage`\>

A promise that resolves to the IconViewMessage

#### Example

```typescript
const message = await client.iconView.getMessage('thread-abc', 'msg-001');
console.log(message.content);
```
