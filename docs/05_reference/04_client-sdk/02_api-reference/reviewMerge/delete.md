---
name: delete
cbbaseinfo:
  description: "Deletes a review-merge request.

Permanently removes a review-merge request and all associated data. This action
cannot be undone."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the deletion is complete
data:
  name: delete
  category: reviewMerge
  link: delete.md
---
# delete

```typescript
client.reviewMerge.delete(id: string): Promise<unknown>
```

Deletes a review-merge request.

Permanently removes a review-merge request and all associated data. This action
cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.delete('id');
```
