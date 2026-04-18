---
title: deleteUnlockRequest
---

# `deleteUnlockRequest`

```typescript
plugin.job.deleteUnlockRequest(jobId: string, unlockRequestId: string): Promise<JobUnlockRequestDeleteResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `unlockRequestId` | `string` | Yes |  |

## Returns

`Promise<JobUnlockRequestDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.deleteUnlockRequest('jobId', 'unlockRequestId');
console.log(result);
```
