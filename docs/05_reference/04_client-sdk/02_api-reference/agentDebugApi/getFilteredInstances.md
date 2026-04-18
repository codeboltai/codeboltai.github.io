---
name: getFilteredInstances
cbbaseinfo:
  description: "Retrieves agent instances matching specific filter criteria.

Supports filtering by status, agent type, thread ID, swarm ID, and
whether the agent is running in the background."
cbparameters:
  parameters:
    - name: params
      typeName: AgentDebugFilterParams
      description: Filter parameters to narrow down results
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentDebugInstance[]>"
    description: A promise that resolves to an array of matching AgentDebugInstance objects
data:
  name: getFilteredInstances
  category: agentDebugApi
  link: getFilteredInstances.md
---
# getFilteredInstances

```typescript
client.agentDebugApi.getFilteredInstances(params?: AgentDebugFilterParams): Promise<AgentDebugInstance[]>
```

Retrieves agent instances matching specific filter criteria.

Supports filtering by status, agent type, thread ID, swarm ID, and
whether the agent is running in the background.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AgentDebugFilterParams` _(optional)_ | Filter parameters to narrow down results |

## Returns

**`Promise<AgentDebugInstance[]>`** — A promise that resolves to an array of matching AgentDebugInstance objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getFilteredInstances();
```
