---
name: deleteTask
cbbaseinfo:
  description: Deletes a task.
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The task ID to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: deleteTask
  category: task
  link: deleteTask.md
---
# deleteTask

```typescript
plugin.task.deleteTask(taskId: string): Promise<object>
```

Deletes a task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID to delete |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.deleteTask('taskId');
```
