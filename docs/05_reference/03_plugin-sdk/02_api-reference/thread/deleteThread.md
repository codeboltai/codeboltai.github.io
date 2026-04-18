---
name: deleteThread
cbbaseinfo:
  description: Deletes a thread.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The thread ID to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread deletion response
data:
  name: deleteThread
  category: thread
  link: deleteThread.md
---
# deleteThread

```typescript
plugin.thread.deleteThread(threadId: string): Promise<object>
```

Deletes a thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The thread ID to delete |

## Returns

**`Promise<object>`** — A promise that resolves with the thread deletion response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.deleteThread('threadId');
```
