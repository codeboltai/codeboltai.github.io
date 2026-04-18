---
name: updateDesignGuidelines
cbbaseinfo:
  description: Update design guidelines for a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: guidelines
      typeName: DesignGuidelines
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
  name: updateDesignGuidelines
  category: projectStructure
  link: updateDesignGuidelines.md
---
# updateDesignGuidelines

```typescript
plugin.projectStructure.updateDesignGuidelines(packageId: string, guidelines: DesignGuidelines, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update design guidelines for a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `guidelines` | `DesignGuidelines` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateDesignGuidelines('packageId', /* DesignGuidelines */);
```
