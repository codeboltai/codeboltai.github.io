---
title: getTaskSummary
---

# `getTaskSummary`

```typescript
plugin.task.getTaskSummary(taskId: string): Promise<string | undefined>
```

Gets the summary (description) of a task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |

## Returns

`Promise<string | undefined>` — The task description

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.getTaskSummary('taskId');
console.log(result);
```
