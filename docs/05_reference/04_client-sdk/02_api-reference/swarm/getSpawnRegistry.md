---
name: getSpawnRegistry
cbbaseinfo:
  description: "Get the spawn registry for a swarm.

Retrieves the spawn registry containing information about all
agents that have been spawned for the swarm, including their
configuration and lifecycle status."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the spawn registry data
data:
  name: getSpawnRegistry
  category: swarm
  link: getSpawnRegistry.md
---
# getSpawnRegistry

```typescript
client.swarm.getSpawnRegistry(swarmId: string): Promise<unknown>
```

Get the spawn registry for a swarm.

Retrieves the spawn registry containing information about all
agents that have been spawned for the swarm, including their
configuration and lifecycle status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<unknown>`** — A promise that resolves to the spawn registry data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getSpawnRegistry('swarmId');
```
