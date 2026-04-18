---
name: bulkDelete
cbbaseinfo:
  description: Bulk delete steps
cbparameters:
  parameters:
    - name: data
      typeName: BulkDeleteStepsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: bulkDelete
  category: threadSteps
  link: bulkDelete.md
---
# bulkDelete

```typescript
client.threadSteps.bulkDelete(data: BulkDeleteStepsRequest): Promise<void>
```

Bulk delete steps

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkDeleteStepsRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.bulkDelete(/* BulkDeleteStepsRequest */);
```
