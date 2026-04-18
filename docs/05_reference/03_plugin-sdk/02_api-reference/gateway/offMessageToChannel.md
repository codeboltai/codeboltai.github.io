---
name: offMessageToChannel
cbbaseinfo:
  description: Remove a previously registered messageToChannel callback.
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
  name: offMessageToChannel
  category: gateway
  link: offMessageToChannel.md
---
# offMessageToChannel

```typescript
plugin.gateway.offMessageToChannel(callback: Function): void
```

Remove a previously registered messageToChannel callback.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.offMessageToChannel(/* Function */);
```
