---
name: createScheduledTask
cbbaseinfo:
  description: "Creates a new scheduled task.

Registers a task that will be executed at a future time, tracked
within the chat context."
cbparameters:
  parameters:
    - name: data
      typeName: CreateScheduledTaskRequest
      description: The scheduled task creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the created task data
data:
  name: createScheduledTask
  category: chat
  link: createScheduledTask.md
---
# createScheduledTask

```typescript
client.chat.createScheduledTask(data: CreateScheduledTaskRequest): Promise<unknown>
```

Creates a new scheduled task.

Registers a task that will be executed at a future time, tracked
within the chat context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateScheduledTaskRequest` | The scheduled task creation payload |

## Returns

**`Promise<unknown>`** — A promise that resolves to the created task data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.createScheduledTask(/* CreateScheduledTaskRequest */);
```
