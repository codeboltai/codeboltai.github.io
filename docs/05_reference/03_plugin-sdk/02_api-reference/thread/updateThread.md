---
name: updateThread
cbbaseinfo:
  description: Updates an existing thread.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The thread ID to update
      isOptional: false
    - name: updates
      typeName: object
      description: The thread update parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread update response
data:
  name: updateThread
  category: thread
  link: updateThread.md
---
# updateThread

```typescript
plugin.thread.updateThread(threadId: string, updates: object): Promise<object>
```

Updates an existing thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The thread ID to update |
| `updates` | `object` | The thread update parameters |

## Returns

**`Promise<object>`** — A promise that resolves with the thread update response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.updateThread('threadId', /* object */);
```
