---
title: updateDeployment
---

# `updateDeployment`

```typescript
plugin.projectStructure.updateDeployment(packageId: string, configId: string, updates: Partial<DeploymentConfig>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a deployment config

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `configId` | `string` | Yes |  |
| `updates` | `Partial<DeploymentConfig>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateDeployment('packageId', 'configId', /* Partial<DeploymentConfig> */);
console.log(result);
```
