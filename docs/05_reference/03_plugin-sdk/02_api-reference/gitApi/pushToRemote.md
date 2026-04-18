---
title: pushToRemote
---

# `pushToRemote`

```typescript
plugin.gitApi.pushToRemote(data?: GitPushRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPushRequest` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.pushToRemote();
console.log(result);
```
