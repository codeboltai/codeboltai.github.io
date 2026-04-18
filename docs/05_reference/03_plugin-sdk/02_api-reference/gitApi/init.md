---
title: init
---

# `init`

```typescript
plugin.gitApi.init(data?: GitInitRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitInitRequest` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.init();
console.log(result);
```
