---
name: deleteDependency
cbbaseinfo:
  description: Delete a dependency
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: dependencyId
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
  name: deleteDependency
  category: projectStructure
  link: deleteDependency.md
---
# deleteDependency

```typescript
plugin.projectStructure.deleteDependency(packageId: string, dependencyId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a dependency

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `dependencyId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.deleteDependency('packageId', 'dependencyId');
```
