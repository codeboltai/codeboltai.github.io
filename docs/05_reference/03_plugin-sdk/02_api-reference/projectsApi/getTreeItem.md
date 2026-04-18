---
name: getTreeItem
cbbaseinfo:
  description: Call getTreeItem on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: itemId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TreeItem>"
    description: ""
data:
  name: getTreeItem
  category: projectsApi
  link: getTreeItem.md
---
# getTreeItem

```typescript
plugin.projectsApi.getTreeItem(itemId: string): Promise<TreeItem>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `itemId` | `string` |  |

## Returns

**`Promise<TreeItem>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getTreeItem('itemId');
```
