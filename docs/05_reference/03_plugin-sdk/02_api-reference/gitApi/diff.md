---
title: diff
---

# `diff`

```typescript
plugin.gitApi.diff(data?: GitDiffRequest): Promise<GitDiff[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitDiffRequest` | No |  |

## Returns

`Promise<GitDiff[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.diff();
console.log(result);
```
