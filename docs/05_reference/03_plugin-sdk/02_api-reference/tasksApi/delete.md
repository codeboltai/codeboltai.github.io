---
name: delete
cbbaseinfo:
  description: "Permanently deletes a task from the system.

Removes the specified task and all its associated data. If the task
has child tasks, they may be affected depending on system configuration.
This operation cannot be undone."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the task has been deleted
data:
  name: delete
  category: tasksApi
  link: delete.md
---
# delete

```typescript
plugin.tasksApi.delete(taskId: string): Promise<void>
```

Permanently deletes a task from the system.

Removes the specified task and all its associated data. If the task
has child tasks, they may be affected depending on system configuration.
This operation cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the task has been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.delete('taskId');
```
