---
name: approveProposedJob
cbbaseinfo:
  description: "Approves a proposed job on a review-merge request.

Marks the proposed job as approved, making it eligible for conversion into an actual job."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: proposedJobId
      typeName: string
      description: The unique identifier of the proposed job to approve
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional additional data for the approval
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the proposed job has been approved
data:
  name: approveProposedJob
  category: reviewMerge
  link: approveProposedJob.md
---
# approveProposedJob

```typescript
client.reviewMerge.approveProposedJob(id: string, proposedJobId: string, data?: Record<string, unknown>): Promise<unknown>
```

Approves a proposed job on a review-merge request.

Marks the proposed job as approved, making it eligible for conversion into an actual job.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `proposedJobId` | `string` | The unique identifier of the proposed job to approve |
| `data` | `Record<string, unknown>` _(optional)_ | Optional additional data for the approval |

## Returns

**`Promise<unknown>`** — A promise that resolves when the proposed job has been approved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.approveProposedJob('id', 'proposedJobId');
```
