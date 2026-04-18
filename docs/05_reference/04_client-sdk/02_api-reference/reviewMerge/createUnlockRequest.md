---
name: createUnlockRequest
cbbaseinfo:
  description: "Creates an unlock request for a locked review-merge request.

When a review is locked by another agent, this creates a formal request to unlock it.
The lock holder can then approve or reject the unlock request."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the locked review-merge request
      isOptional: false
    - name: data
      typeName: CreateUnlockRequest
      description: The unlock request payload with reason and requester information
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the unlock request has been created
data:
  name: createUnlockRequest
  category: reviewMerge
  link: createUnlockRequest.md
---
# createUnlockRequest

```typescript
client.reviewMerge.createUnlockRequest(id: string, data: CreateUnlockRequest): Promise<unknown>
```

Creates an unlock request for a locked review-merge request.

When a review is locked by another agent, this creates a formal request to unlock it.
The lock holder can then approve or reject the unlock request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the locked review-merge request |
| `data` | `CreateUnlockRequest` | The unlock request payload with reason and requester information |

## Returns

**`Promise<unknown>`** — A promise that resolves when the unlock request has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.createUnlockRequest('id', /* CreateUnlockRequest */);
```
