---
title: createBranch
---

# `createBranch`

```typescript
plugin.gitApi.createBranch(data: GitCreateBranchRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitCreateBranchRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.createBranch(/* GitCreateBranchRequest */);
console.log(result);
```
