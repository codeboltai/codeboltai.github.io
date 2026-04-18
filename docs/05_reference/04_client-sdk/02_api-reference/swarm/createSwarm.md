---
name: createSwarm
cbbaseinfo:
  description: "Create a new swarm.

Initializes a new swarm with the specified configuration. Swarms
are the top-level organizational unit for multi-agent coordination,
containing teams, roles, and agents that work together on tasks."
cbparameters:
  parameters:
    - name: data
      typeName: CreateSwarmRequest
      description: The swarm configuration and metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmData>"
    description: A promise that resolves to the created SwarmData object
data:
  name: createSwarm
  category: swarm
  link: createSwarm.md
---
# createSwarm

```typescript
client.swarm.createSwarm(data: CreateSwarmRequest): Promise<SwarmData>
```

Create a new swarm.

Initializes a new swarm with the specified configuration. Swarms
are the top-level organizational unit for multi-agent coordination,
containing teams, roles, and agents that work together on tasks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateSwarmRequest` | The swarm configuration and metadata |

## Returns

**`Promise<SwarmData>`** — A promise that resolves to the created SwarmData object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.createSwarm(/* CreateSwarmRequest */);
```
