---
name: updateStatus
cbbaseinfo:
  description: Update step status
cbparameters:
  parameters:
    - name: stepId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateStepStatusRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadStep>"
    description: ""
data:
  name: updateStatus
  category: threadSteps
  link: updateStatus.md
---
# updateStatus

```typescript
client.threadSteps.updateStatus(stepId: string, data: UpdateStepStatusRequest): Promise<ThreadStep>
```

Update step status

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `stepId` | `string` |  |
| `data` | `UpdateStepStatusRequest` |  |

## Returns

**`Promise<ThreadStep>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.updateStatus('stepId', /* UpdateStepStatusRequest */);
```
