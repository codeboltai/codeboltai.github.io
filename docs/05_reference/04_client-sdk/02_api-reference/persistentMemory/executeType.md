---
name: executeType
cbbaseinfo:
  description: "Executes a persistent memory type's processing pipeline.

Runs the defined processing steps against the provided input data or configured
data source, generating new memory entries as output."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the type to execute
      isOptional: false
    - name: data
      typeName: ExecutePersistentMemoryRequest
      description: Optional execution parameters and input data
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the execution has been initiated
data:
  name: executeType
  category: persistentMemory
  link: executeType.md
---
# executeType

```typescript
client.persistentMemory.executeType(id: string, data?: ExecutePersistentMemoryRequest): Promise<unknown>
```

Executes a persistent memory type's processing pipeline.

Runs the defined processing steps against the provided input data or configured
data source, generating new memory entries as output.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the type to execute |
| `data` | `ExecutePersistentMemoryRequest` _(optional)_ | Optional execution parameters and input data |

## Returns

**`Promise<unknown>`** — A promise that resolves when the execution has been initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.executeType('id');
```
