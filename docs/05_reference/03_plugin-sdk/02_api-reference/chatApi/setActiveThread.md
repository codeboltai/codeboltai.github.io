---
title: setActiveThread
---

# `setActiveThread`

```typescript
plugin.chatApi.setActiveThread(data: SetActiveThreadRequest): Promise<void>
```

Sets the active chat thread.

Switches the current focus to the specified thread, making it the
primary conversation context for subsequent operations.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SetActiveThreadRequest` | Yes | The active thread selection |

## Returns

`Promise<void>` — A promise that resolves when the active thread has been set

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.setActiveThread(/* SetActiveThreadRequest */);
console.log(result);
```
