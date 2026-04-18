---
title: relinquish
---

# `relinquish`

```typescript
plugin.executionGateway.relinquish(): Promise<ExecutionGatewayResponse>
```

Release the claim on the execution gateway.

## Parameters

_No parameters._

## Returns

`Promise<ExecutionGatewayResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.relinquish();
console.log(result);
```
