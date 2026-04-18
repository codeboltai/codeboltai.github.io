---
name: bulkDelete
cbbaseinfo:
  description: "Deletes multiple jobs in a single batch operation.

More efficient than deleting jobs one at a time when you need to
remove several jobs simultaneously."
cbparameters:
  parameters:
    - name: data
      typeName: BulkDeleteJobsRequest
      description: Payload containing the array of job IDs to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all specified jobs have been deleted
data:
  name: bulkDelete
  category: jobs
  link: bulkDelete.md
---
# bulkDelete

```typescript
client.jobs.bulkDelete(data: BulkDeleteJobsRequest): Promise<void>
```

Deletes multiple jobs in a single batch operation.

More efficient than deleting jobs one at a time when you need to
remove several jobs simultaneously.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkDeleteJobsRequest` | Payload containing the array of job IDs to delete |

## Returns

**`Promise<void>`** — A promise that resolves when all specified jobs have been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.bulkDelete(/* BulkDeleteJobsRequest */);
```
