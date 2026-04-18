---
name: addTable
cbbaseinfo:
  description: Add a database table to a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: table
      typeName: Omit<DatabaseTable, "id">
      description: ""
      isOptional: false
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureUpdateResponse>"
    description: ""
data:
  name: addTable
  category: projectStructure
  link: addTable.md
---
# addTable

```typescript
plugin.projectStructure.addTable(packageId: string, table: Omit<DatabaseTable, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a database table to a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `table` | `Omit<DatabaseTable, "id">` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.addTable('packageId', /* Omit<DatabaseTable, "id"> */);
```
