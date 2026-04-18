---
name: addDispute
cbbaseinfo:
  description: Add a dispute to a request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddDisputeRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addDispute
  category: updateRequests
  link: addDispute.md
---
# addDispute

```typescript
client.updateRequests.addDispute(id: string, data: AddDisputeRequest): Promise<unknown>
```

Add a dispute to a request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddDisputeRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.addDispute('id', /* AddDisputeRequest */);
```
