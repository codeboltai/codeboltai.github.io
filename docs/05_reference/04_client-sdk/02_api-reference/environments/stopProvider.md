---
name: stopProvider
cbbaseinfo:
  description: "Stops the underlying provider for an environment.

Shuts down the provider process without destroying the environment.
The provider can be restarted later."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional stop configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the provider has stopped
data:
  name: stopProvider
  category: environments
  link: stopProvider.md
---
# stopProvider

```typescript
client.environments.stopProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Stops the underlying provider for an environment.

Shuts down the provider process without destroying the environment.
The provider can be restarted later.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `Record<string, unknown>` _(optional)_ | Optional stop configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the provider has stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.stopProvider('id');
```
