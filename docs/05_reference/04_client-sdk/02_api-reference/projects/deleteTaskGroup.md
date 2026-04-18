---
name: deleteTaskGroup
cbbaseinfo:
  description: "Permanently deletes a task group.

Removes the task group. Threads previously assigned to this group will become
unassigned but are not deleted."
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: The unique identifier of the task group to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the task group has been deleted
data:
  name: deleteTaskGroup
  category: projects
  link: deleteTaskGroup.md
---
# deleteTaskGroup

```typescript
client.projects.deleteTaskGroup(groupId: string): Promise<void>
```

Permanently deletes a task group.

Removes the task group. Threads previously assigned to this group will become
unassigned but are not deleted.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` | The unique identifier of the task group to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the task group has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.deleteTaskGroup('groupId');
```
