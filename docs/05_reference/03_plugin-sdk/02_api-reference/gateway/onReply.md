---
title: onReply
---

# `onReply`

```typescript
plugin.gateway.onReply(callback: Function): void
```

Register a callback for agent replies.
When an agent sends a response on a gateway-managed thread,
the server pushes a gateway.reply message which triggers this callback.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with the reply text and externalThreadId |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.onReply(/* Function */);
console.log(result);
```
