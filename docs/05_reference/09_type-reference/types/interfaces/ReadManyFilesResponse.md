---
title: ReadManyFilesResponse
---

[**@codebolt/types**](../index)

***

# Interface: ReadManyFilesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:143

File System SDK Function Types
Types for the cbfs module functions

## Extends

- [`BaseFsSDKResponse`](BaseFsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `any` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`error`](BaseFsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`message`](BaseFsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L9) |
| <a id="results"></a> `results?` | \{ `content?`: `string`; `error?`: `any`; `path`: `string`; `stats?`: `any`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:144](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L144) |
| <a id="success"></a> `success` | `boolean` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`success`](BaseFsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L8) |
| <a id="summary"></a> `summary?` | \{ `failed`: `number`; `successful`: `number`; `total`: `number`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:150](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L150) |
| `summary.failed` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:153](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L153) |
| `summary.successful` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:152](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L152) |
| `summary.total` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:151](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L151) |
