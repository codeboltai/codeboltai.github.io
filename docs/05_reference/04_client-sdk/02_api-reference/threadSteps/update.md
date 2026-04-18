---
name: update
cbbaseinfo:
  description: Update a step
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateStepRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: update
  category: threadSteps
  link: update.md
---
# update

```typescript
client.threadSteps.update(stepId: string, data: UpdateStepRequest): Promise<ThreadStep>
```

Update a step

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |
| `data` | `UpdateStepRequest` |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.update('stepId', /* UpdateStepRequest */);
```
