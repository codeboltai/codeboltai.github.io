---
name: getBySwarm
cbbaseinfo:
  description: "Retrieves agent instances associated with a specific swarm.

Returns all debug instances that belong to the given swarm, useful for
inspecting multi-agent coordination."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm to query
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentDebugInstance[]>"
    description: A promise that resolves to an array of AgentDebugInstance objects for that swarm
data:
  name: getBySwarm
  category: agentDebugApi
  link: getBySwarm.md
---
# getBySwarm

```typescript
client.agentDebugApi.getBySwarm(swarmId: string): Promise<AgentDebugInstance[]>
```

Retrieves agent instances associated with a specific swarm.

Returns all debug instances that belong to the given swarm, useful for
inspecting multi-agent coordination.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm to query |

## Returns

**`Promise<AgentDebugInstance[]>`** — A promise that resolves to an array of AgentDebugInstance objects for that swarm

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getBySwarm('swarmId');
```
