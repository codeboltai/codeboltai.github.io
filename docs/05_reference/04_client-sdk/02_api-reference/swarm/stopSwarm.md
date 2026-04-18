---
name: stopSwarm
cbbaseinfo:
  description: "Stop a swarm.

Deactivates a swarm, halting all in-progress tasks and agent
activities. The swarm will gracefully shut down and return to
an idle state."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional stop parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the swarm has stopped
data:
  name: stopSwarm
  category: swarm
  link: stopSwarm.md
---
# stopSwarm

```typescript
client.swarm.stopSwarm(swarmId: string, data?: Record<string, unknown>): Promise<void>
```

Stop a swarm.

Deactivates a swarm, halting all in-progress tasks and agent
activities. The swarm will gracefully shut down and return to
an idle state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `Record<string, unknown>` _(optional)_ | Optional stop parameters |

## Returns

**`Promise<void>`** — A promise that resolves when the swarm has stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.stopSwarm('swarmId');
```
