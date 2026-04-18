---
name: onMessage
cbbaseinfo:
  description: "Registers a handler for messages coming **from** a specific panel's iframe.
The iframe sends messages via `window.parent.postMessage({ type: '...', data: {...} }, '*')`.

Only one handler per panelId is supported.  Calling this again for the
same panelId replaces the previous handler."
cbparameters:
  parameters:
    - name: panelId
      typeName: string
      description: The panel to listen to
      isOptional: false
    - name: handler
      typeName: Function
      description: Callback receiving the message data
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: onMessage
  category: dynamicPanel
  link: onMessage.md
---
# onMessage

```typescript
plugin.dynamicPanel.onMessage(panelId: string, handler: Function): void
```

Registers a handler for messages coming **from** a specific panel's iframe.
The iframe sends messages via `window.parent.postMessage({ type: '...', data: {...} }, '*')`.

Only one handler per panelId is supported.  Calling this again for the
same panelId replaces the previous handler.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `panelId` | `string` | The panel to listen to |
| `handler` | `Function` | Callback receiving the message data |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.onMessage('panelId', /* Function */);
```
