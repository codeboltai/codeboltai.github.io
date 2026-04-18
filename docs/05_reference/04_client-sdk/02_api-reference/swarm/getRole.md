---
name: getRole
cbbaseinfo:
  description: "Get a role by ID within a swarm.

Retrieves detailed information about a specific role including its
permissions and assigned agents. Use this for displaying role details
or managing role assignments."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: roleId
      typeName: string
      description: The unique identifier of the role
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmRole>"
    description: A promise that resolves to the SwarmRole object
data:
  name: getRole
  category: swarm
  link: getRole.md
---
# getRole

```typescript
client.swarm.getRole(swarmId: string, roleId: string): Promise<SwarmRole>
```

Get a role by ID within a swarm.

Retrieves detailed information about a specific role including its
permissions and assigned agents. Use this for displaying role details
or managing role assignments.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role |

## Returns

**`Promise<SwarmRole>`** — A promise that resolves to the SwarmRole object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getRole('swarmId', 'roleId');
```
