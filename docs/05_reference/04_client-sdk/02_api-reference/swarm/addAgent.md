---
name: addAgent
cbbaseinfo:
  description: "Add an agent to a swarm.

Registers a new agent with the swarm, making it available for assignment
to teams and roles. Agents are the worker entities that perform tasks
within the swarm context."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: AgentRegistration
      description: The agent registration information
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmAgentInfo>"
    description: A promise that resolves to the registered SwarmAgentInfo object
data:
  name: addAgent
  category: swarm
  link: addAgent.md
---
# addAgent

```typescript
client.swarm.addAgent(swarmId: string, data: AgentRegistration): Promise<SwarmAgentInfo>
```

Add an agent to a swarm.

Registers a new agent with the swarm, making it available for assignment
to teams and roles. Agents are the worker entities that perform tasks
within the swarm context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `AgentRegistration` | The agent registration information |

## Returns

**`Promise<SwarmAgentInfo>`** — A promise that resolves to the registered SwarmAgentInfo object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.addAgent('swarmId', /* AgentRegistration */);
```
