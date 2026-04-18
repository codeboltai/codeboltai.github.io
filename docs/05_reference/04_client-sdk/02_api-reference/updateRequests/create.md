---
name: create
cbbaseinfo:
  description: Create a new update request
cbparameters:
  parameters:
    - name: data
      typeName: CreateUpdateRequestRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<UpdateRequest>"
    description: ""
data:
  name: create
  category: updateRequests
  link: create.md
---
# create

```typescript
client.updateRequests.create(data: CreateUpdateRequestRequest): Promise<UpdateRequest>
```

Create a new update request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateUpdateRequestRequest` |  |

## Returns

**`Promise<UpdateRequest>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.create(/* CreateUpdateRequestRequest */);
```
