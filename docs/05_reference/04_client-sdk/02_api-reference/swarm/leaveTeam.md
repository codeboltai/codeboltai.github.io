---
name: leaveTeam
cbbaseinfo:
  description: "Leave a team within a swarm.

Removes an agent from a team, ending their membership. The agent
will no longer participate in team activities but remains in the
swarm."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: teamId
      typeName: string
      description: The unique identifier of the team to leave
      isOptional: false
    - name: data
      typeName: LeaveTeamRequest
      description: Optional leave request information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the agent has left the team
data:
  name: leaveTeam
  category: swarm
  link: leaveTeam.md
---
# leaveTeam

```typescript
client.swarm.leaveTeam(swarmId: string, teamId: string, data?: LeaveTeamRequest): Promise<void>
```

Leave a team within a swarm.

Removes an agent from a team, ending their membership. The agent
will no longer participate in team activities but remains in the
swarm.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team to leave |
| `data` | `LeaveTeamRequest` _(optional)_ | Optional leave request information |

## Returns

**`Promise<void>`** — A promise that resolves when the agent has left the team

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.leaveTeam('swarmId', 'teamId');
```
