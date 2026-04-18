---
title: branch
---

# `branch`

```typescript
plugin.gitApi.branch(data?: GitBranchRequest): Promise<GitBranch[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitBranchRequest` | No |  |

## Returns

`Promise<GitBranch[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.branch();
console.log(result);
```
