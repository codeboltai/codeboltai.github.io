---
name: update
cbbaseinfo:
  description: Replaces the HTML content of an existing DynamicPanel.
cbparameters:
  parameters:
    - name: panelId
      typeName: string
      description: The panel to update
      isOptional: false
    - name: html
      typeName: string
      description: New HTML content
      isOptional: false
  returns:
    signatureTypeName: "Promise<DynamicPanelResponse>"
    description: ""
data:
  name: update
  category: dynamicPanel
  link: update.md
---
# update

```typescript
plugin.dynamicPanel.update(panelId: string, html: string): Promise<DynamicPanelResponse>
```

Replaces the HTML content of an existing DynamicPanel.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `panelId` | `string` | The panel to update |
| `html` | `string` | New HTML content |

## Returns

**`Promise<DynamicPanelResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.update('panelId', 'html');
```
