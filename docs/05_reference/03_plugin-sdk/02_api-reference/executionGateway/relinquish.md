---
name: relinquish
cbbaseinfo:
  description: Release the claim on the execution gateway.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ExecutionGatewayResponse>"
    description: ""
data:
  name: relinquish
  category: executionGateway
  link: relinquish.md
---
# relinquish

```typescript
plugin.executionGateway.relinquish(): Promise<ExecutionGatewayResponse>
```

Release the claim on the execution gateway.

## Parameters

_None_

## Returns

**`Promise<ExecutionGatewayResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.relinquish();
```
