---
name: createTerminationRequest
cbbaseinfo:
  description: "Create a termination request for a swarm.

Submits a request to terminate specific agent instances within
the swarm. This is used to reduce swarm size or remove specific
agents."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: CreateTerminationRequestBody
      description: The termination request details
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the created termination request
data:
  name: createTerminationRequest
  category: swarm
  link: createTerminationRequest.md
---
# createTerminationRequest

```typescript
client.swarm.createTerminationRequest(swarmId: string, data: CreateTerminationRequestBody): Promise<unknown>
```

Create a termination request for a swarm.

Submits a request to terminate specific agent instances within
the swarm. This is used to reduce swarm size or remove specific
agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateTerminationRequestBody` | The termination request details |

## Returns

**`Promise<unknown>`** — A promise that resolves to the created termination request

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.createTerminationRequest('swarmId', /* CreateTerminationRequestBody */);
```
