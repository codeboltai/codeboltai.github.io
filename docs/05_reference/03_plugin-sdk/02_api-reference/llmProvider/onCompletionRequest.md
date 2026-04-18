---
name: onCompletionRequest
cbbaseinfo:
  description: "Subscribe to incoming non-streaming completion requests.
Reply with sendReply(requestId, response) or sendError(requestId, error)."
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
  name: onCompletionRequest
  category: llmProvider
  link: onCompletionRequest.md
---
# onCompletionRequest

```typescript
plugin.llmProvider.onCompletionRequest(callback: Function): void
```

Subscribe to incoming non-streaming completion requests.
Reply with sendReply(requestId, response) or sendError(requestId, error).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.onCompletionRequest(/* Function */);
```
