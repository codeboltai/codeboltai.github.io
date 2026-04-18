---
name: approveUnlockRequest
cbbaseinfo:
  description: "Approves an unlock request, releasing the lock on a review-merge request.

The lock holder calls this to grant an unlock request from another agent."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: unlockRequestId
      typeName: string
      description: The unique identifier of the unlock request to approve
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional additional data for the approval
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the unlock request has been approved
data:
  name: approveUnlockRequest
  category: reviewMerge
  link: approveUnlockRequest.md
---
# approveUnlockRequest

```typescript
client.reviewMerge.approveUnlockRequest(id: string, unlockRequestId: string, data?: Record<string, unknown>): Promise<unknown>
```

Approves an unlock request, releasing the lock on a review-merge request.

The lock holder calls this to grant an unlock request from another agent.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `unlockRequestId` | `string` | The unique identifier of the unlock request to approve |
| `data` | `Record<string, unknown>` _(optional)_ | Optional additional data for the approval |

## Returns

**`Promise<unknown>`** — A promise that resolves when the unlock request has been approved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.approveUnlockRequest('id', 'unlockRequestId');
```
