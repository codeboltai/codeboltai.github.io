---
title: createPackage
---

# `createPackage`

```typescript
plugin.projectStructure.createPackage(data: CreatePackageData, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Create a new package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreatePackageData` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructurePackageResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.createPackage(/* CreatePackageData */);
console.log(result);
```
