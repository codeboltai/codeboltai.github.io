---
title: markCompleted
---

# `markCompleted`

```typescript
plugin.tasksApi.markCompleted(taskId: string): Promise<Task>
```

Marks a task as completed.

Updates the task's status to indicate that all work has been finished.
This is typically called when a task's objectives have been fully
achieved. Returns the updated task object.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The unique identifier of the task to mark as completed |

## Returns

`Promise<Task>` — A promise that resolves to the updated Task object with completed status

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.markCompleted('taskId');
console.log(result);
```
