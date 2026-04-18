---
title: getPackage
---

# `getPackage`

```typescript
plugin.projectStructure.getPackage(packageId: string, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Get a specific package by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructurePackageResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.getPackage('packageId');
console.log(result);
```
