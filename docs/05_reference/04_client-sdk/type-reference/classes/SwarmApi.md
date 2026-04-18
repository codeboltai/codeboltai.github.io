---
title: SwarmApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: SwarmApi

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:43

Manages swarm coordination for multi-agent workflows.

Swarms organize agents into teams with roles, enabling complex
collaborative tasks. This API handles swarm lifecycle, agent
management, role assignment, and vacancy coordination.

## Constructors

### Constructor

```ts
new SwarmApi(http: HttpClient): SwarmApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`SwarmApi`

## Methods

### addAgent()

```ts
addAgent(swarmId: string, data: AgentRegistration): Promise<SwarmAgentInfo>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:179

Add an agent to a swarm.

Registers a new agent with the swarm, making it available for assignment
to teams and roles. Agents are the worker entities that perform tasks
within the swarm context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `AgentRegistration` | The agent registration information |

#### Returns

`Promise`\<`SwarmAgentInfo`\>

A promise that resolves to the registered SwarmAgentInfo object

#### Example

```typescript
const agent = await client.swarm.addAgent('swarm-123', {
  agentId: 'agent-456',
  name: 'Research Agent',
  capabilities: ['analysis', 'writing']
});
```

***

### applyToVacancy()

```ts
applyToVacancy(
   swarmId: string, 
   vacancyId: string, 
data?: ApplyToVacancyRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:786

Apply to a vacancy in a swarm.

Submits an application from an agent for a specific vacancy. The agent
will be considered for the position and may be selected based on
qualifications and availability.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `vacancyId` | `string` | The unique identifier of the vacancy |
| `data?` | `ApplyToVacancyRequest` | Optional application information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the application is submitted

#### Example

```typescript
await client.swarm.applyToVacancy('swarm-123', 'vacancy-456', {
  agentId: 'agent-789',
  message: 'Experienced analyst ready to help'
});
```

***

### approveSpawnRequest()

```ts
approveSpawnRequest(
   swarmId: string, 
   requestId: string, 
data?: SpawnRequestActionBody): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1117

Approve a spawn request.

Approves a pending spawn request, authorizing the creation of new
agent instances. The agents will be spawned according to the
request specifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the spawn request |
| `data?` | `SpawnRequestActionBody` | Optional approval information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is approved

#### Example

```typescript
await client.swarm.approveSpawnRequest('swarm-123', 'request-456', {
  approver: 'admin',
  comment: 'Approved for capacity increase'
});
```

***

### approveTerminationRequest()

```ts
approveTerminationRequest(
   swarmId: string, 
   requestId: string, 
data?: TerminationRequestActionBody): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1265

Approve a termination request.

Approves a pending termination request, authorizing the removal
of specified agent instances. The agents will be terminated
gracefully.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the termination request |
| `data?` | `TerminationRequestActionBody` | Optional approval information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is approved

#### Example

```typescript
await client.swarm.approveTerminationRequest('swarm-123', 'request-456', {
  approver: 'admin',
  comment: 'Approved for scale-down'
});
```

***

### assignRole()

```ts
assignRole(
   swarmId: string, 
   roleId: string, 
data: AssignRoleRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:656

Assign a role to an agent in a swarm.

Grants a role to an agent, giving them the associated permissions
and responsibilities. The agent can now perform actions authorized
by this role.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role to assign |
| `data` | `AssignRoleRequest` | The role assignment information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the role is assigned

#### Example

```typescript
await client.swarm.assignRole('swarm-123', 'role-456', {
  agentId: 'agent-789'
});
```

***

### closeVacancy()

```ts
closeVacancy(
   swarmId: string, 
   vacancyId: string, 
data?: CloseVacancyRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:818

Close a vacancy in a swarm.

Marks a vacancy as closed, preventing further applications. This is
used when a position has been filled or is no longer available.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `vacancyId` | `string` | The unique identifier of the vacancy to close |
| `data?` | `CloseVacancyRequest` | Optional closure information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the vacancy is closed

#### Example

```typescript
await client.swarm.closeVacancy('swarm-123', 'vacancy-456', {
  reason: 'Position filled',
  assignedAgentId: 'agent-789'
});
```

***

### createRole()

```ts
createRole(swarmId: string, data: CreateRoleRequest): Promise<SwarmRole>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:536

Create a role in a swarm.

Creates a new role that agents can be assigned to. Roles define
agent responsibilities, permissions, and capabilities within the
swarm context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateRoleRequest` | The role creation information |

#### Returns

`Promise`\<`SwarmRole`\>

A promise that resolves to the created SwarmRole object

#### Example

```typescript
const role = await client.swarm.createRole('swarm-123', {
  name: 'Analyst',
  description: 'Performs data analysis tasks',
  permissions: ['read', 'analyze']
});
```

***

### createSpawnRequest()

```ts
createSpawnRequest(swarmId: string, data: CreateSpawnRequestBody): Promise<SpawnRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1056

Create a spawn request for a swarm.

Submits a request to spawn new agent instances within the swarm.
This is used to dynamically scale the swarm by adding more agents
to handle increased workload.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateSpawnRequestBody` | The spawn request details |

#### Returns

`Promise`\<`SpawnRequest`\>

A promise that resolves to the created SpawnRequest object

#### Example

```typescript
const request = await client.swarm.createSpawnRequest('swarm-123', {
  agentType: 'worker',
  count: 3,
  config: { capabilities: ['analysis', 'processing'] }
});
```

***

### createSwarm()

```ts
createSwarm(data: CreateSwarmRequest): Promise<SwarmData>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:88

Create a new swarm.

Initializes a new swarm with the specified configuration. Swarms
are the top-level organizational unit for multi-agent coordination,
containing teams, roles, and agents that work together on tasks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateSwarmRequest` | The swarm configuration and metadata |

#### Returns

`Promise`\<`SwarmData`\>

A promise that resolves to the created SwarmData object

#### Example

```typescript
const swarm = await client.swarm.createSwarm({
  name: 'research-team',
  description: 'Multi-agent research collaboration',
  config: { maxAgents: 10 }
});
```

***

### createTeam()

```ts
createTeam(swarmId: string, data: CreateTeamRequest): Promise<SwarmTeam>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:348

Create a team in a swarm.

Creates a new team within the swarm, providing organizational structure
for grouping agents. Teams can be assigned specific goals and tasks,
with agents collaborating within the team context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateTeamRequest` | The team creation information |

#### Returns

`Promise`\<`SwarmTeam`\>

A promise that resolves to the created SwarmTeam object

#### Example

```typescript
const team = await client.swarm.createTeam('swarm-123', {
  name: 'Analysis Team',
  description: 'Performs data analysis tasks'
});
```

***

### createTerminationRequest()

```ts
createTerminationRequest(swarmId: string, data: CreateTerminationRequestBody): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1204

Create a termination request for a swarm.

Submits a request to terminate specific agent instances within
the swarm. This is used to reduce swarm size or remove specific
agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateTerminationRequestBody` | The termination request details |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the created termination request

#### Example

```typescript
const request = await client.swarm.createTerminationRequest('swarm-123', {
  agentIds: ['agent-456', 'agent-789'],
  reason: 'Scaling down after workload completion'
});
```

***

### createVacancy()

```ts
createVacancy(swarmId: string, data: CreateVacancyRequest): Promise<SwarmVacancy>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:725

Create a vacancy in a swarm.

Creates a new vacancy that agents can apply for. Vacancies represent
open positions within teams or roles that need to be filled by
qualified agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateVacancyRequest` | The vacancy creation information |

#### Returns

`Promise`\<`SwarmVacancy`\>

A promise that resolves to the created SwarmVacancy object

#### Example

```typescript
const vacancy = await client.swarm.createVacancy('swarm-123', {
  title: 'Senior Analyst',
  description: 'Need experienced data analyst',
  teamId: 'team-456',
  roleId: 'role-789'
});
```

***

### deleteRole()

```ts
deleteRole(swarmId: string, roleId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:607

Delete a role from a swarm.

Permanently removes a role and unassigns all agents from it.
Agents will lose the permissions and responsibilities associated
with the role.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the role is deleted

#### Example

```typescript
await client.swarm.deleteRole('swarm-123', 'role-456');
console.log('Role deleted successfully');
```

***

### deleteSwarm()

```ts
deleteSwarm(swarmId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:150

Delete a swarm by ID.

Permanently removes a swarm and all its associated resources including
teams, roles, agents, and configurations. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the swarm is deleted

#### Example

```typescript
await client.swarm.deleteSwarm('swarm-123');
console.log('Swarm deleted successfully');
```

***

### deleteTeam()

```ts
deleteTeam(swarmId: string, teamId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:419

Delete a team from a swarm.

Permanently removes a team and all its associated memberships.
Agents will be unassigned from the team but remain in the swarm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the team is deleted

#### Example

```typescript
await client.swarm.deleteTeam('swarm-123', 'team-456');
console.log('Team deleted successfully');
```

***

### getAgentsByStatus()

```ts
getAgentsByStatus(swarmId: string, status: string): Promise<SwarmAgentInfo[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:315

Get agents filtered by status in a swarm.

Retrieves all agents in a swarm that match a specific status, such as
all available agents or all agents in error state. This is useful for
finding agents ready for task assignment.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `status` | `string` | The status to filter by (available, busy, offline, etc.) |

#### Returns

`Promise`\<`SwarmAgentInfo`[]\>

A promise that resolves to an array of matching SwarmAgentInfo objects

#### Example

```typescript
const availableAgents = await client.swarm.getAgentsByStatus('swarm-123', 'available');
console.log(`Found ${availableAgents.length} available agents`);
```

***

### getAgentStatus()

```ts
getAgentStatus(swarmId: string, agentId: string): Promise<SwarmAgentInfo>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:289

Get the status of a specific agent in a swarm.

Retrieves current status information for an agent including its
state, last activity timestamp, and any status messages. Use this
for monitoring agent availability and health.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `agentId` | `string` | The unique identifier of the agent |

#### Returns

`Promise`\<`SwarmAgentInfo`\>

A promise that resolves to the SwarmAgentInfo object with status details

#### Example

```typescript
const agent = await client.swarm.getAgentStatus('swarm-123', 'agent-456');
console.log(`${agent.name} is ${agent.status}`);
```

***

### getConfig()

```ts
getConfig(swarmId: string): Promise<SwarmConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:919

Get the configuration of a swarm.

Retrieves the current configuration settings for a swarm, including
operational parameters, limits, and behavioral settings. Use this
to view swarm settings or for configuration management.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`SwarmConfig`\>

A promise that resolves to the SwarmConfig object

#### Example

```typescript
const config = await client.swarm.getConfig('swarm-123');
console.log(`Max agents: ${config.maxAgents}`);
console.log(`Timeout: ${config.taskTimeout}ms`);
```

***

### getExecutionStatus()

```ts
getExecutionStatus(swarmId: string): Promise<SwarmStatusUpdate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1025

Get the execution status of a swarm.

Retrieves real-time information about swarm execution including
current tasks, agent activity, progress metrics, and any errors
or warnings encountered.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`SwarmStatusUpdate`\>

A promise that resolves to the SwarmStatusUpdate object with execution details

#### Example

```typescript
const status = await client.swarm.getExecutionStatus('swarm-123');
console.log(`Progress: ${status.progress}%`);
console.log(`Active tasks: ${status.activeTaskCount}`);
```

***

### getLayout()

```ts
getLayout(): Promise<SwarmLayout>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1348

Get the swarm layout.

Retrieves the current layout configuration for swarms in the system.
The layout defines how swarms, teams, and agents are organized and
displayed in user interfaces.

#### Returns

`Promise`\<`SwarmLayout`\>

A promise that resolves to the SwarmLayout object

#### Example

```typescript
const layout = await client.swarm.getLayout();
console.log(`Layout version: ${layout.version}`);
console.log(`Swarms: ${layout.swarms.length}`);
```

***

### getRole()

```ts
getRole(swarmId: string, roleId: string): Promise<SwarmRole>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:586

Get a role by ID within a swarm.

Retrieves detailed information about a specific role including its
permissions and assigned agents. Use this for displaying role details
or managing role assignments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role |

#### Returns

`Promise`\<`SwarmRole`\>

A promise that resolves to the SwarmRole object

#### Example

```typescript
const role = await client.swarm.getRole('swarm-123', 'role-456');
console.log(`Role: ${role.name} with ${role.permissions.length} permissions`);
```

***

### getRoleAgents()

```ts
getRoleAgents(swarmId: string, roleId: string): Promise<SwarmAgentInfo[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:627

Get agents assigned to a specific role.

Retrieves all agents that currently have the specified role assigned
to them. Use this to view role membership or manage role assignments.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role |

#### Returns

`Promise`\<`SwarmAgentInfo`[]\>

A promise that resolves to an array of SwarmAgentInfo objects with the role

#### Example

```typescript
const agents = await client.swarm.getRoleAgents('swarm-123', 'role-456');
console.log(`Found ${agents.length} agents with this role`);
```

***

### getRoleStatistics()

```ts
getRoleStatistics(swarmId: string): Promise<SwarmRoleStatistics[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:894

Get role statistics for a swarm.

Retrieves statistical information about all roles in a swarm,
including assignment counts, utilization rates, and activity metrics.
Use this for monitoring role distribution and workload balance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`SwarmRoleStatistics`[]\>

A promise that resolves to an array of SwarmRoleStatistics objects

#### Example

```typescript
const stats = await client.swarm.getRoleStatistics('swarm-123');
stats.forEach(s => {
  console.log(`${s.roleName}: ${s.assignmentCount} assignments`);
});
```

***

### getSpawnRegistry()

```ts
getSpawnRegistry(swarmId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1177

Get the spawn registry for a swarm.

Retrieves the spawn registry containing information about all
agents that have been spawned for the swarm, including their
configuration and lifecycle status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the spawn registry data

#### Example

```typescript
const registry = await client.swarm.getSpawnRegistry('swarm-123');
console.log(`Total spawned agents: ${registry.agents.length}`);
```

***

### getSwarm()

```ts
getSwarm(swarmId: string): Promise<SwarmData>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:131

Get a swarm by ID.

Retrieves detailed information about a specific swarm including
its configuration, teams, roles, and agents. Use this for displaying
swarm details or managing swarm state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`SwarmData`\>

A promise that resolves to the SwarmData object

#### Example

```typescript
const swarm = await client.swarm.getSwarm('swarm-123');
console.log(`Swarm: ${swarm.name} with ${swarm.teams.length} teams`);
```

***

### getSwarmStatus()

```ts
getSwarmStatus(swarmId: string): Promise<SwarmStatusUpdate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:848

Get the overall status of a swarm.

Retrieves comprehensive status information about a swarm including
its operational state, agent availability, team health, and overall
readiness to execute tasks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`SwarmStatusUpdate`\>

A promise that resolves to the SwarmStatusUpdate object

#### Example

```typescript
const status = await client.swarm.getSwarmStatus('swarm-123');
console.log(`Swarm status: ${status.state}`);
console.log(`Active agents: ${status.activeAgentCount}`);
```

***

### getTeam()

```ts
getTeam(swarmId: string, teamId: string): Promise<SwarmTeam>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:399

Get a team by ID within a swarm.

Retrieves detailed information about a specific team including its
members, roles, and configuration. Use this for displaying team
details or managing team state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team |

#### Returns

`Promise`\<`SwarmTeam`\>

A promise that resolves to the SwarmTeam object

#### Example

```typescript
const team = await client.swarm.getTeam('swarm-123', 'team-456');
console.log(`Team ${team.name} has ${team.members.length} members`);
```

***

### getTeamMembers()

```ts
getTeamMembers(swarmId: string, teamId: string): Promise<SwarmAgentInfo[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:439

Get the members of a team within a swarm.

Retrieves all agents that are currently members of the specified team.
Use this to view team composition or manage team membership.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team |

#### Returns

`Promise`\<`SwarmAgentInfo`[]\>

A promise that resolves to an array of SwarmAgentInfo objects representing team members

#### Example

```typescript
const members = await client.swarm.getTeamMembers('swarm-123', 'team-456');
members.forEach(m => console.log(`- ${m.name}`));
```

***

### getTeamStatistics()

```ts
getTeamStatistics(swarmId: string): Promise<SwarmTeamStatistics[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:870

Get team statistics for a swarm.

Retrieves statistical information about all teams in a swarm,
including member counts, activity levels, and performance metrics.
Use this for monitoring team health and utilization.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`SwarmTeamStatistics`[]\>

A promise that resolves to an array of SwarmTeamStatistics objects

#### Example

```typescript
const stats = await client.swarm.getTeamStatistics('swarm-123');
stats.forEach(s => {
  console.log(`${s.teamName}: ${s.memberCount} members, ${s.taskCount} tasks`);
});
```

***

### getTerminationRegistry()

```ts
getTerminationRegistry(swarmId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1324

Get the termination registry for a swarm.

Retrieves the termination registry containing information about
all agents that have been terminated from the swarm, including
their lifecycle history and termination reasons.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the termination registry data

#### Example

```typescript
const registry = await client.swarm.getTerminationRegistry('swarm-123');
console.log(`Total terminated agents: ${registry.agents.length}`);
```

***

### healthCheck()

```ts
healthCheck(): Promise<{
  status: string;
}>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:60

Health check for swarm service.

Returns service status, useful for monitoring and health dashboards.

#### Returns

`Promise`\<\{
  `status`: `string`;
\}\>

A promise that resolves to service status

#### Example

```typescript
const { status } = await client.swarm.healthCheck();
```

***

### joinTeam()

```ts
joinTeam(
   swarmId: string, 
   teamId: string, 
data?: JoinTeamRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:469

Join a team within a swarm.

Adds an agent to a team as a member. The agent will be associated
with the team and can participate in team-specific tasks and
activities.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team to join |
| `data?` | `JoinTeamRequest` | Optional join request information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the agent has joined the team

#### Example

```typescript
await client.swarm.joinTeam('swarm-123', 'team-456', {
  agentId: 'agent-789'
});
```

***

### leaveTeam()

```ts
leaveTeam(
   swarmId: string, 
   teamId: string, 
data?: LeaveTeamRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:500

Leave a team within a swarm.

Removes an agent from a team, ending their membership. The agent
will no longer participate in team activities but remains in the
swarm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `teamId` | `string` | The unique identifier of the team to leave |
| `data?` | `LeaveTeamRequest` | Optional leave request information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the agent has left the team

#### Example

```typescript
await client.swarm.leaveTeam('swarm-123', 'team-456', {
  agentId: 'agent-789'
});
```

***

### listAgents()

```ts
listAgents(swarmId: string, params?: Record<string, unknown>): Promise<SwarmAgentInfo[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:208

List agents in a swarm.

Retrieves all agents registered with a specific swarm, optionally
filtered by query parameters. Use this to view available agents
or populate agent selection interfaces.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering agents |

#### Returns

`Promise`\<`SwarmAgentInfo`[]\>

A promise that resolves to an array of SwarmAgentInfo objects

#### Example

```typescript
const agents = await client.swarm.listAgents('swarm-123', { status: 'available' });
agents.forEach(a => console.log(`${a.name}: ${a.status}`));
```

***

### listRoles()

```ts
listRoles(swarmId: string, params?: Record<string, unknown>): Promise<SwarmRole[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:560

List roles in a swarm.

Retrieves all roles defined in a swarm, optionally filtered by query
parameters. Use this to view available roles or populate role
selection interfaces.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering roles |

#### Returns

`Promise`\<`SwarmRole`[]\>

A promise that resolves to an array of SwarmRole objects

#### Example

```typescript
const roles = await client.swarm.listRoles('swarm-123');
roles.forEach(r => console.log(`${r.name}: ${r.permissions.join(', ')}`));
```

***

### listSpawnRequests()

```ts
listSpawnRequests(swarmId: string, params?: Record<string, unknown>): Promise<SpawnRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1085

List spawn requests for a swarm.

Retrieves all spawn requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
spawn request status and history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering requests |

#### Returns

`Promise`\<`SpawnRequest`[]\>

A promise that resolves to an array of SpawnRequest objects

#### Example

```typescript
const requests = await client.swarm.listSpawnRequests('swarm-123', {
  status: 'pending'
});
```

***

### listSwarms()

```ts
listSwarms(params?: Record<string, unknown>): Promise<SwarmSummary[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:111

List all swarms.

Retrieves all swarms in the system, optionally filtered by query
parameters. Use this to discover available swarms or populate
swarm selection interfaces.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering swarms |

#### Returns

`Promise`\<`SwarmSummary`[]\>

A promise that resolves to an array of SwarmSummary objects

#### Example

```typescript
const swarms = await client.swarm.listSwarms({ status: 'active' });
swarms.forEach(s => console.log(s.name, s.status));
```

***

### listTeams()

```ts
listTeams(swarmId: string, params?: Record<string, unknown>): Promise<SwarmTeam[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:373

List teams in a swarm.

Retrieves all teams within a swarm, optionally filtered by query
parameters. Use this to view team structure or populate team
selection interfaces.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering teams |

#### Returns

`Promise`\<`SwarmTeam`[]\>

A promise that resolves to an array of SwarmTeam objects

#### Example

```typescript
const teams = await client.swarm.listTeams('swarm-123');
teams.forEach(t => console.log(`${t.name}: ${t.members.length} members`));
```

***

### listTerminationRequests()

```ts
listTerminationRequests(swarmId: string, params?: Record<string, unknown>): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1233

List termination requests for a swarm.

Retrieves all termination requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
termination request status and history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering requests |

#### Returns

`Promise`\<`unknown`[]\>

A promise that resolves to an array of termination requests

#### Example

```typescript
const requests = await client.swarm.listTerminationRequests('swarm-123', {
  status: 'pending'
});
```

***

### listVacancies()

```ts
listVacancies(swarmId: string, params?: Record<string, unknown>): Promise<SwarmVacancy[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:755

List vacancies in a swarm.

Retrieves all open vacancies in a swarm, optionally filtered by query
parameters. Use this to find available positions for agents to apply.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering vacancies |

#### Returns

`Promise`\<`SwarmVacancy`[]\>

A promise that resolves to an array of SwarmVacancy objects

#### Example

```typescript
const vacancies = await client.swarm.listVacancies('swarm-123', {
  status: 'open'
});
```

***

### rejectSpawnRequest()

```ts
rejectSpawnRequest(
   swarmId: string, 
   requestId: string, 
data?: SpawnRequestActionBody): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1150

Reject a spawn request.

Rejects a pending spawn request, preventing the creation of new
agent instances. The request will be marked as rejected and
no agents will be spawned.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the spawn request |
| `data?` | `SpawnRequestActionBody` | Optional rejection information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is rejected

#### Example

```typescript
await client.swarm.rejectSpawnRequest('swarm-123', 'request-456', {
  rejector: 'admin',
  reason: 'Capacity limit reached'
});
```

***

### rejectTerminationRequest()

```ts
rejectTerminationRequest(
   swarmId: string, 
   requestId: string, 
data?: TerminationRequestActionBody): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1297

Reject a termination request.

Rejects a pending termination request, preventing the removal of
agent instances. The agents will continue operating in the swarm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `requestId` | `string` | The unique identifier of the termination request |
| `data?` | `TerminationRequestActionBody` | Optional rejection information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is rejected

#### Example

```typescript
await client.swarm.rejectTerminationRequest('swarm-123', 'request-456', {
  rejector: 'admin',
  reason: 'Agents still needed for active workload'
});
```

***

### removeAgent()

```ts
removeAgent(swarmId: string, agentId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:233

Remove an agent from a swarm.

Unregisters an agent from the swarm, removing it from all teams
and roles. The agent will no longer participate in swarm activities.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `agentId` | `string` | The unique identifier of the agent to remove |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the agent is removed

#### Example

```typescript
await client.swarm.removeAgent('swarm-123', 'agent-456');
console.log('Agent removed from swarm');
```

***

### saveLayout()

```ts
saveLayout(data: SaveLayoutRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1374

Save or update the swarm layout.

Persists a new layout configuration for swarms. The layout defines
how swarms, teams, and agents are organized and displayed. Use
this to save custom arrangements or update the structure.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SaveLayoutRequest` | The layout configuration to save |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the layout is saved

#### Example

```typescript
await client.swarm.saveLayout({
  version: '1.0.0',
  swarms: [
    { id: 'swarm-123', x: 100, y: 200, collapsed: false }
  ]
});
```

***

### startSwarm()

```ts
startSwarm(swarmId: string, data?: StartSwarmRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:976

Start a swarm.

Activates a swarm, enabling it to begin processing tasks and
coordinating agent activities. The swarm will start executing
its assigned workflow according to its configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data?` | `StartSwarmRequest` | Optional start parameters |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the swarm has started

#### Example

```typescript
await client.swarm.startSwarm('swarm-123', {
  taskIds: ['task-1', 'task-2'],
  priority: 'high'
});
```

***

### stopSwarm()

```ts
stopSwarm(swarmId: string, data?: Record<string, unknown>): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:1001

Stop a swarm.

Deactivates a swarm, halting all in-progress tasks and agent
activities. The swarm will gracefully shut down and return to
an idle state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data?` | `Record`\<`string`, `unknown`\> | Optional stop parameters |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the swarm has stopped

#### Example

```typescript
await client.swarm.stopSwarm('swarm-123', {
  reason: 'Maintenance window',
  force: false
});
```

***

### unassignRole()

```ts
unassignRole(
   swarmId: string, 
   roleId: string, 
data: UnassignRoleRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:687

Unassign a role from an agent in a swarm.

Removes a role from an agent, revoking the associated permissions
and responsibilities. The agent will no longer be able to perform
actions authorized by this role.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `roleId` | `string` | The unique identifier of the role to unassign |
| `data` | `UnassignRoleRequest` | The role unassignment information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the role is unassigned

#### Example

```typescript
await client.swarm.unassignRole('swarm-123', 'role-456', {
  agentId: 'agent-789'
});
```

***

### updateAgentStatus()

```ts
updateAgentStatus(
   swarmId: string, 
   agentId: string, 
data: AgentStatusUpdateRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:261

Update the status of an agent in a swarm.

Changes the operational status of an agent, such as marking it as
available, busy, offline, or in error. Status updates affect agent
assignment and task distribution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `agentId` | `string` | The unique identifier of the agent |
| `data` | `AgentStatusUpdateRequest` | The status update information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the status is updated

#### Example

```typescript
await client.swarm.updateAgentStatus('swarm-123', 'agent-456', {
  status: 'busy',
  message: 'Processing complex task'
});
```

***

### updateConfig()

```ts
updateConfig(swarmId: string, data: UpdateSwarmConfigRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/swarm.api.ts:946

Update the configuration of a swarm.

Modifies the configuration settings for a swarm. Changes take effect
immediately and affect all subsequent swarm operations. Use this
to adjust swarm behavior and operational parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `UpdateSwarmConfigRequest` | The configuration updates |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the configuration is updated

#### Example

```typescript
await client.swarm.updateConfig('swarm-123', {
  maxAgents: 20,
  taskTimeout: 300000,
  autoScaling: true
});
```
