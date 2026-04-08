---
title: ConfigureMCPToolResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: ConfigureMCPToolResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:201

MCP (Model Context Protocol) SDK Function Types
Types for the cbmcp module functions

## Extends

- [`BaseMCPSDKResponse`](BaseMCPSDKResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `configuration?`: [`MCPConfiguration`](MCPConfiguration); `message?`: `string`; `success`: `boolean`; \} | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:202 |
| `data.configuration?` | [`MCPConfiguration`](MCPConfiguration) | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:205 |
| `data.message?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:204 |
| `data.success` | `boolean` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:203 |
| <a id="error"></a> `error?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`error`](BaseMCPSDKResponse.md#error) | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:207 |
| <a id="message"></a> `message?` | `string` | - | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`message`](BaseMCPSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:9 |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`success`](BaseMCPSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:8 |
