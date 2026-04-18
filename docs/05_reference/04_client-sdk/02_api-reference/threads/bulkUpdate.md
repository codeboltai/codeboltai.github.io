---
name: bulkUpdate
cbbaseinfo:
  description: "Updates multiple threads in a single operation.

Performs bulk modifications across multiple threads simultaneously.
This is more efficient than updating threads individually when you need
to apply the same changes to many threads."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadBulkUpdateRequest
      description: The bulk update request containing thread IDs and updates
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all threads have been updated
data:
  name: bulkUpdate
  category: threads
  link: bulkUpdate.md
---
# bulkUpdate

```typescript
client.threads.bulkUpdate(data: ThreadBulkUpdateRequest): Promise<void>
```

Updates multiple threads in a single operation.

Performs bulk modifications across multiple threads simultaneously.
This is more efficient than updating threads individually when you need
to apply the same changes to many threads.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadBulkUpdateRequest` | The bulk update request containing thread IDs and updates |

## Returns

**`Promise<void>`** — A promise that resolves when all threads have been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.bulkUpdate(/* ThreadBulkUpdateRequest */);
```
