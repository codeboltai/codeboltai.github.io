---
title: updateTask
---

# `updateTask`

```typescript
plugin.chatApi.updateTask(data: UpdateChatTaskRequest): Promise<unknown>
```

Updates task information for a thread.

Modifies the task metadata or configuration associated with
a chat thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateChatTaskRequest` | Yes | The task update payload |

## Returns

`Promise<unknown>` — A promise that resolves to the updated task data

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateTask(/* UpdateChatTaskRequest */);
console.log(result);
```
