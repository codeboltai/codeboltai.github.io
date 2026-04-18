---
name: getProviders
cbbaseinfo:
  description: "Retrieves all configured LLM providers with their current status and available models.

Returns the complete list of LLM providers (e.g., OpenAI, Anthropic, Ollama) that have
been configured in the system, including whether they have valid API keys set."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<LLMProvider[]>"
    description: A promise that resolves to an array of LLM provider configurations
data:
  name: getProviders
  category: llm
  link: getProviders.md
---
# getProviders

```typescript
client.llm.getProviders(): Promise<LLMProvider[]>
```

Retrieves all configured LLM providers with their current status and available models.

Returns the complete list of LLM providers (e.g., OpenAI, Anthropic, Ollama) that have
been configured in the system, including whether they have valid API keys set.

## Parameters

_None_

## Returns

**`Promise<LLMProvider[]>`** — A promise that resolves to an array of LLM provider configurations

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getProviders();
```
