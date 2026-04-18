---
name: deleteTeam
cbbaseinfo:
  description: "Delete a team from a swarm.

Permanently removes a team and all its associated memberships.
Agents will be unassigned from the team but remain in the swarm."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: teamId
      typeName: string
      description: The unique identifier of the team to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the team is deleted
data:
  name: deleteTeam
  category: swarm
  link: deleteTeam.md
---
# deleteTeam

```typescript
client.swarm.deleteTeam(swarmId: string, teamId: string): Promise<void>
```

Delete a team from a swarm.

Permanently removes a team and all its associated memberships.
Agents will be unassigned from the team but remain in the swarm.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the team is deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.deleteTeam('swarmId', 'teamId');
```
