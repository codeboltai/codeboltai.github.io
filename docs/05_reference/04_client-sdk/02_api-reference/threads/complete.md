---
name: complete
cbbaseinfo:
  description: "Marks a thread as completed.

Sets the thread's status to completed, indicating that its execution
has finished successfully. This is typically done automatically by
the thread, but can be called manually when needed."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to complete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been marked complete
data:
  name: complete
  category: threads
  link: complete.md
---
# complete

```typescript
client.threads.complete(threadId: string): Promise<void>
```

Marks a thread as completed.

Sets the thread's status to completed, indicating that its execution
has finished successfully. This is typically done automatically by
the thread, but can be called manually when needed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to complete |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been marked complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.complete('threadId');
```
