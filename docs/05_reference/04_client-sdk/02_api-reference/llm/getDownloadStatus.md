---
name: getDownloadStatus
cbbaseinfo:
  description: "Checks the current download status of a model.

Returns progress information for an active or completed model download, including
percentage complete, bytes downloaded, and any error state."
cbparameters:
  parameters:
    - name: modelId
      typeName: string
      description: The identifier of the model to check
      isOptional: false
  returns:
    signatureTypeName: "Promise<LLMDownloadStatus>"
    description: A promise that resolves to the current download status
data:
  name: getDownloadStatus
  category: llm
  link: getDownloadStatus.md
---
# getDownloadStatus

```typescript
client.llm.getDownloadStatus(modelId: string): Promise<LLMDownloadStatus>
```

Checks the current download status of a model.

Returns progress information for an active or completed model download, including
percentage complete, bytes downloaded, and any error state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `modelId` | `string` | The identifier of the model to check |

## Returns

**`Promise<LLMDownloadStatus>`** — A promise that resolves to the current download status

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getDownloadStatus('modelId');
```
