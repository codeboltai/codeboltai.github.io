---
name: sendReply
cbbaseinfo:
  description: Send a reply for a specific execution request.
cbparameters:
  parameters:
    - name: requestId
      typeName: string
      description: The requestId from the ExecutionRequest
      isOptional: false
    - name: result
      typeName: any
      description: The result object to send back (will be the response to the agent)
      isOptional: false
    - name: success
      typeName: boolean
      description: "Whether the execution succeeded (default: true)"
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: sendReply
  category: executionGateway
  link: sendReply.md
---
# sendReply

```typescript
plugin.executionGateway.sendReply(requestId: string, result: any, success: boolean): void
```

Send a reply for a specific execution request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `string` | The requestId from the ExecutionRequest |
| `result` | `any` | The result object to send back (will be the response to the agent) |
| `success` | `boolean` | Whether the execution succeeded (default: true) Default: `true` |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.sendReply('requestId', /* any */, true);
```
