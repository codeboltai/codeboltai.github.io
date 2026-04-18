---
name: getStrategies
cbbaseinfo:
  description: "Retrieves all available chunking strategies.

Returns the list of chunking algorithms that can be used when
processing documents (e.g., fixed-size, sentence-based, semantic)."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<KnowledgeStrategy[]>"
    description: A promise that resolves to an array of  descriptors
data:
  name: getStrategies
  category: knowledge
  link: getStrategies.md
---
# getStrategies

```typescript
client.knowledge.getStrategies(): Promise<KnowledgeStrategy[]>
```

Retrieves all available chunking strategies.

Returns the list of chunking algorithms that can be used when
processing documents (e.g., fixed-size, sentence-based, semantic).

## Parameters

_None_

## Returns

**`Promise<KnowledgeStrategy[]>`** — A promise that resolves to an array of  descriptors

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.getStrategies();
```
