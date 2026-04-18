---
name: listRoles
cbbaseinfo:
  description: "List roles in a swarm.

Retrieves all roles defined in a swarm, optionally filtered by query
parameters. Use this to view available roles or populate role
selection interfaces."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering roles
      isOptional: true
  returns:
    signatureTypeName: "Promise<SwarmRole[]>"
    description: A promise that resolves to an array of SwarmRole objects
data:
  name: listRoles
  category: swarm
  link: listRoles.md
---
# listRoles

```typescript
client.swarm.listRoles(swarmId: string, params?: Record<string, unknown>): Promise<SwarmRole[]>
```

List roles in a swarm.

Retrieves all roles defined in a swarm, optionally filtered by query
parameters. Use this to view available roles or populate role
selection interfaces.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering roles |

## Returns

**`Promise<SwarmRole[]>`** — A promise that resolves to an array of SwarmRole objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listRoles('swarmId');
```
