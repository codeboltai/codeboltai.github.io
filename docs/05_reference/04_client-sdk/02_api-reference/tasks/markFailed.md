---
name: markFailed
cbbaseinfo:
  description: "Marks a task as failed.

Updates the task's status to indicate that the task could not be
completed successfully. This is typically called when errors occur or
when task objectives cannot be achieved. Returns the updated task object."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to mark as failed
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the updated Task object with failed status
data:
  name: markFailed
  category: tasks
  link: markFailed.md
---
# markFailed

```typescript
client.tasks.markFailed(taskId: string): Promise<Task>
```

Marks a task as failed.

Updates the task's status to indicate that the task could not be
completed successfully. This is typically called when errors occur or
when task objectives cannot be achieved. Returns the updated task object.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to mark as failed |

## Returns

**`Promise<Task>`** — A promise that resolves to the updated Task object with failed status

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.markFailed('taskId');
```
