---
name: getReadyJobs
cbbaseinfo:
  description: Call getReadyJobs on the Plugin SDK job module.
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
  name: getReadyJobs
  category: job
  link: getReadyJobs.md
---
# getReadyJobs

```typescript
plugin.job.getReadyJobs(filters: JobListFilters): Promise<JobReadyBlockedResponse>
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

await plugin.job.getReadyJobs(/* JobListFilters */);
```
