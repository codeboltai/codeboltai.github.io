---
name: markInProgress
cbbaseinfo:
  description: "Marks a task as in-progress.

Updates the task's status to indicate that work has begun on it.
This is typically called when a task is being actively worked on.
Returns the updated task object."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to mark as in-progress
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the updated Task object with in-progress status
data:
  name: markInProgress
  category: tasksApi
  link: markInProgress.md
---
# markInProgress

```typescript
plugin.tasksApi.markInProgress(taskId: string): Promise<Task>
```

Marks a task as in-progress.

Updates the task's status to indicate that work has begun on it.
This is typically called when a task is being actively worked on.
Returns the updated task object.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to mark as in-progress |

## Returns

**`Promise<Task>`** — A promise that resolves to the updated Task object with in-progress status

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.markInProgress('taskId');
```
