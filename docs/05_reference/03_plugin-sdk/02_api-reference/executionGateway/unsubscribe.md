---
name: unsubscribe
cbbaseinfo:
  description: Unsubscribe from execution notifications.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ExecutionGatewayResponse>"
    description: ""
data:
  name: unsubscribe
  category: executionGateway
  link: unsubscribe.md
---
# unsubscribe

```typescript
plugin.executionGateway.unsubscribe(): Promise<ExecutionGatewayResponse>
```

Unsubscribe from execution notifications.

## Parameters

_None_

## Returns

**`Promise<ExecutionGatewayResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.unsubscribe();
```
