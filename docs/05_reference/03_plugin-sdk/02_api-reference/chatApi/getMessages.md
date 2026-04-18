---
name: getMessages
cbbaseinfo:
  description: "Retrieves all messages for a specific thread.

Returns the complete message history for the given thread,
ordered chronologically."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatMessage[]>"
    description: A promise that resolves to an array of ChatMessage objects
data:
  name: getMessages
  category: chatApi
  link: getMessages.md
---
# getMessages

```typescript
plugin.chatApi.getMessages(threadId: string): Promise<ChatMessage[]>
```

Retrieves all messages for a specific thread.

Returns the complete message history for the given thread,
ordered chronologically.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<ChatMessage[]>`** — A promise that resolves to an array of ChatMessage objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.getMessages('threadId');
```
