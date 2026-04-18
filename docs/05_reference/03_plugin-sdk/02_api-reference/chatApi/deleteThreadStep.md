---
title: deleteThreadStep
---

# `deleteThreadStep`

```typescript
plugin.chatApi.deleteThreadStep(threadId: string, stepId: string): Promise<void>
```

Deletes a step from a chat thread.

Removes the specified step from the thread's step sequence.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |
| `stepId` | `string` | Yes | The unique identifier of the step to delete |

## Returns

`Promise<void>` — A promise that resolves when the step has been deleted

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.deleteThreadStep('threadId', 'stepId');
console.log(result);
```
