---
title: getByThread
---

# `getByThread`

```typescript
client.taskActivity.getByThread(threadId: string): Promise<TaskActivity[]>
```

Get activities by thread ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<TaskActivity[]>`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.taskActivity.getByThread('threadId');
console.log(result);
```
