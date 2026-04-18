---
title: getThreadDetail
---

# `getThreadDetail`

```typescript
plugin.thread.getThreadDetail(options: object): Promise<object>
```

Retrieves detailed information about a specific thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread detail options |

## Returns

`Promise<object>` — A promise that resolves with the thread detail response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.getThreadDetail(/* object */);
console.log(result);
```
