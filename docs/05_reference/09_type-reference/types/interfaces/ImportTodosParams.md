---
title: ImportTodosParams
---

[**@codebolt/types**](../index.md)

***

# Interface: ImportTodosParams

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:206

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data"></a> `data` | `string` | Import data (JSON or markdown format) | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:208 |
| <a id="format"></a> `format?` | `"markdown"` \| `"json"` | Import format | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:210 |
| <a id="listid"></a> `listId?` | `string` | Target list ID | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:214 |
| <a id="mergestrategy"></a> `mergeStrategy?` | `"replace"` \| `"merge"` | Merge strategy: 'replace' replaces all todos, 'merge' combines with existing | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:212 |
