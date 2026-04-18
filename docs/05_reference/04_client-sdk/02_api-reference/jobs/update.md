---
name: update
cbbaseinfo:
  description: "Updates an existing job.

Modifies job properties such as title, description, status, or
assignee. Only the fields provided in the request body are updated."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job to update
      isOptional: false
    - name: data
      typeName: UpdateJobRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job>"
    description: A promise that resolves to the updated
data:
  name: update
  category: jobs
  link: update.md
---
# update

```typescript
client.jobs.update(id: string, data: UpdateJobRequest): Promise<Job>
```

Updates an existing job.

Modifies job properties such as title, description, status, or
assignee. Only the fields provided in the request body are updated.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job to update |
| `data` | `UpdateJobRequest` | The fields to update |

## Returns

**`Promise<Job>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.update('id', /* UpdateJobRequest */);
```
