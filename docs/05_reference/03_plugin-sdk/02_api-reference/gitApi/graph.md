---
title: graph
---

# `graph`

```typescript
plugin.gitApi.graph(data?: GitGraphRequest): Promise<GitCommit[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitGraphRequest` | No |  |

## Returns

`Promise<GitCommit[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.graph();
console.log(result);
```
