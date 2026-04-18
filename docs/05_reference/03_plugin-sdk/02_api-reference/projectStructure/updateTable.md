---
name: updateTable
cbbaseinfo:
  description: Update a database table
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: tableId
      typeName: string
      description: ""
      isOptional: false
    - name: updates
      typeName: Partial<DatabaseTable>
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
  name: updateTable
  category: projectStructure
  link: updateTable.md
---
# updateTable

```typescript
plugin.projectStructure.updateTable(packageId: string, tableId: string, updates: Partial<DatabaseTable>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a database table

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `tableId` | `string` |  |
| `updates` | `Partial<DatabaseTable>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateTable('packageId', 'tableId', /* Partial<DatabaseTable> */);
```
