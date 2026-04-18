---
name: listBids
cbbaseinfo:
  description: Call listBids on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobBidListResponse>"
    description: ""
data:
  name: listBids
  category: job
  link: listBids.md
---
# listBids

```typescript
plugin.job.listBids(jobId: string): Promise<JobBidListResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |

## Returns

**`Promise<JobBidListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.listBids('jobId');
```
