---
name: bulkDelete
cbbaseinfo:
  description: "Deletes multiple threads in a single operation.

Removes the specified threads from the system in a bulk operation.
This is more efficient than deleting threads individually and ensures
atomic deletion of multiple threads."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadBulkDeleteRequest
      description: The bulk delete request containing thread IDs to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all threads have been deleted
data:
  name: bulkDelete
  category: threads
  link: bulkDelete.md
---
# bulkDelete

```typescript
client.threads.bulkDelete(data: ThreadBulkDeleteRequest): Promise<void>
```

Deletes multiple threads in a single operation.

Removes the specified threads from the system in a bulk operation.
This is more efficient than deleting threads individually and ensures
atomic deletion of multiple threads.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadBulkDeleteRequest` | The bulk delete request containing thread IDs to delete |

## Returns

**`Promise<void>`** — A promise that resolves when all threads have been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.bulkDelete(/* ThreadBulkDeleteRequest */);
```
