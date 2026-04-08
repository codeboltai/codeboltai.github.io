---
title: FileStateInfo
---

[**@codebolt/types**](../index)

***

# Interface: FileStateInfo

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:109

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="casesensitive"></a> `caseSensitive?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:120](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L120) |
| <a id="content"></a> `content?` | `string` \| `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:112](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L112) |
| <a id="excludepattern"></a> `excludePattern?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:119](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L119) |
| <a id="includepattern"></a> `includePattern?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:118](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L118) |
| <a id="originalcontent"></a> `originalContent?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:116](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L116) |
| <a id="params"></a> `params?` | `any` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:123](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L123) |
| <a id="path"></a> `path?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:111](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L111) |
| <a id="query"></a> `query?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:113](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L113) |
| <a id="results"></a> `results?` | `any`[] | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:117](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L117) |
| <a id="servername"></a> `serverName?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:122](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L122) |
| <a id="stateevent"></a> `stateEvent` | \| `"ASK_FOR_CONFIRMATION"` \| `"FILE_READ"` \| `"FILE_READ_ERROR"` \| `"REJECTED"` \| `"SEARCHING"` \| `"APPLYING_EDIT"` \| `"EDIT_STARTING"` \| `"FILE_WRITE"` \| `"FILE_WRITE_ERROR"` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:114](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L114) |
| <a id="toolname"></a> `toolName?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:121](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L121) |
| <a id="type"></a> `type` | `"file"` \| `"folder"` \| `"search"` \| `"fileSearch"` \| `"mcp"` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:110](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L110) |
