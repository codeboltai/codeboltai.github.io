---
name: listInstances
cbbaseinfo:
  description: "Lists all environment debug instances.

Returns every known environment instance regardless of state. Use the
optional parameters to paginate or filter results server-side."
cbparameters:
  parameters:
    - name: params
      typeName: EnvironmentDebugInstancesParams
      description: Optional query parameters for pagination and filtering
      isOptional: true
  returns:
    signatureTypeName: "Promise<EnvironmentDebugInstance[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listInstances
  category: environmentDebugApi
  link: listInstances.md
---
# listInstances

```typescript
client.environmentDebugApi.listInstances(params?: EnvironmentDebugInstancesParams): Promise<EnvironmentDebugInstance[]>
```

Lists all environment debug instances.

Returns every known environment instance regardless of state. Use the
optional parameters to paginate or filter results server-side.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `EnvironmentDebugInstancesParams` _(optional)_ | Optional query parameters for pagination and filtering |

## Returns

**`Promise<EnvironmentDebugInstance[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.listInstances();
```
