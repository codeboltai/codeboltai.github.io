---
name: fail
cbbaseinfo:
  description: Mark a step as failed
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: FailStepRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: fail
  category: threadSteps
  link: fail.md
---
# fail

```typescript
client.threadSteps.fail(stepId: string, data?: FailStepRequest): Promise<ThreadStep>
```

Mark a step as failed

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |
| `data` | `FailStepRequest` _(optional)_ |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.fail('stepId');
```
