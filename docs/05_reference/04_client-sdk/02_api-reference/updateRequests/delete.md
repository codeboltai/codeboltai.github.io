---
name: delete
cbbaseinfo:
  description: Delete an update request
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
  name: delete
  category: updateRequests
  link: delete.md
---
# delete

```typescript
client.updateRequests.delete(id: string): Promise<unknown>
```

Delete an update request

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

await client.updateRequests.delete('id');
```
