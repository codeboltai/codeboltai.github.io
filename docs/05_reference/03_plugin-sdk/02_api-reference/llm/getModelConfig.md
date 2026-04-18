---
title: getModelConfig
---

# `getModelConfig`

```typescript
plugin.llm.getModelConfig(modelId?: string): Promise<object>
```

Gets the model configuration for a specific model or the default application model.
If modelId is provided, returns configuration for that specific model.
If modelId is not provided, returns the default application LLM configuration.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `modelId` | `string` | No | Optional model identifier. If not provided, returns default model config. |

## Returns

`Promise<object>` — A promise that resolves with the model configuration including provider and model details.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llm.getModelConfig();
console.log(result);
```
