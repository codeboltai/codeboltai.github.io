---
name: getTreeBatch
cbbaseinfo:
  description: Call getTreeBatch on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: BatchTreeItemsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TreeItem[]>"
    description: ""
data:
  name: getTreeBatch
  category: projectsApi
  link: getTreeBatch.md
---
# getTreeBatch

```typescript
plugin.projectsApi.getTreeBatch(data: BatchTreeItemsRequest): Promise<TreeItem[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BatchTreeItemsRequest` |  |

## Returns

**`Promise<TreeItem[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getTreeBatch(/* BatchTreeItemsRequest */);
```
