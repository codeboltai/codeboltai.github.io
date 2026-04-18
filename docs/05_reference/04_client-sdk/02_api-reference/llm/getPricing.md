---
name: getPricing
cbbaseinfo:
  description: "Fetches the current pricing information for all LLM models.

Returns token pricing data (input/output cost per token) for each model across all
providers. Useful for cost estimation and budget tracking of LLM usage."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the pricing data for all available models
data:
  name: getPricing
  category: llm
  link: getPricing.md
---
# getPricing

```typescript
client.llm.getPricing(): Promise<unknown>
```

Fetches the current pricing information for all LLM models.

Returns token pricing data (input/output cost per token) for each model across all
providers. Useful for cost estimation and budget tracking of LLM usage.

## Parameters

_None_

## Returns

**`Promise<unknown>`** — A promise that resolves to the pricing data for all available models

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getPricing();
```
