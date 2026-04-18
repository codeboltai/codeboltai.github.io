---
title: deleteTask
---

# `deleteTask`

```typescript
plugin.task.deleteTask(taskId: string): Promise<object>
```

Deletes a task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID to delete |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.deleteTask('taskId');
console.log(result);
```
