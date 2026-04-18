---
title: createAndStartThread
---

# `createAndStartThread`

```typescript
plugin.thread.createAndStartThread(options: object): Promise<object>
```

Creates and immediately starts a new thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread creation and start parameters |

## Returns

`Promise<object>` — A promise that resolves with the thread start response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.createAndStartThread(/* object */);
console.log(result);
```
