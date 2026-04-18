---
title: sendPullRequest
---

# `sendPullRequest`

```typescript
plugin.environmentsApi.sendPullRequest(id: string, data: SendPullRequestRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `SendPullRequestRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.sendPullRequest('id', /* SendPullRequestRequest */);
console.log(result);
```
