---
name: updateJob
cbbaseinfo:
  description: Call updateJob on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateJobData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobUpdateResponse>"
    description: ""
data:
  name: updateJob
  category: job
  link: updateJob.md
---
# updateJob

```typescript
plugin.job.updateJob(jobId: string, data: UpdateJobData): Promise<JobUpdateResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `data` | `UpdateJobData` |  |

## Returns

**`Promise<JobUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.updateJob('jobId', /* UpdateJobData */);
```
