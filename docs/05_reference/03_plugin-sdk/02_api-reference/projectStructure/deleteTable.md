---
name: deleteTable
cbbaseinfo:
  description: Delete a database table
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
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureDeleteResponse>"
    description: ""
data:
  name: deleteTable
  category: projectStructure
  link: deleteTable.md
---
# deleteTable

```typescript
plugin.projectStructure.deleteTable(packageId: string, tableId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a database table

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `tableId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.deleteTable('packageId', 'tableId');
```
