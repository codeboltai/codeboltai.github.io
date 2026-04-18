---
name: updateTaskGroup
cbbaseinfo:
  description: "Updates an existing task group's properties.

Modifies the task group's name, description, or other metadata."
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: The unique identifier of the task group to update
      isOptional: false
    - name: data
      typeName: UpdateTaskGroupRequest
      description: The fields to update on the task group
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskGroup>"
    description: A promise that resolves to the updated task group
data:
  name: updateTaskGroup
  category: projects
  link: updateTaskGroup.md
---
# updateTaskGroup

```typescript
client.projects.updateTaskGroup(groupId: string, data: UpdateTaskGroupRequest): Promise<TaskGroup>
```

Updates an existing task group's properties.

Modifies the task group's name, description, or other metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` | The unique identifier of the task group to update |
| `data` | `UpdateTaskGroupRequest` | The fields to update on the task group |

## Returns

**`Promise<TaskGroup>`** — A promise that resolves to the updated task group

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.updateTaskGroup('groupId', /* UpdateTaskGroupRequest */);
```
