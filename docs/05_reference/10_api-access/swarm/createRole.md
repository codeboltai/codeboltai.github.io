---
name: createRole
cbbaseinfo:
  description: Creates a new role within a swarm to define agent responsibilities and permissions.
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The ID of the swarm to create the role in.
    - name: data
      typeName: CreateRoleRequest
      description: Role creation configuration.
      nested:
        - name: name
          typeName: string
          description: "The name of the role (required)."
        - name: description
          typeName: "string | undefined"
          description: "Optional description of the role's purpose."
        - name: permissions
          typeName: "string[] | undefined"
          description: Array of permissions granted to this role.
        - name: maxAssignees
          typeName: "number | undefined"
          description: Maximum number of agents that can be assigned this role.
        - name: metadata
          typeName: "Record<string, any> | undefined"
          description: Additional metadata about the role.
        - name: createdBy
          typeName: string
          description: "ID of the agent or user creating the role (required)."
  returns:
    signatureTypeName: "Promise<CreateRoleResponse>"
    description: A promise that resolves to the created role details.
    typeArgs: []
data:
  name: createRole
  category: swarm
  link: createRole.md
---
# createRole

```typescript
codebolt.swarm.createRole(swarmId: string, data: CreateRoleRequest): Promise<CreateRoleResponse>
```

Creates a new role within a swarm to define agent responsibilities and permissions.
### Parameters

- **`swarmId`** (string): The ID of the swarm to create the role in.
- **`data`** ([CreateRoleRequest](/docs/reference/type-reference/codeboltjs/interfaces/CreateRoleRequest)): Role creation configuration.

### Returns

- **`Promise<[CreateRoleResponse](/docs/reference/type-reference/codeboltjs/interfaces/CreateRoleResponse)>`**: A promise that resolves to the created role details.

### Examples

#### Create Basic Role

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a simple role
const result = await codebolt.swarm.createRole('swarm-123', {
    name: 'Developer',
    createdBy: 'admin-001'
});

if (result.success) {
    console.log('✅ Role created:', result.data.role);
    console.log('Role ID:', result.data.role.id);
    console.log('Assignees:', result.data.role.assigneeCount);
} else {
    console.error('❌ Role creation failed:', result.error);
}
```

#### Create Role with Permissions

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create a role with specific permissions
const result = await codebolt.swarm.createRole('swarm-123', {
    name: 'Senior Developer',
    description: 'Experienced developer with additional permissions',
    permissions: [
        'code.write',
        'code.review',
        'code.deploy',
        'team.lead',
        'decision.make'
    ],
    maxAssignees: 5,
    createdBy: 'admin-001'
});

console.log('Role Configuration:');
console.log('- Name:', result.data.role.name);
console.log('- Permissions:', result.data.role.permissions);
console.log('- Max Assignees:', result.data.role.maxAssignees);
```

#### Create Hierarchical Roles

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Define role hierarchy
const roles = [
    {
        name: 'Junior Developer',
        description: 'Entry-level developer role',
        permissions: ['code.read', 'task.view'],
        maxAssignees: 10
    },
    {
        name: 'Developer',
        description: 'Standard developer role',
        permissions: ['code.read', 'code.write', 'task.view', 'task.update'],
        maxAssignees: 8
    },
    {
        name: 'Senior Developer',
        description: 'Experienced developer with leadership',
        permissions: ['code.read', 'code.write', 'code.review', 'team.lead'],
        maxAssignees: 5
    },
    {
        name: 'Tech Lead',
        description: 'Technical leadership role',
        permissions: ['code.*', 'team.*', 'deploy.*'],
        maxAssignees: 2
    }
];

const swarmId = 'swarm-123';

for (const roleConfig of roles) {
    const result = await codebolt.swarm.createRole(swarmId, {
        ...roleConfig,
        createdBy: 'admin-001'
    });

    if (result.success) {
        console.log(`✅ Created ${roleConfig.name} role`);
    }
}
```

#### Create Specialized Roles

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create specialized functional roles
const specializations = [
    {
        name: 'Security Auditor',
        description: 'Responsible for security reviews and audits',
        permissions: ['security.scan', 'security.audit', 'report.generate'],
        maxAssignees: 3,
        metadata: { category: 'security', certification: 'CISSP' }
    },
    {
        name: 'Performance Optimizer',
        description: 'Focuses on performance optimization',
        permissions: ['performance.analyze', 'performance.optimize', 'metrics.view'],
        maxAssignees: 4,
        metadata: { category: 'performance' }
    },
    {
        name: 'Documentation Writer',
        description: 'Creates and maintains documentation',
        permissions: ['docs.write', 'docs.publish', 'docs.review'],
        maxAssignees: 6,
        metadata: { category: 'documentation' }
    }
];

const swarmId = 'swarm-123';

for (const spec of specializations) {
    const result = await codebolt.swarm.createRole(swarmId, {
        ...spec,
        createdBy: 'admin-001'
    });

    if (result.success) {
        console.log(`✅ Created ${spec.name} role`);
    }
}
```

#### Create Role and Assign to Agent

```js
import codebolt from '@codebolt/codeboltjs';

async function createAndAssignRole(swarmId, roleConfig, agentId) {
    await codebolt.waitForReady();

    // Create the role
    const roleResult = await codebolt.swarm.createRole(swarmId, {
        ...roleConfig,
        createdBy: 'admin-001'
    });

    if (!roleResult.success) {
        throw new Error('Failed to create role');
    }

    const roleId = roleResult.data.role.id;
    console.log('✅ Role created:', roleId);

    // Assign role to agent
    const assignResult = await codebolt.swarm.assignRole(swarmId, roleId, agentId);

    if (assignResult.success) {
        console.log(`✅ Role assigned to agent ${agentId}`);
    }

    return roleResult.data.role;
}

// Usage
const role = await createAndAssignRole(
    'swarm-123',
    {
        name: 'Project Lead',
        description: 'Leads project initiatives',
        permissions: ['project.manage', 'team.coordinate'],
        maxAssignees: 1
    },
    'agent-001'
);
```

#### Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

async function createRoleWithErrorHandling(swarmId, roleConfig) {
    await codebolt.waitForReady();

    try {
        // Validate inputs
        if (!roleConfig.name || roleConfig.name.trim() === '') {
            throw new Error('Role name is required');
        }

        if (!roleConfig.createdBy) {
            throw new Error('createdBy field is required');
        }

        const result = await codebolt.swarm.createRole(swarmId, roleConfig);

        if (!result.success) {
            switch (result.error.code) {
                case 'SWARM_NOT_FOUND':
                    console.error('Swarm does not exist:', swarmId);
                    break;
                case 'DUPLICATE_ROLE':
                    console.error('A role with this name already exists');
                    break;
                case 'INVALID_PERMISSIONS':
                    console.error('Invalid permissions specified');
                    break;
                default:
                    console.error('Role creation failed:', result.error.message);
            }
            return null;
        }

        return result.data.role;

    } catch (error) {
        console.error('Unexpected error:', error);
        return null;
    }
}

// Usage
const role = await createRoleWithErrorHandling('swarm-123', {
    name: 'Test Role',
    permissions: ['test.execute'],
    createdBy: 'admin-001'
});
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        role: {
            id: string,
            swarmId: string,
            name: string,
            description?: string,
            permissions?: string[],
            maxAssignees?: number,
            assigneeCount: number,
            createdAt: string,
            metadata?: Record<string, any>
        }
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Access Control**
Define fine-grained permissions for different agent capabilities.

**2. Organizational Structure**
Create roles that mirror organizational hierarchy and responsibilities.

**3. Task Authorization**
Control which agents can perform specific actions.

**4. Team Leadership**
Create leadership roles for coordination and management.

**5. Specialization**
Define roles for specialized tasks requiring specific permissions.

### Notes

- Role names must be unique within a swarm
- Permissions use dot notation (e.g., 'code.write', 'deploy.*')
- `assigneeCount` starts at 0 when the role is created
- Use `assignRole()` to assign the role to agents after creation
- `maxAssignees` limits how many agents can have this role simultaneously
- Wildcard permissions (e.g., 'code.*') grant all sub-permissions
- Roles can be created without any permissions
- The `createdBy` field is tracked for audit purposes
- Metadata can be used for filtering and role categorization
- Roles can be updated after creation using `updateRole()`