---
title: getTreeItem
---

# `getTreeItem`

```typescript
plugin.projectsApi.getTreeItem(itemId: string): Promise<TreeItem>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `itemId` | `string` | Yes |  |

## Returns

`Promise<TreeItem>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getTreeItem('itemId');
console.log(result);
```
