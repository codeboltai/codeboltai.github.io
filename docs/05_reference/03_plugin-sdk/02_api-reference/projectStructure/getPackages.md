---
title: getPackages
---

# `getPackages`

```typescript
plugin.projectStructure.getPackages(workspacePath?: string): Promise<ProjectStructurePackagesResponse>
```

Get all packages in the workspace

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructurePackagesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.getPackages();
console.log(result);
```
