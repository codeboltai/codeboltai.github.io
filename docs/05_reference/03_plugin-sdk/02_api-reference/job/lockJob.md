---
name: lockJob
cbbaseinfo:
  description: Call lockJob on the Plugin SDK job module.
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
    - name: agentName
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<JobLockAcquireResponse>"
    description: ""
data:
  name: lockJob
  category: job
  link: lockJob.md
---
# lockJob

```typescript
plugin.job.lockJob(jobId: string, agentId: string, agentName?: string): Promise<JobLockAcquireResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `agentId` | `string` |  |
| `agentName` | `string` _(optional)_ |  |

## Returns

**`Promise<JobLockAcquireResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.lockJob('jobId', 'agentId');
```
