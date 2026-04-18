---
title: getBlockedJobs
---

# `getBlockedJobs`

```typescript
plugin.job.getBlockedJobs(filters: JobListFilters): Promise<JobReadyBlockedResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filters` | `JobListFilters` | Yes |  _(default: `{}`)_ |

## Returns

`Promise<JobReadyBlockedResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.getBlockedJobs(/* JobListFilters */);
console.log(result);
```
