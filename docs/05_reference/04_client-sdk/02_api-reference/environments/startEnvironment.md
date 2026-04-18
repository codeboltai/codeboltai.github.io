---
name: startEnvironment
cbbaseinfo:
  description: "Starts an environment.

Boots up the environment so it becomes active and ready for use.
The environment's provider must be running first."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment to start
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional start configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the environment has started
data:
  name: startEnvironment
  category: environments
  link: startEnvironment.md
---
# startEnvironment

```typescript
client.environments.startEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Starts an environment.

Boots up the environment so it becomes active and ready for use.
The environment's provider must be running first.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment to start |
| `data` | `Record<string, unknown>` _(optional)_ | Optional start configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the environment has started

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.startEnvironment('id');
```
