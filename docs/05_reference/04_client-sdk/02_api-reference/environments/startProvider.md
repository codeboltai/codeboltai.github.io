---
name: startProvider
cbbaseinfo:
  description: "Starts the underlying provider for an environment.

Boots up the provider process that backs the environment, making it
ready to accept operations. This is distinct from starting the
environment itself."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional start configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the provider has started
data:
  name: startProvider
  category: environments
  link: startProvider.md
---
# startProvider

```typescript
client.environments.startProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Starts the underlying provider for an environment.

Boots up the provider process that backs the environment, making it
ready to accept operations. This is distinct from starting the
environment itself.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `Record<string, unknown>` _(optional)_ | Optional start configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the provider has started

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.startProvider('id');
```
