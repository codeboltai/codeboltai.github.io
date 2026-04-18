---
name: pause
cbbaseinfo:
  description: "Pauses the execution of a running thread.

Suspends the thread's current operations and places it in a paused state.
The thread can be resumed later using the resume method. Use this to
temporarily halt execution without cancelling the thread."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to pause
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been paused
data:
  name: pause
  category: threads
  link: pause.md
---
# pause

```typescript
client.threads.pause(threadId: string): Promise<void>
```

Pauses the execution of a running thread.

Suspends the thread's current operations and places it in a paused state.
The thread can be resumed later using the resume method. Use this to
temporarily halt execution without cancelling the thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to pause |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been paused

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.pause('threadId');
```
