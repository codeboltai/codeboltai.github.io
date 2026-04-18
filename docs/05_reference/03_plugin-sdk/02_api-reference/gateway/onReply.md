---
name: onReply
cbbaseinfo:
  description: "Register a callback for agent replies.
When an agent sends a response on a gateway-managed thread,
the server pushes a gateway.reply message which triggers this callback."
cbparameters:
  parameters:
    - name: callback
      typeName: Function
      description: Called with the reply text and externalThreadId
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onReply
  category: gateway
  link: onReply.md
---
# onReply

```typescript
plugin.gateway.onReply(callback: Function): void
```

Register a callback for agent replies.
When an agent sends a response on a gateway-managed thread,
the server pushes a gateway.reply message which triggers this callback.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` | Called with the reply text and externalThreadId |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.onReply(/* Function */);
```
