---
name: deleteGroup
cbbaseinfo:
  description: "Deletes a job group.

Removes the group. Jobs previously assigned to this group are not
deleted but lose their group association."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the group to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteGroup
  category: jobs
  link: deleteGroup.md
---
# deleteGroup

```typescript
client.jobs.deleteGroup(id: string): Promise<void>
```

Deletes a job group.

Removes the group. Jobs previously assigned to this group are not
deleted but lose their group association.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the group to delete |

## Returns

**`Promise<void>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.deleteGroup('id');
```
