---
title: getThreadList
---

# `getThreadList`

```typescript
plugin.thread.getThreadList(options: object): Promise<object>
```

Retrieves a list of threads with optional filtering.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | Optional filters for threads _(default: `{}`)_ |

## Returns

`Promise<object>` — A promise that resolves with the thread list response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.getThreadList(/* object */);
console.log(result);
```
