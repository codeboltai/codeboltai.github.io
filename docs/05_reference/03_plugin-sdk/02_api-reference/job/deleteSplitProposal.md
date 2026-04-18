---
name: deleteSplitProposal
cbbaseinfo:
  description: Call deleteSplitProposal on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: proposalId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobSplitDeleteResponse>"
    description: ""
data:
  name: deleteSplitProposal
  category: job
  link: deleteSplitProposal.md
---
# deleteSplitProposal

```typescript
plugin.job.deleteSplitProposal(jobId: string, proposalId: string): Promise<JobSplitDeleteResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `proposalId` | `string` |  |

## Returns

**`Promise<JobSplitDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.deleteSplitProposal('jobId', 'proposalId');
```
