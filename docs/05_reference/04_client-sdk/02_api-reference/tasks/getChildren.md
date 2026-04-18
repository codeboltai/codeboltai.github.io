---
name: getChildren
cbbaseinfo:
  description: "Retrieves all child tasks of a parent task.

Returns all tasks that have been added as children of the specified
parent task. This provides access to the task's subtasks and allows
for navigation of the task hierarchy."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the parent task
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task[]>"
    description: A promise that resolves to an array of child Task objects
data:
  name: getChildren
  category: tasks
  link: getChildren.md
---
# getChildren

```typescript
client.tasks.getChildren(taskId: string): Promise<Task[]>
```

Retrieves all child tasks of a parent task.

Returns all tasks that have been added as children of the specified
parent task. This provides access to the task's subtasks and allows
for navigation of the task hierarchy.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the parent task |

## Returns

**`Promise<Task[]>`** — A promise that resolves to an array of child Task objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.getChildren('taskId');
```
