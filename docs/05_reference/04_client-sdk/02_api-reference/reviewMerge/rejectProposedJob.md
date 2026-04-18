---
name: rejectProposedJob
cbbaseinfo:
  description: "Rejects a proposed job on a review-merge request.

Marks the proposed job as rejected, preventing it from being converted into an actual job."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: proposedJobId
      typeName: string
      description: The unique identifier of the proposed job to reject
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional additional data such as rejection reason
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the proposed job has been rejected
data:
  name: rejectProposedJob
  category: reviewMerge
  link: rejectProposedJob.md
---
# rejectProposedJob

```typescript
client.reviewMerge.rejectProposedJob(id: string, proposedJobId: string, data?: Record<string, unknown>): Promise<unknown>
```

Rejects a proposed job on a review-merge request.

Marks the proposed job as rejected, preventing it from being converted into an actual job.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `proposedJobId` | `string` | The unique identifier of the proposed job to reject |
| `data` | `Record<string, unknown>` _(optional)_ | Optional additional data such as rejection reason |

## Returns

**`Promise<unknown>`** — A promise that resolves when the proposed job has been rejected

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.rejectProposedJob('id', 'proposedJobId');
```
