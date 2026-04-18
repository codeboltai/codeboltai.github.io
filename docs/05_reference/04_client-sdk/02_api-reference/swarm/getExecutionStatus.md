---
name: getExecutionStatus
cbbaseinfo:
  description: "Get the execution status of a swarm.

Retrieves real-time information about swarm execution including
current tasks, agent activity, progress metrics, and any errors
or warnings encountered."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmStatusUpdate>"
    description: A promise that resolves to the SwarmStatusUpdate object with execution details
data:
  name: getExecutionStatus
  category: swarm
  link: getExecutionStatus.md
---
# getExecutionStatus

```typescript
client.swarm.getExecutionStatus(swarmId: string): Promise<SwarmStatusUpdate>
```

Get the execution status of a swarm.

Retrieves real-time information about swarm execution including
current tasks, agent activity, progress metrics, and any errors
or warnings encountered.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |

## Returns

**`Promise<SwarmStatusUpdate>`** — A promise that resolves to the SwarmStatusUpdate object with execution details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getExecutionStatus('swarmId');
```
