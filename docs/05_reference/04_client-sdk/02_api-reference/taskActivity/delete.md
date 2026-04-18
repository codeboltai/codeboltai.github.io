---
title: delete
---

# `delete`

```typescript
client.taskActivity.delete(taskId: string): Promise<void>
```

Delete a task activity

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.taskActivity.delete('taskId');
console.log(result);
```
