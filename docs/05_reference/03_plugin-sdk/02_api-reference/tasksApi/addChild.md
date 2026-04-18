---
title: addChild
---

# `addChild`

```typescript
plugin.tasksApi.addChild(taskId: string, data: CreateTaskRequest): Promise<Task>
```

Adds a child task to an existing parent task.

Creates a new task as a child of the specified parent task, establishing
a hierarchical relationship. Child tasks represent subtasks or components
that contribute to completing the parent task. Returns the new child task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The unique identifier of the parent task |
| `data` | `CreateTaskRequest` | Yes | The child task creation request |

## Returns

`Promise<Task>` — A promise that resolves to the newly created child Task object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.addChild('taskId', /* CreateTaskRequest */);
console.log(result);
```
