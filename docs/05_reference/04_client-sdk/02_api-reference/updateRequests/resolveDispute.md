---
name: resolveDispute
cbbaseinfo:
  description: Resolve a dispute
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
      typeName: ResolveDisputeRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: resolveDispute
  category: updateRequests
  link: resolveDispute.md
---
# resolveDispute

```typescript
client.updateRequests.resolveDispute(id: string, disputeId: string, data: ResolveDisputeRequest): Promise<unknown>
```

Resolve a dispute

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `disputeId` | `string` |  |
| `data` | `ResolveDisputeRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.resolveDispute('id', 'disputeId', /* ResolveDisputeRequest */);
```
