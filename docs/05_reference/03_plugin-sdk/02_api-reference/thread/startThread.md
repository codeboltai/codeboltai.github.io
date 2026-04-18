---
title: startThread
---

# `startThread`

```typescript
plugin.thread.startThread(threadId: string): Promise<object>
```

Starts a thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID to start |

## Returns

`Promise<object>` — A promise that resolves with the thread start response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.startThread('threadId');
console.log(result);
```
