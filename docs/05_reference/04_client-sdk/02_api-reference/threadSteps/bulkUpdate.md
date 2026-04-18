---
name: bulkUpdate
cbbaseinfo:
  description: Bulk update steps
cbparameters:
  parameters:
    - name: data
      typeName: BulkUpdateStepsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: bulkUpdate
  category: threadSteps
  link: bulkUpdate.md
---
# bulkUpdate

```typescript
client.threadSteps.bulkUpdate(data: BulkUpdateStepsRequest): Promise<void>
```

Bulk update steps

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkUpdateStepsRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.bulkUpdate(/* BulkUpdateStepsRequest */);
```
