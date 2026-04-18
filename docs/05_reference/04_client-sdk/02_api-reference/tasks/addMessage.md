---
name: addMessage
cbbaseinfo:
  description: "Adds a message to a task's message thread.

Appends a new message to the task's communication thread. Messages
can be used for notes, comments, status updates, or other
communication related to the task. Returns the created message."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to add the message to
      isOptional: false
    - name: data
      typeName: AddTaskMessageRequest
      description: The message creation request
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskMessage>"
    description: A promise that resolves to the created TaskMessage object
data:
  name: addMessage
  category: tasks
  link: addMessage.md
---
# addMessage

```typescript
client.tasks.addMessage(taskId: string, data: AddTaskMessageRequest): Promise<TaskMessage>
```

Adds a message to a task's message thread.

Appends a new message to the task's communication thread. Messages
can be used for notes, comments, status updates, or other
communication related to the task. Returns the created message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to add the message to |
| `data` | `AddTaskMessageRequest` | The message creation request |

## Returns

**`Promise<TaskMessage>`** — A promise that resolves to the created TaskMessage object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.addMessage('taskId', /* AddTaskMessageRequest */);
```
