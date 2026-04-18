---
title: updateThreadType
---

# `updateThreadType`

```typescript
plugin.chatApi.updateThreadType(data: UpdateThreadTypeRequest): Promise<void>
```

Updates the type of a chat thread.

Changes the thread's type classification, which can affect routing,
display, and agent behavior.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateThreadTypeRequest` | Yes | The type update payload |

## Returns

`Promise<void>` — A promise that resolves when the type has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateThreadType(/* UpdateThreadTypeRequest */);
console.log(result);
```
