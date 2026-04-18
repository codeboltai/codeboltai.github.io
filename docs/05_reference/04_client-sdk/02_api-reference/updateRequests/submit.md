---
name: submit
cbbaseinfo:
  description: Submit a request for review
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
  name: submit
  category: updateRequests
  link: submit.md
---
# submit

```typescript
client.updateRequests.submit(id: string): Promise<unknown>
```

Submit a request for review

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

await client.updateRequests.submit('id');
```
