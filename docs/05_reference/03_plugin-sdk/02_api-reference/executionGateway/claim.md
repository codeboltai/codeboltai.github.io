---
title: claim
---

# `claim`

```typescript
plugin.executionGateway.claim(): Promise<ExecutionGatewayClaimResponse>
```

Claim exclusive handling of execution requests.
Only one plugin can claim at a time. Returns an error if already claimed.

## Parameters

_No parameters._

## Returns

`Promise<ExecutionGatewayClaimResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.executionGateway.claim();
console.log(result);
```
