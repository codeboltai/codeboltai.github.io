---
title: updateDependency
---

# `updateDependency`

```typescript
plugin.projectStructure.updateDependency(packageId: string, dependencyId: string, updates: Partial<Dependency>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a dependency

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `dependencyId` | `string` | Yes |  |
| `updates` | `Partial<Dependency>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateDependency('packageId', 'dependencyId', /* Partial<Dependency> */);
console.log(result);
```
