---
name: unassignRole
cbbaseinfo:
  description: "Unassign a role from an agent in a swarm.

Removes a role from an agent, revoking the associated permissions
and responsibilities. The agent will no longer be able to perform
actions authorized by this role."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: roleId
      typeName: string
      description: The unique identifier of the role to unassign
      isOptional: false
    - name: data
      typeName: UnassignRoleRequest
      description: The role unassignment information
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the role is unassigned
data:
  name: unassignRole
  category: swarm
  link: unassignRole.md
---
# unassignRole

```typescript
client.swarm.unassignRole(swarmId: string, roleId: string, data: UnassignRoleRequest): Promise<void>
```

Unassign a role from an agent in a swarm.

Removes a role from an agent, revoking the associated permissions
and responsibilities. The agent will no longer be able to perform
actions authorized by this role.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role to unassign |
| `data` | `UnassignRoleRequest` | The role unassignment information |

## Returns

**`Promise<void>`** — A promise that resolves when the role is unassigned

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.unassignRole('swarmId', 'roleId', /* UnassignRoleRequest */);
```
