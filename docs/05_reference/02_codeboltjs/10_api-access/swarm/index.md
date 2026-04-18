---
cbapicategory:
  - name: createSwarm
    link: /docs/api/apiaccess/swarm/createSwarm
    description: "Creates a new swarm for multi-agent coordination."
  - name: listSwarms
    link: /docs/api/apiaccess/swarm/listSwarms
    description: Lists all available swarms.
  - name: getSwarm
    link: /docs/api/apiaccess/swarm/getSwarm
    description: Gets details of a specific swarm.
  - name: getSwarmAgents
    link: /docs/api/apiaccess/swarm/getSwarmAgents
    description: Gets all agents in a swarm.
  - name: registerAgent
    link: /docs/api/apiaccess/swarm/registerAgent
    description: Registers an agent to a swarm.
  - name: unregisterAgent
    link: /docs/api/apiaccess/swarm/unregisterAgent
    description: Unregisters an agent from a swarm.
  - name: createTeam
    link: /docs/api/apiaccess/swarm/createTeam
    description: Creates a new team in a swarm.
  - name: listTeams
    link: /docs/api/apiaccess/swarm/listTeams
    description: Lists all teams in a swarm.
  - name: getTeam
    link: /docs/api/apiaccess/swarm/getTeam
    description: Gets details of a specific team.
  - name: joinTeam
    link: /docs/api/apiaccess/swarm/joinTeam
    description: Adds an agent to a team.
  - name: leaveTeam
    link: /docs/api/apiaccess/swarm/leaveTeam
    description: Removes an agent from a team.
  - name: deleteTeam
    link: /docs/api/apiaccess/swarm/deleteTeam
    description: Deletes a team from a swarm.
  - name: createRole
    link: /docs/api/apiaccess/swarm/createRole
    description: Creates a new role in a swarm.
  - name: listRoles
    link: /docs/api/apiaccess/swarm/listRoles
    description: Lists all roles in a swarm.
  - name: getRole
    link: /docs/api/apiaccess/swarm/getRole
    description: Gets details of a specific role.
  - name: assignRole
    link: /docs/api/apiaccess/swarm/assignRole
    description: Assigns a role to an agent.
  - name: unassignRole
    link: /docs/api/apiaccess/swarm/unassignRole
    description: Unassigns a role from an agent.
  - name: getAgentsByRole
    link: /docs/api/apiaccess/swarm/getAgentsByRole
    description: Gets all agents with a specific role.
  - name: deleteRole
    link: /docs/api/apiaccess/swarm/deleteRole
    description: Deletes a role from a swarm.
  - name: createVacancy
    link: /docs/api/apiaccess/swarm/createVacancy
    description: Creates a new vacancy in a swarm.
  - name: listVacancies
    link: /docs/api/apiaccess/swarm/listVacancies
    description: Lists all vacancies in a swarm.
  - name: applyForVacancy
    link: /docs/api/apiaccess/swarm/applyForVacancy
    description: Applies for a vacancy.
  - name: closeVacancy
    link: /docs/api/apiaccess/swarm/closeVacancy
    description: Closes a vacancy.
  - name: updateAgentStatus
    link: /docs/api/apiaccess/swarm/updateAgentStatus
    description: "Updates an agent's status."
  - name: getSwarmStatusSummary
    link: /docs/api/apiaccess/swarm/getSwarmStatusSummary
    description: Gets status summary for a swarm.
  - name: getDefaultJobGroup
    link: /docs/api/apiaccess/swarm/getDefaultJobGroup
    description: Gets the default job group ID for a swarm.
---
# Swarm API

The Swarm API provides comprehensive multi-agent swarm coordination capabilities, enabling you to manage swarms, agents, teams, roles, and vacancies. This API allows you to orchestrate complex multi-agent systems with fine-grained control over agent organization and responsibilities.

## Overview

The swarm module enables you to:
- **Swarm Management**: Create and manage swarms of AI agents
- **Agent Registration**: Register and manage agents within swarms
- **Team Organization**: Create teams to group agents for specific tasks
- **Role Assignment**: Define roles and assign them to agents
- **Vacancy Management**: Create and manage job vacancies within swarms
- **Status Tracking**: Monitor agent status and swarm health

## Quick Start Example

```js
// Wait for connection
await codebolt.waitForReady();

// Create a new swarm
const swarm = await codebolt.swarm.createSwarm({
    name: 'Development Team',
    description: 'A swarm for coordinating development tasks',
    allowExternalAgents: false,
    maxAgents: 10
});
console.log('✅ Created swarm:', swarm.data.swarm);

// Register an agent to the swarm
const agent = await codebolt.swarm.registerAgent(swarm.data.swarm.id, {
    name: 'Code Reviewer',
    capabilities: ['code_review', 'testing'],
    agentType: 'internal',
    metadata: { version: '1.0.0' }
});
console.log('✅ Registered agent:', agent.data);

// Create a team
const team = await codebolt.swarm.createTeam(swarm.data.swarm.id, {
    name: 'Frontend Team',
    description: 'Handles frontend development',
    maxMembers: 5,
    createdBy: 'admin'
});
console.log('✅ Created team:', team.data);

// Create and assign a role
const role = await codebolt.swarm.createRole(swarm.data.swarm.id, {
    name: 'Senior Developer',
    description: 'Experienced developer role',
    permissions: ['write', 'review', 'deploy'],
    maxAssignees: 3,
    createdBy: 'admin'
});
console.log('✅ Created role:', role.data);

// Assign role to agent
await codebolt.swarm.assignRole(
    swarm.data.swarm.id,
    role.data.role.id,
    agent.data.agentId
);
console.log('✅ Role assigned successfully');
```

## Response Structure

All swarm API functions return responses with a consistent structure:

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        // Response-specific data
        swarm: Swarm,
        agents: SwarmAgent[],
        team: Team,
        role: Role,
        // ... etc
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

## Key Concepts

### Swarms
A **swarm** is a collection of AI agents working together towards common goals. Each swarm has its own configuration, agents, teams, and roles.

### Agents
An **agent** is an AI entity that can perform tasks. Agents can be internal (managed by the system) or external (connected via external endpoints).

### Teams
A **team** is a subgroup of agents within a swarm, organized for specific purposes or projects.

### Roles
A **role** defines a set of responsibilities and permissions within a swarm. Agents can be assigned to roles to control their capabilities and access.

### Vacancies
A **vacancy** represents an open position within a swarm that agents can apply for, based on their capabilities and role assignments.

### Status Tracking
Agents can have different statuses: `active`, `idle`, `busy`, or `offline`. This helps in monitoring and coordinating agent activities.

<CBAPICategory />
