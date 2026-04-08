---
title: ExecuteToolResponse
---

[**@codebolt/types**](../index)

***

# Interface: ExecuteToolResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:151

MCP (Model Context Protocol) SDK Function Types
Types for the cbmcp module functions

## Extends

- [`BaseMCPSDKResponse`](BaseMCPSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \| [`ToolExecutionTuple`](../type-aliases/ToolExecutionTuple)\<`unknown`, `string`\> \| \{ `error?`: `string`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:155](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L155) |
| <a id="error"></a> `error?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`error`](BaseMCPSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`message`](BaseMCPSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L9) |
| <a id="params"></a> `params?` | [`ToolParameters`](ToolParameters) | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:154](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L154) |
| <a id="result"></a> `result?` | `unknown` | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:156](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L156) |
| <a id="servername"></a> `serverName?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:153](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L153) |
| <a id="status"></a> `status?` | `"success"` \| `"error"` \| `"rejected"` \| `"pending"` \| `"executing"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:157](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L157) |
| <a id="success"></a> `success?` | `boolean` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`success`](BaseMCPSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L8) |
| <a id="toolname"></a> `toolName?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:152](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L152) |
