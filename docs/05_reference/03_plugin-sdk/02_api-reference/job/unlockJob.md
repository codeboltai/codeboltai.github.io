---
title: unlockJob
---

# `unlockJob`

```typescript
plugin.job.unlockJob(jobId: string, agentId: string): Promise<JobLockReleaseResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `agentId` | `string` | Yes |  |

## Returns

`Promise<JobLockReleaseResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.unlockJob('jobId', 'agentId');
console.log(result);
```
