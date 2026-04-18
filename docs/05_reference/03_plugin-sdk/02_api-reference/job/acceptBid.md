---
title: acceptBid
---

# `acceptBid`

```typescript
plugin.job.acceptBid(jobId: string, bidId: string): Promise<JobBidAcceptResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `bidId` | `string` | Yes |  |

## Returns

`Promise<JobBidAcceptResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.acceptBid('jobId', 'bidId');
console.log(result);
```
