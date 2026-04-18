---
name: acceptSplitProposal
cbbaseinfo:
  description: Call acceptSplitProposal on the Plugin SDK job module.
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
    signatureTypeName: "Promise<JobSplitAcceptResponse>"
    description: ""
data:
  name: acceptSplitProposal
  category: job
  link: acceptSplitProposal.md
---
# acceptSplitProposal

```typescript
plugin.job.acceptSplitProposal(jobId: string, proposalId: string): Promise<JobSplitAcceptResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `proposalId` | `string` |  |

## Returns

**`Promise<JobSplitAcceptResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.acceptSplitProposal('jobId', 'proposalId');
```
