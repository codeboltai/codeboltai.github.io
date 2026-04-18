---
name: addBid
cbbaseinfo:
  description: Call addBid on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: bid
      typeName: AddBidData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobBidAddResponse>"
    description: ""
data:
  name: addBid
  category: job
  link: addBid.md
---
# addBid

```typescript
plugin.job.addBid(jobId: string, bid: AddBidData): Promise<JobBidAddResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `bid` | `AddBidData` |  |

## Returns

**`Promise<JobBidAddResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addBid('jobId', /* AddBidData */);
```
