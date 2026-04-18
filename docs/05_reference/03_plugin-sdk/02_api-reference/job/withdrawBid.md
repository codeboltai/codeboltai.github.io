---
title: withdrawBid
---

# `withdrawBid`

```typescript
plugin.job.withdrawBid(jobId: string, bidId: string): Promise<JobBidWithdrawResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `bidId` | `string` | Yes |  |

## Returns

`Promise<JobBidWithdrawResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.withdrawBid('jobId', 'bidId');
console.log(result);
```
