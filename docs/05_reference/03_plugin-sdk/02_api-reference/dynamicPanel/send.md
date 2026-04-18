---
name: send
cbbaseinfo:
  description: "Pushes arbitrary data into the panel's iframe via `postMessage`.
The iframe receives this in its `window.addEventListener('message', ...)` handler."
cbparameters:
  parameters:
    - name: panelId
      typeName: string
      description: The target panel
      isOptional: false
    - name: data
      typeName: any
      description: Any JSON-serializable payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<DynamicPanelResponse>"
    description: ""
data:
  name: send
  category: dynamicPanel
  link: send.md
---
# send

```typescript
plugin.dynamicPanel.send(panelId: string, data: any): Promise<DynamicPanelResponse>
```

Pushes arbitrary data into the panel's iframe via `postMessage`.
The iframe receives this in its `window.addEventListener('message', ...)` handler.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `panelId` | `string` | The target panel |
| `data` | `any` | Any JSON-serializable payload |

## Returns

**`Promise<DynamicPanelResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.send('panelId', /* any */);
```
