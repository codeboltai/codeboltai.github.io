---
name: deleteSwarm
cbbaseinfo:
  description: "Delete a swarm by ID.

Permanently removes a swarm and all its associated resources including
teams, roles, agents, and configurations. This action cannot be undone."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the swarm is deleted
data:
  name: deleteSwarm
  category: swarm
  link: deleteSwarm.md
---
# deleteSwarm

```typescript
client.swarm.deleteSwarm(swarmId: string): Promise<void>
```

Delete a swarm by ID.

Permanently removes a swarm and all its associated resources including
teams, roles, agents, and configurations. This action cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the swarm is deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.deleteSwarm('swarmId');
```
