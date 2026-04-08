---
title: CodemapSaveResponse
---

[**@codebolt/types**](../index)

***

# Interface: CodemapSaveResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:94

## Extends

- [`CodemapBaseResponse`](CodemapBaseResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | [`CodemapBaseResponse`](CodemapBaseResponse).[`code`](CodemapBaseResponse.md#code) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:66](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L66) |
| <a id="data"></a> `data?` | \{ `codemap`: [`CodemapInfo`](CodemapInfo); \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:95](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L95) |
| `data.codemap` | [`CodemapInfo`](CodemapInfo) | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:96](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L96) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`CodemapBaseResponse`](CodemapBaseResponse).[`error`](CodemapBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L68) |
| `error.code` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:69](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L69) |
| `error.details?` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:71](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L71) |
| `error.message` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:70](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L70) |
| <a id="message"></a> `message?` | `string` | [`CodemapBaseResponse`](CodemapBaseResponse).[`message`](CodemapBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:67](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L67) |
| <a id="success"></a> `success` | `boolean` | [`CodemapBaseResponse`](CodemapBaseResponse).[`success`](CodemapBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L65) |
