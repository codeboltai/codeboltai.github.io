---
name: getEmbeddingSupportedLLMs
cbbaseinfo:
  description: "Retrieves LLM providers that support text embedding capabilities.

Filters providers to only those offering embedding models, which convert text into
numerical vectors for semantic search, similarity matching, and RAG workflows."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<LLMProvider[]>"
    description: A promise that resolves to an array of embedding-capable LLM providers
data:
  name: getEmbeddingSupportedLLMs
  category: llm
  link: getEmbeddingSupportedLLMs.md
---
# getEmbeddingSupportedLLMs

```typescript
client.llm.getEmbeddingSupportedLLMs(): Promise<LLMProvider[]>
```

Retrieves LLM providers that support text embedding capabilities.

Filters providers to only those offering embedding models, which convert text into
numerical vectors for semantic search, similarity matching, and RAG workflows.

## Parameters

_None_

## Returns

**`Promise<LLMProvider[]>`** — A promise that resolves to an array of embedding-capable LLM providers

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getEmbeddingSupportedLLMs();
```
