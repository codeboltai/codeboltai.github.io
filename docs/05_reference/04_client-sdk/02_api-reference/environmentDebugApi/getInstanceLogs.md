---
name: getInstanceLogs
cbbaseinfo:
  description: "Retrieves parsed logs for an environment debug instance.

Returns structured log entries that have been parsed from raw output,
making them easier to filter, search, and display in a UI."
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: The unique identifier of the environment instance
      isOptional: false
    - name: params
      typeName: EnvironmentDebugLogsParams
      description: Optional parameters to filter logs by level, time range, or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<EnvironmentDebugLog[]>"
    description: A promise that resolves to an array of  entries
data:
  name: getInstanceLogs
  category: environmentDebugApi
  link: getInstanceLogs.md
---
# getInstanceLogs

```typescript
client.environmentDebugApi.getInstanceLogs(environmentId: string, params?: EnvironmentDebugLogsParams): Promise<EnvironmentDebugLog[]>
```

Retrieves parsed logs for an environment debug instance.

Returns structured log entries that have been parsed from raw output,
making them easier to filter, search, and display in a UI.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` | The unique identifier of the environment instance |
| `params` | `EnvironmentDebugLogsParams` _(optional)_ | Optional parameters to filter logs by level, time range, or pagination |

## Returns

**`Promise<EnvironmentDebugLog[]>`** — A promise that resolves to an array of  entries

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.getInstanceLogs('environmentId');
```
