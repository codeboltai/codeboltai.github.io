---
name: cancel
cbbaseinfo:
  description: "Cancels the execution of a thread.

Terminates the thread's operations and places it in a cancelled state.
Unlike pausing, this action cannot be reversed and the thread will not
continue execution. Use this to stop threads that are no longer needed."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to cancel
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been cancelled
data:
  name: cancel
  category: threads
  link: cancel.md
---
# cancel

```typescript
client.threads.cancel(threadId: string): Promise<void>
```

Cancels the execution of a thread.

Terminates the thread's operations and places it in a cancelled state.
Unlike pausing, this action cannot be reversed and the thread will not
continue execution. Use this to stop threads that are no longer needed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to cancel |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been cancelled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.cancel('threadId');
```
