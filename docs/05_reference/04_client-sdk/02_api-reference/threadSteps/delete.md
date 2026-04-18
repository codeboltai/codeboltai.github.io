---
name: delete
cbbaseinfo:
  description: Delete a step
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: delete
  category: threadSteps
  link: delete.md
---
# delete

```typescript
client.threadSteps.delete(stepId: string): Promise<void>
```

Delete a step

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.delete('stepId');
```
