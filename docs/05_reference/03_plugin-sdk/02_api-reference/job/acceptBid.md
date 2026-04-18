---
name: acceptBid
cbbaseinfo:
  description: Call acceptBid on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: bidId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobBidAcceptResponse>"
    description: ""
data:
  name: acceptBid
  category: job
  link: acceptBid.md
---
# acceptBid

```typescript
plugin.job.acceptBid(jobId: string, bidId: string): Promise<JobBidAcceptResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `bidId` | `string` |  |

## Returns

**`Promise<JobBidAcceptResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.acceptBid('jobId', 'bidId');
```
