---
name: getInstanceRawLogs
cbbaseinfo:
  description: "Retrieves raw, unprocessed logs for an environment debug instance.

Returns the original log output without parsing or structuring. Useful
for debugging cases where parsed logs may lose important context."
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: The unique identifier of the environment instance
      isOptional: false
    - name: params
      typeName: EnvironmentDebugLogsParams
      description: Optional parameters to filter or paginate raw log output
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the raw log data
data:
  name: getInstanceRawLogs
  category: environmentDebugApi
  link: getInstanceRawLogs.md
---
# getInstanceRawLogs

```typescript
client.environmentDebugApi.getInstanceRawLogs(environmentId: string, params?: EnvironmentDebugLogsParams): Promise<unknown>
```

Retrieves raw, unprocessed logs for an environment debug instance.

Returns the original log output without parsing or structuring. Useful
for debugging cases where parsed logs may lose important context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` | The unique identifier of the environment instance |
| `params` | `EnvironmentDebugLogsParams` _(optional)_ | Optional parameters to filter or paginate raw log output |

## Returns

**`Promise<unknown>`** — A promise that resolves to the raw log data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.getInstanceRawLogs('environmentId');
```
