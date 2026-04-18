---
name: startThread
cbbaseinfo:
  description: Starts a thread.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The thread ID to start
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread start response
data:
  name: startThread
  category: thread
  link: startThread.md
---
# startThread

```typescript
plugin.thread.startThread(threadId: string): Promise<object>
```

Starts a thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The thread ID to start |

## Returns

**`Promise<object>`** — A promise that resolves with the thread start response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.startThread('threadId');
```
