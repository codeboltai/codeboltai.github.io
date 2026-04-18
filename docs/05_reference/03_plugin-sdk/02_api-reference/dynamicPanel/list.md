---
name: list
cbbaseinfo:
  description: Lists all currently active DynamicPanels.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<DynamicPanelListResponse>"
    description: ""
data:
  name: list
  category: dynamicPanel
  link: list.md
---
# list

```typescript
plugin.dynamicPanel.list(): Promise<DynamicPanelListResponse>
```

Lists all currently active DynamicPanels.

## Parameters

_None_

## Returns

**`Promise<DynamicPanelListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.list();
```
