---
name: updateFrontendFramework
cbbaseinfo:
  description: Update frontend framework for a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: framework
      typeName: FrameworkInfo
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
  name: updateFrontendFramework
  category: projectStructure
  link: updateFrontendFramework.md
---
# updateFrontendFramework

```typescript
plugin.projectStructure.updateFrontendFramework(packageId: string, framework: FrameworkInfo, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update frontend framework for a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `framework` | `FrameworkInfo` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateFrontendFramework('packageId', /* FrameworkInfo */);
```
