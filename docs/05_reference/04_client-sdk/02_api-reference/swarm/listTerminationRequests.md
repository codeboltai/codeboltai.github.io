---
name: listTerminationRequests
cbbaseinfo:
  description: "List termination requests for a swarm.

Retrieves all termination requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
termination request status and history."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering requests
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: A promise that resolves to an array of termination requests
data:
  name: listTerminationRequests
  category: swarm
  link: listTerminationRequests.md
---
# listTerminationRequests

```typescript
client.swarm.listTerminationRequests(swarmId: string, params?: Record<string, unknown>): Promise<unknown[]>
```

List termination requests for a swarm.

Retrieves all termination requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
termination request status and history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering requests |

## Returns

**`Promise<unknown[]>`** — A promise that resolves to an array of termination requests

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listTerminationRequests('swarmId');
```
