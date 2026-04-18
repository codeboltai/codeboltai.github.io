---
name: createRemoteTask
cbbaseinfo:
  description: "Creates a new remote task.

Registers a task that will be executed by a remote agent or service,
tracking it within the chat context."
cbparameters:
  parameters:
    - name: data
      typeName: CreateRemoteTaskRequest
      description: The remote task creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the created task data
data:
  name: createRemoteTask
  category: chat
  link: createRemoteTask.md
---
# createRemoteTask

```typescript
client.chat.createRemoteTask(data: CreateRemoteTaskRequest): Promise<unknown>
```

Creates a new remote task.

Registers a task that will be executed by a remote agent or service,
tracking it within the chat context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateRemoteTaskRequest` | The remote task creation payload |

## Returns

**`Promise<unknown>`** — A promise that resolves to the created task data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.createRemoteTask(/* CreateRemoteTaskRequest */);
```
