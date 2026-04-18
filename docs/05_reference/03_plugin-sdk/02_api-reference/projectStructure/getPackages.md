---
name: getPackages
cbbaseinfo:
  description: Get all packages in the workspace
cbparameters:
  parameters:
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructurePackagesResponse>"
    description: ""
data:
  name: getPackages
  category: projectStructure
  link: getPackages.md
---
# getPackages

```typescript
plugin.projectStructure.getPackages(workspacePath?: string): Promise<ProjectStructurePackagesResponse>
```

Get all packages in the workspace

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructurePackagesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.getPackages();
```
