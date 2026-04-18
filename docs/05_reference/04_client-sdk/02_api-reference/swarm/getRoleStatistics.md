---
name: getRoleStatistics
cbbaseinfo:
  description: "Get role statistics for a swarm.

Retrieves statistical information about all roles in a swarm,
including assignment counts, utilization rates, and activity metrics.
Use this for monitoring role distribution and workload balance."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmRoleStatistics[]>"
    description: A promise that resolves to an array of SwarmRoleStatistics objects
data:
  name: getRoleStatistics
  category: swarm
  link: getRoleStatistics.md
---
# getRoleStatistics

```typescript
client.swarm.getRoleStatistics(swarmId: string): Promise<SwarmRoleStatistics[]>
```

Get role statistics for a swarm.

Retrieves statistical information about all roles in a swarm,
including assignment counts, utilization rates, and activity metrics.
Use this for monitoring role distribution and workload balance.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<SwarmRoleStatistics[]>`** — A promise that resolves to an array of SwarmRoleStatistics objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getRoleStatistics('swarmId');
```
