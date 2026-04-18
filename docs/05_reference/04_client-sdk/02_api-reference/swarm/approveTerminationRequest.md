---
name: approveTerminationRequest
cbbaseinfo:
  description: "Approve a termination request.

Approves a pending termination request, authorizing the removal
of specified agent instances. The agents will be terminated
gracefully."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: requestId
      typeName: string
      description: The unique identifier of the termination request
      isOptional: false
    - name: data
      typeName: TerminationRequestActionBody
      description: Optional approval information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the request is approved
data:
  name: approveTerminationRequest
  category: swarm
  link: approveTerminationRequest.md
---
# approveTerminationRequest

```typescript
client.swarm.approveTerminationRequest(swarmId: string, requestId: string, data?: TerminationRequestActionBody): Promise<void>
```

Approve a termination request.

Approves a pending termination request, authorizing the removal
of specified agent instances. The agents will be terminated
gracefully.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the termination request |
| `data` | `TerminationRequestActionBody` _(optional)_ | Optional approval information |

## Returns

**`Promise<void>`** — A promise that resolves when the request is approved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.approveTerminationRequest('swarmId', 'requestId');
```
