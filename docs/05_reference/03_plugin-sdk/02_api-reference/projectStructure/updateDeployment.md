---
name: updateDeployment
cbbaseinfo:
  description: Update a deployment config
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
    - name: updates
      typeName: Partial<DeploymentConfig>
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
  name: updateDeployment
  category: projectStructure
  link: updateDeployment.md
---
# updateDeployment

```typescript
plugin.projectStructure.updateDeployment(packageId: string, configId: string, updates: Partial<DeploymentConfig>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a deployment config

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `configId` | `string` |  |
| `updates` | `Partial<DeploymentConfig>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateDeployment('packageId', 'configId', /* Partial<DeploymentConfig> */);
```
