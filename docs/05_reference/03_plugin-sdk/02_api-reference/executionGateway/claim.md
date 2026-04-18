---
name: claim
cbbaseinfo:
  description: "Claim exclusive handling of execution requests.
Only one plugin can claim at a time. Returns an error if already claimed."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ExecutionGatewayClaimResponse>"
    description: ""
data:
  name: claim
  category: executionGateway
  link: claim.md
---
# claim

```typescript
plugin.executionGateway.claim(): Promise<ExecutionGatewayClaimResponse>
```

Claim exclusive handling of execution requests.
Only one plugin can claim at a time. Returns an error if already claimed.

## Parameters

_None_

## Returns

**`Promise<ExecutionGatewayClaimResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.claim();
```
