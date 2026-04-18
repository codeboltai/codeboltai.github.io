---
title: addDependency
---

# `addDependency`

```typescript
plugin.projectStructure.addDependency(packageId: string, dependency: Omit<Dependency, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a dependency to a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `dependency` | `Omit<Dependency, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.addDependency('packageId', /* Omit<Dependency, "id"> */);
console.log(result);
```
