---
name: list
cbbaseinfo:
  description: List all update requests
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<UpdateRequest[]>"
    description: ""
data:
  name: list
  category: updateRequests
  link: list.md
---
# list

```typescript
client.updateRequests.list(params?: Record<string, unknown>): Promise<UpdateRequest[]>
```

List all update requests

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<UpdateRequest[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.list();
```
