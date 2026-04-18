---
title: getThreadMessages
---

# `getThreadMessages`

```typescript
plugin.thread.getThreadMessages(options: object): Promise<object>
```

Retrieves messages for a specific thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread messages options |

## Returns

`Promise<object>` — A promise that resolves with the thread messages response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.getThreadMessages(/* object */);
console.log(result);
```
