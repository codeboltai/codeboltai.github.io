---
name: completeThreadStep
cbbaseinfo:
  description: "Completes a step in a chat thread.

Marks the specified step as completed, optionally recording
completion details such as the outcome or output."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: stepId
      typeName: string
      description: The unique identifier of the step to complete
      isOptional: false
    - name: data
      typeName: CompleteStepData
      description: Optional completion details
      isOptional: true
  returns:
    signatureTypeName: "Promise<ChatThreadStep>"
    description: A promise that resolves to the completed ChatThreadStep
data:
  name: completeThreadStep
  category: chat
  link: completeThreadStep.md
---
# completeThreadStep

```typescript
client.chat.completeThreadStep(threadId: string, stepId: string, data?: CompleteStepData): Promise<ChatThreadStep>
```

Completes a step in a chat thread.

Marks the specified step as completed, optionally recording
completion details such as the outcome or output.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to complete |
| `data` | `CompleteStepData` _(optional)_ | Optional completion details |

## Returns

**`Promise<ChatThreadStep>`** — A promise that resolves to the completed ChatThreadStep

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.completeThreadStep('threadId', 'stepId');
```
