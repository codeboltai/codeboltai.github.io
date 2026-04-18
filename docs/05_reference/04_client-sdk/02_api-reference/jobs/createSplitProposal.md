---
name: createSplitProposal
cbbaseinfo:
  description: "Creates a split proposal for a job.

Proposes breaking a large job into smaller sub-jobs. The proposal
must be accepted before the split is executed. This enables
collaborative task decomposition."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the job to split
      isOptional: false
    - name: data
      typeName: CreateSplitProposalRequest
      description: Split proposal details including the proposed sub-jobs
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobSplitProposal>"
    description: A promise that resolves to the created
data:
  name: createSplitProposal
  category: jobs
  link: createSplitProposal.md
---
# createSplitProposal

```typescript
client.jobs.createSplitProposal(id: string, data: CreateSplitProposalRequest): Promise<JobSplitProposal>
```

Creates a split proposal for a job.

Proposes breaking a large job into smaller sub-jobs. The proposal
must be accepted before the split is executed. This enables
collaborative task decomposition.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the job to split |
| `data` | `CreateSplitProposalRequest` | Split proposal details including the proposed sub-jobs |

## Returns

**`Promise<JobSplitProposal>`** — A promise that resolves to the created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.createSplitProposal('id', /* CreateSplitProposalRequest */);
```
