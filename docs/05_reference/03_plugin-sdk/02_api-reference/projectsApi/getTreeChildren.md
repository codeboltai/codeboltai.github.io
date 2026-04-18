---
name: getTreeChildren
cbbaseinfo:
  description: Call getTreeChildren on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: parentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TreeItem[]>"
    description: ""
data:
  name: getTreeChildren
  category: projectsApi
  link: getTreeChildren.md
---
# getTreeChildren

```typescript
plugin.projectsApi.getTreeChildren(parentId: string): Promise<TreeItem[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `parentId` | `string` |  |

## Returns

**`Promise<TreeItem[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getTreeChildren('parentId');
```
