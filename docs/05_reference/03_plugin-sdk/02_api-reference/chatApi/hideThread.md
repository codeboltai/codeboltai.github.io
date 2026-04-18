---
title: hideThread
---

# `hideThread`

```typescript
plugin.chatApi.hideThread(data: ThreadIdRequest): Promise<void>
```

Hides a thread from the user interface.

Removes the thread from the visible thread list without deleting it.
The thread data is preserved and can be restored later.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ThreadIdRequest` | Yes | The thread identifier |

## Returns

`Promise<void>` — A promise that resolves when the thread has been hidden

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.hideThread(/* ThreadIdRequest */);
console.log(result);
```
