---
title: updateJob
---

# `updateJob`

```typescript
plugin.job.updateJob(jobId: string, data: UpdateJobData): Promise<JobUpdateResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `data` | `UpdateJobData` | Yes |  |

## Returns

`Promise<JobUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.updateJob('jobId', /* UpdateJobData */);
console.log(result);
```
