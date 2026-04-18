---
name: onRequest
cbbaseinfo:
  description: "Register a callback for incoming execution requests.
These are proxied agent messages that the claiming plugin must handle.
After processing, call sendReply() with the requestId and result."
cbparameters:
  parameters:
    - name: callback
      typeName: Function
      description: Called with each ExecutionRequest
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onRequest
  category: executionGateway
  link: onRequest.md
---
# onRequest

```typescript
plugin.executionGateway.onRequest(callback: Function): void
```

Register a callback for incoming execution requests.
These are proxied agent messages that the claiming plugin must handle.
After processing, call sendReply() with the requestId and result.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` | Called with each ExecutionRequest |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.onRequest(/* Function */);
```
