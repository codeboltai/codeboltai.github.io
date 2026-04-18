---
name: getStrategyOptions
cbbaseinfo:
  description: "Retrieves the configurable options for a specific chunking strategy.

Returns the parameter schema for the strategy, including defaults
and valid ranges. Use this to build dynamic configuration UIs."
cbparameters:
  parameters:
    - name: strategy
      typeName: string
      description: The name of the chunking strategy
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeStrategyOptions>"
    description: A promise that resolves to the  for the strategy
data:
  name: getStrategyOptions
  category: knowledge
  link: getStrategyOptions.md
---
# getStrategyOptions

```typescript
client.knowledge.getStrategyOptions(strategy: string): Promise<KnowledgeStrategyOptions>
```

Retrieves the configurable options for a specific chunking strategy.

Returns the parameter schema for the strategy, including defaults
and valid ranges. Use this to build dynamic configuration UIs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `strategy` | `string` | The name of the chunking strategy |

## Returns

**`Promise<KnowledgeStrategyOptions>`** — A promise that resolves to the  for the strategy

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.getStrategyOptions('strategy');
```
