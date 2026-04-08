---
title: ListToolsFromToolBoxesResponse
---

[**@codebolt/types**](../index)

***

# Interface: ListToolsFromToolBoxesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:112

MCP (Model Context Protocol) SDK Function Types
Types for the cbmcp module functions

## Extends

- [`BaseMCPSDKResponse`](BaseMCPSDKResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `tools`: \{ `function`: \{ `description`: `string`; `name`: `string`; `parameters`: `Record`\<`string`, `unknown`\>; \}; `type`: `"function"`; \}[]; \} | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:113](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L113) |
| `data.tools` | \{ `function`: \{ `description`: `string`; `name`: `string`; `parameters`: `Record`\<`string`, `unknown`\>; \}; `type`: `"function"`; \}[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:114](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L114) |
| <a id="error"></a> `error?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`error`](BaseMCPSDKResponse.md#error) | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:123](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L123) |
| <a id="message"></a> `message?` | `string` | - | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`message`](BaseMCPSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L9) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`success`](BaseMCPSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L8) |
