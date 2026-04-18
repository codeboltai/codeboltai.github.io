---
title: deleteJob
---

# `deleteJob`

```typescript
plugin.job.deleteJob(jobId: string): Promise<JobDeleteResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

## Returns

`Promise<JobDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.deleteJob('jobId');
console.log(result);
```
