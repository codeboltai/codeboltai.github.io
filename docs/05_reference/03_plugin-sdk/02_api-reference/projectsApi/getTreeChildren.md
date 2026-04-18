---
title: getTreeChildren
---

# `getTreeChildren`

```typescript
plugin.projectsApi.getTreeChildren(parentId: string): Promise<TreeItem[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `parentId` | `string` | Yes |  |

## Returns

`Promise<TreeItem[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getTreeChildren('parentId');
console.log(result);
```
