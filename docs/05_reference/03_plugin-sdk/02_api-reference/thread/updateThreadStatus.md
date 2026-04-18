---
title: updateThreadStatus
---

# `updateThreadStatus`

```typescript
plugin.thread.updateThreadStatus(threadId: string, status: string): Promise<object>
```

Updates the status of a thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID |
| `status` | `string` | Yes | The new status |

## Returns

`Promise<object>` — A promise that resolves with the thread status update response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.updateThreadStatus('threadId', 'status');
console.log(result);
```
