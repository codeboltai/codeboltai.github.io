---
name: validate
cbbaseinfo:
  description: "Validates a context assembly configuration.

Checks that the provided assembly configuration is valid and all
referenced sources and rules exist before execution."
cbparameters:
  parameters:
    - name: data
      typeName: ValidateContextAssemblyRequest
      description: The configuration to validate
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves with the validation result
data:
  name: validate
  category: contextAssembly
  link: validate.md
---
# validate

```typescript
client.contextAssembly.validate(data: ValidateContextAssemblyRequest): Promise<unknown>
```

Validates a context assembly configuration.

Checks that the provided assembly configuration is valid and all
referenced sources and rules exist before execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ValidateContextAssemblyRequest` | The configuration to validate |

## Returns

**`Promise<unknown>`** — A promise that resolves with the validation result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextAssembly.validate(/* ValidateContextAssemblyRequest */);
```
