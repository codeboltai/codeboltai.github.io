---
name: unlock
cbbaseinfo:
  description: "Unlocks a previously locked review-merge request.

Releases the lock on a review request, allowing other agents to modify it again."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request to unlock
      isOptional: false
    - name: data
      typeName: UnlockReviewRequest
      description: Optional unlock parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the lock has been released
data:
  name: unlock
  category: reviewMerge
  link: unlock.md
---
# unlock

```typescript
client.reviewMerge.unlock(id: string, data?: UnlockReviewRequest): Promise<unknown>
```

Unlocks a previously locked review-merge request.

Releases the lock on a review request, allowing other agents to modify it again.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request to unlock |
| `data` | `UnlockReviewRequest` _(optional)_ | Optional unlock parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the lock has been released

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.unlock('id');
```
