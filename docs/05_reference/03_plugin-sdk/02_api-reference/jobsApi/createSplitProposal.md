---
title: createSplitProposal
---

# `createSplitProposal`

```typescript
plugin.jobsApi.createSplitProposal(id: string, data: CreateSplitProposalRequest): Promise<JobSplitProposal>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `CreateSplitProposalRequest` | Yes |  |

## Returns

`Promise<JobSplitProposal>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.createSplitProposal('id', /* CreateSplitProposalRequest */);
console.log(result);
```
