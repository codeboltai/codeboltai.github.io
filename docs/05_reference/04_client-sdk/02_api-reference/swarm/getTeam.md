---
name: getTeam
cbbaseinfo:
  description: "Get a team by ID within a swarm.

Retrieves detailed information about a specific team including its
members, roles, and configuration. Use this for displaying team
details or managing team state."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: teamId
      typeName: string
      description: The unique identifier of the team
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmTeam>"
    description: A promise that resolves to the SwarmTeam object
data:
  name: getTeam
  category: swarm
  link: getTeam.md
---
# getTeam

```typescript
client.swarm.getTeam(swarmId: string, teamId: string): Promise<SwarmTeam>
```

Get a team by ID within a swarm.

Retrieves detailed information about a specific team including its
members, roles, and configuration. Use this for displaying team
details or managing team state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team |

## Returns

**`Promise<SwarmTeam>`** — A promise that resolves to the SwarmTeam object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getTeam('swarmId', 'teamId');
```
