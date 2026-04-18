---
name: isJobLocked
cbbaseinfo:
  description: Call isJobLocked on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobLockCheckResponse>"
    description: ""
data:
  name: isJobLocked
  category: job
  link: isJobLocked.md
---
# isJobLocked

```typescript
plugin.job.isJobLocked(jobId: string): Promise<JobLockCheckResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |

## Returns

**`Promise<JobLockCheckResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.isJobLocked('jobId');
```
