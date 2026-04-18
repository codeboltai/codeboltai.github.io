---
name: getVector
cbbaseinfo:
  description: Retrieves a vector from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to retrieve.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GetVectorResponse>"
    description: A promise that resolves with the retrieved vector.
data:
  name: getVector
  category: vectordb
  link: getVector.md
---
# getVector

```typescript
plugin.vectordb.getVector(key: string): Promise<GetVectorResponse>
```

Retrieves a vector from the vector database based on the provided key.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `key` | `string` | The key of the vector to retrieve. |

## Returns

**`Promise<GetVectorResponse>`** — A promise that resolves with the retrieved vector.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordb.getVector('key');
```
