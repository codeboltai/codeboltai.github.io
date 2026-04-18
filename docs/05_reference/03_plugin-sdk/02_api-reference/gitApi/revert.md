---
title: revert
---

# `revert`

```typescript
plugin.gitApi.revert(data: GitRevertRequest): Promise<unknown>
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

const result = await plugin.gitApi.revert(/* GitRevertRequest */);
console.log(result);
```
