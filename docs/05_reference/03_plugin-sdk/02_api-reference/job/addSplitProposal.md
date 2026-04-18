---
title: addSplitProposal
---

# `addSplitProposal`

```typescript
plugin.job.addSplitProposal(jobId: string, proposal: AddSplitProposalData): Promise<JobSplitProposeResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `proposal` | `AddSplitProposalData` | Yes |  |

## Returns

`Promise<JobSplitProposeResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.addSplitProposal('jobId', /* AddSplitProposalData */);
console.log(result);
```
