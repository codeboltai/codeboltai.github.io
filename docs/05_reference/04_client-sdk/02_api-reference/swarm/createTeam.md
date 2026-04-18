---
name: createTeam
cbbaseinfo:
  description: "Create a team in a swarm.

Creates a new team within the swarm, providing organizational structure
for grouping agents. Teams can be assigned specific goals and tasks,
with agents collaborating within the team context."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: CreateTeamRequest
      description: The team creation information
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmTeam>"
    description: A promise that resolves to the created SwarmTeam object
data:
  name: createTeam
  category: swarm
  link: createTeam.md
---
# createTeam

```typescript
client.swarm.createTeam(swarmId: string, data: CreateTeamRequest): Promise<SwarmTeam>
```

Create a team in a swarm.

Creates a new team within the swarm, providing organizational structure
for grouping agents. Teams can be assigned specific goals and tasks,
with agents collaborating within the team context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateTeamRequest` | The team creation information |

## Returns

**`Promise<SwarmTeam>`** — A promise that resolves to the created SwarmTeam object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.createTeam('swarmId', /* CreateTeamRequest */);
```
