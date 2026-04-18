---
name: offNotification
cbbaseinfo:
  description: Remove a previously registered notification callback.
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
  name: offNotification
  category: executionGateway
  link: offNotification.md
---
# offNotification

```typescript
plugin.executionGateway.offNotification(callback: Function): void
```

Remove a previously registered notification callback.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.executionGateway.offNotification(/* Function */);
```
