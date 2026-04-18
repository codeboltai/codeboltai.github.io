---
title: CodemapUpdateResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: CodemapUpdateResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:100

## Extends

- [`CodemapBaseResponse`](CodemapBaseResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | [`CodemapBaseResponse`](CodemapBaseResponse).[`code`](CodemapBaseResponse.md#code) | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:66 |
| <a id="data"></a> `data?` | \{ `codemap`: [`CodemapInfo`](CodemapInfo); \} | - | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:101 |
| `data.codemap` | [`CodemapInfo`](CodemapInfo) | - | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:102 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [`CodemapBaseResponse`](CodemapBaseResponse).[`error`](CodemapBaseResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:68 |
| `error.code` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:69 |
| `error.details?` | `any` | - | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:71 |
| `error.message` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:70 |
| <a id="message"></a> `message?` | `string` | [`CodemapBaseResponse`](CodemapBaseResponse).[`message`](CodemapBaseResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:67 |
| <a id="success"></a> `success` | `boolean` | [`CodemapBaseResponse`](CodemapBaseResponse).[`success`](CodemapBaseResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:65 |
