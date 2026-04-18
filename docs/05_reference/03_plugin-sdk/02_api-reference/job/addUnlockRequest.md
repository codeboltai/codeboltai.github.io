---
name: addUnlockRequest
cbbaseinfo:
  description: Call addUnlockRequest on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: request
      typeName: AddUnlockRequestData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobUnlockRequestAddResponse>"
    description: ""
data:
  name: addUnlockRequest
  category: job
  link: addUnlockRequest.md
---
# addUnlockRequest

```typescript
plugin.job.addUnlockRequest(jobId: string, request: AddUnlockRequestData): Promise<JobUnlockRequestAddResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `request` | `AddUnlockRequestData` |  |

## Returns

**`Promise<JobUnlockRequestAddResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addUnlockRequest('jobId', /* AddUnlockRequestData */);
```
