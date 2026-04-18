---
name: createPackage
cbbaseinfo:
  description: Create a new package
cbparameters:
  parameters:
    - name: data
      typeName: CreatePackageData
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
  name: createPackage
  category: projectStructure
  link: createPackage.md
---
# createPackage

```typescript
plugin.projectStructure.createPackage(data: CreatePackageData, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Create a new package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePackageData` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructurePackageResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.createPackage(/* CreatePackageData */);
```
