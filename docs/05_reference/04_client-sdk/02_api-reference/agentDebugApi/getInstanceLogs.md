---
name: getInstanceLogs
cbbaseinfo:
  description: "Retrieves parsed and structured logs for a specific agent instance.

Returns logs that have been parsed into structured AgentDebugLog objects,
making them easier to analyze programmatically. Supports pagination
through offset and limit parameters."
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
    signatureTypeName: "Promise<AgentDebugLog[]>"
    description: A promise that resolves to an array of structured AgentDebugLog objects
data:
  name: getInstanceLogs
  category: agentDebugApi
  link: getInstanceLogs.md
---
# getInstanceLogs

```typescript
client.agentDebugApi.getInstanceLogs(agentInstanceId: string, params?: AgentDebugLogsParams): Promise<AgentDebugLog[]>
```

Retrieves parsed and structured logs for a specific agent instance.

Returns logs that have been parsed into structured AgentDebugLog objects,
making them easier to analyze programmatically. Supports pagination
through offset and limit parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentInstanceId` | `string` | The unique identifier of the agent instance |
| `params` | `AgentDebugLogsParams` _(optional)_ | Optional pagination parameters |

## Returns

**`Promise<AgentDebugLog[]>`** — A promise that resolves to an array of structured AgentDebugLog objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getInstanceLogs('agentInstanceId');
```
