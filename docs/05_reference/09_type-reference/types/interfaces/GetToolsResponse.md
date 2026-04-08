---
title: GetToolsResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetToolsResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:136

MCP (Model Context Protocol) SDK Function Types
Types for the cbmcp module functions

## Extends

- [`BaseMCPSDKResponse`](BaseMCPSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `description?`: `string`; `parameters?`: `Record`\<`string`, `unknown`\>; `toolbox`: `string`; `toolName`: `string`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:143](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L143) |
| <a id="error"></a> `error?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`error`](BaseMCPSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`message`](BaseMCPSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L9) |
| <a id="servername"></a> `serverName?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:142](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L142) |
| <a id="success"></a> `success?` | `boolean` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`success`](BaseMCPSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L8) |
| <a id="tools"></a> `tools?` | \{ `description`: `string`; `name`: `string`; `parameters`: `Record`\<`string`, `unknown`\>; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:137](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L137) |
