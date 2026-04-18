---
name: get
cbbaseinfo:
  description: Get a single update request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<UpdateRequest>"
    description: ""
data:
  name: get
  category: updateRequests
  link: get.md
---
# get

```typescript
client.updateRequests.get(id: string): Promise<UpdateRequest>
```

Get a single update request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<UpdateRequest>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.get('id');
```
