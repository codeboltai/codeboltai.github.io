---
name: startSwarm
cbbaseinfo:
  description: "Start a swarm.

Activates a swarm, enabling it to begin processing tasks and
coordinating agent activities. The swarm will start executing
its assigned workflow according to its configuration."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: StartSwarmRequest
      description: Optional start parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the swarm has started
data:
  name: startSwarm
  category: swarm
  link: startSwarm.md
---
# startSwarm

```typescript
client.swarm.startSwarm(swarmId: string, data?: StartSwarmRequest): Promise<void>
```

Start a swarm.

Activates a swarm, enabling it to begin processing tasks and
coordinating agent activities. The swarm will start executing
its assigned workflow according to its configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `StartSwarmRequest` _(optional)_ | Optional start parameters |

## Returns

**`Promise<void>`** — A promise that resolves when the swarm has started

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.startSwarm('swarmId');
```
