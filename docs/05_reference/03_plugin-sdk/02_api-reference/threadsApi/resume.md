---
title: resume
---

# `resume`

```typescript
plugin.threadsApi.resume(threadId: string): Promise<void>
```

Resumes execution of a paused thread.

Reactivates a thread that was previously paused, allowing it to continue
its operations from where it left off. The thread will return to an
active state and continue processing.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread to resume |

## Returns

`Promise<void>` — A promise that resolves when the thread has been resumed

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.resume('threadId');
console.log(result);
```
