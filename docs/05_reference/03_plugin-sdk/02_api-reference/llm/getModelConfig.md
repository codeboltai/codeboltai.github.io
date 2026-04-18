---
name: getModelConfig
cbbaseinfo:
  description: "Gets the model configuration for a specific model or the default application model.
If modelId is provided, returns configuration for that specific model.
If modelId is not provided, returns the default application LLM configuration."
cbparameters:
  parameters:
    - name: modelId
      typeName: string
      description: Optional model identifier. If not provided, returns default model config.
      isOptional: true
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the model configuration including provider and model details.
data:
  name: getModelConfig
  category: llm
  link: getModelConfig.md
---
# getModelConfig

```typescript
plugin.llm.getModelConfig(modelId?: string): Promise<object>
```

Gets the model configuration for a specific model or the default application model.
If modelId is provided, returns configuration for that specific model.
If modelId is not provided, returns the default application LLM configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `modelId` | `string` _(optional)_ | Optional model identifier. If not provided, returns default model config. |

## Returns

**`Promise<object>`** — A promise that resolves with the model configuration including provider and model details.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llm.getModelConfig();
```
