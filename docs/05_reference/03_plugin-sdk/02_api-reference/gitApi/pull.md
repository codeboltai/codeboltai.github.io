---
title: pull
---

# `pull`

```typescript
plugin.gitApi.pull(data?: GitPullRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPullRequest` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.pull();
console.log(result);
```
