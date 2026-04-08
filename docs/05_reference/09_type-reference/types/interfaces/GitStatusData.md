---
title: GitStatusData
---

[**@codebolt/types**](../index.md)

***

# Interface: GitStatusData

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:43

Git status result data structure

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ahead"></a> `ahead` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:52 |
| <a id="behind"></a> `behind` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:53 |
| <a id="conflicted"></a> `conflicted` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:45 |
| <a id="created"></a> `created` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:46 |
| <a id="current"></a> `current` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:54 |
| <a id="deleted"></a> `deleted` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:47 |
| <a id="files"></a> `files` | [`GitFileStatus`](GitFileStatus)[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:51 |
| <a id="modified"></a> `modified` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:48 |
| <a id="not_added"></a> `not_added` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:44 |
| <a id="renamed"></a> `renamed` | [`GitRenameEntry`](GitRenameEntry)[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:49 |
| <a id="staged"></a> `staged` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:50 |
| <a id="tracking"></a> `tracking` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:55 |
