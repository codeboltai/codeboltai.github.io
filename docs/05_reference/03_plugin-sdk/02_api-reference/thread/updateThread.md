---
title: updateThread
---

# `updateThread`

```typescript
plugin.thread.updateThread(threadId: string, updates: object): Promise<object>
```

Updates an existing thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID to update |
| `updates` | `object` | Yes | The thread update parameters |

## Returns

`Promise<object>` — A promise that resolves with the thread update response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.updateThread('threadId', /* object */);
console.log(result);
```
