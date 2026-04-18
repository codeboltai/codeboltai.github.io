---
name: listTeams
cbbaseinfo:
  description: "List teams in a swarm.

Retrieves all teams within a swarm, optionally filtered by query
parameters. Use this to view team structure or populate team
selection interfaces."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering teams
      isOptional: true
  returns:
    signatureTypeName: "Promise<SwarmTeam[]>"
    description: A promise that resolves to an array of SwarmTeam objects
data:
  name: listTeams
  category: swarm
  link: listTeams.md
---
# listTeams

```typescript
client.swarm.listTeams(swarmId: string, params?: Record<string, unknown>): Promise<SwarmTeam[]>
```

List teams in a swarm.

Retrieves all teams within a swarm, optionally filtered by query
parameters. Use this to view team structure or populate team
selection interfaces.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering teams |

## Returns

**`Promise<SwarmTeam[]>`** — A promise that resolves to an array of SwarmTeam objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listTeams('swarmId');
```
