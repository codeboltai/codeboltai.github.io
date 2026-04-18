---
name: getFilteredExecutions
cbbaseinfo:
  description: "Retrieves agent executions matching specific filter criteria.

Supports filtering by status, swarm ID, start source, thread ID,
and whether the execution ran in the background."
cbparameters:
  parameters:
    - name: params
      typeName: AgentExecutionFilterParams
      description: Filter parameters to narrow down results
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentExecutionRecord[]>"
    description: A promise that resolves to an array of matching AgentExecutionRecord objects
data:
  name: getFilteredExecutions
  category: agentExecution
  link: getFilteredExecutions.md
---
# getFilteredExecutions

```typescript
client.agentExecution.getFilteredExecutions(params?: AgentExecutionFilterParams): Promise<AgentExecutionRecord[]>
```

Retrieves agent executions matching specific filter criteria.

Supports filtering by status, swarm ID, start source, thread ID,
and whether the execution ran in the background.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AgentExecutionFilterParams` _(optional)_ | Filter parameters to narrow down results |

## Returns

**`Promise<AgentExecutionRecord[]>`** — A promise that resolves to an array of matching AgentExecutionRecord objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecution.getFilteredExecutions();
```
