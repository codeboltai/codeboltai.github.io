---
title: CodemapSaveResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: CodemapSaveResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:72

## Extends

- `CodemapBaseResponse`

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | `CodemapBaseResponse.code` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:48 |
| <a id="data"></a> `data?` | \{ `codemap`: [`CodemapInfo`](CodemapInfo); \} | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:73 |
| `data.codemap` | [`CodemapInfo`](CodemapInfo) | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:74 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | `CodemapBaseResponse.error` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:50 |
| `error.code` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:51 |
| `error.details?` | `any` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:53 |
| `error.message` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:52 |
| <a id="message"></a> `message?` | `string` | `CodemapBaseResponse.message` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:49 |
| <a id="success"></a> `success` | `boolean` | `CodemapBaseResponse.success` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:47 |
