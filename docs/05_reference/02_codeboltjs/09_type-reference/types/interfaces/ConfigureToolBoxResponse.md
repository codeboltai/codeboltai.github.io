---
title: ConfigureToolBoxResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: ConfigureToolBoxResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:126

MCP (Model Context Protocol) SDK Function Types
Types for the cbmcp module functions

## Extends

- [`BaseMCPSDKResponse`](BaseMCPSDKResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="configuration"></a> `configuration?` | [`MCPConfiguration`](MCPConfiguration) | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:127 |
| <a id="data"></a> `data?` | \{ `message?`: `string`; `success`: `boolean`; \} | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:128 |
| `data.message?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:130 |
| `data.success` | `boolean` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:129 |
| <a id="error"></a> `error?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`error`](BaseMCPSDKResponse.md#error) | - | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:132 |
| <a id="message"></a> `message?` | `string` | - | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`message`](BaseMCPSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:9 |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`success`](BaseMCPSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:8 |
