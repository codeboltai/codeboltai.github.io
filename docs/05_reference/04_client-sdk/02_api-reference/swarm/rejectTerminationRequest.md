---
name: rejectTerminationRequest
cbbaseinfo:
  description: "Reject a termination request.

Rejects a pending termination request, preventing the removal of
agent instances. The agents will continue operating in the swarm."
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
      description: Optional rejection information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the request is rejected
data:
  name: rejectTerminationRequest
  category: swarm
  link: rejectTerminationRequest.md
---
# rejectTerminationRequest

```typescript
client.swarm.rejectTerminationRequest(swarmId: string, requestId: string, data?: TerminationRequestActionBody): Promise<void>
```

Reject a termination request.

Rejects a pending termination request, preventing the removal of
agent instances. The agents will continue operating in the swarm.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the termination request |
| `data` | `TerminationRequestActionBody` _(optional)_ | Optional rejection information |

## Returns

**`Promise<void>`** — A promise that resolves when the request is rejected

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.rejectTerminationRequest('swarmId', 'requestId');
```
