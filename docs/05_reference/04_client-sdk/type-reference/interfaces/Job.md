---
title: Job
---

[**@codebolt/client-sdk**](../index)

***

# Interface: Job

Defined in: CodeBolt/packages/clientsdk/src/types/job.ts:99

Main job interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="archivedat"></a> `archivedAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:118](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L118) |
| <a id="assignees"></a> `assignees` | `string`[] | [CodeBolt/packages/clientsdk/src/types/job.ts:108](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L108) |
| <a id="bids"></a> `bids?` | [`JobBid`](JobBid)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:124](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L124) |
| <a id="blockers"></a> `blockers?` | [`JobBlocker`](JobBlocker)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:125](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L125) |
| <a id="closedat"></a> `closedAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:117](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L117) |
| <a id="createdat"></a> `createdAt` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:115](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L115) |
| <a id="dependencies"></a> `dependencies` | [`JobDependency`](JobDependency)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:110](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L110) |
| <a id="description"></a> `description?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:104](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L104) |
| <a id="discoveredfrom"></a> `discoveredFrom?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:121](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L121) |
| <a id="duedate"></a> `dueDate?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:114](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L114) |
| <a id="groupid"></a> `groupId` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:101](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L101) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:100](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L100) |
| <a id="labels"></a> `labels` | `string`[] | [CodeBolt/packages/clientsdk/src/types/job.ts:109](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L109) |
| <a id="lock"></a> `lock?` | [`Lock`](Lock) | [CodeBolt/packages/clientsdk/src/types/job.ts:122](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L122) |
| <a id="name"></a> `name` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:103](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L103) |
| <a id="notes"></a> `notes?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:113](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L113) |
| <a id="parentjobid"></a> `parentJobId?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:112](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L112) |
| <a id="pheromones"></a> `pheromones` | [`Pheromone`](Pheromone)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:111](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L111) |
| <a id="priority"></a> `priority?` | [`JobPriority`](../type-aliases/JobPriority) \| `null` | [CodeBolt/packages/clientsdk/src/types/job.ts:107](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L107) |
| <a id="sequencenumber"></a> `sequenceNumber` | `number` | [CodeBolt/packages/clientsdk/src/types/job.ts:102](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L102) |
| <a id="splitproposals"></a> `splitProposals?` | [`JobSplitProposal`](JobSplitProposal)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:119](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L119) |
| <a id="splitstatus"></a> `splitStatus?` | [`SplitStatus`](../type-aliases/SplitStatus) | [CodeBolt/packages/clientsdk/src/types/job.ts:120](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L120) |
| <a id="status"></a> `status` | [`JobStatus`](../type-aliases/JobStatus) | [CodeBolt/packages/clientsdk/src/types/job.ts:106](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L106) |
| <a id="type"></a> `type` | [`JobType`](../type-aliases/JobType) | [CodeBolt/packages/clientsdk/src/types/job.ts:105](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L105) |
| <a id="unlockrequests"></a> `unlockRequests?` | [`UnlockRequest`](UnlockRequest)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:123](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L123) |
| <a id="updatedat"></a> `updatedAt` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:116](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L116) |
