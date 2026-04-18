---
title: deleteThread
---

# `deleteThread`

```typescript
plugin.chatApi.deleteThread(data: ThreadIdRequest): Promise<void>
```

Deletes a chat thread.

Permanently removes the specified thread and all its associated
messages and steps.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ThreadIdRequest` | Yes | The thread identifier |

## Returns

`Promise<void>` — A promise that resolves when the thread has been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.deleteThread(/* ThreadIdRequest */);
console.log(result);
```
