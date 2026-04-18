---
name: getMetadata
cbbaseinfo:
  description: Get complete project metadata
cbparameters:
  parameters:
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureMetadataResponse>"
    description: ""
data:
  name: getMetadata
  category: projectStructure
  link: getMetadata.md
---
# getMetadata

```typescript
plugin.projectStructure.getMetadata(workspacePath?: string): Promise<ProjectStructureMetadataResponse>
```

Get complete project metadata

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureMetadataResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.getMetadata();
```
