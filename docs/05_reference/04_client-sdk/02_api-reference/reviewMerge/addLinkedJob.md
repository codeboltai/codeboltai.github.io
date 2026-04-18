---
name: addLinkedJob
cbbaseinfo:
  description: "Links an existing job to a review-merge request.

Associates a job with this review so that changes from the job are tracked as part
of the review workflow."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: data
      typeName: AddLinkedJobRequest
      description: The linked job details including the job ID to associate
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the job has been linked
data:
  name: addLinkedJob
  category: reviewMerge
  link: addLinkedJob.md
---
# addLinkedJob

```typescript
client.reviewMerge.addLinkedJob(id: string, data: AddLinkedJobRequest): Promise<unknown>
```

Links an existing job to a review-merge request.

Associates a job with this review so that changes from the job are tracked as part
of the review workflow.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddLinkedJobRequest` | The linked job details including the job ID to associate |

## Returns

**`Promise<unknown>`** — A promise that resolves when the job has been linked

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.addLinkedJob('id', /* AddLinkedJobRequest */);
```
