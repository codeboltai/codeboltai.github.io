---
title: updateTask
---

# `updateTask`

```typescript
plugin.task.updateTask(taskId: string, updates: object): Promise<object>
```

Updates an existing task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID to update |
| `updates` | `object` | Yes | The task update parameters |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.updateTask('taskId', /* object */);
console.log(result);
```
