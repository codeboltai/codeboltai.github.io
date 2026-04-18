---
name: withdrawBid
cbbaseinfo:
  description: Call withdrawBid on the Plugin SDK job module.
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
    signatureTypeName: "Promise<JobBidWithdrawResponse>"
    description: ""
data:
  name: withdrawBid
  category: job
  link: withdrawBid.md
---
# withdrawBid

```typescript
plugin.job.withdrawBid(jobId: string, bidId: string): Promise<JobBidWithdrawResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `bidId` | `string` |  |

## Returns

**`Promise<JobBidWithdrawResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.withdrawBid('jobId', 'bidId');
```
