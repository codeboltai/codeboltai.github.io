---
title: addSteeringStep
---

# `addSteeringStep`

```typescript
plugin.chatApi.addSteeringStep(data: AddSteeringStepRequest): Promise<SteeringStep>
```

Adds a steering step to a thread.

Creates a steering step that guides the agent's behavior during
execution, providing directional instructions or constraints.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AddSteeringStepRequest` | Yes | The steering step creation payload |

## Returns

`Promise<SteeringStep>` — A promise that resolves to the created SteeringStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.addSteeringStep(/* AddSteeringStepRequest */);
console.log(result);
```
