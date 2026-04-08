---
title: ReviewMergeRequest
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: ReviewMergeRequest

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:57

Core Review/Merge Request interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentid"></a> `agentId` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:63 |
| <a id="agentname"></a> `agentName` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:64 |
| <a id="changesfilepath"></a> `changesFilePath?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:70 |
| <a id="closedat"></a> `closedAt?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:81 |
| <a id="createdat"></a> `createdAt` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:78 |
| <a id="description"></a> `description` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:67 |
| <a id="diffpatch"></a> `diffPatch` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:69 |
| <a id="id"></a> `id` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:58 |
| <a id="initialtask"></a> `initialTask` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:61 |
| <a id="issuesfaced"></a> `issuesFaced?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:72 |
| <a id="linkedjobids"></a> `linkedJobIds` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:75 |
| <a id="majorfileschanged"></a> `majorFilesChanged` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:68 |
| <a id="mergeconfig"></a> `mergeConfig?` | [`MergeConfig`](MergeConfig) | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:71 |
| <a id="mergedat"></a> `mergedAt?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:80 |
| <a id="mergedby"></a> `mergedBy?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:76 |
| <a id="mergeresult"></a> `mergeResult?` | [`MergeResult`](MergeResult) | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:77 |
| <a id="remainingtasks"></a> `remainingTasks?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:73 |
| <a id="reviews"></a> `reviews` | [`ReviewFeedback`](ReviewFeedback)[] | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:74 |
| <a id="status"></a> `status` | [`ReviewRequestStatus`](../type-aliases/ReviewRequestStatus) | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:60 |
| <a id="swarmid"></a> `swarmId?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:65 |
| <a id="taskdescription"></a> `taskDescription?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:62 |
| <a id="title"></a> `title` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:66 |
| <a id="type"></a> `type` | [`ReviewRequestType`](../type-aliases/ReviewRequestType) | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:59 |
| <a id="updatedat"></a> `updatedAt` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/reviewMergeRequest.d.ts:79 |
