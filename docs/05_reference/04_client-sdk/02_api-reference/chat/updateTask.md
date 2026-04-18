---
name: updateTask
cbbaseinfo:
  description: "Updates task information for a thread.

Modifies the task metadata or configuration associated with
a chat thread."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateChatTaskRequest
      description: The task update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the updated task data
data:
  name: updateTask
  category: chat
  link: updateTask.md
---
# updateTask

```typescript
client.chat.updateTask(data: UpdateChatTaskRequest): Promise<unknown>
```

Updates task information for a thread.

Modifies the task metadata or configuration associated with
a chat thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateChatTaskRequest` | The task update payload |

## Returns

**`Promise<unknown>`** — A promise that resolves to the updated task data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.updateTask(/* UpdateChatTaskRequest */);
```
