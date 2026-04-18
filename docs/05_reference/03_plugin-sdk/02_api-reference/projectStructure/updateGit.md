---
title: updateGit
---

# `updateGit`

```typescript
plugin.projectStructure.updateGit(gitInfo: GitInfo, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update git information

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `gitInfo` | `GitInfo` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateGit(/* GitInfo */);
console.log(result);
```
