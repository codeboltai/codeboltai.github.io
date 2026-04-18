---
name: acceptSplitProposal
cbbaseinfo:
  description: "Accepts a split proposal, executing the job decomposition.

Approves the proposal and splits the original job into the proposed
sub-jobs. The original job's status may be updated to reflect the split."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the parent job
      isOptional: false
    - name: proposalId
      typeName: string
      description: The unique identifier of the split proposal to accept
      isOptional: false
    - name: data
      typeName: AcceptSplitProposalRequest
      description: Optional acceptance parameters for additional context
      isOptional: true
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: A promise that resolves to an array of the newly created sub- objects
data:
  name: acceptSplitProposal
  category: jobs
  link: acceptSplitProposal.md
---
# acceptSplitProposal

```typescript
client.jobs.acceptSplitProposal(id: string, proposalId: string, data?: AcceptSplitProposalRequest): Promise<Job[]>
```

Accepts a split proposal, executing the job decomposition.

Approves the proposal and splits the original job into the proposed
sub-jobs. The original job's status may be updated to reflect the split.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the parent job |
| `proposalId` | `string` | The unique identifier of the split proposal to accept |
| `data` | `AcceptSplitProposalRequest` _(optional)_ | Optional acceptance parameters for additional context |

## Returns

**`Promise<Job[]>`** — A promise that resolves to an array of the newly created sub- objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.acceptSplitProposal('id', 'proposalId');
```
