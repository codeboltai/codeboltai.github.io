---
name: getTaskSteps
cbbaseinfo:
  description: "Retrieves steps for a thread via the task endpoint.

Returns the step sequence for a thread, accessed through the
task management API path."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadStep[]>"
    description: A promise that resolves to an array of ChatThreadStep objects
data:
  name: getTaskSteps
  category: chat
  link: getTaskSteps.md
---
# getTaskSteps

```typescript
client.chat.getTaskSteps(threadId: string): Promise<ChatThreadStep[]>
```

Retrieves steps for a thread via the task endpoint.

Returns the step sequence for a thread, accessed through the
task management API path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<ChatThreadStep[]>`** — A promise that resolves to an array of ChatThreadStep objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.getTaskSteps('threadId');
```
