---
name: update
cbbaseinfo:
  description: Update an existing request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateUpdateRequestRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<UpdateRequest>"
    description: ""
data:
  name: update
  category: updateRequests
  link: update.md
---
# update

```typescript
client.updateRequests.update(id: string, data: UpdateUpdateRequestRequest): Promise<UpdateRequest>
```

Update an existing request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateUpdateRequestRequest` |  |

## Returns

**`Promise<UpdateRequest>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.update('id', /* UpdateUpdateRequestRequest */);
```
