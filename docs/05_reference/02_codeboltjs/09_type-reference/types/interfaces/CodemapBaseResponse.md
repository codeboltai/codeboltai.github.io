---
title: CodemapBaseResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: CodemapBaseResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:64

## Extended by

- [`CodemapListResponse`](CodemapListResponse)
- [`CodemapGetResponse`](CodemapGetResponse)
- [`CodemapCreateResponse`](CodemapCreateResponse)
- [`CodemapSaveResponse`](CodemapSaveResponse)
- [`CodemapUpdateResponse`](CodemapUpdateResponse)
- [`CodemapDeleteResponse`](CodemapDeleteResponse)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:66 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:68 |
| `error.code` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:69 |
| `error.details?` | `any` | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:71 |
| `error.message` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:70 |
| <a id="message"></a> `message?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:67 |
| <a id="success"></a> `success` | `boolean` | common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:65 |
