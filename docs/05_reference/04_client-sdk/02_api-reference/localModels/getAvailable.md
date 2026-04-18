---
name: getAvailable
cbbaseinfo:
  description: "Retrieves the catalog of models available for local download and execution.

Returns all models that can be downloaded from supported registries (e.g., Ollama, GGUF)
for local inference. Use this to browse what models are available before downloading."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<LocalModel[]>"
    description: A promise that resolves to an array of available local models
data:
  name: getAvailable
  category: localModels
  link: getAvailable.md
---
# getAvailable

```typescript
client.localModels.getAvailable(): Promise<LocalModel[]>
```

Retrieves the catalog of models available for local download and execution.

Returns all models that can be downloaded from supported registries (e.g., Ollama, GGUF)
for local inference. Use this to browse what models are available before downloading.

## Parameters

_None_

## Returns

**`Promise<LocalModel[]>`** — A promise that resolves to an array of available local models

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.localModels.getAvailable();
```
