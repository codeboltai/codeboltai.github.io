---
title: CodemapListResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: CodemapListResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:56

## Extends

- `CodemapBaseResponse`

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | `CodemapBaseResponse.code` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:48 |
| <a id="data"></a> `data?` | \{ `codemaps`: [`CodemapInfo`](CodemapInfo)[]; `count`: `number`; \} | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:57 |
| `data.codemaps` | [`CodemapInfo`](CodemapInfo)[] | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:58 |
| `data.count` | `number` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:59 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | `CodemapBaseResponse.error` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:50 |
| `error.code` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:51 |
| `error.details?` | `any` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:53 |
| `error.message` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:52 |
| <a id="message"></a> `message?` | `string` | `CodemapBaseResponse.message` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:49 |
| <a id="success"></a> `success` | `boolean` | `CodemapBaseResponse.success` | common/types/dist/codeboltjstypes/libFunctionTypes/codemap.d.ts:47 |
