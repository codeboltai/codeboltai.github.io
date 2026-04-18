---
title: getChatHistory
---

# `getChatHistory`

```typescript
plugin.chat.getChatHistory(threadId: string): Promise<ChatMessage>
```

Retrieves the chat history from the server.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<ChatMessage>` — A promise that resolves with an array of ChatMessage objects representing the chat history.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.getChatHistory('threadId');
console.log(result);
```
