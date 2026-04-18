---
title: updateTaskStep
---

# `updateTaskStep`

```typescript
plugin.chatApi.updateTaskStep(threadId: string, stepId: string, data: UpdateThreadStepData): Promise<ChatThreadStep>
```

Updates a step in a thread via the task endpoint.

Modifies the properties of a thread step, accessed through the
task management API path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |
| `stepId` | `string` | Yes | The unique identifier of the step to update |
| `data` | `UpdateThreadStepData` | Yes | The fields to update on the step |

## Returns

`Promise<ChatThreadStep>` — A promise that resolves to the updated ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateTaskStep('threadId', 'stepId', /* UpdateThreadStepData */);
console.log(result);
```
