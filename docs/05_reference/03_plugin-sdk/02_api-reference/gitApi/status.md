---
title: status
---

# `status`

```typescript
plugin.gitApi.status(data?: GitStatusRequest): Promise<GitStatus>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitStatusRequest` | No |  |

## Returns

`Promise<GitStatus>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.status();
console.log(result);
```
