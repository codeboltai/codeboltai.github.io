---
name: assignRole
cbbaseinfo:
  description: "Assign a role to an agent in a swarm.

Grants a role to an agent, giving them the associated permissions
and responsibilities. The agent can now perform actions authorized
by this role."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: roleId
      typeName: string
      description: The unique identifier of the role to assign
      isOptional: false
    - name: data
      typeName: AssignRoleRequest
      description: The role assignment information
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the role is assigned
data:
  name: assignRole
  category: swarm
  link: assignRole.md
---
# assignRole

```typescript
client.swarm.assignRole(swarmId: string, roleId: string, data: AssignRoleRequest): Promise<void>
```

Assign a role to an agent in a swarm.

Grants a role to an agent, giving them the associated permissions
and responsibilities. The agent can now perform actions authorized
by this role.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role to assign |
| `data` | `AssignRoleRequest` | The role assignment information |

## Returns

**`Promise<void>`** — A promise that resolves when the role is assigned

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.assignRole('swarmId', 'roleId', /* AssignRoleRequest */);
```
