---
name: addDependency
cbbaseinfo:
  description: Add a dependency to a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: dependency
      typeName: Omit<Dependency, "id">
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
  name: addDependency
  category: projectStructure
  link: addDependency.md
---
# addDependency

```typescript
plugin.projectStructure.addDependency(packageId: string, dependency: Omit<Dependency, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a dependency to a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `dependency` | `Omit<Dependency, "id">` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.addDependency('packageId', /* Omit<Dependency, "id"> */);
```
