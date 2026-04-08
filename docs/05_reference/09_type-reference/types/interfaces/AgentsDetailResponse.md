---
title: AgentsDetailResponse
---

[**@codebolt/types**](../index)

***

# Interface: AgentsDetailResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:24

## Extends

- [`BaseAgentSDKResponse`](BaseAgentSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseAgentSDKResponse`](BaseAgentSDKResponse).[`error`](BaseAgentSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L12) |
| <a id="message"></a> `message?` | `string` | [`BaseAgentSDKResponse`](BaseAgentSDKResponse).[`message`](BaseAgentSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L11) |
| <a id="payload"></a> `payload?` | \{ `agents`: [`AgentDetail`](AgentDetail)[]; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:25](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L25) |
| `payload.agents` | [`AgentDetail`](AgentDetail)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:26](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L26) |
| <a id="success"></a> `success?` | `boolean` | [`BaseAgentSDKResponse`](BaseAgentSDKResponse).[`success`](BaseAgentSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L10) |
