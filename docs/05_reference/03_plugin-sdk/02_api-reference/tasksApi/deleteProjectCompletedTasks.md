---
name: deleteProjectCompletedTasks
cbbaseinfo:
  description: "Deletes all completed tasks for a specific project.

Removes all tasks with 'completed' status that belong to the specified
project. Use this for cleanup operations to maintain a lean task
history. This operation cannot be undone."
cbparameters:
  parameters:
    - name: projectPath
      typeName: string
      description: The filesystem path identifying the target project
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the completed tasks have been deleted
data:
  name: deleteProjectCompletedTasks
  category: tasksApi
  link: deleteProjectCompletedTasks.md
---
# deleteProjectCompletedTasks

```typescript
plugin.tasksApi.deleteProjectCompletedTasks(projectPath: string): Promise<void>
```

Deletes all completed tasks for a specific project.

Removes all tasks with 'completed' status that belong to the specified
project. Use this for cleanup operations to maintain a lean task
history. This operation cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `projectPath` | `string` | The filesystem path identifying the target project |

## Returns

**`Promise<void>`** — A promise that resolves when the completed tasks have been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.deleteProjectCompletedTasks('projectPath');
```
