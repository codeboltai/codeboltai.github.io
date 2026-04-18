---
title: getTreeBatch
---

# `getTreeBatch`

```typescript
plugin.projectsApi.getTreeBatch(data: BatchTreeItemsRequest): Promise<TreeItem[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BatchTreeItemsRequest` | Yes |  |

## Returns

`Promise<TreeItem[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getTreeBatch(/* BatchTreeItemsRequest */);
console.log(result);
```
