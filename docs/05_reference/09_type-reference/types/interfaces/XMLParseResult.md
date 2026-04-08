---
title: XMLParseResult
---

[**@codebolt/types**](../index)

***

# Interface: XMLParseResult

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:18

Output Parsers SDK Function Types
Types for the cboutputparsers module functions

## Extends

- [`BaseOutputParserResponse`](BaseOutputParserResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `Error` | [`BaseOutputParserResponse`](BaseOutputParserResponse).[`error`](BaseOutputParserResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts#L9) |
| <a id="parsed"></a> `parsed?` | \{ \[`key`: `string`\]: `unknown`; `rootElement`: `string`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:19](common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts#L19) |
| `parsed.rootElement` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:20](common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts#L20) |
| <a id="success"></a> `success` | `boolean` | [`BaseOutputParserResponse`](BaseOutputParserResponse).[`success`](BaseOutputParserResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts#L8) |
