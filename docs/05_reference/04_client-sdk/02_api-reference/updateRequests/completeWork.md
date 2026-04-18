---
name: completeWork
cbbaseinfo:
  description: Complete work on a request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: CompleteWorkRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: completeWork
  category: updateRequests
  link: completeWork.md
---
# completeWork

```typescript
client.updateRequests.completeWork(id: string, data?: CompleteWorkRequest): Promise<unknown>
```

Complete work on a request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `CompleteWorkRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.completeWork('id');
```
