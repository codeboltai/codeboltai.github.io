---
name: getTerminationRegistry
cbbaseinfo:
  description: "Get the termination registry for a swarm.

Retrieves the termination registry containing information about
all agents that have been terminated from the swarm, including
their lifecycle history and termination reasons."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the termination registry data
data:
  name: getTerminationRegistry
  category: swarm
  link: getTerminationRegistry.md
---
# getTerminationRegistry

```typescript
client.swarm.getTerminationRegistry(swarmId: string): Promise<unknown>
```

Get the termination registry for a swarm.

Retrieves the termination registry containing information about
all agents that have been terminated from the swarm, including
their lifecycle history and termination reasons.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<unknown>`** — A promise that resolves to the termination registry data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getTerminationRegistry('swarmId');
```
