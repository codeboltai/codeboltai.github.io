---
title: BrowserSnapshot
---

[**@codebolt/types**](../index.md)

***

# Interface: BrowserSnapshot

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:29

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="tree"></a> `tree` | \{ `documents`: \{ `nodes`: \{ `attributes`: \{ `name`: `string`; `value`: `string`; \}[]; `backendNodeId`: `number`[]; `inputChecked`: \{ `index`: `number`[]; \}; `inputValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; `isClickable`: \{ `index`: `number`[]; \}; `nodeName`: `string`[]; `nodeType`: `number`[]; `nodeValue`: `string`[]; `parentIndex`: `number`[]; `textValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; \}; \}[]; `strings`: `string`[]; \} | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:30 |
| `tree.documents` | \{ `nodes`: \{ `attributes`: \{ `name`: `string`; `value`: `string`; \}[]; `backendNodeId`: `number`[]; `inputChecked`: \{ `index`: `number`[]; \}; `inputValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; `isClickable`: \{ `index`: `number`[]; \}; `nodeName`: `string`[]; `nodeType`: `number`[]; `nodeValue`: `string`[]; `parentIndex`: `number`[]; `textValue`: \{ `index`: `number`[]; `value`: `string`[]; \}; \}; \}[] | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:32 |
| `tree.strings` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/browser.ts:31 |
