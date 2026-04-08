---
title: swarm
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: swarm

```ts
const swarm: {
  applyForVacancy: (swarmId: string, vacancyId: string, agentId: string, message?: string) => Promise<ApplyForVacancyResponse>;
  assignRole: (swarmId: string, roleId: string, agentId: string) => Promise<AssignRoleResponse>;
  closeVacancy: (swarmId: string, vacancyId: string, reason: string) => Promise<CloseVacancyResponse>;
  createRole: (swarmId: string, data: CreateRoleRequest) => Promise<CreateRoleResponse>;
  createSwarm: (data: CreateSwarmRequest) => Promise<CreateSwarmResponse>;
  createTeam: (swarmId: string, data: CreateTeamRequest) => Promise<CreateTeamResponse>;
  createVacancy: (swarmId: string, data: CreateVacancyRequest) => Promise<CreateVacancyResponse>;
  deleteRole: (swarmId: string, roleId: string) => Promise<DeleteRoleResponse>;
  deleteTeam: (swarmId: string, teamId: string) => Promise<DeleteTeamResponse>;
  getAgentsByRole: (swarmId: string, roleId: string) => Promise<GetAgentsByRoleResponse>;
  getDefaultJobGroup: (swarmId: string) => Promise<GetDefaultJobGroupResponse>;
  getRole: (swarmId: string, roleId: string) => Promise<GetRoleResponse>;
  getSwarm: (swarmId: string) => Promise<GetSwarmResponse>;
  getSwarmAgents: (swarmId: string) => Promise<GetSwarmAgentsResponse>;
  getSwarmStatusSummary: (swarmId: string) => Promise<GetStatusSummaryResponse>;
  getTeam: (swarmId: string, teamId: string) => Promise<GetTeamResponse>;
  joinTeam: (swarmId: string, teamId: string, agentId: string) => Promise<JoinTeamResponse>;
  leaveTeam: (swarmId: string, teamId: string, agentId: string) => Promise<LeaveTeamResponse>;
  listRoles: (swarmId: string) => Promise<ListRolesResponse>;
  listSwarms: () => Promise<ListSwarmsResponse>;
  listTeams: (swarmId: string) => Promise<ListTeamsResponse>;
  listVacancies: (swarmId: string) => Promise<ListVacanciesResponse>;
  registerAgent: (swarmId: string, data: AgentRegistration) => Promise<RegisterAgentResponse>;
  unassignRole: (swarmId: string, roleId: string, agentId: string) => Promise<UnassignRoleResponse>;
  unregisterAgent: (swarmId: string, agentId: string) => Promise<UnregisterAgentResponse>;
  updateAgentStatus: (swarmId: string, agentId: string, data: AgentStatusUpdate) => Promise<UpdateStatusResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/swarm.ts:85

Swarm Module
Provides functionality for managing swarms, agents, teams, roles, and vacancies

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="applyforvacancy"></a> `applyForVacancy()` | (`swarmId`: `string`, `vacancyId`: `string`, `agentId`: `string`, `message?`: `string`) => `Promise`\<[`ApplyForVacancyResponse`](../interfaces/ApplyForVacancyResponse)\> | Apply for a vacancy | [packages/codeboltjs/src/modules/swarm.ts:526](packages/codeboltjs/src/modules/swarm.ts#L526) |
| <a id="assignrole"></a> `assignRole()` | (`swarmId`: `string`, `roleId`: `string`, `agentId`: `string`) => `Promise`\<[`AssignRoleResponse`](../interfaces/AssignRoleResponse)\> | Assign a role to an agent | [packages/codeboltjs/src/modules/swarm.ts:399](packages/codeboltjs/src/modules/swarm.ts#L399) |
| <a id="closevacancy"></a> `closeVacancy()` | (`swarmId`: `string`, `vacancyId`: `string`, `reason`: `string`) => `Promise`\<[`CloseVacancyResponse`](../interfaces/CloseVacancyResponse)\> | Close a vacancy | [packages/codeboltjs/src/modules/swarm.ts:554](packages/codeboltjs/src/modules/swarm.ts#L554) |
| <a id="createrole"></a> `createRole()` | (`swarmId`: `string`, `data`: [`CreateRoleRequest`](../interfaces/CreateRoleRequest)) => `Promise`\<[`CreateRoleResponse`](../interfaces/CreateRoleResponse)\> | Create a new role in a swarm | [packages/codeboltjs/src/modules/swarm.ts:340](packages/codeboltjs/src/modules/swarm.ts#L340) |
| <a id="createswarm"></a> `createSwarm()` | (`data`: [`CreateSwarmRequest`](../interfaces/CreateSwarmRequest)) => `Promise`\<[`CreateSwarmResponse`](../interfaces/CreateSwarmResponse)\> | Create a new swarm | [packages/codeboltjs/src/modules/swarm.ts:95](packages/codeboltjs/src/modules/swarm.ts#L95) |
| <a id="createteam"></a> `createTeam()` | (`swarmId`: `string`, `data`: [`CreateTeamRequest`](../interfaces/CreateTeamRequest)) => `Promise`\<[`CreateTeamResponse`](../interfaces/CreateTeamResponse)\> | Create a new team in a swarm | [packages/codeboltjs/src/modules/swarm.ts:214](packages/codeboltjs/src/modules/swarm.ts#L214) |
| <a id="createvacancy"></a> `createVacancy()` | (`swarmId`: `string`, `data`: [`CreateVacancyRequest`](../interfaces/CreateVacancyRequest)) => `Promise`\<[`CreateVacancyResponse`](../interfaces/CreateVacancyResponse)\> | Create a new vacancy in a swarm | [packages/codeboltjs/src/modules/swarm.ts:486](packages/codeboltjs/src/modules/swarm.ts#L486) |
| <a id="deleterole"></a> `deleteRole()` | (`swarmId`: `string`, `roleId`: `string`) => `Promise`\<[`DeleteRoleResponse`](../interfaces/DeleteRoleResponse)\> | Delete a role from a swarm | [packages/codeboltjs/src/modules/swarm.ts:462](packages/codeboltjs/src/modules/swarm.ts#L462) |
| <a id="deleteteam"></a> `deleteTeam()` | (`swarmId`: `string`, `teamId`: `string`) => `Promise`\<[`DeleteTeamResponse`](../interfaces/DeleteTeamResponse)\> | Delete a team from a swarm | [packages/codeboltjs/src/modules/swarm.ts:316](packages/codeboltjs/src/modules/swarm.ts#L316) |
| <a id="getagentsbyrole"></a> `getAgentsByRole()` | (`swarmId`: `string`, `roleId`: `string`) => `Promise`\<[`GetAgentsByRoleResponse`](../interfaces/GetAgentsByRoleResponse)\> | Get all agents with a specific role | [packages/codeboltjs/src/modules/swarm.ts:442](packages/codeboltjs/src/modules/swarm.ts#L442) |
| <a id="getdefaultjobgroup"></a> `getDefaultJobGroup()` | (`swarmId`: `string`) => `Promise`\<`GetDefaultJobGroupResponse`\> | Get the default job group ID associated with a swarm | [packages/codeboltjs/src/modules/swarm.ts:626](packages/codeboltjs/src/modules/swarm.ts#L626) |
| <a id="getrole"></a> `getRole()` | (`swarmId`: `string`, `roleId`: `string`) => `Promise`\<[`GetRoleResponse`](../interfaces/GetRoleResponse)\> | Get details of a specific role | [packages/codeboltjs/src/modules/swarm.ts:378](packages/codeboltjs/src/modules/swarm.ts#L378) |
| <a id="getswarm"></a> `getSwarm()` | (`swarmId`: `string`) => `Promise`\<[`GetSwarmResponse`](../interfaces/GetSwarmResponse)\> | Get details of a specific swarm | [packages/codeboltjs/src/modules/swarm.ts:129](packages/codeboltjs/src/modules/swarm.ts#L129) |
| <a id="getswarmagents"></a> `getSwarmAgents()` | (`swarmId`: `string`) => `Promise`\<[`GetSwarmAgentsResponse`](../interfaces/GetSwarmAgentsResponse)\> | Get all agents in a swarm | [packages/codeboltjs/src/modules/swarm.ts:147](packages/codeboltjs/src/modules/swarm.ts#L147) |
| <a id="getswarmstatussummary"></a> `getSwarmStatusSummary()` | (`swarmId`: `string`) => `Promise`\<[`GetStatusSummaryResponse`](../interfaces/GetStatusSummaryResponse)\> | Get status summary for a swarm | [packages/codeboltjs/src/modules/swarm.ts:604](packages/codeboltjs/src/modules/swarm.ts#L604) |
| <a id="getteam"></a> `getTeam()` | (`swarmId`: `string`, `teamId`: `string`) => `Promise`\<[`GetTeamResponse`](../interfaces/GetTeamResponse)\> | Get details of a specific team | [packages/codeboltjs/src/modules/swarm.ts:252](packages/codeboltjs/src/modules/swarm.ts#L252) |
| <a id="jointeam"></a> `joinTeam()` | (`swarmId`: `string`, `teamId`: `string`, `agentId`: `string`) => `Promise`\<[`JoinTeamResponse`](../interfaces/JoinTeamResponse)\> | Add an agent to a team | [packages/codeboltjs/src/modules/swarm.ts:273](packages/codeboltjs/src/modules/swarm.ts#L273) |
| <a id="leaveteam"></a> `leaveTeam()` | (`swarmId`: `string`, `teamId`: `string`, `agentId`: `string`) => `Promise`\<[`LeaveTeamResponse`](../interfaces/LeaveTeamResponse)\> | Remove an agent from a team | [packages/codeboltjs/src/modules/swarm.ts:295](packages/codeboltjs/src/modules/swarm.ts#L295) |
| <a id="listroles"></a> `listRoles()` | (`swarmId`: `string`) => `Promise`\<[`ListRolesResponse`](../interfaces/ListRolesResponse)\> | List all roles in a swarm | [packages/codeboltjs/src/modules/swarm.ts:359](packages/codeboltjs/src/modules/swarm.ts#L359) |
| <a id="listswarms"></a> `listSwarms()` | () => `Promise`\<[`ListSwarmsResponse`](../interfaces/ListSwarmsResponse)\> | List all available swarms | [packages/codeboltjs/src/modules/swarm.ts:112](packages/codeboltjs/src/modules/swarm.ts#L112) |
| <a id="listteams"></a> `listTeams()` | (`swarmId`: `string`) => `Promise`\<[`ListTeamsResponse`](../interfaces/ListTeamsResponse)\> | List all teams in a swarm | [packages/codeboltjs/src/modules/swarm.ts:233](packages/codeboltjs/src/modules/swarm.ts#L233) |
| <a id="listvacancies"></a> `listVacancies()` | (`swarmId`: `string`) => `Promise`\<[`ListVacanciesResponse`](../interfaces/ListVacanciesResponse)\> | List all vacancies in a swarm | [packages/codeboltjs/src/modules/swarm.ts:505](packages/codeboltjs/src/modules/swarm.ts#L505) |
| <a id="registeragent"></a> `registerAgent()` | (`swarmId`: `string`, `data`: [`AgentRegistration`](../interfaces/AgentRegistration)) => `Promise`\<[`RegisterAgentResponse`](../interfaces/RegisterAgentResponse)\> | Register an agent to a swarm | [packages/codeboltjs/src/modules/swarm.ts:170](packages/codeboltjs/src/modules/swarm.ts#L170) |
| <a id="unassignrole"></a> `unassignRole()` | (`swarmId`: `string`, `roleId`: `string`, `agentId`: `string`) => `Promise`\<[`UnassignRoleResponse`](../interfaces/UnassignRoleResponse)\> | Unassign a role from an agent | [packages/codeboltjs/src/modules/swarm.ts:421](packages/codeboltjs/src/modules/swarm.ts#L421) |
| <a id="unregisteragent"></a> `unregisterAgent()` | (`swarmId`: `string`, `agentId`: `string`) => `Promise`\<[`UnregisterAgentResponse`](../interfaces/UnregisterAgentResponse)\> | Unregister an agent from a swarm | [packages/codeboltjs/src/modules/swarm.ts:190](packages/codeboltjs/src/modules/swarm.ts#L190) |
| <a id="updateagentstatus"></a> `updateAgentStatus()` | (`swarmId`: `string`, `agentId`: `string`, `data`: [`AgentStatusUpdate`](../interfaces/AgentStatusUpdate)) => `Promise`\<[`UpdateStatusResponse`](../interfaces/UpdateStatusResponse)\> | Update an agent's status | [packages/codeboltjs/src/modules/swarm.ts:580](packages/codeboltjs/src/modules/swarm.ts#L580) |
