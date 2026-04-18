---
name: getInstanceRawLogs
cbbaseinfo:
  description: "Retrieves raw, unprocessed logs for a specific agent instance.

Returns the raw log output as produced by the agent, without any
parsing or structuring. Useful for debugging issues not captured
by the structured log parser."
cbparameters:
  parameters:
    - name: agentInstanceId
      typeName: string
      description: The unique identifier of the agent instance
      isOptional: false
    - name: params
      typeName: AgentDebugLogsParams
      description: Optional pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the raw log data
data:
  name: getInstanceRawLogs
  category: agentDebugApi
  link: getInstanceRawLogs.md
---
# getInstanceRawLogs

```typescript
client.agentDebugApi.getInstanceRawLogs(agentInstanceId: string, params?: AgentDebugLogsParams): Promise<unknown>
```

Retrieves raw, unprocessed logs for a specific agent instance.

Returns the raw log output as produced by the agent, without any
parsing or structuring. Useful for debugging issues not captured
by the structured log parser.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentInstanceId` | `string` | The unique identifier of the agent instance |
| `params` | `AgentDebugLogsParams` _(optional)_ | Optional pagination parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves to the raw log data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getInstanceRawLogs('agentInstanceId');
```
