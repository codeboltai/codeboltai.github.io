---
name: getDownloadedLocalModels
cbbaseinfo:
  description: "Retrieves the list of models that have been downloaded for local execution.

Returns all models currently available on disk for local inference, as opposed to
cloud-hosted models that require API calls."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<LLMModel[]>"
    description: A promise that resolves to an array of locally downloaded models
data:
  name: getDownloadedLocalModels
  category: llm
  link: getDownloadedLocalModels.md
---
# getDownloadedLocalModels

```typescript
client.llm.getDownloadedLocalModels(): Promise<LLMModel[]>
```

Retrieves the list of models that have been downloaded for local execution.

Returns all models currently available on disk for local inference, as opposed to
cloud-hosted models that require API calls.

## Parameters

_None_

## Returns

**`Promise<LLMModel[]>`** — A promise that resolves to an array of locally downloaded models

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getDownloadedLocalModels();
```
