---
title: approveUnlockRequest
---

# `approveUnlockRequest`

```typescript
plugin.job.approveUnlockRequest(jobId: string, unlockRequestId: string, respondedBy: string): Promise<JobUnlockRequestApproveResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `unlockRequestId` | `string` | Yes |  |
| `respondedBy` | `string` | Yes |  |

## Returns

`Promise<JobUnlockRequestApproveResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.approveUnlockRequest('jobId', 'unlockRequestId', 'respondedBy');
console.log(result);
```
