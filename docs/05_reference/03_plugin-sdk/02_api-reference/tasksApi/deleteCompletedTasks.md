---
title: deleteCompletedTasks
---

# `deleteCompletedTasks`

```typescript
plugin.tasksApi.deleteCompletedTasks(): Promise<void>
```

Deletes all completed tasks across all projects.

Removes every task with 'completed' status in the entire system.
This is a global cleanup operation that affects all projects.
Use with caution as this operation cannot be undone.

## Parameters

_No parameters._

## Returns

`Promise<void>` — A promise that resolves when all completed tasks have been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.deleteCompletedTasks();
console.log(result);
```
