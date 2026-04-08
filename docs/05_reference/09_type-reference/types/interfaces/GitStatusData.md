---
title: GitStatusData
---

[**@codebolt/types**](../index)

***

# Interface: GitStatusData

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:43

Git status result data structure

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ahead"></a> `ahead` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:52](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L52) |
| <a id="behind"></a> `behind` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L53) |
| <a id="conflicted"></a> `conflicted` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:45](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L45) |
| <a id="created"></a> `created` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:46](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L46) |
| <a id="current"></a> `current` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L54) |
| <a id="deleted"></a> `deleted` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:47](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L47) |
| <a id="files"></a> `files` | [`GitFileStatus`](GitFileStatus)[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L51) |
| <a id="modified"></a> `modified` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:48](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L48) |
| <a id="not_added"></a> `not_added` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:44](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L44) |
| <a id="renamed"></a> `renamed` | [`GitRenameEntry`](GitRenameEntry)[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L49) |
| <a id="staged"></a> `staged` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:50](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L50) |
| <a id="tracking"></a> `tracking` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L55) |
