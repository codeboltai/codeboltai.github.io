---
title: updateThreadLocation
---

# `updateThreadLocation`

```typescript
plugin.chatApi.updateThreadLocation(data: UpdateThreadLocationRequest): Promise<void>
```

Updates the location context of a chat thread.

Associates the thread with a specific file path or project location,
providing context for the conversation.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateThreadLocationRequest` | Yes | The location update payload |

## Returns

`Promise<void>` — A promise that resolves when the location has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateThreadLocation(/* UpdateThreadLocationRequest */);
console.log(result);
```
