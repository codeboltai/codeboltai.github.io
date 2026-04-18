---
name: cancelDownload
cbbaseinfo:
  description: "Cancels an in-progress model download.

Stops the download of a model that was previously initiated with .
Any partially downloaded data may be cleaned up."
cbparameters:
  parameters:
    - name: data
      typeName: LLMCancelDownloadRequest
      description: The cancellation request identifying the download to stop
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the cancellation has been processed
data:
  name: cancelDownload
  category: llm
  link: cancelDownload.md
---
# cancelDownload

```typescript
client.llm.cancelDownload(data: LLMCancelDownloadRequest): Promise<unknown>
```

Cancels an in-progress model download.

Stops the download of a model that was previously initiated with .
Any partially downloaded data may be cleaned up.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LLMCancelDownloadRequest` | The cancellation request identifying the download to stop |

## Returns

**`Promise<unknown>`** — A promise that resolves when the cancellation has been processed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.cancelDownload(/* LLMCancelDownloadRequest */);
```
