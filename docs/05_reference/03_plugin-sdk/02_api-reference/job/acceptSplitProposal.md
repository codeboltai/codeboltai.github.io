---
title: acceptSplitProposal
---

# `acceptSplitProposal`

```typescript
plugin.job.acceptSplitProposal(jobId: string, proposalId: string): Promise<JobSplitAcceptResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |

## Returns

`Promise<JobSplitAcceptResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.acceptSplitProposal('jobId', 'proposalId');
console.log(result);
```
