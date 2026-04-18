---
name: offRequest
cbbaseinfo:
  description: Remove a previously registered request callback.
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
  name: offRequest
  category: executionGateway
  link: offRequest.md
---
# offRequest

```typescript
plugin.executionGateway.offRequest(callback: Function): void
```

Remove a previously registered request callback.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.offRequest(/* Function */);
```
