---
name: updateThreadStep
cbbaseinfo:
  description: "Updates a step within a chat thread.

Modifies the properties of an existing step, such as its status,
content, or metadata."
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
    - name: updateData
      typeName: Record<string, unknown>
      description: The fields to update on the step
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep>"
    description: A promise that resolves to the updated ChatThreadStep
data:
  name: updateThreadStep
  category: chat
  link: updateThreadStep.md
---
# updateThreadStep

```typescript
client.chat.updateThreadStep(threadId: string, stepId: string, updateData: Record<string, unknown>): Promise<ChatThreadStep>
```

Updates a step within a chat thread.

Modifies the properties of an existing step, such as its status,
content, or metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to update |
| `updateData` | `Record<string, unknown>` | The fields to update on the step |

## Returns

**`Promise<ChatThreadStep>`** — A promise that resolves to the updated ChatThreadStep

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.updateThreadStep('threadId', 'stepId', /* Record<string, unknown> */);
```
