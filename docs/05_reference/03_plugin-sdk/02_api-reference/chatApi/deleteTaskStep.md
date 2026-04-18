---
name: deleteTaskStep
cbbaseinfo:
  description: "Deletes a step from a thread via the task endpoint.

Removes a specific step from a thread's step sequence, accessed
through the task management API path."
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
  name: deleteTaskStep
  category: chatApi
  link: deleteTaskStep.md
---
# deleteTaskStep

```typescript
plugin.chatApi.deleteTaskStep(threadId: string, stepId: string): Promise<void>
```

Deletes a step from a thread via the task endpoint.

Removes a specific step from a thread's step sequence, accessed
through the task management API path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the step has been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.deleteTaskStep('threadId', 'stepId');
```
