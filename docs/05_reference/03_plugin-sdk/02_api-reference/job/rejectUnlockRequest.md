---
title: rejectUnlockRequest
---

# `rejectUnlockRequest`

```typescript
plugin.job.rejectUnlockRequest(jobId: string, unlockRequestId: string, respondedBy: string): Promise<JobUnlockRequestRejectResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `unlockRequestId` | `string` | Yes |  |
| `respondedBy` | `string` | Yes |  |

## Returns

`Promise<JobUnlockRequestRejectResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.rejectUnlockRequest('jobId', 'unlockRequestId', 'respondedBy');
console.log(result);
```
