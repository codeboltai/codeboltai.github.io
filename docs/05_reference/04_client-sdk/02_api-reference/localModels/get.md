---
name: get
cbbaseinfo:
  description: "Retrieves detailed information about a specific local model.

Returns comprehensive metadata for a model including its size, quantization level,
architecture, and current status (downloaded, loaded, etc.)."
cbparameters:
  parameters:
    - name: modelId
      typeName: string
      description: The unique identifier of the model to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<LocalModel>"
    description: "A promise that resolves to the model's detailed information"
data:
  name: get
  category: localModels
  link: get.md
---
# get

```typescript
client.localModels.get(modelId: string): Promise<LocalModel>
```

Retrieves detailed information about a specific local model.

Returns comprehensive metadata for a model including its size, quantization level,
architecture, and current status (downloaded, loaded, etc.).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `modelId` | `string` | The unique identifier of the model to retrieve |

## Returns

**`Promise<LocalModel>`** — A promise that resolves to the model's detailed information

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.localModels.get('modelId');
```
