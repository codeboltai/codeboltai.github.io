---
name: addThreadStep
cbbaseinfo:
  description: "Adds a step to a chat thread.

Creates a new step within the thread's step sequence, representing
a discrete unit of work or progress in the conversation."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: stepData
      typeName: Record<string, unknown>
      description: The step definition including type and content
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep>"
    description: A promise that resolves to the created ChatThreadStep
data:
  name: addThreadStep
  category: chatApi
  link: addThreadStep.md
---
# addThreadStep

```typescript
plugin.chatApi.addThreadStep(threadId: string, stepData: Record<string, unknown>): Promise<ChatThreadStep>
```

Adds a step to a chat thread.

Creates a new step within the thread's step sequence, representing
a discrete unit of work or progress in the conversation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepData` | `Record<string, unknown>` | The step definition including type and content |

## Returns

**`Promise<ChatThreadStep>`** — A promise that resolves to the created ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.addThreadStep('threadId', /* Record<string, unknown> */);
```
