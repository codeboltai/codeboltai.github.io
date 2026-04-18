---
name: complete
cbbaseinfo:
  description: Complete a step
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: CompleteStepRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: complete
  category: threadSteps
  link: complete.md
---
# complete

```typescript
client.threadSteps.complete(stepId: string, data?: CompleteStepRequest): Promise<ThreadStep>
```

Complete a step

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |
| `data` | `CompleteStepRequest` _(optional)_ |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.complete('stepId');
```
