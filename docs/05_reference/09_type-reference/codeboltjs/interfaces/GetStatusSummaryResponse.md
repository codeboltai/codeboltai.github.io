---
title: GetStatusSummaryResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: GetStatusSummaryResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:355

Response for getSwarmStatusSummary

## Extends

- [`SwarmResponse`](SwarmResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `agents`: [`SwarmAgent`](SwarmAgent)[]; `statusSummary`: [`StatusSummary`](StatusSummary); \} | - | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:356 |
| `data.agents` | [`SwarmAgent`](SwarmAgent)[] | - | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:358 |
| `data.statusSummary` | [`StatusSummary`](StatusSummary) | - | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:357 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`SwarmResponse`](SwarmResponse).[`error`](SwarmResponse.md#error) | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:151 |
| `error.code` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:152 |
| `error.details?` | `any` | - | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:154 |
| `error.message` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:153 |
| <a id="requestid"></a> `requestId?` | `string` | [`SwarmResponse`](SwarmResponse).[`requestId`](SwarmResponse.md#requestid) | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:150 |
| <a id="success"></a> `success` | `boolean` | [`SwarmResponse`](SwarmResponse).[`success`](SwarmResponse.md#success) | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:149 |
