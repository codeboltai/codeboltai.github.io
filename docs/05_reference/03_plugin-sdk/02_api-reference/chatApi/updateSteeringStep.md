---
title: updateSteeringStep
---

# `updateSteeringStep`

```typescript
plugin.chatApi.updateSteeringStep(threadId: string, steeringStepId: string, data: UpdateSteeringStepData): Promise<SteeringStep>
```

Updates a steering step in a thread.

Modifies the instruction or metadata of an existing steering step.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread |
| `steeringStepId` | `string` | Yes | The unique identifier of the steering step to update |
| `data` | `UpdateSteeringStepData` | Yes | The fields to update on the steering step |

## Returns

`Promise<SteeringStep>` — A promise that resolves to the updated SteeringStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.updateSteeringStep('threadId', 'steeringStepId', /* UpdateSteeringStepData */);
console.log(result);
```
