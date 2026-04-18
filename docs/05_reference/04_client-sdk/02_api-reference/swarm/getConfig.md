---
name: getConfig
cbbaseinfo:
  description: "Get the configuration of a swarm.

Retrieves the current configuration settings for a swarm, including
operational parameters, limits, and behavioral settings. Use this
to view swarm settings or for configuration management."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmConfig>"
    description: A promise that resolves to the SwarmConfig object
data:
  name: getConfig
  category: swarm
  link: getConfig.md
---
# getConfig

```typescript
client.swarm.getConfig(swarmId: string): Promise<SwarmConfig>
```

Get the configuration of a swarm.

Retrieves the current configuration settings for a swarm, including
operational parameters, limits, and behavioral settings. Use this
to view swarm settings or for configuration management.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<SwarmConfig>`** — A promise that resolves to the SwarmConfig object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getConfig('swarmId');
```
