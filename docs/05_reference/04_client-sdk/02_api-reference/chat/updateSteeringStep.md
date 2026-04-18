---
name: updateSteeringStep
cbbaseinfo:
  description: "Updates a steering step in a thread.

Modifies the instruction or metadata of an existing steering step."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: steeringStepId
      typeName: string
      description: The unique identifier of the steering step to update
      isOptional: false
    - name: data
      typeName: UpdateSteeringStepData
      description: The fields to update on the steering step
      isOptional: false
  returns:
    signatureTypeName: "Promise<SteeringStep>"
    description: A promise that resolves to the updated SteeringStep
data:
  name: updateSteeringStep
  category: chat
  link: updateSteeringStep.md
---
# updateSteeringStep

```typescript
client.chat.updateSteeringStep(threadId: string, steeringStepId: string, data: UpdateSteeringStepData): Promise<SteeringStep>
```

Updates a steering step in a thread.

Modifies the instruction or metadata of an existing steering step.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `steeringStepId` | `string` | The unique identifier of the steering step to update |
| `data` | `UpdateSteeringStepData` | The fields to update on the steering step |

## Returns

**`Promise<SteeringStep>`** — A promise that resolves to the updated SteeringStep

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.updateSteeringStep('threadId', 'steeringStepId', /* UpdateSteeringStepData */);
```
