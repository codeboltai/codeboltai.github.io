---
title: updatePackage
---

# `updatePackage`

```typescript
plugin.projectStructure.updatePackage(packageId: string, updates: UpdatePackageData, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Update a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `updates` | `UpdatePackageData` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructurePackageResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updatePackage('packageId', /* UpdatePackageData */);
console.log(result);
```
