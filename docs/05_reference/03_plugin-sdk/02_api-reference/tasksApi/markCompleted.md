---
name: markCompleted
cbbaseinfo:
  description: "Marks a task as completed.

Updates the task's status to indicate that all work has been finished.
This is typically called when a task's objectives have been fully
achieved. Returns the updated task object."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to mark as completed
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the updated Task object with completed status
data:
  name: markCompleted
  category: tasksApi
  link: markCompleted.md
---
# markCompleted

```typescript
plugin.tasksApi.markCompleted(taskId: string): Promise<Task>
```

Marks a task as completed.

Updates the task's status to indicate that all work has been finished.
This is typically called when a task's objectives have been fully
achieved. Returns the updated task object.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to mark as completed |

## Returns

**`Promise<Task>`** — A promise that resolves to the updated Task object with completed status

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.markCompleted('taskId');
```
