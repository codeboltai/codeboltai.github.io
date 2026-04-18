---
title: offRequest
---

# `offRequest`

```typescript
plugin.executionGateway.offRequest(callback: Function): void
```

Remove a previously registered request callback.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.offRequest(/* Function */);
console.log(result);
```
