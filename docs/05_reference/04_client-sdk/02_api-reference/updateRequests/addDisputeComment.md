---
name: addDisputeComment
cbbaseinfo:
  description: Add a comment to a dispute
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: disputeId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddDisputeCommentRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addDisputeComment
  category: updateRequests
  link: addDisputeComment.md
---
# addDisputeComment

```typescript
client.updateRequests.addDisputeComment(id: string, disputeId: string, data: AddDisputeCommentRequest): Promise<unknown>
```

Add a comment to a dispute

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `disputeId` | `string` |  |
| `data` | `AddDisputeCommentRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.addDisputeComment('id', 'disputeId', /* AddDisputeCommentRequest */);
```
