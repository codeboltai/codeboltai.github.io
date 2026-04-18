---
title: update
---

# `update`

```typescript
plugin.tasksApi.update(taskId: string, data: UpdateTaskRequest): Promise<Task>
```

Updates an existing task with new information.

Modifies the specified task with the provided updates. Only the
fields included in the request will be modified; other fields remain
unchanged. Returns the updated task object.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The unique identifier of the task to update |
| `data` | `UpdateTaskRequest` | Yes | The update request containing fields to modify |

## Returns

`Promise<Task>` — A promise that resolves to the updated Task object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.update('taskId', /* UpdateTaskRequest */);
console.log(result);
```
