---
name: deleteSteeringStep
cbbaseinfo:
  description: "Deletes a steering step from a thread.

Removes the specified steering instruction from the thread."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: steeringStepId
      typeName: string
      description: The unique identifier of the steering step to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the steering step has been deleted
data:
  name: deleteSteeringStep
  category: chat
  link: deleteSteeringStep.md
---
# deleteSteeringStep

```typescript
client.chat.deleteSteeringStep(threadId: string, steeringStepId: string): Promise<void>
```

Deletes a steering step from a thread.

Removes the specified steering instruction from the thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `steeringStepId` | `string` | The unique identifier of the steering step to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the steering step has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.deleteSteeringStep('threadId', 'steeringStepId');
```
