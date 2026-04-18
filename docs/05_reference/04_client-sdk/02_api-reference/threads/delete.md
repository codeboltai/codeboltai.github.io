---
name: delete
cbbaseinfo:
  description: "Deletes a thread from the system.

Permanently removes the specified thread and all its associated data.
This action cannot be undone, so use with caution. Deleting a thread
will also remove its relationships with other threads."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been deleted
data:
  name: delete
  category: threads
  link: delete.md
---
# delete

```typescript
client.threads.delete(threadId: string): Promise<void>
```

Deletes a thread from the system.

Permanently removes the specified thread and all its associated data.
This action cannot be undone, so use with caution. Deleting a thread
will also remove its relationships with other threads.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.delete('threadId');
```
