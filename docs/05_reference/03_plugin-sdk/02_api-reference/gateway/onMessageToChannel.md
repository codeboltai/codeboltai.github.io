---
name: onMessageToChannel
cbbaseinfo:
  description: "Register a callback for proactive messages from the application.
When the server wants to send a notification/message to a platform user,
it pushes a gateway.messageToChannel event which triggers this callback."
cbparameters:
  parameters:
    - name: callback
      typeName: Function
      description: Called with targetId, text, and optional metadata
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onMessageToChannel
  category: gateway
  link: onMessageToChannel.md
---
# onMessageToChannel

```typescript
plugin.gateway.onMessageToChannel(callback: Function): void
```

Register a callback for proactive messages from the application.
When the server wants to send a notification/message to a platform user,
it pushes a gateway.messageToChannel event which triggers this callback.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `callback` | `Function` | Called with targetId, text, and optional metadata |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.onMessageToChannel(/* Function */);
```
