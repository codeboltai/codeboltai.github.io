---
title: deleteSplitProposal
---

# `deleteSplitProposal`

```typescript
plugin.job.deleteSplitProposal(jobId: string, proposalId: string): Promise<JobSplitDeleteResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |

## Returns

`Promise<JobSplitDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.deleteSplitProposal('jobId', 'proposalId');
console.log(result);
```
