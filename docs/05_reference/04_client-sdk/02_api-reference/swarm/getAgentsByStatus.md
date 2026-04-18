---
name: getAgentsByStatus
cbbaseinfo:
  description: "Get agents filtered by status in a swarm.

Retrieves all agents in a swarm that match a specific status, such as
all available agents or all agents in error state. This is useful for
finding agents ready for task assignment."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: status
      typeName: string
      description: The status to filter by (available, busy, offline, etc.)
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmAgentInfo[]>"
    description: A promise that resolves to an array of matching SwarmAgentInfo objects
data:
  name: getAgentsByStatus
  category: swarm
  link: getAgentsByStatus.md
---
# getAgentsByStatus

```typescript
client.swarm.getAgentsByStatus(swarmId: string, status: string): Promise<SwarmAgentInfo[]>
```

Get agents filtered by status in a swarm.

Retrieves all agents in a swarm that match a specific status, such as
all available agents or all agents in error state. This is useful for
finding agents ready for task assignment.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `status` | `string` | The status to filter by (available, busy, offline, etc.) |

## Returns

**`Promise<SwarmAgentInfo[]>`** — A promise that resolves to an array of matching SwarmAgentInfo objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getAgentsByStatus('swarmId', 'status');
```
