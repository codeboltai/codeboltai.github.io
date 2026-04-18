---
name: update
cbbaseinfo:
  description: "Updates an existing review-merge request.

Modifies the mutable fields of a review-merge request such as title, description,
or other metadata. Does not change the review status."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request to update
      isOptional: false
    - name: data
      typeName: UpdateReviewMergeRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest>"
    description: A promise that resolves to the updated ReviewMergeRequest
data:
  name: update
  category: reviewMerge
  link: update.md
---
# update

```typescript
client.reviewMerge.update(id: string, data: UpdateReviewMergeRequest): Promise<ReviewMergeRequest>
```

Updates an existing review-merge request.

Modifies the mutable fields of a review-merge request such as title, description,
or other metadata. Does not change the review status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request to update |
| `data` | `UpdateReviewMergeRequest` | The fields to update |

## Returns

**`Promise<ReviewMergeRequest>`** — A promise that resolves to the updated ReviewMergeRequest

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.update('id', /* UpdateReviewMergeRequest */);
```
