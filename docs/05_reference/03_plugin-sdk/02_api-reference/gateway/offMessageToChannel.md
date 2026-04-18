---
title: offMessageToChannel
---

# `offMessageToChannel`

```typescript
plugin.gateway.offMessageToChannel(callback: Function): void
```

Remove a previously registered messageToChannel callback.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.offMessageToChannel(/* Function */);
console.log(result);
```
