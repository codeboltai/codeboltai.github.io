---
name: addDeployment
cbbaseinfo:
  description: Add a deployment config to a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: config
      typeName: Omit<DeploymentConfig, "id">
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
  name: addDeployment
  category: projectStructure
  link: addDeployment.md
---
# addDeployment

```typescript
plugin.projectStructure.addDeployment(packageId: string, config: Omit<DeploymentConfig, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a deployment config to a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `config` | `Omit<DeploymentConfig, "id">` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.addDeployment('packageId', /* Omit<DeploymentConfig, "id"> */);
```
