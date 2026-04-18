---
name: unlockJob
cbbaseinfo:
  description: Call unlockJob on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: agentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobLockReleaseResponse>"
    description: ""
data:
  name: unlockJob
  category: job
  link: unlockJob.md
---
# unlockJob

```typescript
plugin.job.unlockJob(jobId: string, agentId: string): Promise<JobLockReleaseResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `agentId` | `string` |  |

## Returns

**`Promise<JobLockReleaseResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.unlockJob('jobId', 'agentId');
```
