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
  category: chatApi
  link: updateTask.md
---
# updateTask

```typescript
plugin.chatApi.updateTask(data: UpdateChatTaskRequest): Promise<unknown>
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
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.updateTask(/* UpdateChatTaskRequest */);
```
