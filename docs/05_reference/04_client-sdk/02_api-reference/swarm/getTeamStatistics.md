---
name: getTeamStatistics
cbbaseinfo:
  description: "Get team statistics for a swarm.

Retrieves statistical information about all teams in a swarm,
including member counts, activity levels, and performance metrics.
Use this for monitoring team health and utilization."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmTeamStatistics[]>"
    description: A promise that resolves to an array of SwarmTeamStatistics objects
data:
  name: getTeamStatistics
  category: swarm
  link: getTeamStatistics.md
---
# getTeamStatistics

```typescript
client.swarm.getTeamStatistics(swarmId: string): Promise<SwarmTeamStatistics[]>
```

Get team statistics for a swarm.

Retrieves statistical information about all teams in a swarm,
including member counts, activity levels, and performance metrics.
Use this for monitoring team health and utilization.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<SwarmTeamStatistics[]>`** — A promise that resolves to an array of SwarmTeamStatistics objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getTeamStatistics('swarmId');
```
