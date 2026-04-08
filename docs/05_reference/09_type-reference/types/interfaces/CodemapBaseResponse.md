---
title: CodemapBaseResponse
---

[**@codebolt/types**](../index)

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
| <a id="code"></a> `code?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:66](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L66) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L68) |
| `error.code` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:69](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L69) |
| `error.details?` | `any` | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:71](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L71) |
| `error.message` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:70](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L70) |
| <a id="message"></a> `message?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:67](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L67) |
| <a id="success"></a> `success` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/codemap.ts#L65) |
