---
title: ReviewMergeRequest
---

[**@codebolt/types**](../index)

***

# Interface: ReviewMergeRequest

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:74

Core Review/Merge Request interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentid"></a> `agentId` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:84](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L84) |
| <a id="agentname"></a> `agentName` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:85](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L85) |
| <a id="changesfilepath"></a> `changesFilePath?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L93) |
| <a id="closedat"></a> `closedAt?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:114](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L114) |
| <a id="createdat"></a> `createdAt` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:111](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L111) |
| <a id="description"></a> `description` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:90](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L90) |
| <a id="diffpatch"></a> `diffPatch` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:92](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L92) |
| <a id="id"></a> `id` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L75) |
| <a id="initialtask"></a> `initialTask` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:80](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L80) |
| <a id="issuesfaced"></a> `issuesFaced?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:99](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L99) |
| <a id="linkedjobids"></a> `linkedJobIds` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:104](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L104) |
| <a id="majorfileschanged"></a> `majorFilesChanged` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:91](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L91) |
| <a id="mergeconfig"></a> `mergeConfig?` | [`MergeConfig`](MergeConfig) | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:96](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L96) |
| <a id="mergedat"></a> `mergedAt?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:113](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L113) |
| <a id="mergedby"></a> `mergedBy?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:107](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L107) |
| <a id="mergeresult"></a> `mergeResult?` | [`MergeResult`](MergeResult) | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:108](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L108) |
| <a id="remainingtasks"></a> `remainingTasks?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:100](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L100) |
| <a id="reviews"></a> `reviews` | [`ReviewFeedback`](ReviewFeedback)[] | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:103](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L103) |
| <a id="status"></a> `status` | [`ReviewRequestStatus`](../type-aliases/ReviewRequestStatus) | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L77) |
| <a id="swarmid"></a> `swarmId?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:86](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L86) |
| <a id="taskdescription"></a> `taskDescription?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L81) |
| <a id="title"></a> `title` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:89](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L89) |
| <a id="type"></a> `type` | [`ReviewRequestType`](../type-aliases/ReviewRequestType) | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L76) |
| <a id="updatedat"></a> `updatedAt` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts:112](common/types/src/codeboltjstypes/libFunctionTypes/reviewMergeRequest.ts#L112) |
