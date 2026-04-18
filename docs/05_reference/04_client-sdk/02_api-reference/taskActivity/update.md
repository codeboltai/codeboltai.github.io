---
title: update
---

# `update`

```typescript
client.taskActivity.update(taskId: string, data: UpdateTaskActivityRequest): Promise<TaskActivity>
```

Update a task activity

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes |  |
| `data` | `UpdateTaskActivityRequest` | Yes |  |

## Returns

`Promise<TaskActivity>`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.taskActivity.update('taskId', /* UpdateTaskActivityRequest */);
console.log(result);
```
