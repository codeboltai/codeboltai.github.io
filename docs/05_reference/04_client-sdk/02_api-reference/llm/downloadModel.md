---
name: downloadModel
cbbaseinfo:
  description: "Initiates the download of a model for local use.

Starts an asynchronous download of a model that can be run locally (e.g., via Ollama).
Use  to monitor progress."
cbparameters:
  parameters:
    - name: data
      typeName: LLMDownloadModelRequest
      description: The download request specifying which model to download
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the download has been initiated
data:
  name: downloadModel
  category: llm
  link: downloadModel.md
---
# downloadModel

```typescript
client.llm.downloadModel(data: LLMDownloadModelRequest): Promise<unknown>
```

Initiates the download of a model for local use.

Starts an asynchronous download of a model that can be run locally (e.g., via Ollama).
Use  to monitor progress.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LLMDownloadModelRequest` | The download request specifying which model to download |

## Returns

**`Promise<unknown>`** — A promise that resolves when the download has been initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.downloadModel(/* LLMDownloadModelRequest */);
```
