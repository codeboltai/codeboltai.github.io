---
title: listBids
---

# `listBids`

```typescript
plugin.job.listBids(jobId: string): Promise<JobBidListResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

## Returns

`Promise<JobBidListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.listBids('jobId');
console.log(result);
```
