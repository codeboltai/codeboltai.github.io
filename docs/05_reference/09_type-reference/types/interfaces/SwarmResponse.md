---
title: SwarmResponse
---

[**@codebolt/types**](../index)

***

# Interface: SwarmResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:173

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
- [`GetDefaultJobGroupResponse`](GetDefaultJobGroupResponse)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:176](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L176) |
| `error.code` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:177](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L177) |
| `error.details?` | `any` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:179](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L179) |
| `error.message` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:178](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L178) |
| <a id="requestid"></a> `requestId?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:175](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L175) |
| <a id="success"></a> `success` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:174](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L174) |
