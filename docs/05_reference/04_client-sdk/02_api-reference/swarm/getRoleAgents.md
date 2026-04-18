---
name: getRoleAgents
cbbaseinfo:
  description: "Get agents assigned to a specific role.

Retrieves all agents that currently have the specified role assigned
to them. Use this to view role membership or manage role assignments."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: roleId
      typeName: string
      description: The unique identifier of the role
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmAgentInfo[]>"
    description: A promise that resolves to an array of SwarmAgentInfo objects with the role
data:
  name: getRoleAgents
  category: swarm
  link: getRoleAgents.md
---
# getRoleAgents

```typescript
client.swarm.getRoleAgents(swarmId: string, roleId: string): Promise<SwarmAgentInfo[]>
```

Get agents assigned to a specific role.

Retrieves all agents that currently have the specified role assigned
to them. Use this to view role membership or manage role assignments.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role |

## Returns

**`Promise<SwarmAgentInfo[]>`** — A promise that resolves to an array of SwarmAgentInfo objects with the role

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getRoleAgents('swarmId', 'roleId');
```
