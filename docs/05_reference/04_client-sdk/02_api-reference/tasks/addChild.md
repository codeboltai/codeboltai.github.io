---
name: addChild
cbbaseinfo:
  description: "Adds a child task to an existing parent task.

Creates a new task as a child of the specified parent task, establishing
a hierarchical relationship. Child tasks represent subtasks or components
that contribute to completing the parent task. Returns the new child task."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the parent task
      isOptional: false
    - name: data
      typeName: CreateTaskRequest
      description: The child task creation request
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the newly created child Task object
data:
  name: addChild
  category: tasks
  link: addChild.md
---
# addChild

```typescript
client.tasks.addChild(taskId: string, data: CreateTaskRequest): Promise<Task>
```

Adds a child task to an existing parent task.

Creates a new task as a child of the specified parent task, establishing
a hierarchical relationship. Child tasks represent subtasks or components
that contribute to completing the parent task. Returns the new child task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the parent task |
| `data` | `CreateTaskRequest` | The child task creation request |

## Returns

**`Promise<Task>`** — A promise that resolves to the newly created child Task object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.addChild('taskId', /* CreateTaskRequest */);
```
