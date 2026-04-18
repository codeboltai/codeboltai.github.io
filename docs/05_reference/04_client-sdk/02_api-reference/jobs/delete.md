---
name: delete
cbbaseinfo:
  description: "Deletes a job.

Permanently removes a job and its associated data. Dependencies
pointing to this job are also cleaned up."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when deletion is complete
data:
  name: delete
  category: jobs
  link: delete.md
---
# delete

```typescript
client.jobs.delete(id: string): Promise<void>
```

Deletes a job.

Permanently removes a job and its associated data. Dependencies
pointing to this job are also cleaned up.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job to delete |

## Returns

**`Promise<void>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.delete('id');
```
