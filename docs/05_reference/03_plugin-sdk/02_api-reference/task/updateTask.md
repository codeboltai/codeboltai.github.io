---
name: updateTask
cbbaseinfo:
  description: Updates an existing task.
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The task ID to update
      isOptional: false
    - name: updates
      typeName: object
      description: The task update parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: updateTask
  category: task
  link: updateTask.md
---
# updateTask

```typescript
plugin.task.updateTask(taskId: string, updates: object): Promise<object>
```

Updates an existing task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID to update |
| `updates` | `object` | The task update parameters |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.updateTask('taskId', /* object */);
```
