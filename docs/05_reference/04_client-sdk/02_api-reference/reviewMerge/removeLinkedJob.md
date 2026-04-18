---
name: removeLinkedJob
cbbaseinfo:
  description: "Removes a linked job from a review-merge request.

Disassociates a previously linked job from the review request."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: jobId
      typeName: string
      description: The unique identifier of the job to unlink
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the job has been unlinked
data:
  name: removeLinkedJob
  category: reviewMerge
  link: removeLinkedJob.md
---
# removeLinkedJob

```typescript
client.reviewMerge.removeLinkedJob(id: string, jobId: string): Promise<unknown>
```

Removes a linked job from a review-merge request.

Disassociates a previously linked job from the review request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `jobId` | `string` | The unique identifier of the job to unlink |

## Returns

**`Promise<unknown>`** — A promise that resolves when the job has been unlinked

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.removeLinkedJob('id', 'jobId');
```
