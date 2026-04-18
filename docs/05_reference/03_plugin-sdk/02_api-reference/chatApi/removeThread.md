---
name: removeThread
cbbaseinfo:
  description: "Removes a thread.

Removes the specified thread from the chat system. This is a
soft-delete that marks the thread as removed."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadIdRequest
      description: The thread identifier
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been removed
data:
  name: removeThread
  category: chatApi
  link: removeThread.md
---
# removeThread

```typescript
plugin.chatApi.removeThread(data: ThreadIdRequest): Promise<void>
```

Removes a thread.

Removes the specified thread from the chat system. This is a
soft-delete that marks the thread as removed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadIdRequest` | The thread identifier |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been removed

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.removeThread(/* ThreadIdRequest */);
```
