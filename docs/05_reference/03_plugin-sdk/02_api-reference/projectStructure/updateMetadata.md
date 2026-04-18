---
name: updateMetadata
cbbaseinfo:
  description: Update workspace metadata
cbparameters:
  parameters:
    - name: updates
      typeName: Record<string, any>
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
  name: updateMetadata
  category: projectStructure
  link: updateMetadata.md
---
# updateMetadata

```typescript
plugin.projectStructure.updateMetadata(updates: Record<string, any>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update workspace metadata

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `updates` | `Record<string, any>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateMetadata(/* Record<string, any> */);
```
