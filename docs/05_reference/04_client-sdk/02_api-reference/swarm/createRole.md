---
name: createRole
cbbaseinfo:
  description: "Create a role in a swarm.

Creates a new role that agents can be assigned to. Roles define
agent responsibilities, permissions, and capabilities within the
swarm context."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: CreateRoleRequest
      description: The role creation information
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmRole>"
    description: A promise that resolves to the created SwarmRole object
data:
  name: createRole
  category: swarm
  link: createRole.md
---
# createRole

```typescript
client.swarm.createRole(swarmId: string, data: CreateRoleRequest): Promise<SwarmRole>
```

Create a role in a swarm.

Creates a new role that agents can be assigned to. Roles define
agent responsibilities, permissions, and capabilities within the
swarm context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateRoleRequest` | The role creation information |

## Returns

**`Promise<SwarmRole>`** — A promise that resolves to the created SwarmRole object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.createRole('swarmId', /* CreateRoleRequest */);
```
