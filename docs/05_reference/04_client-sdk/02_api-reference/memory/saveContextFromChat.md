---
name: saveContextFromChat
cbbaseinfo:
  description: "Saves context extracted from a chat conversation into a context thread.

Captures relevant information, decisions, and knowledge from an ongoing or completed
chat session and persists it in the specified context thread for future reference."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the context thread to save into
      isOptional: false
    - name: data
      typeName: SaveContextFromChatRequest
      description: The chat context extraction payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the context has been saved
data:
  name: saveContextFromChat
  category: memory
  link: saveContextFromChat.md
---
# saveContextFromChat

```typescript
client.memory.saveContextFromChat(threadId: string, data: SaveContextFromChatRequest): Promise<unknown>
```

Saves context extracted from a chat conversation into a context thread.

Captures relevant information, decisions, and knowledge from an ongoing or completed
chat session and persists it in the specified context thread for future reference.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the context thread to save into |
| `data` | `SaveContextFromChatRequest` | The chat context extraction payload |

## Returns

**`Promise<unknown>`** — A promise that resolves when the context has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.saveContextFromChat('threadId', /* SaveContextFromChatRequest */);
```
