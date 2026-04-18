---
name: updateTaskStep
cbbaseinfo:
  description: "Updates a step in a thread via the task endpoint.

Modifies the properties of a thread step, accessed through the
task management API path."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
    - name: stepId
      typeName: string
      description: The unique identifier of the step to update
      isOptional: false
    - name: data
      typeName: UpdateThreadStepData
      description: The fields to update on the step
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep>"
    description: A promise that resolves to the updated ChatThreadStep
data:
  name: updateTaskStep
  category: chatApi
  link: updateTaskStep.md
---
# updateTaskStep

```typescript
plugin.chatApi.updateTaskStep(threadId: string, stepId: string, data: UpdateThreadStepData): Promise<ChatThreadStep>
```

Updates a step in a thread via the task endpoint.

Modifies the properties of a thread step, accessed through the
task management API path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to update |
| `data` | `UpdateThreadStepData` | The fields to update on the step |

## Returns

**`Promise<ChatThreadStep>`** — A promise that resolves to the updated ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.updateTaskStep('threadId', 'stepId', /* UpdateThreadStepData */);
```
