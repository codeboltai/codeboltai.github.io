---
name: delete
cbbaseinfo:
  description: "Deletes a downloaded model from local storage.

Permanently removes the model files from disk, freeing storage space. The model must
be unloaded from memory before deletion. It can be re-downloaded later if needed."
cbparameters:
  parameters:
    - name: modelId
      typeName: string
      description: The unique identifier of the model to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the model has been removed from disk
data:
  name: delete
  category: localModels
  link: delete.md
---
# delete

```typescript
client.localModels.delete(modelId: string): Promise<unknown>
```

Deletes a downloaded model from local storage.

Permanently removes the model files from disk, freeing storage space. The model must
be unloaded from memory before deletion. It can be re-downloaded later if needed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `modelId` | `string` | The unique identifier of the model to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the model has been removed from disk

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.localModels.delete('modelId');
```
