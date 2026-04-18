---
title: deleteThread
---

# `deleteThread`

```typescript
plugin.thread.deleteThread(threadId: string): Promise<object>
```

Deletes a thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID to delete |

## Returns

`Promise<object>` — A promise that resolves with the thread deletion response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.deleteThread('threadId');
console.log(result);
```
