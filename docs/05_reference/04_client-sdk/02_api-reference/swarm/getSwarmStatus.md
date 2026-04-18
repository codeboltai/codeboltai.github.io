---
name: getSwarmStatus
cbbaseinfo:
  description: "Get the overall status of a swarm.

Retrieves comprehensive status information about a swarm including
its operational state, agent availability, team health, and overall
readiness to execute tasks."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmStatusUpdate>"
    description: A promise that resolves to the SwarmStatusUpdate object
data:
  name: getSwarmStatus
  category: swarm
  link: getSwarmStatus.md
---
# getSwarmStatus

```typescript
client.swarm.getSwarmStatus(swarmId: string): Promise<SwarmStatusUpdate>
```

Get the overall status of a swarm.

Retrieves comprehensive status information about a swarm including
its operational state, agent availability, team health, and overall
readiness to execute tasks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<SwarmStatusUpdate>`** — A promise that resolves to the SwarmStatusUpdate object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getSwarmStatus('swarmId');
```
