---
name: subscribe
cbbaseinfo:
  description: "Subscribe to execution notifications.
Notifications are broadcast whenever the server handles a message locally."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ExecutionGatewayResponse>"
    description: ""
data:
  name: subscribe
  category: executionGateway
  link: subscribe.md
---
# subscribe

```typescript
plugin.executionGateway.subscribe(): Promise<ExecutionGatewayResponse>
```

Subscribe to execution notifications.
Notifications are broadcast whenever the server handles a message locally.

## Parameters

_None_

## Returns

**`Promise<ExecutionGatewayResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.subscribe();
```
