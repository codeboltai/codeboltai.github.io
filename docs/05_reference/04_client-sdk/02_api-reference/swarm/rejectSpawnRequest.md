---
name: rejectSpawnRequest
cbbaseinfo:
  description: "Reject a spawn request.

Rejects a pending spawn request, preventing the creation of new
agent instances. The request will be marked as rejected and
no agents will be spawned."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: requestId
      typeName: string
      description: The unique identifier of the spawn request
      isOptional: false
    - name: data
      typeName: SpawnRequestActionBody
      description: Optional rejection information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the request is rejected
data:
  name: rejectSpawnRequest
  category: swarm
  link: rejectSpawnRequest.md
---
# rejectSpawnRequest

```typescript
client.swarm.rejectSpawnRequest(swarmId: string, requestId: string, data?: SpawnRequestActionBody): Promise<void>
```

Reject a spawn request.

Rejects a pending spawn request, preventing the creation of new
agent instances. The request will be marked as rejected and
no agents will be spawned.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the spawn request |
| `data` | `SpawnRequestActionBody` _(optional)_ | Optional rejection information |

## Returns

**`Promise<void>`** — A promise that resolves when the request is rejected

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.rejectSpawnRequest('swarmId', 'requestId');
```
