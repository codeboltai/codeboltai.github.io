---
name: addSplitProposal
cbbaseinfo:
  description: Call addSplitProposal on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: proposal
      typeName: AddSplitProposalData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobSplitProposeResponse>"
    description: ""
data:
  name: addSplitProposal
  category: job
  link: addSplitProposal.md
---
# addSplitProposal

```typescript
plugin.job.addSplitProposal(jobId: string, proposal: AddSplitProposalData): Promise<JobSplitProposeResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `proposal` | `AddSplitProposalData` |  |

## Returns

**`Promise<JobSplitProposeResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addSplitProposal('jobId', /* AddSplitProposalData */);
```
