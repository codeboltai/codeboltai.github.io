---
name: updateAgentStatus
cbbaseinfo:
  description: "Update the status of an agent in a swarm.

Changes the operational status of an agent, such as marking it as
available, busy, offline, or in error. Status updates affect agent
assignment and task distribution."
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
    - name: data
      typeName: AgentStatusUpdateRequest
      description: The status update information
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the status is updated
data:
  name: updateAgentStatus
  category: swarm
  link: updateAgentStatus.md
---
# updateAgentStatus

```typescript
client.swarm.updateAgentStatus(swarmId: string, agentId: string, data: AgentStatusUpdateRequest): Promise<void>
```

Update the status of an agent in a swarm.

Changes the operational status of an agent, such as marking it as
available, busy, offline, or in error. Status updates affect agent
assignment and task distribution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `agentId` | `string` | The unique identifier of the agent |
| `data` | `AgentStatusUpdateRequest` | The status update information |

## Returns

**`Promise<void>`** — A promise that resolves when the status is updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.updateAgentStatus('swarmId', 'agentId', /* AgentStatusUpdateRequest */);
```
