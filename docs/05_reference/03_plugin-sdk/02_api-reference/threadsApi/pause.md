---
title: pause
---

# `pause`

```typescript
plugin.threadsApi.pause(threadId: string): Promise<void>
```

Pauses the execution of a running thread.

Suspends the thread's current operations and places it in a paused state.
The thread can be resumed later using the resume method. Use this to
temporarily halt execution without cancelling the thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread to pause |

## Returns

`Promise<void>` — A promise that resolves when the thread has been paused

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.pause('threadId');
console.log(result);
```
