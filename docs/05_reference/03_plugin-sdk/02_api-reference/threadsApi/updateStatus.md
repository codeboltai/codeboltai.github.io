---
title: updateStatus
---

# `updateStatus`

```typescript
plugin.threadsApi.updateStatus(threadId: string, data: UpdateThreadStatusRequest): Promise<void>
```

Updates the status of a specific thread.

Changes the execution state of the thread to a new status such as active,
paused, or completed. This controls the thread's lifecycle and availability
for execution.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread to update |
| `data` | `UpdateThreadStatusRequest` | Yes | The request containing the new status information |

## Returns

`Promise<void>` — A promise that resolves when the status has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.updateStatus('threadId', /* UpdateThreadStatusRequest */);
console.log(result);
```
