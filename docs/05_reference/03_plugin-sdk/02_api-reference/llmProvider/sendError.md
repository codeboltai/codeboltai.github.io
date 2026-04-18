---
name: sendError
cbbaseinfo:
  description: Send an error for a completion or stream request.
cbparameters:
  parameters:
    - name: requestId
      typeName: string
      description: ""
      isOptional: false
    - name: error
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: sendError
  category: llmProvider
  link: sendError.md
---
# sendError

```typescript
plugin.llmProvider.sendError(requestId: string, error: string): void
```

Send an error for a completion or stream request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `string` |  |
| `error` | `string` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.sendError('requestId', 'error');
```
