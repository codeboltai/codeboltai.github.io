---
name: getExecutions
cbbaseinfo:
  description: "Retrieves all agent execution records.

Returns the complete history of agent executions, useful for auditing
and monitoring agent activity over time."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentExecutionRecord[]>"
    description: A promise that resolves to an array of AgentExecutionRecord objects
data:
  name: getExecutions
  category: agentExecution
  link: getExecutions.md
---
# getExecutions

```typescript
client.agentExecution.getExecutions(params?: Record<string, unknown>): Promise<AgentExecutionRecord[]>
```

Retrieves all agent execution records.

Returns the complete history of agent executions, useful for auditing
and monitoring agent activity over time.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<AgentExecutionRecord[]>`** — A promise that resolves to an array of AgentExecutionRecord objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecution.getExecutions();
```
