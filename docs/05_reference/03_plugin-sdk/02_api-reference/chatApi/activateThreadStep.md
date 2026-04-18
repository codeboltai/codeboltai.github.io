---
name: activateThreadStep
cbbaseinfo:
  description: "Activates a step in a chat thread.

Marks the specified step as the currently active step, indicating
that work is in progress on this step."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: stepId
      typeName: string
      description: The unique identifier of the step to activate
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep>"
    description: A promise that resolves to the activated ChatThreadStep
data:
  name: activateThreadStep
  category: chatApi
  link: activateThreadStep.md
---
# activateThreadStep

```typescript
plugin.chatApi.activateThreadStep(threadId: string, stepId: string): Promise<ChatThreadStep>
```

Activates a step in a chat thread.

Marks the specified step as the currently active step, indicating
that work is in progress on this step.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to activate |

## Returns

**`Promise<ChatThreadStep>`** — A promise that resolves to the activated ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.activateThreadStep('threadId', 'stepId');
```
