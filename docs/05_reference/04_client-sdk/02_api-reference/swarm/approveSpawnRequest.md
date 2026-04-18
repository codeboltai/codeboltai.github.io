---
name: approveSpawnRequest
cbbaseinfo:
  description: "Approve a spawn request.

Approves a pending spawn request, authorizing the creation of new
agent instances. The agents will be spawned according to the
request specifications."
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
      description: Optional approval information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the request is approved
data:
  name: approveSpawnRequest
  category: swarm
  link: approveSpawnRequest.md
---
# approveSpawnRequest

```typescript
client.swarm.approveSpawnRequest(swarmId: string, requestId: string, data?: SpawnRequestActionBody): Promise<void>
```

Approve a spawn request.

Approves a pending spawn request, authorizing the creation of new
agent instances. The agents will be spawned according to the
request specifications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the spawn request |
| `data` | `SpawnRequestActionBody` _(optional)_ | Optional approval information |

## Returns

**`Promise<void>`** — A promise that resolves when the request is approved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.approveSpawnRequest('swarmId', 'requestId');
```
