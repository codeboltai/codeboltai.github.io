---
name: deleteThreadStep
cbbaseinfo:
  description: "Deletes a step from a chat thread.

Removes the specified step from the thread's step sequence."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: stepId
      typeName: string
      description: The unique identifier of the step to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the step has been deleted
data:
  name: deleteThreadStep
  category: chat
  link: deleteThreadStep.md
---
# deleteThreadStep

```typescript
client.chat.deleteThreadStep(threadId: string, stepId: string): Promise<void>
```

Deletes a step from a chat thread.

Removes the specified step from the thread's step sequence.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the step has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.deleteThreadStep('threadId', 'stepId');
```
