---
title: updateThreadName
---

# `updateThreadName`

```typescript
plugin.chatApi.updateThreadName(data: UpdateThreadNameRequest): Promise<void>
```

Updates the display name of a chat thread.

Changes the human-readable name shown in the thread list.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateThreadNameRequest` | Yes | The name update payload |

## Returns

`Promise<void>` — A promise that resolves when the name has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateThreadName(/* UpdateThreadNameRequest */);
console.log(result);
```
