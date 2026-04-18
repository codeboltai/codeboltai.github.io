---
title: addThreadStep
---

# `addThreadStep`

```typescript
plugin.chatApi.addThreadStep(threadId: string, stepData: Record<string, unknown>): Promise<ChatThreadStep>
```

Adds a step to a chat thread.

Creates a new step within the thread's step sequence, representing
a discrete unit of work or progress in the conversation.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |
| `stepData` | `Record<string, unknown>` | Yes | The step definition including type and content |

## Returns

`Promise<ChatThreadStep>` — A promise that resolves to the created ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.addThreadStep('threadId', /* Record<string, unknown> */);
console.log(result);
```
