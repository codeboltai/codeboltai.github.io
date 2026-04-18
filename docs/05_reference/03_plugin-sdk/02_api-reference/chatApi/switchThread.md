---
title: switchThread
---

# `switchThread`

```typescript
plugin.chatApi.switchThread(data: ThreadIdRequest): Promise<void>
```

Switches to a different chat thread.

Changes the active conversation context to the specified thread,
triggering any associated UI updates.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ThreadIdRequest` | Yes | The thread identifier to switch to |

## Returns

`Promise<void>` — A promise that resolves when the switch is complete

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.switchThread(/* ThreadIdRequest */);
console.log(result);
```
