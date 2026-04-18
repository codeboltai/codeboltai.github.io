---
name: deleteTask
cbbaseinfo:
  description: "Deletes a planner task permanently.

Removes a task from the planner. This action cannot be undone. Consider updating the
task status to \"cancelled\" instead if you want to preserve a record of the work."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the task has been deleted
data:
  name: deleteTask
  category: planner
  link: deleteTask.md
---
# deleteTask

```typescript
client.planner.deleteTask(taskId: string): Promise<unknown>
```

Deletes a planner task permanently.

Removes a task from the planner. This action cannot be undone. Consider updating the
task status to "cancelled" instead if you want to preserve a record of the work.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the task has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.deleteTask('taskId');
```
