---
name: getSwarm
cbbaseinfo:
  description: "Get a swarm by ID.

Retrieves detailed information about a specific swarm including
its configuration, teams, roles, and agents. Use this for displaying
swarm details or managing swarm state."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmData>"
    description: A promise that resolves to the SwarmData object
data:
  name: getSwarm
  category: swarm
  link: getSwarm.md
---
# getSwarm

```typescript
client.swarm.getSwarm(swarmId: string): Promise<SwarmData>
```

Get a swarm by ID.

Retrieves detailed information about a specific swarm including
its configuration, teams, roles, and agents. Use this for displaying
swarm details or managing swarm state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<SwarmData>`** — A promise that resolves to the SwarmData object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getSwarm('swarmId');
```
