---
name: getProviderStatus
cbbaseinfo:
  description: "Retrieves the current provider status for an environment.

Returns whether the backing provider is running, stopped, or in an
error state. Useful for health checks and monitoring."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
  returns:
    signatureTypeName: "Promise<EnvironmentProviderStatus>"
    description: A promise that resolves to the
data:
  name: getProviderStatus
  category: environments
  link: getProviderStatus.md
---
# getProviderStatus

```typescript
client.environments.getProviderStatus(id: string): Promise<EnvironmentProviderStatus>
```

Retrieves the current provider status for an environment.

Returns whether the backing provider is running, stopped, or in an
error state. Useful for health checks and monitoring.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |

## Returns

**`Promise<EnvironmentProviderStatus>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getProviderStatus('id');
```
