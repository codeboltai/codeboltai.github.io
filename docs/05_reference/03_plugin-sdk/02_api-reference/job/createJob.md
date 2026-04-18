---
name: createJob
cbbaseinfo:
  description: Call createJob on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: CreateJobData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobCreateResponse>"
    description: ""
data:
  name: createJob
  category: job
  link: createJob.md
---
# createJob

```typescript
plugin.job.createJob(groupId: string, data: CreateJobData): Promise<JobCreateResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` |  |
| `data` | `CreateJobData` |  |

## Returns

**`Promise<JobCreateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.createJob('groupId', /* CreateJobData */);
```
