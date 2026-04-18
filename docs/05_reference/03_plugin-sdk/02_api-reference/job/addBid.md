---
title: addBid
---

# `addBid`

```typescript
plugin.job.addBid(jobId: string, bid: AddBidData): Promise<JobBidAddResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `bid` | `AddBidData` | Yes |  |

## Returns

`Promise<JobBidAddResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.addBid('jobId', /* AddBidData */);
console.log(result);
```
