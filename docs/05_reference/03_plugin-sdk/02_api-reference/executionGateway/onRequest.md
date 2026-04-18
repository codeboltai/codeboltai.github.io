---
title: onRequest
---

# `onRequest`

```typescript
plugin.executionGateway.onRequest(callback: Function): void
```

Register a callback for incoming execution requests.
These are proxied agent messages that the claiming plugin must handle.
After processing, call sendReply() with the requestId and result.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with each ExecutionRequest |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.onRequest(/* Function */);
console.log(result);
```
