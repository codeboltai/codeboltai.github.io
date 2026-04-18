---
title: offNotification
---

# `offNotification`

```typescript
plugin.executionGateway.offNotification(callback: Function): void
```

Remove a previously registered notification callback.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.offNotification(/* Function */);
console.log(result);
```
