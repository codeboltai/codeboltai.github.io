---
title: lockJob
---

# `lockJob`

```typescript
plugin.job.lockJob(jobId: string, agentId: string, agentName?: string): Promise<JobLockAcquireResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `agentId` | `string` | Yes |  |
| `agentName` | `string` | No |  |

## Returns

`Promise<JobLockAcquireResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.lockJob('jobId', 'agentId');
console.log(result);
```
