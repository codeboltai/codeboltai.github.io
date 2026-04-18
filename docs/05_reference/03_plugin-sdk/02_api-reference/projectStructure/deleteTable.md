---
title: deleteTable
---

# `deleteTable`

```typescript
plugin.projectStructure.deleteTable(packageId: string, tableId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a database table

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `tableId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.deleteTable('packageId', 'tableId');
console.log(result);
```
