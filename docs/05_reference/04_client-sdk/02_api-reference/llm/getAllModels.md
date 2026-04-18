---
name: getAllModels
cbbaseinfo:
  description: "Retrieves all models across all configured providers.

Returns a flat list of every available model from all providers. Optionally accepts
filter criteria to narrow results by capability, provider, or other attributes."
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: Optional filter criteria for narrowing the model list
      isOptional: true
  returns:
    signatureTypeName: "Promise<LLMModel[]>"
    description: A promise that resolves to an array of all available LLM models
data:
  name: getAllModels
  category: llm
  link: getAllModels.md
---
# getAllModels

```typescript
client.llm.getAllModels(data?: Record<string, unknown>): Promise<LLMModel[]>
```

Retrieves all models across all configured providers.

Returns a flat list of every available model from all providers. Optionally accepts
filter criteria to narrow results by capability, provider, or other attributes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` _(optional)_ | Optional filter criteria for narrowing the model list |

## Returns

**`Promise<LLMModel[]>`** — A promise that resolves to an array of all available LLM models

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getAllModels();
```
