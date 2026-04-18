---
name: deleteJob
cbbaseinfo:
  description: Call deleteJob on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobDeleteResponse>"
    description: ""
data:
  name: deleteJob
  category: job
  link: deleteJob.md
---
# deleteJob

```typescript
plugin.job.deleteJob(jobId: string): Promise<JobDeleteResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |

## Returns

**`Promise<JobDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.deleteJob('jobId');
```
