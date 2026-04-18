---
name: getTeamMembers
cbbaseinfo:
  description: "Get the members of a team within a swarm.

Retrieves all agents that are currently members of the specified team.
Use this to view team composition or manage team membership."
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
    signatureTypeName: "Promise<SwarmAgentInfo[]>"
    description: A promise that resolves to an array of SwarmAgentInfo objects representing team members
data:
  name: getTeamMembers
  category: swarm
  link: getTeamMembers.md
---
# getTeamMembers

```typescript
client.swarm.getTeamMembers(swarmId: string, teamId: string): Promise<SwarmAgentInfo[]>
```

Get the members of a team within a swarm.

Retrieves all agents that are currently members of the specified team.
Use this to view team composition or manage team membership.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team |

## Returns

**`Promise<SwarmAgentInfo[]>`** — A promise that resolves to an array of SwarmAgentInfo objects representing team members

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getTeamMembers('swarmId', 'teamId');
```
