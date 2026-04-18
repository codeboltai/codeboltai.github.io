---
title: revertUntracked
---

# `revertUntracked`

```typescript
plugin.gitApi.revertUntracked(data: GitRevertRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitRevertRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.revertUntracked(/* GitRevertRequest */);
console.log(result);
```
