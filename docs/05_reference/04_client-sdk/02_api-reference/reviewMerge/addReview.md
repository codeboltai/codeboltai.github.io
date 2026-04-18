---
name: addReview
cbbaseinfo:
  description: "Adds a review or feedback to a review-merge request.

Submits review feedback (approval, rejection, or comments) from a reviewer.
Multiple reviews can be added from different reviewers."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: data
      typeName: AddReviewFeedbackRequest
      description: "The review feedback payload containing the reviewer's assessment"
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the review has been added
data:
  name: addReview
  category: reviewMerge
  link: addReview.md
---
# addReview

```typescript
client.reviewMerge.addReview(id: string, data: AddReviewFeedbackRequest): Promise<unknown>
```

Adds a review or feedback to a review-merge request.

Submits review feedback (approval, rejection, or comments) from a reviewer.
Multiple reviews can be added from different reviewers.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddReviewFeedbackRequest` | The review feedback payload containing the reviewer's assessment |

## Returns

**`Promise<unknown>`** — A promise that resolves when the review has been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.addReview('id', /* AddReviewFeedbackRequest */);
```
