---
title: getTaskSteps
---

# `getTaskSteps`

```typescript
plugin.chatApi.getTaskSteps(threadId: string): Promise<ChatThreadStep[]>
```

Retrieves steps for a thread via the task endpoint.

Returns the step sequence for a thread, accessed through the
task management API path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |

## Returns

`Promise<ChatThreadStep[]>` — A promise that resolves to an array of ChatThreadStep objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.getTaskSteps('threadId');
console.log(result);
```
