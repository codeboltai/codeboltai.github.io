---
title: addTable
---

# `addTable`

```typescript
plugin.projectStructure.addTable(packageId: string, table: Omit<DatabaseTable, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a database table to a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `table` | `Omit<DatabaseTable, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.addTable('packageId', /* Omit<DatabaseTable, "id"> */);
console.log(result);
```
