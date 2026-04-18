---
title: addDeployment
---

# `addDeployment`

```typescript
plugin.projectStructure.addDeployment(packageId: string, config: Omit<DeploymentConfig, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a deployment config to a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `config` | `Omit<DeploymentConfig, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.addDeployment('packageId', /* Omit<DeploymentConfig, "id"> */);
console.log(result);
```
