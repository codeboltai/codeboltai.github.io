---
title: GetEditorFileStatusResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetEditorFileStatusResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/project.ts:31

Response for getting editor file status

## Extends

- [`BaseProjectSDKResponse`](BaseProjectSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseProjectSDKResponse`](BaseProjectSDKResponse).[`error`](BaseProjectSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L10) |
| <a id="filestatus"></a> `fileStatus?` | \{ `isActive?`: `boolean`; `isDirty?`: `boolean`; `isOpen?`: `boolean`; `languageId?`: `string`; `path?`: `string`; `viewColumn?`: `number`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:32](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L32) |
| `fileStatus.isActive?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:36](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L36) |
| `fileStatus.isDirty?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:35](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L35) |
| `fileStatus.isOpen?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:34](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L34) |
| `fileStatus.languageId?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:38](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L38) |
| `fileStatus.path?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:33](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L33) |
| `fileStatus.viewColumn?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:37](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L37) |
| <a id="message"></a> `message?` | `string` | [`BaseProjectSDKResponse`](BaseProjectSDKResponse).[`message`](BaseProjectSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L9) |
| <a id="status"></a> `status?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:40](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L40) |
| <a id="success"></a> `success?` | `boolean` | [`BaseProjectSDKResponse`](BaseProjectSDKResponse).[`success`](BaseProjectSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/project.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/project.ts#L8) |
