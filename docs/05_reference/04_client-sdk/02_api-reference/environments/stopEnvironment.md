---
name: stopEnvironment
cbbaseinfo:
  description: "Stops a running environment.

Gracefully shuts down the environment, preserving its state for later
restart. Resources may be released depending on the provider."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment to stop
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional stop configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the environment has stopped
data:
  name: stopEnvironment
  category: environments
  link: stopEnvironment.md
---
# stopEnvironment

```typescript
client.environments.stopEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Stops a running environment.

Gracefully shuts down the environment, preserving its state for later
restart. Resources may be released depending on the provider.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment to stop |
| `data` | `Record<string, unknown>` _(optional)_ | Optional stop configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the environment has stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.stopEnvironment('id');
```
