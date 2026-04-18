---
title: updateThreadStep
---

# `updateThreadStep`

```typescript
plugin.chatApi.updateThreadStep(threadId: string, stepId: string, updateData: Record<string, unknown>): Promise<ChatThreadStep>
```

Updates a step within a chat thread.

Modifies the properties of an existing step, such as its status,
content, or metadata.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |
| `stepId` | `string` | Yes | The unique identifier of the step to update |
| `updateData` | `Record<string, unknown>` | Yes | The fields to update on the step |

## Returns

`Promise<ChatThreadStep>` — A promise that resolves to the updated ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateThreadStep('threadId', 'stepId', /* Record<string, unknown> */);
console.log(result);
```
