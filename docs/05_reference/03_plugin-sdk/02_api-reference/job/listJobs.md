---
name: listJobs
cbbaseinfo:
  description: Call listJobs on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: filters
      typeName: JobListFilters
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobListResponse>"
    description: ""
data:
  name: listJobs
  category: job
  link: listJobs.md
---
# listJobs

```typescript
plugin.job.listJobs(filters: JobListFilters): Promise<JobListResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `filters` | `JobListFilters` |  Default: `{}` |

## Returns

**`Promise<JobListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.listJobs(/* JobListFilters */);
```
