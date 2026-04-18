---
name: validate
cbbaseinfo:
  description: "Validates a persistent memory type configuration without saving it.

Checks that the type definition is well-formed, all referenced step types exist,
and the processing chain is compatible. Use this before creating or updating a type
to catch configuration errors early."
cbparameters:
  parameters:
    - name: data
      typeName: ValidatePersistentMemoryRequest
      description: The type configuration to validate
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the validation result
data:
  name: validate
  category: persistentMemory
  link: validate.md
---
# validate

```typescript
client.persistentMemory.validate(data: ValidatePersistentMemoryRequest): Promise<unknown>
```

Validates a persistent memory type configuration without saving it.

Checks that the type definition is well-formed, all referenced step types exist,
and the processing chain is compatible. Use this before creating or updating a type
to catch configuration errors early.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ValidatePersistentMemoryRequest` | The type configuration to validate |

## Returns

**`Promise<unknown>`** — A promise that resolves to the validation result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.validate(/* ValidatePersistentMemoryRequest */);
```
