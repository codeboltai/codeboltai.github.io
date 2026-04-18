---
title: listJobs
---

# `listJobs`

```typescript
plugin.job.listJobs(filters: JobListFilters): Promise<JobListResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filters` | `JobListFilters` | Yes |  _(default: `{}`)_ |

## Returns

`Promise<JobListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.listJobs(/* JobListFilters */);
console.log(result);
```
