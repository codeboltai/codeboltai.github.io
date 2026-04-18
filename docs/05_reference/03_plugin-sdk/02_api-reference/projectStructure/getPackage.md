---
name: getPackage
cbbaseinfo:
  description: Get a specific package by ID
cbparameters:
  parameters:
    - name: packageId
      typeName: string
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
  name: getPackage
  category: projectStructure
  link: getPackage.md
---
# getPackage

```typescript
plugin.projectStructure.getPackage(packageId: string, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Get a specific package by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructurePackageResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.getPackage('packageId');
```
