---
title: deletePackage
---

# `deletePackage`

```typescript
plugin.projectStructure.deletePackage(packageId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.deletePackage('packageId');
console.log(result);
```
