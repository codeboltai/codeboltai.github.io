---
name: initiateNewThread
cbbaseinfo:
  description: "Initiates a new chat thread or retrieves an existing one.

Creates a new thread if one doesn't exist for the given context,
or returns the existing thread. This is the primary entry point
for starting a conversation."
cbparameters:
  parameters:
    - name: data
      typeName: InitiateNewThreadRequest
      description: The thread initiation request
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadInfo>"
    description: A promise that resolves to the ChatThreadInfo for the new or existing thread
data:
  name: initiateNewThread
  category: chatApi
  link: initiateNewThread.md
---
# initiateNewThread

```typescript
plugin.chatApi.initiateNewThread(data: InitiateNewThreadRequest): Promise<ChatThreadInfo>
```

Initiates a new chat thread or retrieves an existing one.

Creates a new thread if one doesn't exist for the given context,
or returns the existing thread. This is the primary entry point
for starting a conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InitiateNewThreadRequest` | The thread initiation request |

## Returns

**`Promise<ChatThreadInfo>`** — A promise that resolves to the ChatThreadInfo for the new or existing thread

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.initiateNewThread(/* InitiateNewThreadRequest */);
```
