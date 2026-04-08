---
title: CodemapListResponse
---

[**@codebolt/types**](../index)

***

# Interface: CodemapListResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:75

## Extends

- [`CodemapBaseResponse`](CodemapBaseResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | [`CodemapBaseResponse`](CodemapBaseResponse).[`code`](CodemapBaseResponse.md#code) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:66](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L66) |
| <a id="data"></a> `data?` | \{ `codemaps`: [`CodemapInfo`](CodemapInfo)[]; `count`: `number`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L76) |
| `data.codemaps` | [`CodemapInfo`](CodemapInfo)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L77) |
| `data.count` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:78](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L78) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`CodemapBaseResponse`](CodemapBaseResponse).[`error`](CodemapBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L68) |
| `error.code` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:69](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L69) |
| `error.details?` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:71](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L71) |
| `error.message` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:70](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L70) |
| <a id="message"></a> `message?` | `string` | [`CodemapBaseResponse`](CodemapBaseResponse).[`message`](CodemapBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:67](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L67) |
| <a id="success"></a> `success` | `boolean` | [`CodemapBaseResponse`](CodemapBaseResponse).[`success`](CodemapBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L65) |
