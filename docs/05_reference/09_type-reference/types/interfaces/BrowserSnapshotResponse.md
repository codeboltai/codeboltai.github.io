---
title: BrowserSnapshotResponse
---

[**@codebolt/types**](../index)

***

# Interface: BrowserSnapshotResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:92

Browser SDK Function Types
Types for the cbbrowser module functions

## Extends

- [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse).[`error`](BaseBrowserSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/browser.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse).[`message`](BaseBrowserSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/browser.ts#L9) |
| <a id="success"></a> `success?` | `boolean` | [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse).[`success`](BaseBrowserSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/browser.ts#L8) |
| <a id="tree"></a> `tree?` | \{ `documents`: \{ `nodes`: \{ `attributes`: \{ `name`: `string`; `value`: `string`; \}[]; `backendNodeId`: `number`[]; `inputChecked`: \{ `index`: `number`[]; \}; `inputValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; `isClickable`: \{ `index`: `number`[]; \}; `nodeName`: `string`[]; `nodeType`: `number`[]; `nodeValue`: `string`[]; `parentIndex`: `number`[]; `textValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; \}; \}[]; `strings`: `string`[]; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/browser.ts#L93) |
| `tree.documents` | \{ `nodes`: \{ `attributes`: \{ `name`: `string`; `value`: `string`; \}[]; `backendNodeId`: `number`[]; `inputChecked`: \{ `index`: `number`[]; \}; `inputValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; `isClickable`: \{ `index`: `number`[]; \}; `nodeName`: `string`[]; `nodeType`: `number`[]; `nodeValue`: `string`[]; `parentIndex`: `number`[]; `textValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; \}; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:32](common/types/src/codeboltjstypes/libFunctionTypes/browser.ts#L32) |
| `tree.strings` | `string`[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:31](common/types/src/codeboltjstypes/libFunctionTypes/browser.ts#L31) |
