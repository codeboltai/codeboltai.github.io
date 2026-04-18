---
name: createType
cbbaseinfo:
  description: "Creates a new persistent memory type with a defined processing pipeline.

Registers a new memory type that describes how input data should be processed and
stored. The type definition includes a sequence of steps that will be executed
when the pipeline runs."
cbparameters:
  parameters:
    - name: data
      typeName: CreatePersistentMemoryTypeRequest
      description: The type creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<PersistentMemoryType>"
    description: A promise that resolves to the newly created persistent memory type
data:
  name: createType
  category: persistentMemory
  link: createType.md
---
# createType

```typescript
client.persistentMemory.createType(data: CreatePersistentMemoryTypeRequest): Promise<PersistentMemoryType>
```

Creates a new persistent memory type with a defined processing pipeline.

Registers a new memory type that describes how input data should be processed and
stored. The type definition includes a sequence of steps that will be executed
when the pipeline runs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePersistentMemoryTypeRequest` | The type creation payload |

## Returns

**`Promise<PersistentMemoryType>`** — A promise that resolves to the newly created persistent memory type

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.createType(/* CreatePersistentMemoryTypeRequest */);
```
