---
name: deleteUnlockRequest
cbbaseinfo:
  description: Call deleteUnlockRequest on the Plugin SDK job module.
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
  returns:
    signatureTypeName: "Promise<JobUnlockRequestDeleteResponse>"
    description: ""
data:
  name: deleteUnlockRequest
  category: job
  link: deleteUnlockRequest.md
---
# deleteUnlockRequest

```typescript
plugin.job.deleteUnlockRequest(jobId: string, unlockRequestId: string): Promise<JobUnlockRequestDeleteResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `unlockRequestId` | `string` |  |

## Returns

**`Promise<JobUnlockRequestDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.deleteUnlockRequest('jobId', 'unlockRequestId');
```
