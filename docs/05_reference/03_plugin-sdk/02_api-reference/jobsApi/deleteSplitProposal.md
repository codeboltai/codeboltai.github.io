---
title: deleteSplitProposal
---

# `deleteSplitProposal`

```typescript
plugin.jobsApi.deleteSplitProposal(id: string, proposalId: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `proposalId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.deleteSplitProposal('id', 'proposalId');
console.log(result);
```
