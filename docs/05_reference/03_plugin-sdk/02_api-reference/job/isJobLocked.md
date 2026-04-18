---
title: isJobLocked
---

# `isJobLocked`

```typescript
plugin.job.isJobLocked(jobId: string): Promise<JobLockCheckResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

## Returns

`Promise<JobLockCheckResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.isJobLocked('jobId');
console.log(result);
```
