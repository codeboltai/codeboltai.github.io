---
name: startWork
cbbaseinfo:
  description: Start working on a request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: startWork
  category: updateRequests
  link: startWork.md
---
# startWork

```typescript
client.updateRequests.startWork(id: string): Promise<unknown>
```

Start working on a request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.startWork('id');
```
