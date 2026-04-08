---
title: AddKarmaResponse
---

[**@codebolt/types**](../index)

***

# Interface: AddKarmaResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:165

Agent Portfolio SDK Function Types
Types for the agent portfolio module functions

## Extends

- [`BaseAgentPortfolioSDKResponse`](BaseAgentPortfolioSDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `karmaId?`: `string`; `newTotal?`: `number`; `transaction?`: [`KarmaEntry`](KarmaEntry); \} | Karma result - returned in 'data' property from cliLib | - | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:167](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L167) |
| `data.karmaId?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:168](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L168) |
| `data.newTotal?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:169](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L169) |
| `data.transaction?` | [`KarmaEntry`](KarmaEntry) | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:170](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L170) |
| <a id="error"></a> `error?` | `string` | - | [`BaseAgentPortfolioSDKResponse`](BaseAgentPortfolioSDKResponse).[`error`](BaseAgentPortfolioSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L10) |
| <a id="message"></a> `message?` | `string` | - | [`BaseAgentPortfolioSDKResponse`](BaseAgentPortfolioSDKResponse).[`message`](BaseAgentPortfolioSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L9) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseAgentPortfolioSDKResponse`](BaseAgentPortfolioSDKResponse).[`requestId`](BaseAgentPortfolioSDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L12) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseAgentPortfolioSDKResponse`](BaseAgentPortfolioSDKResponse).[`success`](BaseAgentPortfolioSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L8) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseAgentPortfolioSDKResponse`](BaseAgentPortfolioSDKResponse).[`timestamp`](BaseAgentPortfolioSDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts:14](common/types/src/codeboltjstypes/libFunctionTypes/agentPortfolio.ts#L14) |
