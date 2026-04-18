---
name: lock
cbbaseinfo:
  description: "Locks a review-merge request to prevent concurrent modifications.

Acquiring a lock ensures exclusive access while performing operations on the request.
Other agents attempting to modify a locked request will be blocked."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request to lock
      isOptional: false
    - name: data
      typeName: LockReviewRequest
      description: Optional lock configuration parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the lock has been acquired
data:
  name: lock
  category: reviewMerge
  link: lock.md
---
# lock

```typescript
client.reviewMerge.lock(id: string, data?: LockReviewRequest): Promise<unknown>
```

Locks a review-merge request to prevent concurrent modifications.

Acquiring a lock ensures exclusive access while performing operations on the request.
Other agents attempting to modify a locked request will be blocked.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request to lock |
| `data` | `LockReviewRequest` _(optional)_ | Optional lock configuration parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the lock has been acquired

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.lock('id');
```
