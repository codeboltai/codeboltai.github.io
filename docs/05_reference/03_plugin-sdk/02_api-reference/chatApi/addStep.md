---
title: addStep
---

# `addStep`

```typescript
plugin.chatApi.addStep(data: AddStepRequest): Promise<ChatThreadStep>
```

Adds a step to a thread via the add-step endpoint.

An alternative method for adding steps that accepts the thread ID
as part of the request body rather than the URL path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AddStepRequest` | Yes | The step addition request including thread ID and step data |

## Returns

`Promise<ChatThreadStep>` — A promise that resolves to the created ChatThreadStep

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chatApi.addStep(/* AddStepRequest */);
console.log(result);
```
