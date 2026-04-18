---
name: deleteRole
cbbaseinfo:
  description: "Delete a role from a swarm.

Permanently removes a role and unassigns all agents from it.
Agents will lose the permissions and responsibilities associated
with the role."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: roleId
      typeName: string
      description: The unique identifier of the role to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the role is deleted
data:
  name: deleteRole
  category: swarm
  link: deleteRole.md
---
# deleteRole

```typescript
client.swarm.deleteRole(swarmId: string, roleId: string): Promise<void>
```

Delete a role from a swarm.

Permanently removes a role and unassigns all agents from it.
Agents will lose the permissions and responsibilities associated
with the role.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the role is deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.deleteRole('swarmId', 'roleId');
```
