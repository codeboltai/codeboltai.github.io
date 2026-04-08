---
title: GetEnabledToolBoxesResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetEnabledToolBoxesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:64

MCP (Model Context Protocol) SDK Function Types
Types for the cbmcp module functions

## Extends

- [`BaseMCPSDKResponse`](BaseMCPSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `enabled`: `boolean`; `name`: `string`; `tools?`: \{ `description?`: `string`; `name`: `string`; `parameters?`: `Record`\<`string`, `unknown`\>; \}[]; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L65) |
| <a id="error"></a> `error?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`error`](BaseMCPSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`message`](BaseMCPSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L9) |
| <a id="success"></a> `success?` | `boolean` | [`BaseMCPSDKResponse`](BaseMCPSDKResponse).[`success`](BaseMCPSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts#L8) |
