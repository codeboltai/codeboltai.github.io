---
title: getTaskStatus
---

# `getTaskStatus`

```typescript
plugin.task.getTaskStatus(taskId: string): Promise<string | undefined>
```

Gets the status of a task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |

## Returns

`Promise<string | undefined>` — The task status

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.getTaskStatus('taskId');
console.log(result);
```
