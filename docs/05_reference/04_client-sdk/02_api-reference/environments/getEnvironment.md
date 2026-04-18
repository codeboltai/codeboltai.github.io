---
name: getEnvironment
cbbaseinfo:
  description: "Retrieves a specific environment by its ID.

Returns the full details of a single environment including its current
state, provider, and configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
  returns:
    signatureTypeName: "Promise<Environment>"
    description: A promise that resolves to the
data:
  name: getEnvironment
  category: environments
  link: getEnvironment.md
---
# getEnvironment

```typescript
client.environments.getEnvironment(id: string): Promise<Environment>
```

Retrieves a specific environment by its ID.

Returns the full details of a single environment including its current
state, provider, and configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |

## Returns

**`Promise<Environment>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getEnvironment('id');
```
