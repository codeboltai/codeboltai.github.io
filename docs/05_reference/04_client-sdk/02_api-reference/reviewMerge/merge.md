---
name: merge
cbbaseinfo:
  description: "Merges an approved review-merge request.

Executes the final merge operation on a review that has been approved and is ready
to merge. This applies the associated changes to the target branch or codebase."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request to merge
      isOptional: false
    - name: data
      typeName: MergeReviewRequest
      description: Optional merge configuration parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the merge is complete
data:
  name: merge
  category: reviewMerge
  link: merge.md
---
# merge

```typescript
client.reviewMerge.merge(id: string, data?: MergeReviewRequest): Promise<unknown>
```

Merges an approved review-merge request.

Executes the final merge operation on a review that has been approved and is ready
to merge. This applies the associated changes to the target branch or codebase.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request to merge |
| `data` | `MergeReviewRequest` _(optional)_ | Optional merge configuration parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the merge is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.merge('id');
```
