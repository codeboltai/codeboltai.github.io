---
name: offReply
cbbaseinfo:
  description: Remove a previously registered reply callback.
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
  name: offReply
  category: gateway
  link: offReply.md
---
# offReply

```typescript
plugin.gateway.offReply(callback: Function): void
```

Remove a previously registered reply callback.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.offReply(/* Function */);
```
