---
name: rejectUnlockRequest
cbbaseinfo:
  description: Call rejectUnlockRequest on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: unlockRequestId
      typeName: string
      description: ""
      isOptional: false
    - name: respondedBy
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobUnlockRequestRejectResponse>"
    description: ""
data:
  name: rejectUnlockRequest
  category: job
  link: rejectUnlockRequest.md
---
# rejectUnlockRequest

```typescript
plugin.job.rejectUnlockRequest(jobId: string, unlockRequestId: string, respondedBy: string): Promise<JobUnlockRequestRejectResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `unlockRequestId` | `string` |  |
| `respondedBy` | `string` |  |

## Returns

**`Promise<JobUnlockRequestRejectResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.rejectUnlockRequest('jobId', 'unlockRequestId', 'respondedBy');
```
