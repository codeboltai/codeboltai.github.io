---
name: updateEnvironment
cbbaseinfo:
  description: "Updates an existing environment's configuration.

Modifies environment settings such as name, resource allocations, or
other configurable properties."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment to update
      isOptional: false
    - name: data
      typeName: UpdateEnvironmentRequest
      description: The fields to update on the environment
      isOptional: false
  returns:
    signatureTypeName: "Promise<Environment>"
    description: A promise that resolves to the updated
data:
  name: updateEnvironment
  category: environments
  link: updateEnvironment.md
---
# updateEnvironment

```typescript
client.environments.updateEnvironment(id: string, data: UpdateEnvironmentRequest): Promise<Environment>
```

Updates an existing environment's configuration.

Modifies environment settings such as name, resource allocations, or
other configurable properties.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment to update |
| `data` | `UpdateEnvironmentRequest` | The fields to update on the environment |

## Returns

**`Promise<Environment>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.updateEnvironment('id', /* UpdateEnvironmentRequest */);
```
