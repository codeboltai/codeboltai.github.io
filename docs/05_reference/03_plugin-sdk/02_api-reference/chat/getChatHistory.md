---
name: getChatHistory
cbbaseinfo:
  description: Retrieves the chat history from the server.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatMessage>"
    description: A promise that resolves with an array of ChatMessage objects representing the chat history.
data:
  name: getChatHistory
  category: chat
  link: getChatHistory.md
---
# getChatHistory

```typescript
plugin.chat.getChatHistory(threadId: string): Promise<ChatMessage>
```

Retrieves the chat history from the server.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<ChatMessage>`** — A promise that resolves with an array of ChatMessage objects representing the chat history.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.getChatHistory('threadId');
```
