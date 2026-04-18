---
name: sendMessage
cbbaseinfo:
  description: Sends a message through the WebSocket connection.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The message to be sent.
      isOptional: false
    - name: payload
      typeName: object
      description: Optional additional payload data.
      isOptional: true
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: sendMessage
  category: chat
  link: sendMessage.md
---
# sendMessage

```typescript
plugin.chat.sendMessage(message: string, payload?: object): void
```

Sends a message through the WebSocket connection.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | The message to be sent. |
| `payload` | `object` _(optional)_ | Optional additional payload data. |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.sendMessage('message');
```
