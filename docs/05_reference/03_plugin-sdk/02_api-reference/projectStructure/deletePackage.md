---
name: deletePackage
cbbaseinfo:
  description: Delete a package
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
    signatureTypeName: "Promise<ProjectStructureDeleteResponse>"
    description: ""
data:
  name: deletePackage
  category: projectStructure
  link: deletePackage.md
---
# deletePackage

```typescript
plugin.projectStructure.deletePackage(packageId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.deletePackage('packageId');
```
