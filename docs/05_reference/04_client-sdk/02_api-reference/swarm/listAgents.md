---
name: listAgents
cbbaseinfo:
  description: "List agents in a swarm.

Retrieves all agents registered with a specific swarm, optionally
filtered by query parameters. Use this to view available agents
or populate agent selection interfaces."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering agents
      isOptional: true
  returns:
    signatureTypeName: "Promise<SwarmAgentInfo[]>"
    description: A promise that resolves to an array of SwarmAgentInfo objects
data:
  name: listAgents
  category: swarm
  link: listAgents.md
---
# listAgents

```typescript
client.swarm.listAgents(swarmId: string, params?: Record<string, unknown>): Promise<SwarmAgentInfo[]>
```

List agents in a swarm.

Retrieves all agents registered with a specific swarm, optionally
filtered by query parameters. Use this to view available agents
or populate agent selection interfaces.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering agents |

## Returns

**`Promise<SwarmAgentInfo[]>`** — A promise that resolves to an array of SwarmAgentInfo objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listAgents('swarmId');
```
