---
name: download
cbbaseinfo:
  description: "Initiates the download of a model for local execution.

Starts an asynchronous download of the specified model. Large models may take
significant time and disk space. Monitor download progress through status endpoints."
cbparameters:
  parameters:
    - name: data
      typeName: DownloadLocalModelRequest
      description: The download request configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the download has been initiated
data:
  name: download
  category: localModels
  link: download.md
---
# download

```typescript
client.localModels.download(data: DownloadLocalModelRequest): Promise<unknown>
```

Initiates the download of a model for local execution.

Starts an asynchronous download of the specified model. Large models may take
significant time and disk space. Monitor download progress through status endpoints.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `DownloadLocalModelRequest` | The download request configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the download has been initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.localModels.download(/* DownloadLocalModelRequest */);
```
