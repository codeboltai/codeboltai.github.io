---
name: updatePricingToLocal
cbbaseinfo:
  description: "Syncs the latest LLM pricing information to local storage.

Downloads the most up-to-date pricing catalog from the remote source and persists it
locally. Call this periodically to ensure cost calculations reflect current rates."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the local pricing data has been updated
data:
  name: updatePricingToLocal
  category: llm
  link: updatePricingToLocal.md
---
# updatePricingToLocal

```typescript
client.llm.updatePricingToLocal(): Promise<unknown>
```

Syncs the latest LLM pricing information to local storage.

Downloads the most up-to-date pricing catalog from the remote source and persists it
locally. Call this periodically to ensure cost calculations reflect current rates.

## Parameters

_None_

## Returns

**`Promise<unknown>`** — A promise that resolves when the local pricing data has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.updatePricingToLocal();
```
