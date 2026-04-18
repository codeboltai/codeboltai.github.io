---
title: deleteJobs
---

# `deleteJobs`

```typescript
plugin.job.deleteJobs(jobIds: string[]): Promise<JobDeleteBulkResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobIds` | `string[]` | Yes |  |

## Returns

`Promise<JobDeleteBulkResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.deleteJobs(/* string[] */);
console.log(result);
```
