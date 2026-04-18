---
title: getReadyJobs
---

# `getReadyJobs`

```typescript
plugin.job.getReadyJobs(filters: JobListFilters): Promise<JobReadyBlockedResponse>
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

const result = await plugin.job.getReadyJobs(/* JobListFilters */);
console.log(result);
```
