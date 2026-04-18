---
name: joinTeam
cbbaseinfo:
  description: "Join a team within a swarm.

Adds an agent to a team as a member. The agent will be associated
with the team and can participate in team-specific tasks and
activities."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: teamId
      typeName: string
      description: The unique identifier of the team to join
      isOptional: false
    - name: data
      typeName: JoinTeamRequest
      description: Optional join request information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the agent has joined the team
data:
  name: joinTeam
  category: swarm
  link: joinTeam.md
---
# joinTeam

```typescript
client.swarm.joinTeam(swarmId: string, teamId: string, data?: JoinTeamRequest): Promise<void>
```

Join a team within a swarm.

Adds an agent to a team as a member. The agent will be associated
with the team and can participate in team-specific tasks and
activities.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team to join |
| `data` | `JoinTeamRequest` _(optional)_ | Optional join request information |

## Returns

**`Promise<void>`** — A promise that resolves when the agent has joined the team

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.joinTeam('swarmId', 'teamId');
```
