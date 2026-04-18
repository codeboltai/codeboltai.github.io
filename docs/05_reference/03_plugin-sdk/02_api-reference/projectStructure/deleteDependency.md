---
title: deleteDependency
---

# `deleteDependency`

```typescript
plugin.projectStructure.deleteDependency(packageId: string, dependencyId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a dependency

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `dependencyId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.deleteDependency('packageId', 'dependencyId');
console.log(result);
```
