---
name: updateDependency
cbbaseinfo:
  description: Update a dependency
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
    - name: updates
      typeName: Partial<Dependency>
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
  name: updateDependency
  category: projectStructure
  link: updateDependency.md
---
# updateDependency

```typescript
plugin.projectStructure.updateDependency(packageId: string, dependencyId: string, updates: Partial<Dependency>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a dependency

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `dependencyId` | `string` |  |
| `updates` | `Partial<Dependency>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateDependency('packageId', 'dependencyId', /* Partial<Dependency> */);
```
