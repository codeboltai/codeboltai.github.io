---
title: UnassignRoleResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: UnassignRoleResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:298

Response for unassignRole

## Extends

- [`SwarmResponse`](SwarmResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `message`: `string`; \} | - | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:299 |
| `data.message` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:299 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`SwarmResponse`](SwarmResponse).[`error`](SwarmResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:176 |
| `error.code` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:177 |
| `error.details?` | `any` | - | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:179 |
| `error.message` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:178 |
| <a id="requestid"></a> `requestId?` | `string` | [`SwarmResponse`](SwarmResponse).[`requestId`](SwarmResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:175 |
| <a id="success"></a> `success` | `boolean` | [`SwarmResponse`](SwarmResponse).[`success`](SwarmResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:174 |
