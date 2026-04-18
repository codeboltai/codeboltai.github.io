---
title: offReply
---

# `offReply`

```typescript
plugin.gateway.offReply(callback: Function): void
```

Remove a previously registered reply callback.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.offReply(/* Function */);
console.log(result);
```
