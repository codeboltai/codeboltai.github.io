---
title: deleteDeployment
---

# `deleteDeployment`

```typescript
plugin.projectStructure.deleteDeployment(packageId: string, configId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a deployment config

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `configId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.deleteDeployment('packageId', 'configId');
console.log(result);
```
