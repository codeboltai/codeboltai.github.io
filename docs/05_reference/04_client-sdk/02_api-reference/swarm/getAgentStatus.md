---
name: getAgentStatus
cbbaseinfo:
  description: "Get the status of a specific agent in a swarm.

Retrieves current status information for an agent including its
state, last activity timestamp, and any status messages. Use this
for monitoring agent availability and health."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmAgentInfo>"
    description: A promise that resolves to the SwarmAgentInfo object with status details
data:
  name: getAgentStatus
  category: swarm
  link: getAgentStatus.md
---
# getAgentStatus

```typescript
client.swarm.getAgentStatus(swarmId: string, agentId: string): Promise<SwarmAgentInfo>
```

Get the status of a specific agent in a swarm.

Retrieves current status information for an agent including its
state, last activity timestamp, and any status messages. Use this
for monitoring agent availability and health.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `agentId` | `string` | The unique identifier of the agent |

## Returns

**`Promise<SwarmAgentInfo>`** — A promise that resolves to the SwarmAgentInfo object with status details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getAgentStatus('swarmId', 'agentId');
```
