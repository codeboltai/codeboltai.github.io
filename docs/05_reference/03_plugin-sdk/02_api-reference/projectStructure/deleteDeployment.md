---
name: deleteDeployment
cbbaseinfo:
  description: Delete a deployment config
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: configId
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
  name: deleteDeployment
  category: projectStructure
  link: deleteDeployment.md
---
# deleteDeployment

```typescript
plugin.projectStructure.deleteDeployment(packageId: string, configId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a deployment config

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `configId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.deleteDeployment('packageId', 'configId');
```
