---
name: getJob
cbbaseinfo:
  description: Call getJob on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobShowResponse>"
    description: ""
data:
  name: getJob
  category: job
  link: getJob.md
---
# getJob

```typescript
plugin.job.getJob(jobId: string): Promise<JobShowResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |

## Returns

**`Promise<JobShowResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.getJob('jobId');
```
