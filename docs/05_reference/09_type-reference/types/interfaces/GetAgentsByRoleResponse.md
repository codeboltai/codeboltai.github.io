---
title: GetAgentsByRoleResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetAgentsByRoleResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:305

Response for getAgentsByRole

## Extends

- [`SwarmResponse`](SwarmResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `agents`: [`SwarmAgent`](SwarmAgent)[]; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:306](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L306) |
| `data.agents` | [`SwarmAgent`](SwarmAgent)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:306](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L306) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`SwarmResponse`](SwarmResponse).[`error`](SwarmResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:176](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L176) |
| `error.code` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:177](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L177) |
| `error.details?` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:179](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L179) |
| `error.message` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:178](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L178) |
| <a id="requestid"></a> `requestId?` | `string` | [`SwarmResponse`](SwarmResponse).[`requestId`](SwarmResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:175](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L175) |
| <a id="success"></a> `success` | `boolean` | [`SwarmResponse`](SwarmResponse).[`success`](SwarmResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:174](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L174) |
