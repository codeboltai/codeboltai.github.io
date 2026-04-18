---
title: createThread
---

# `createThread`

```typescript
plugin.thread.createThread(options: object): Promise<object>
```

Creates a new thread with comprehensive options.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread creation parameters |

## Returns

`Promise<object>` — A promise that resolves with the thread creation response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.createThread(/* object */);
console.log(result);
```
