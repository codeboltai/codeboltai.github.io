---
name: update
cbbaseinfo:
  description: "Updates an existing task with new information.

Modifies the specified task with the provided updates. Only the
fields included in the request will be modified; other fields remain
unchanged. Returns the updated task object."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to update
      isOptional: false
    - name: data
      typeName: UpdateTaskRequest
      description: The update request containing fields to modify
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the updated Task object
data:
  name: update
  category: tasksApi
  link: update.md
---
# update

```typescript
plugin.tasksApi.update(taskId: string, data: UpdateTaskRequest): Promise<Task>
```

Updates an existing task with new information.

Modifies the specified task with the provided updates. Only the
fields included in the request will be modified; other fields remain
unchanged. Returns the updated task object.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to update |
| `data` | `UpdateTaskRequest` | The update request containing fields to modify |

## Returns

**`Promise<Task>`** — A promise that resolves to the updated Task object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.update('taskId', /* UpdateTaskRequest */);
```
