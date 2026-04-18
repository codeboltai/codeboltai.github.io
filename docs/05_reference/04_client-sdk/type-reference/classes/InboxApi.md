---
title: InboxApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: InboxApi

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:15

Manages inbox messages for agent-to-user and system-to-user communication.

The inbox serves as a notification center where agents and the system can
post messages that require user attention. Messages progress through
states: unread, acknowledged, and resolved.

## Constructors

### Constructor

```ts
new InboxApi(http: HttpClient): InboxApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`InboxApi`

## Methods

### acknowledge()

```ts
acknowledge(messageId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:93

Acknowledges an inbox message.

Marks a message as seen/acknowledged without resolving it. This
indicates the user is aware of the message but may not have acted
on it yet.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageId` | `string` | The unique identifier of the message to acknowledge |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the message has been acknowledged

#### Example

```typescript
await client.inbox.acknowledge('msg-456');
```

***

### clearResolved()

```ts
clearResolved(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:74

Clears all resolved inbox messages.

Removes messages that have been marked as resolved, cleaning up the
inbox. Unresolved and acknowledged messages are not affected.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the resolved messages have been cleared

#### Example

```typescript
await client.inbox.clearResolved();
```

***

### createMessage()

```ts
createMessage(data: CreateInboxMessageRequest): Promise<InboxMessage>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:57

Creates a new inbox message.

Posts a message to the inbox that will appear as a notification for
the user. Use this to communicate important information, requests
for input, or status updates from agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateInboxMessageRequest` | Message creation payload including title, body, and priority |

#### Returns

`Promise`\<`InboxMessage`\>

A promise that resolves to the newly created InboxMessage

#### Example

```typescript
const msg = await client.inbox.createMessage({
  title: 'Build Complete',
  body: 'The production build finished successfully.',
});
```

***

### getMessages()

```ts
getMessages(params?: InboxMessageListParams): Promise<InboxMessage[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:35

Retrieves all inbox messages.

Returns the full list of messages in the inbox, including unread,
acknowledged, and unresolved messages. Use optional parameters to
filter by status or paginate results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `InboxMessageListParams` | Optional query and filter parameters |

#### Returns

`Promise`\<`InboxMessage`[]\>

A promise that resolves to an array of InboxMessage objects

#### Example

```typescript
const messages = await client.inbox.getMessages({ status: 'unread' });
console.log(`${messages.length} unread messages`);
```

***

### resolve()

```ts
resolve(messageId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/inbox.api.ts:111

Resolves an inbox message.

Marks a message as fully resolved, indicating the user has addressed
it. Resolved messages can later be cleared with [clearResolved](#clearresolved).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageId` | `string` | The unique identifier of the message to resolve |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the message has been resolved

#### Example

```typescript
await client.inbox.resolve('msg-456');
```
