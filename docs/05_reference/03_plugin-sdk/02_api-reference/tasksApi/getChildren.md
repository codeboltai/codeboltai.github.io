---
title: getChildren
---

# `getChildren`

```typescript
plugin.tasksApi.getChildren(taskId: string): Promise<Task[]>
```

Retrieves all child tasks of a parent task.

Returns all tasks that have been added as children of the specified
parent task. This provides access to the task's subtasks and allows
for navigation of the task hierarchy.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The unique identifier of the parent task |

## Returns

`Promise<Task[]>` — A promise that resolves to an array of child Task objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.getChildren('taskId');
console.log(result);
```
