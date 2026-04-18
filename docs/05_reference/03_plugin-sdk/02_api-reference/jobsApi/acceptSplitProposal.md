---
title: acceptSplitProposal
---

# `acceptSplitProposal`

```typescript
plugin.jobsApi.acceptSplitProposal(id: string, proposalId: string, data?: AcceptSplitProposalRequest): Promise<Job[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |
| `data` | `AcceptSplitProposalRequest` | No |  |

## Returns

`Promise<Job[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.acceptSplitProposal('id', 'proposalId');
console.log(result);
```
