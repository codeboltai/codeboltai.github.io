---
name: deleteCompletedTasks
cbbaseinfo:
  description: "Deletes all completed tasks across all projects.

Removes every task with 'completed' status in the entire system.
This is a global cleanup operation that affects all projects.
Use with caution as this operation cannot be undone."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all completed tasks have been deleted
data:
  name: deleteCompletedTasks
  category: tasksApi
  link: deleteCompletedTasks.md
---
# deleteCompletedTasks

```typescript
plugin.tasksApi.deleteCompletedTasks(): Promise<void>
```

Deletes all completed tasks across all projects.

Removes every task with 'completed' status in the entire system.
This is a global cleanup operation that affects all projects.
Use with caution as this operation cannot be undone.

## Parameters

_None_

## Returns

**`Promise<void>`** — A promise that resolves when all completed tasks have been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.deleteCompletedTasks();
```
