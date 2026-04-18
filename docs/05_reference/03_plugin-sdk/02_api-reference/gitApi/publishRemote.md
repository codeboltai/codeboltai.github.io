---
title: publishRemote
---

# `publishRemote`

```typescript
plugin.gitApi.publishRemote(data: GitPublishRemoteRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPublishRemoteRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.publishRemote(/* GitPublishRemoteRequest */);
console.log(result);
```
