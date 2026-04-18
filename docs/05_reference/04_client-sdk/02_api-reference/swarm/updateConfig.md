---
name: updateConfig
cbbaseinfo:
  description: "Update the configuration of a swarm.

Modifies the configuration settings for a swarm. Changes take effect
immediately and affect all subsequent swarm operations. Use this
to adjust swarm behavior and operational parameters."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: UpdateSwarmConfigRequest
      description: The configuration updates
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the configuration is updated
data:
  name: updateConfig
  category: swarm
  link: updateConfig.md
---
# updateConfig

```typescript
client.swarm.updateConfig(swarmId: string, data: UpdateSwarmConfigRequest): Promise<void>
```

Update the configuration of a swarm.

Modifies the configuration settings for a swarm. Changes take effect
immediately and affect all subsequent swarm operations. Use this
to adjust swarm behavior and operational parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `UpdateSwarmConfigRequest` | The configuration updates |

## Returns

**`Promise<void>`** — A promise that resolves when the configuration is updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.updateConfig('swarmId', /* UpdateSwarmConfigRequest */);
```
