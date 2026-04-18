---
title: updateTable
---

# `updateTable`

```typescript
plugin.projectStructure.updateTable(packageId: string, tableId: string, updates: Partial<DatabaseTable>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a database table

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `tableId` | `string` | Yes |  |
| `updates` | `Partial<DatabaseTable>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateTable('packageId', 'tableId', /* Partial<DatabaseTable> */);
console.log(result);
```
