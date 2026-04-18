---
title: getMessages
---

# `getMessages`

```typescript
plugin.chatApi.getMessages(threadId: string): Promise<ChatMessage[]>
```

Retrieves all messages for a specific thread.

Returns the complete message history for the given thread,
ordered chronologically.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |

## Returns

`Promise<ChatMessage[]>` — A promise that resolves to an array of ChatMessage objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.getMessages('threadId');
console.log(result);
```
