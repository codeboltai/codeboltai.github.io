---
name: createSpawnRequest
cbbaseinfo:
  description: "Create a spawn request for a swarm.

Submits a request to spawn new agent instances within the swarm.
This is used to dynamically scale the swarm by adding more agents
to handle increased workload."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: CreateSpawnRequestBody
      description: The spawn request details
      isOptional: false
  returns:
    signatureTypeName: "Promise<SpawnRequest>"
    description: A promise that resolves to the created SpawnRequest object
data:
  name: createSpawnRequest
  category: swarm
  link: createSpawnRequest.md
---
# createSpawnRequest

```typescript
client.swarm.createSpawnRequest(swarmId: string, data: CreateSpawnRequestBody): Promise<SpawnRequest>
```

Create a spawn request for a swarm.

Submits a request to spawn new agent instances within the swarm.
This is used to dynamically scale the swarm by adding more agents
to handle increased workload.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateSpawnRequestBody` | The spawn request details |

## Returns

**`Promise<SpawnRequest>`** — A promise that resolves to the created SpawnRequest object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.createSpawnRequest('swarmId', /* CreateSpawnRequestBody */);
```
