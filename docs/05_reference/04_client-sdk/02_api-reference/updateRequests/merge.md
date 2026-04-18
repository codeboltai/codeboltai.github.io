---
name: merge
cbbaseinfo:
  description: Merge a request into project structure
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: MergeUpdateRequestRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: merge
  category: updateRequests
  link: merge.md
---
# merge

```typescript
client.updateRequests.merge(id: string, data?: MergeUpdateRequestRequest): Promise<unknown>
```

Merge a request into project structure

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `MergeUpdateRequestRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.merge('id');
```
