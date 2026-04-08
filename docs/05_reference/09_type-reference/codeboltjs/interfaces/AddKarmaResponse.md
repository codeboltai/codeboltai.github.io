---
title: AddKarmaResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: AddKarmaResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:146

## Extends

- `BaseAgentPortfolioSDKResponse`

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `karmaId?`: `string`; `newTotal?`: `number`; `transaction?`: [`KarmaEntry`](KarmaEntry); \} | Karma result - returned in 'data' property from cliLib | - | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:148 |
| `data.karmaId?` | `string` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:149 |
| `data.newTotal?` | `number` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:150 |
| `data.transaction?` | [`KarmaEntry`](KarmaEntry) | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:151 |
| <a id="error"></a> `error?` | `string` | - | `BaseAgentPortfolioSDKResponse.error` | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:8 |
| <a id="message"></a> `message?` | `string` | - | `BaseAgentPortfolioSDKResponse.message` | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:7 |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | `BaseAgentPortfolioSDKResponse.requestId` | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:10 |
| <a id="success"></a> `success?` | `boolean` | - | `BaseAgentPortfolioSDKResponse.success` | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:6 |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | `BaseAgentPortfolioSDKResponse.timestamp` | common/types/dist/codeboltjstypes/libFunctionTypes/agentPortfolio.d.ts:12 |
