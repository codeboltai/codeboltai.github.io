---
name: getBlockedJobs
cbbaseinfo:
  description: Call getBlockedJobs on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: filters
      typeName: JobListFilters
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobReadyBlockedResponse>"
    description: ""
data:
  name: getBlockedJobs
  category: job
  link: getBlockedJobs.md
---
# getBlockedJobs

```typescript
plugin.job.getBlockedJobs(filters: JobListFilters): Promise<JobReadyBlockedResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `filters` | `JobListFilters` |  Default: `{}` |

## Returns

**`Promise<JobReadyBlockedResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.getBlockedJobs(/* JobListFilters */);
```
