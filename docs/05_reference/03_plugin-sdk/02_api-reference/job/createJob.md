---
title: createJob
---

# `createJob`

```typescript
plugin.job.createJob(groupId: string, data: CreateJobData): Promise<JobCreateResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |
| `data` | `CreateJobData` | Yes |  |

## Returns

`Promise<JobCreateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.createJob('groupId', /* CreateJobData */);
console.log(result);
```
