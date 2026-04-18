---
name: rejectUnlockRequest
cbbaseinfo:
  description: "Rejects an unlock request, keeping the review-merge request locked.

The lock holder calls this to deny an unlock request from another agent."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: unlockRequestId
      typeName: string
      description: The unique identifier of the unlock request to reject
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional additional data such as rejection reason
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the unlock request has been rejected
data:
  name: rejectUnlockRequest
  category: reviewMerge
  link: rejectUnlockRequest.md
---
# rejectUnlockRequest

```typescript
client.reviewMerge.rejectUnlockRequest(id: string, unlockRequestId: string, data?: Record<string, unknown>): Promise<unknown>
```

Rejects an unlock request, keeping the review-merge request locked.

The lock holder calls this to deny an unlock request from another agent.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `unlockRequestId` | `string` | The unique identifier of the unlock request to reject |
| `data` | `Record<string, unknown>` _(optional)_ | Optional additional data such as rejection reason |

## Returns

**`Promise<unknown>`** — A promise that resolves when the unlock request has been rejected

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.rejectUnlockRequest('id', 'unlockRequestId');
```
