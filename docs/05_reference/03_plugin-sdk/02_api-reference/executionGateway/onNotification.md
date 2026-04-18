---
title: onNotification
---

# `onNotification`

```typescript
plugin.executionGateway.onNotification(callback: Function): void
```

Register a callback for execution notifications.
These are broadcast after any locally-executed agent action.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with each ExecutionNotification |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.onNotification(/* Function */);
console.log(result);
```
