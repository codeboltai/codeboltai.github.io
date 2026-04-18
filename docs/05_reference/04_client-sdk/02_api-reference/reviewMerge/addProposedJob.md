---
name: addProposedJob
cbbaseinfo:
  description: "Adds a proposed job to a review-merge request.

Proposed jobs are suggested work items that arise from the review process. They must
be approved before being converted into actual jobs."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: data
      typeName: AddProposedJobRequest
      description: The proposed job details
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the proposed job has been added
data:
  name: addProposedJob
  category: reviewMerge
  link: addProposedJob.md
---
# addProposedJob

```typescript
client.reviewMerge.addProposedJob(id: string, data: AddProposedJobRequest): Promise<unknown>
```

Adds a proposed job to a review-merge request.

Proposed jobs are suggested work items that arise from the review process. They must
be approved before being converted into actual jobs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddProposedJobRequest` | The proposed job details |

## Returns

**`Promise<unknown>`** — A promise that resolves when the proposed job has been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.addProposedJob('id', /* AddProposedJobRequest */);
```
