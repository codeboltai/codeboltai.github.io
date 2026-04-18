---
name: storeMessage
cbbaseinfo:
  description: "Stores a new message in a chat thread.

Persists a message to the thread's message history, recording
who sent it and its content."
cbparameters:
  parameters:
    - name: data
      typeName: StoreMessageRequest
      description: The message storage payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatMessage>"
    description: A promise that resolves to the stored ChatMessage
data:
  name: storeMessage
  category: chatApi
  link: storeMessage.md
---
# storeMessage

```typescript
plugin.chatApi.storeMessage(data: StoreMessageRequest): Promise<ChatMessage>
```

Stores a new message in a chat thread.

Persists a message to the thread's message history, recording
who sent it and its content.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StoreMessageRequest` | The message storage payload |

## Returns

**`Promise<ChatMessage>`** — A promise that resolves to the stored ChatMessage

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.storeMessage(/* StoreMessageRequest */);
```
