---
name: updateStatus
cbbaseinfo:
  description: "Updates the status of a review-merge request.

Transitions the request to a new review status (e.g., approved, rejected, needs-changes).
This is the primary mechanism for progressing a request through the review workflow."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: data
      typeName: UpdateReviewStatusRequest
      description: The status update payload containing the new status
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the status has been updated
data:
  name: updateStatus
  category: reviewMerge
  link: updateStatus.md
---
# updateStatus

```typescript
client.reviewMerge.updateStatus(id: string, data: UpdateReviewStatusRequest): Promise<unknown>
```

Updates the status of a review-merge request.

Transitions the request to a new review status (e.g., approved, rejected, needs-changes).
This is the primary mechanism for progressing a request through the review workflow.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `UpdateReviewStatusRequest` | The status update payload containing the new status |

## Returns

**`Promise<unknown>`** — A promise that resolves when the status has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.updateStatus('id', /* UpdateReviewStatusRequest */);
```
