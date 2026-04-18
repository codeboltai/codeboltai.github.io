---
name: getModels
cbbaseinfo:
  description: "Retrieves the available models for a specific LLM provider.

Queries the models catalog for a given provider, returning all models that can be
used with that provider's current configuration and API key."
cbparameters:
  parameters:
    - name: data
      typeName: LLMGetModelsRequest
      description: "The request specifying which provider's models to retrieve"
      isOptional: false
  returns:
    signatureTypeName: "Promise<LLMModel[]>"
    description: A promise that resolves to an array of models available for the provider
data:
  name: getModels
  category: llm
  link: getModels.md
---
# getModels

```typescript
client.llm.getModels(data: LLMGetModelsRequest): Promise<LLMModel[]>
```

Retrieves the available models for a specific LLM provider.

Queries the models catalog for a given provider, returning all models that can be
used with that provider's current configuration and API key.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LLMGetModelsRequest` | The request specifying which provider's models to retrieve |

## Returns

**`Promise<LLMModel[]>`** — A promise that resolves to an array of models available for the provider

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getModels(/* LLMGetModelsRequest */);
```
