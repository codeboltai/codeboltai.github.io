---
name: offMessage
cbbaseinfo:
  description: Removes the message handler for a specific panel.
cbparameters:
  parameters:
    - name: panelId
      typeName: string
      description: The panel to stop listening to
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: offMessage
  category: dynamicPanel
  link: offMessage.md
---
# offMessage

```typescript
plugin.dynamicPanel.offMessage(panelId: string): void
```

Removes the message handler for a specific panel.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `panelId` | `string` | The panel to stop listening to |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.offMessage('panelId');
```
