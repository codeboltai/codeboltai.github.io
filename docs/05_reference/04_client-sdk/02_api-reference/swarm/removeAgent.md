---
name: removeAgent
cbbaseinfo:
  description: "Remove an agent from a swarm.

Unregisters an agent from the swarm, removing it from all teams
and roles. The agent will no longer participate in swarm activities."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: agentId
      typeName: string
      description: The unique identifier of the agent to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the agent is removed
data:
  name: removeAgent
  category: swarm
  link: removeAgent.md
---
# removeAgent

```typescript
client.swarm.removeAgent(swarmId: string, agentId: string): Promise<void>
```

Remove an agent from a swarm.

Unregisters an agent from the swarm, removing it from all teams
and roles. The agent will no longer participate in swarm activities.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `agentId` | `string` | The unique identifier of the agent to remove |

## Returns

**`Promise<void>`** — A promise that resolves when the agent is removed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.removeAgent('swarmId', 'agentId');
```
