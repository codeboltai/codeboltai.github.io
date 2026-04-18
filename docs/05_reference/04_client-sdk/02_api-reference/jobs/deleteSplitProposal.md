---
name: deleteSplitProposal
cbbaseinfo:
  description: "Deletes a split proposal.

Removes a pending split proposal without executing the split.
Use this to reject or cancel a proposed job decomposition."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the parent job
      isOptional: false
    - name: proposalId
      typeName: string
      description: The unique identifier of the split proposal to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the proposal has been deleted
data:
  name: deleteSplitProposal
  category: jobs
  link: deleteSplitProposal.md
---
# deleteSplitProposal

```typescript
client.jobs.deleteSplitProposal(id: string, proposalId: string): Promise<void>
```

Deletes a split proposal.

Removes a pending split proposal without executing the split.
Use this to reject or cancel a proposed job decomposition.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the parent job |
| `proposalId` | `string` | The unique identifier of the split proposal to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the proposal has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.deleteSplitProposal('id', 'proposalId');
```
