---
name: skip
cbbaseinfo:
  description: Skip a step
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: SkipStepRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: skip
  category: threadSteps
  link: skip.md
---
# skip

```typescript
client.threadSteps.skip(stepId: string, data?: SkipStepRequest): Promise<ThreadStep>
```

Skip a step

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |
| `data` | `SkipStepRequest` _(optional)_ |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.skip('stepId');
```
