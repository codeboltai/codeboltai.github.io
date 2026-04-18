---
name: createThread
cbbaseinfo:
  description: "Creates a new chat thread.

Provisions a new thread with the specified configuration, without
the automatic lookup behavior of initiateNewThread."
cbparameters:
  parameters:
    - name: data
      typeName: CreateChatThreadRequest
      description: The thread creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadInfo>"
    description: A promise that resolves to the newly created ChatThreadInfo
data:
  name: createThread
  category: chatApi
  link: createThread.md
---
# createThread

```typescript
plugin.chatApi.createThread(data: CreateChatThreadRequest): Promise<ChatThreadInfo>
```

Creates a new chat thread.

Provisions a new thread with the specified configuration, without
the automatic lookup behavior of initiateNewThread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateChatThreadRequest` | The thread creation payload |

## Returns

**`Promise<ChatThreadInfo>`** — A promise that resolves to the newly created ChatThreadInfo

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.createThread(/* CreateChatThreadRequest */);
```
