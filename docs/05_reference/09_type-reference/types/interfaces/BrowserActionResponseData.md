---
title: BrowserActionResponseData
---

[**@codebolt/types**](../index.md)

***

# Interface: BrowserActionResponseData

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:97

Browser SDK Function Types
Types for the cbbrowser module functions

## Extends

- [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:98 |
| <a id="content"></a> `content?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:99 |
| <a id="elements"></a> `elements?` | \{ `attributes`: `Record`\<`string`, `string`\>; `id`: `string`; `tag`: `string`; `text`: `string`; \}[] | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:109 |
| <a id="error"></a> `error?` | `string` | [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse).[`error`](BaseBrowserSDKResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:10 |
| <a id="fullpage"></a> `fullPage?` | `boolean` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:116 |
| <a id="html"></a> `html?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:100 |
| <a id="info"></a> `info?` | [`BrowserViewportInfo`](BrowserViewportInfo) | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:105 |
| <a id="markdown"></a> `markdown?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:101 |
| <a id="message"></a> `message?` | `string` | [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse).[`message`](BaseBrowserSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:9 |
| <a id="options"></a> `options?` | `Record`\<`string`, `unknown`\> | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:117 |
| <a id="pdf"></a> `pdf?` | `string` \| `Uint8Array`\<`ArrayBuffer`\> | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:108 |
| <a id="screenshot"></a> `screenshot?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:107 |
| <a id="selector"></a> `selector?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:115 |
| <a id="success"></a> `success?` | `boolean` | [`BaseBrowserSDKResponse`](BaseBrowserSDKResponse).[`success`](BaseBrowserSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:8 |
| <a id="text"></a> `text?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:102 |
| <a id="tree"></a> `tree?` | \{ `documents`: \{ `nodes`: \{ `attributes`: \{ `name`: `string`; `value`: `string`; \}[]; `backendNodeId`: `number`[]; `inputChecked`: \{ `index`: `number`[]; \}; `inputValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; `isClickable`: \{ `index`: `number`[]; \}; `nodeName`: `string`[]; `nodeType`: `number`[]; `nodeValue`: `string`[]; `parentIndex`: `number`[]; `textValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; \}; \}[]; `strings`: `string`[]; \} | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:106 |
| `tree.documents` | \{ `nodes`: \{ `attributes`: \{ `name`: `string`; `value`: `string`; \}[]; `backendNodeId`: `number`[]; `inputChecked`: \{ `index`: `number`[]; \}; `inputValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; `isClickable`: \{ `index`: `number`[]; \}; `nodeName`: `string`[]; `nodeType`: `number`[]; `nodeValue`: `string`[]; `parentIndex`: `number`[]; `textValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; \}; \}[] | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:32 |
| `tree.strings` | `string`[] | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:31 |
| <a id="url"></a> `url?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:103 |
| <a id="viewport"></a> `viewport?` | [`BrowserViewportInfo`](BrowserViewportInfo) | - | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:104 |
