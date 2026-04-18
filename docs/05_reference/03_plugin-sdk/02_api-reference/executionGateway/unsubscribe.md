---
title: unsubscribe
---

# `unsubscribe`

```typescript
plugin.executionGateway.unsubscribe(): Promise<ExecutionGatewayResponse>
```

Unsubscribe from execution notifications.

## Parameters

_No parameters._

## Returns

`Promise<ExecutionGatewayResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.unsubscribe();
console.log(result);
```
