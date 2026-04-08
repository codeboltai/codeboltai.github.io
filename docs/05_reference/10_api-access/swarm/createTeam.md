---
name: createTeam
cbbaseinfo:
  description: Creates a new team within a swarm to organize agents for specific tasks or projects.
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The ID of the swarm to create the team in.
    - name: data
      typeName: CreateTeamRequest
      description: Team creation configuration.
      nested:
        - name: name
          typeName: string
          description: "The name of the team (required)."
        - name: description
          typeName: "string | undefined"
          description: "Optional description of the team's purpose."
        - name: maxMembers
          typeName: "number | undefined"
          description: Maximum number of agents allowed in the team.
        - name: metadata
          typeName: "Record<string, any> | undefined"
          description: Additional metadata about the team.
        - name: createdBy
          typeName: string
          description: "ID of the agent or user creating the team (required)."
  returns:
    signatureTypeName: "Promise<CreateTeamResponse>"
    description: A promise that resolves to the created team details.
    typeArgs: []
data:
  name: createTeam
  category: swarm
  link: createTeam.md
---
# createTeam

```typescript
codebolt.swarm.createTeam(swarmId: string, data: CreateTeamRequest): Promise<CreateTeamResponse>
```

Creates a new team within a swarm to organize agents for specific tasks or projects.
### Parameters

- **`swarmId`** (string): The ID of the swarm to create the team in.
- **`data`** ([CreateTeamRequest](/docs/reference/type-reference/codeboltjs/interfaces/CreateTeamRequest)): Team creation configuration.

### Returns

- **`Promise<[CreateTeamResponse](/docs/reference/type-reference/codeboltjs/interfaces/CreateTeamResponse)>`**: A promise that resolves to the created team details.

### Examples

#### Create Basic Team

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a simple team
const result = await codebolt.swarm.createTeam('swarm-123', {
    name: 'Frontend Developers',
    createdBy: 'admin-agent-001'
});

if (result.success) {
    console.log('✅ Team created:', result.data.team);
    console.log('Team ID:', result.data.team.id);
    console.log('Member Count:', result.data.team.memberCount);
} else {
    console.error('❌ Team creation failed:', result.error);
}
```

#### Create Team with Full Configuration

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create a fully configured team
const result = await codebolt.swarm.createTeam('swarm-123', {
    name: 'Quality Assurance Team',
    description: 'Responsible for all testing and quality assurance activities',
    maxMembers: 10,
    createdBy: 'manager-001',
    metadata: {
        department: 'QA',
        budget: '50000',
        tools: ['Jest', 'Cypress', 'Selenium'],
        priority: 'high'
    }
});

console.log('Team Configuration:');
console.log('- Name:', result.data.team.name);
console.log('- Description:', result.data.team.description);
console.log('- Max Members:', result.data.team.maxMembers);
console.log('- Created:', result.data.team.createdAt);
```

#### Create Multiple Teams

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Define team structure
const teamConfigs = [
    {
        name: 'Frontend Team',
        description: 'UI/UX and frontend development',
        maxMembers: 8,
        createdBy: 'admin-001'
    },
    {
        name: 'Backend Team',
        description: 'Server-side logic and APIs',
        maxMembers: 6,
        createdBy: 'admin-001'
    },
    {
        name: 'DevOps Team',
        description: 'Infrastructure and deployment',
        maxMembers: 4,
        createdBy: 'admin-001'
    },
    {
        name: 'Design Team',
        description: 'Product design and user experience',
        maxMembers: 5,
        createdBy: 'admin-001'
    }
];

// Create all teams
const swarmId = 'swarm-123';
const teams = [];

for (const config of teamConfigs) {
    const result = await codebolt.swarm.createTeam(swarmId, config);
    if (result.success) {
        teams.push(result.data.team);
        console.log(`✅ Created ${config.name}:`, result.data.team.id);
    }
}

console.log(`Successfully created ${teams.length} teams`);
```

#### Create Team and Add Members

```js
import codebolt from '@codebolt/codeboltjs';

async function createTeamWithMembers(swarmId, teamConfig, agentIds) {
    await codebolt.waitForReady();

    // Create the team
    const teamResult = await codebolt.swarm.createTeam(swarmId, {
        ...teamConfig,
        createdBy: 'admin-001'
    });

    if (!teamResult.success) {
        throw new Error('Failed to create team');
    }

    const teamId = teamResult.data.team.id;
    console.log('✅ Team created:', teamId);

    // Add agents to the team
    const members = [];
    for (const agentId of agentIds) {
        const joinResult = await codebolt.swarm.joinTeam(swarmId, teamId, agentId);
        if (joinResult.success) {
            members.push(agentId);
            console.log(`✅ Added agent ${agentId} to team`);
        }
    }

    return {
        team: teamResult.data.team,
        members
    };
}

// Usage
const result = await createTeamWithMembers(
    'swarm-123',
    {
        name: 'Emergency Response Team',
        description: 'Handles urgent incidents',
        maxMembers: 5
    },
    ['agent-001', 'agent-002', 'agent-003']
);
```

#### Create Specialized Teams by Function

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create functionally specialized teams
const functions = [
    {
        name: 'Research & Development',
        description: 'Explores new technologies and approaches',
        maxMembers: 12,
        metadata: { innovation: true, experimental: true }
    },
    {
        name: 'Production Support',
        description: 'Maintains production systems',
        maxMembers: 8,
        metadata: { critical: true, oncall: true }
    },
    {
        name: 'Security Team',
        description: 'Security audits and vulnerability management',
        maxMembers: 6,
        metadata: { security: true, compliance: true }
    }
];

const swarmId = 'swarm-123';

for (const func of functions) {
    const result = await codebolt.swarm.createTeam(swarmId, {
        ...func,
        createdBy: 'security-admin-001'
    });

    if (result.success) {
        console.log(`✅ Created ${func.name} team`);
    }
}
```

#### Error Handling and Validation

```js
import codebolt from '@codebolt/codeboltjs';

async function createTeamWithErrorHandling(swarmId, teamConfig) {
    await codebolt.waitForReady();

    try {
        // Validate inputs
        if (!teamConfig.name || teamConfig.name.trim() === '') {
            throw new Error('Team name is required');
        }

        if (!teamConfig.createdBy) {
            throw new Error('createdBy field is required');
        }

        const result = await codebolt.swarm.createTeam(swarmId, teamConfig);

        if (!result.success) {
            // Handle specific error cases
            switch (result.error.code) {
                case 'SWARM_NOT_FOUND':
                    console.error('Swarm does not exist:', swarmId);
                    break;
                case 'DUPLICATE_TEAM':
                    console.error('A team with this name already exists in the swarm');
                    break;
                case 'INVALID_MEMBERS_LIMIT':
                    console.error('Invalid maxMembers value');
                    break;
                default:
                    console.error('Team creation failed:', result.error.message);
            }
            return null;
        }

        return result.data.team;

    } catch (error) {
        console.error('Unexpected error:', error);
        return null;
    }
}

// Usage
const team = await createTeamWithErrorHandling('swarm-123', {
    name: 'Test Team',
    createdBy: 'admin-001'
});

if (team) {
    console.log('Team created successfully:', team.id);
}
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        team: {
            id: string,
            swarmId: string,
            name: string,
            description?: string,
            maxMembers?: number,
            memberCount: number,
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

**1. Project Organization**
Create teams for different projects or work streams within a swarm.

**2. Skill Grouping**
Organize agents by their capabilities and expertise areas.

**3. Hierarchy Management**
Build organizational structures with clear team boundaries.

**4. Resource Allocation**
Control resource distribution by setting member limits.

**5. Task Routing**
Route tasks to specific teams based on their specialization.

### Notes

- Team names must be unique within a swarm
- The `createdBy` field tracks who created the team for audit purposes
- `memberCount` starts at 0 when the team is created
- Use `joinTeam()` to add agents to the team after creation
- `maxMembers` is optional; if not set, there's no limit
- Teams can be created without any members
- Metadata can be used for filtering and team categorization
- Timestamps are in ISO 8601 format
- A team can only exist within one swarm
- Teams cannot be moved between swarms (create a new one instead)