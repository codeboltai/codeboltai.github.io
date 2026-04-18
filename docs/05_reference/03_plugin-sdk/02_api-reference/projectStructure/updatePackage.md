---
name: updatePackage
cbbaseinfo:
  description: Update a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: updates
      typeName: UpdatePackageData
      description: ""
      isOptional: false
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructurePackageResponse>"
    description: ""
data:
  name: updatePackage
  category: projectStructure
  link: updatePackage.md
---
# updatePackage

```typescript
plugin.projectStructure.updatePackage(packageId: string, updates: UpdatePackageData, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Update a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `updates` | `UpdatePackageData` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructurePackageResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updatePackage('packageId', /* UpdatePackageData */);
```
