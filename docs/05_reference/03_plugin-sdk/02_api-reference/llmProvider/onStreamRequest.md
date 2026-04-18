---
name: onStreamRequest
cbbaseinfo:
  description: "Subscribe to incoming streaming completion requests.
Stream tokens with sendChunk(requestId, chunk), then finalize with
sendReply(requestId, finalResponse) or sendError(requestId, error)."
cbparameters:
  parameters:
    - name: callback
      typeName: Function
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onStreamRequest
  category: llmProvider
  link: onStreamRequest.md
---
# onStreamRequest

```typescript
plugin.llmProvider.onStreamRequest(callback: Function): void
```

Subscribe to incoming streaming completion requests.
Stream tokens with sendChunk(requestId, chunk), then finalize with
sendReply(requestId, finalResponse) or sendError(requestId, error).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.onStreamRequest(/* Function */);
```
