---
title: ReviewMergeRequest
---

[**@codebolt/client-sdk**](../index)

***

# Interface: ReviewMergeRequest

Defined in: CodeBolt/packages/clientsdk/src/types/review-merge.ts:75

Review merge request

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentid"></a> `agentId` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:81](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L81) |
| <a id="agentname"></a> `agentName` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:82](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L82) |
| <a id="changesfilepath"></a> `changesFilePath?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:90](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L90) |
| <a id="closedat"></a> `closedAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:105](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L105) |
| <a id="createdat"></a> `createdAt` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:102](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L102) |
| <a id="description"></a> `description` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:87](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L87) |
| <a id="diffpatch"></a> `diffPatch` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:89](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L89) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:76](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L76) |
| <a id="initialtask"></a> `initialTask` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:79](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L79) |
| <a id="issuesfaced"></a> `issuesFaced?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:92](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L92) |
| <a id="linkedjobids"></a> `linkedJobIds` | `string`[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:95](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L95) |
| <a id="lock"></a> `lock?` | [`Lock`](Lock) | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:97](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L97) |
| <a id="majorfileschanged"></a> `majorFilesChanged` | `string`[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:88](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L88) |
| <a id="mergeconfig"></a> `mergeConfig?` | [`MergeConfig`](MergeConfig) | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:91](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L91) |
| <a id="mergedat"></a> `mergedAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:104](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L104) |
| <a id="mergedby"></a> `mergedBy?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:100](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L100) |
| <a id="mergeresult"></a> `mergeResult?` | [`MergeResult`](MergeResult) | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:101](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L101) |
| <a id="pheromones"></a> `pheromones?` | [`Pheromone`](Pheromone)[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:96](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L96) |
| <a id="proposedjobs"></a> `proposedJobs?` | [`ReviewProposedJob`](ReviewProposedJob)[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:99](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L99) |
| <a id="remainingtasks"></a> `remainingTasks?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:93](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L93) |
| <a id="reviews"></a> `reviews` | [`ReviewFeedback`](ReviewFeedback)[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:94](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L94) |
| <a id="scope"></a> `scope?` | [`ReviewScope`](../type-aliases/ReviewScope) | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:84](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L84) |
| <a id="scopeinstanceid"></a> `scopeInstanceId?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:85](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L85) |
| <a id="status"></a> `status` | [`ReviewRequestStatus`](../type-aliases/ReviewRequestStatus) | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:78](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L78) |
| <a id="swarmid"></a> `swarmId?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:83](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L83) |
| <a id="taskdescription"></a> `taskDescription?` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:80](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L80) |
| <a id="title"></a> `title` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:86](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L86) |
| <a id="type"></a> `type` | [`ReviewRequestType`](../type-aliases/ReviewRequestType) | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:77](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L77) |
| <a id="unlockrequests"></a> `unlockRequests?` | [`UnlockRequest`](UnlockRequest)[] | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:98](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L98) |
| <a id="updatedat"></a> `updatedAt` | `string` | [CodeBolt/packages/clientsdk/src/types/review-merge.ts:103](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/review-merge.ts#L103) |
