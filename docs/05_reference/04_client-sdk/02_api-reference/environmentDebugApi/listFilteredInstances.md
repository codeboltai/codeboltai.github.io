---
name: listFilteredInstances
cbbaseinfo:
  description: "Lists environment debug instances matching specific filter criteria.

Similar to  but applies additional server-side
filtering such as status, date range, or provider constraints."
cbparameters:
  parameters:
    - name: params
      typeName: EnvironmentDebugFilteredParams
      description: Optional filter parameters to narrow results
      isOptional: true
  returns:
    signatureTypeName: "Promise<EnvironmentDebugInstance[]>"
    description: A promise that resolves to an array of filtered  objects
data:
  name: listFilteredInstances
  category: environmentDebugApi
  link: listFilteredInstances.md
---
# listFilteredInstances

```typescript
client.environmentDebugApi.listFilteredInstances(params?: EnvironmentDebugFilteredParams): Promise<EnvironmentDebugInstance[]>
```

Lists environment debug instances matching specific filter criteria.

Similar to  but applies additional server-side
filtering such as status, date range, or provider constraints.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `EnvironmentDebugFilteredParams` _(optional)_ | Optional filter parameters to narrow results |

## Returns

**`Promise<EnvironmentDebugInstance[]>`** — A promise that resolves to an array of filtered  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.listFilteredInstances();
```
