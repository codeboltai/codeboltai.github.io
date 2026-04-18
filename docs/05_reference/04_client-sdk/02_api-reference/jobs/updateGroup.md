---
name: updateGroup
cbbaseinfo:
  description: "Updates an existing job group.

Modifies group properties such as name, description, or metadata."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the group to update
      isOptional: false
    - name: data
      typeName: UpdateJobGroupRequest
      description: The fields to update on the group
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobGroup>"
    description: A promise that resolves to the updated
data:
  name: updateGroup
  category: jobs
  link: updateGroup.md
---
# updateGroup

```typescript
client.jobs.updateGroup(id: string, data: UpdateJobGroupRequest): Promise<JobGroup>
```

Updates an existing job group.

Modifies group properties such as name, description, or metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the group to update |
| `data` | `UpdateJobGroupRequest` | The fields to update on the group |

## Returns

**`Promise<JobGroup>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.updateGroup('id', /* UpdateJobGroupRequest */);
```
