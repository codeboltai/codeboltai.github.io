---
title: commit
---

# `commit`

```typescript
plugin.gitApi.commit(data: GitCommitRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitCommitRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.commit(/* GitCommitRequest */);
console.log(result);
```
