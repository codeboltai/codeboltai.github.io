---
title: SwarmResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: SwarmResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:148

Base response structure for all swarm operations

## Extended by

- [`CreateSwarmResponse`](CreateSwarmResponse)
- [`ListSwarmsResponse`](ListSwarmsResponse)
- [`GetSwarmResponse`](GetSwarmResponse)
- [`GetSwarmAgentsResponse`](GetSwarmAgentsResponse)
- [`RegisterAgentResponse`](RegisterAgentResponse)
- [`UnregisterAgentResponse`](UnregisterAgentResponse)
- [`CreateTeamResponse`](CreateTeamResponse)
- [`ListTeamsResponse`](ListTeamsResponse)
- [`GetTeamResponse`](GetTeamResponse)
- [`JoinTeamResponse`](JoinTeamResponse)
- [`LeaveTeamResponse`](LeaveTeamResponse)
- [`DeleteTeamResponse`](DeleteTeamResponse)
- [`CreateRoleResponse`](CreateRoleResponse)
- [`ListRolesResponse`](ListRolesResponse)
- [`GetRoleResponse`](GetRoleResponse)
- [`AssignRoleResponse`](AssignRoleResponse)
- [`UnassignRoleResponse`](UnassignRoleResponse)
- [`GetAgentsByRoleResponse`](GetAgentsByRoleResponse)
- [`DeleteRoleResponse`](DeleteRoleResponse)
- [`CreateVacancyResponse`](CreateVacancyResponse)
- [`ListVacanciesResponse`](ListVacanciesResponse)
- [`ApplyForVacancyResponse`](ApplyForVacancyResponse)
- [`CloseVacancyResponse`](CloseVacancyResponse)
- [`UpdateStatusResponse`](UpdateStatusResponse)
- [`GetStatusSummaryResponse`](GetStatusSummaryResponse)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:151 |
| `error.code` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:152 |
| `error.details?` | `any` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:154 |
| `error.message` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:153 |
| <a id="requestid"></a> `requestId?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:150 |
| <a id="success"></a> `success` | `boolean` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:149 |
