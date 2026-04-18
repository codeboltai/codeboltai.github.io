---
name: execute
cbbaseinfo:
  description: Execute a step
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: ExecuteStepRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: execute
  category: threadSteps
  link: execute.md
---
# execute

```typescript
client.threadSteps.execute(stepId: string, data?: ExecuteStepRequest): Promise<ThreadStep>
```

Execute a step

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |
| `data` | `ExecuteStepRequest` _(optional)_ |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.execute('stepId');
```
