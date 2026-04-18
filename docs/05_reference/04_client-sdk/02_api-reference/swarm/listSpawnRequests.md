---
name: listSpawnRequests
cbbaseinfo:
  description: "List spawn requests for a swarm.

Retrieves all spawn requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
spawn request status and history."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering requests
      isOptional: true
  returns:
    signatureTypeName: "Promise<SpawnRequest[]>"
    description: A promise that resolves to an array of SpawnRequest objects
data:
  name: listSpawnRequests
  category: swarm
  link: listSpawnRequests.md
---
# listSpawnRequests

```typescript
client.swarm.listSpawnRequests(swarmId: string, params?: Record<string, unknown>): Promise<SpawnRequest[]>
```

List spawn requests for a swarm.

Retrieves all spawn requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
spawn request status and history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering requests |

## Returns

**`Promise<SpawnRequest[]>`** — A promise that resolves to an array of SpawnRequest objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listSpawnRequests('swarmId');
```
