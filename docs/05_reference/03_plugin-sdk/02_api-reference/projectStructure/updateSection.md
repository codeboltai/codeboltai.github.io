---
name: updateSection
cbbaseinfo:
  description: Update a specific section of a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: section
      typeName: string
      description: ""
      isOptional: false
    - name: sectionData
      typeName: any
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
  name: updateSection
  category: projectStructure
  link: updateSection.md
---
# updateSection

```typescript
plugin.projectStructure.updateSection(packageId: string, section: string, sectionData: any, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a specific section of a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `section` | `string` |  |
| `sectionData` | `any` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateSection('packageId', 'section', /* any */);
```
