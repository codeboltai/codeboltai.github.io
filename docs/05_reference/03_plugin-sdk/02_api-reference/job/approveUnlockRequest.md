---
name: approveUnlockRequest
cbbaseinfo:
  description: Call approveUnlockRequest on the Plugin SDK job module.
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
    signatureTypeName: "Promise<JobUnlockRequestApproveResponse>"
    description: ""
data:
  name: approveUnlockRequest
  category: job
  link: approveUnlockRequest.md
---
# approveUnlockRequest

```typescript
plugin.job.approveUnlockRequest(jobId: string, unlockRequestId: string, respondedBy: string): Promise<JobUnlockRequestApproveResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `unlockRequestId` | `string` |  |
| `respondedBy` | `string` |  |

## Returns

**`Promise<JobUnlockRequestApproveResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.approveUnlockRequest('jobId', 'unlockRequestId', 'respondedBy');
```
