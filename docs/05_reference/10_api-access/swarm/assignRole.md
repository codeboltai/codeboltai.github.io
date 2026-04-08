---
name: assignRole
cbbaseinfo:
  description: "Assigns a role to an agent, granting them the role's permissions and responsibilities."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The ID of the swarm containing the role.
    - name: roleId
      typeName: string
      description: The ID of the role to assign.
    - name: agentId
      typeName: string
      description: The ID of the agent to assign the role to.
  returns:
    signatureTypeName: "Promise<AssignRoleResponse>"
    description: A promise that resolves when the role is assigned.
    typeArgs: []
data:
  name: assignRole
  category: swarm
  link: assignRole.md
---
# assignRole

```typescript
codebolt.swarm.assignRole(swarmId: string, roleId: string, agentId: string): Promise<AssignRoleResponse>
```

Assigns a role to an agent, granting them the role's permissions and responsibilities.
### Parameters

- **`swarmId`** (string): The ID of the swarm containing the role.
- **`roleId`** (string): The ID of the role to assign.
- **`agentId`** (string): The ID of the agent to assign the role to.

### Returns

- **`Promise<[AssignRoleResponse](/docs/reference/type-reference/codeboltjs/interfaces/AssignRoleResponse)>`**: A promise that resolves when the role is assigned.

### Examples

#### Basic Role Assignment

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Assign a role to an agent
const result = await codebolt.swarm.assignRole(
    'swarm-123',
    'role-456',
    'agent-789'
);

if (result.success) {
    console.log('✅ Role assigned successfully');
} else {
    console.error('❌ Role assignment failed:', result.error);
}
```

#### Assign Multiple Roles to Agent

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Assign multiple roles to a single agent
const swarmId = 'swarm-123';
const agentId = 'agent-789';
const roleIds = ['role-dev', 'role-reviewer', 'role-deployer'];

for (const roleId of roleIds) {
    const result = await codebolt.swarm.assignRole(swarmId, roleId, agentId);

    if (result.success) {
        console.log(`✅ Assigned role ${roleId} to agent`);
    } else {
        console.error(`❌ Failed to assign ${roleId}:`, result.error);
    }
}
```

#### Assign Role to Multiple Agents

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Assign one role to multiple agents (e.g., team lead role)
const swarmId = 'swarm-123';
const roleId = 'role-senior-dev';
const agentIds = ['agent-001', 'agent-002', 'agent-003'];

const assignments = [];

for (const agentId of agentIds) {
    const result = await codebolt.swarm.assignRole(swarmId, roleId, agentId);
    assignments.push({
        agentId,
        success: result.success
    });

    if (result.success) {
        console.log(`✅ Assigned role to agent ${agentId}`);
    }
}

const successful = assignments.filter(a => a.success).length;
console.log(`Successfully assigned role to ${successful}/${assignments.length} agents`);
```

#### Assign Role with Validation

```js
import codebolt from '@codebolt/codeboltjs';

async function assignRoleWithValidation(swarmId, roleId, agentId) {
    await codebolt.waitForReady();

    // First, check if role exists and has capacity
    const roleResult = await codebolt.swarm.getRole(swarmId, roleId);

    if (!roleResult.success) {
        throw new Error('Role not found');
    }

    const role = roleResult.data.role;

    // Check if role is at capacity
    if (role.maxAssignees && role.assigneeCount >= role.maxAssignees) {
        throw new Error('Role has reached maximum assignee limit');
    }

    // Assign the role
    const result = await codebolt.swarm.assignRole(swarmId, roleId, agentId);

    if (result.success) {
        console.log(`✅ Role "${role.name}" assigned to agent ${agentId}`);
        return true;
    }

    return false;
}

// Usage
try {
    await assignRoleWithValidation('swarm-123', 'role-456', 'agent-789');
} catch (error) {
    console.error('Assignment failed:', error.message);
}
```

#### Assign All Roles in a Category

```js
import codebolt from '@codebolt/codeboltjs';

async function assignRolesByCategory(swarmId, agentId, category) {
    await codebolt.waitForReady();

    // Get all roles
    const rolesResult = await codebolt.swarm.listRoles(swarmId);

    if (!rolesResult.success) {
        throw new Error('Failed to list roles');
    }

    // Filter roles by category
    const targetRoles = rolesResult.data.roles.filter(
        role => role.metadata?.category === category
    );

    console.log(`Found ${targetRoles.length} roles in category "${category}"`);

    // Assign all matching roles
    const results = [];
    for (const role of targetRoles) {
        const result = await codebolt.swarm.assignRole(
            swarmId,
            role.id,
            agentId
        );
        results.push({
            roleName: role.name,
            success: result.success
        });
    }

    return results;
}

// Usage
const results = await assignRolesByCategory(
    'swarm-123',
    'agent-789',
    'development'
);

results.forEach(r => {
    console.log(`${r.roleName}: ${r.success ? '✅' : '❌'}`);
});
```

#### Comprehensive Role Assignment Workflow

```js
import codebolt from '@codebolt/codeboltjs';

async function assignRoleWithChecks(swarmId, roleId, agentId) {
    await codebolt.waitForReady();

    try {
        // Verify swarm exists
        const swarmResult = await codebolt.swarm.getSwarm(swarmId);
        if (!swarmResult.success) {
            throw new Error('Swarm not found');
        }

        // Verify role exists
        const roleResult = await codebolt.swarm.getRole(swarmId, roleId);
        if (!roleResult.success) {
            throw new Error('Role not found');
        }

        const role = roleResult.data.role;

        // Check capacity
        if (role.maxAssignees && role.assigneeCount >= role.maxAssignees) {
            throw new Error(`Role "${role.name}" is at capacity (${role.maxAssignees})`);
        }

        // Check if agent already has this role
        const agentsResult = await codebolt.swarm.getAgentsByRole(swarmId, roleId);
        if (agentsResult.success) {
            const alreadyAssigned = agentsResult.data.agents.some(a => a.id === agentId);
            if (alreadyAssigned) {
                console.log('Agent already has this role');
                return false;
            }
        }

        // Assign the role
        const result = await codebolt.swarm.assignRole(swarmId, roleId, agentId);

        if (result.success) {
            console.log(`✅ Successfully assigned role "${role.name}" to agent ${agentId}`);
            return true;
        }

        return false;

    } catch (error) {
        console.error('Role assignment error:', error.message);
        return false;
    }
}

// Usage
const success = await assignRoleWithChecks(
    'swarm-123',
    'role-senior-dev',
    'agent-789'
);
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        message: string
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Onboarding**
Assign appropriate roles when new agents join a swarm.

**2. Promotion**
Grant additional roles as agents gain experience or responsibilities.

**3. Project Assignment**
Assign project-specific roles for temporary work.

**4. Access Granting**
Use role assignments to grant agents new capabilities.

**5. Team Configuration**
Set up role structures for team coordination.

### Notes

- An agent can have multiple roles simultaneously
- Roles grant cumulative permissions (all assigned roles apply)
- The role's `maxAssignees` limit is checked before assignment
- Assigning a role that an agent already has is a no-op (not an error)
- Role assignments can be removed using `unassignRole()`
- Check role capacity before assignment to avoid errors
- Role changes take effect immediately for the agent
- Audit logs track all role assignments
- Consider the implications of assigning multiple roles with overlapping permissions