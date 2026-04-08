---
title: GitDiffResponse
---

[**@codebolt/types**](../index)

***

# Interface: GitDiffResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/git.ts:39

## Extends

- [`BaseGitSDKResponse`](BaseGitSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="commithash"></a> `commitHash?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/git.ts:41](common/types/src/codeboltjstypes/libFunctionTypes/git.ts#L41) |
| <a id="data"></a> `data?` | `string` \| [`GitDiffResult`](GitDiffResult) | - | [common/types/src/codeboltjstypes/libFunctionTypes/git.ts:40](common/types/src/codeboltjstypes/libFunctionTypes/git.ts#L40) |
| <a id="error"></a> `error?` | `string` | [`BaseGitSDKResponse`](BaseGitSDKResponse).[`error`](BaseGitSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/git.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/git.ts#L12) |
| <a id="message"></a> `message?` | `string` | [`BaseGitSDKResponse`](BaseGitSDKResponse).[`message`](BaseGitSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/git.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/git.ts#L11) |
| <a id="success"></a> `success?` | `boolean` | [`BaseGitSDKResponse`](BaseGitSDKResponse).[`success`](BaseGitSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/git.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/git.ts#L10) |
