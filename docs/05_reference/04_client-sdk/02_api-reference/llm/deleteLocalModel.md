---
name: deleteLocalModel
cbbaseinfo:
  description: "Deletes a locally downloaded model from disk.

Permanently removes a model that was previously downloaded for local execution,
freeing up disk space. The model can be re-downloaded later if needed."
cbparameters:
  parameters:
    - name: modelId
      typeName: string
      description: The identifier of the local model to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the model has been deleted
data:
  name: deleteLocalModel
  category: llm
  link: deleteLocalModel.md
---
# deleteLocalModel

```typescript
client.llm.deleteLocalModel(modelId: string): Promise<unknown>
```

Deletes a locally downloaded model from disk.

Permanently removes a model that was previously downloaded for local execution,
freeing up disk space. The model can be re-downloaded later if needed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `modelId` | `string` | The identifier of the local model to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the model has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.deleteLocalModel('modelId');
```
