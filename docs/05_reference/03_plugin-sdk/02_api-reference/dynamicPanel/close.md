---
name: close
cbbaseinfo:
  description: Closes a DynamicPanel and removes it from the UI.
cbparameters:
  parameters:
    - name: panelId
      typeName: string
      description: The panel to close
      isOptional: false
  returns:
    signatureTypeName: "Promise<DynamicPanelResponse>"
    description: ""
data:
  name: close
  category: dynamicPanel
  link: close.md
---
# close

```typescript
plugin.dynamicPanel.close(panelId: string): Promise<DynamicPanelResponse>
```

Closes a DynamicPanel and removes it from the UI.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `panelId` | `string` | The panel to close |

## Returns

**`Promise<DynamicPanelResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.close('panelId');
```
