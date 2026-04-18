---
name: restartEnvironment
cbbaseinfo:
  description: "Restarts an environment.

Performs a stop followed by a start on the environment. Useful for
applying configuration changes that require a fresh boot."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment to restart
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional restart configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the environment has restarted
data:
  name: restartEnvironment
  category: environments
  link: restartEnvironment.md
---
# restartEnvironment

```typescript
client.environments.restartEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Restarts an environment.

Performs a stop followed by a start on the environment. Useful for
applying configuration changes that require a fresh boot.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment to restart |
| `data` | `Record<string, unknown>` _(optional)_ | Optional restart configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the environment has restarted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.restartEnvironment('id');
```
