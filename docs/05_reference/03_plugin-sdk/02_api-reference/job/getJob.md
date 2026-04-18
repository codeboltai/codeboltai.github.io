---
title: getJob
---

# `getJob`

```typescript
plugin.job.getJob(jobId: string): Promise<JobShowResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

## Returns

`Promise<JobShowResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.getJob('jobId');
console.log(result);
```
