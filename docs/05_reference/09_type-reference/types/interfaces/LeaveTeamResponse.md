---
title: LeaveTeamResponse
---

[**@codebolt/types**](../index)

***

# Interface: LeaveTeamResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:256

Response for leaveTeam

## Extends

- [`SwarmResponse`](SwarmResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `message`: `string`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:257](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L257) |
| `data.message` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:257](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L257) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`SwarmResponse`](SwarmResponse).[`error`](SwarmResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:176](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L176) |
| `error.code` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:177](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L177) |
| `error.details?` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:179](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L179) |
| `error.message` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:178](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L178) |
| <a id="requestid"></a> `requestId?` | `string` | [`SwarmResponse`](SwarmResponse).[`requestId`](SwarmResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:175](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L175) |
| <a id="success"></a> `success` | `boolean` | [`SwarmResponse`](SwarmResponse).[`success`](SwarmResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:174](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L174) |
