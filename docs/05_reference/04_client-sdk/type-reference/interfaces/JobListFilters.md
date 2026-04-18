---
title: JobListFilters
---

[**@codebolt/client-sdk**](../index)

***

# Interface: JobListFilters

Defined in: CodeBolt/packages/clientsdk/src/types/job.ts:129

Job list filters

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="assignee"></a> `assignee?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/job.ts:134](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L134) |
| <a id="createdafter"></a> `createdAfter?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:144](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L144) |
| <a id="createdbefore"></a> `createdBefore?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:145](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L145) |
| <a id="desccontains"></a> `descContains?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:138](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L138) |
| <a id="filteroutblockers"></a> `filterOutBlockers?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/job.ts:143](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L143) |
| <a id="groupid"></a> `groupId?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:140](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L140) |
| <a id="ids"></a> `ids?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/job.ts:139](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L139) |
| <a id="labels"></a> `labels?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/job.ts:135](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L135) |
| <a id="labelsany"></a> `labelsAny?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/job.ts:136](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L136) |
| <a id="limit"></a> `limit?` | `number` | [CodeBolt/packages/clientsdk/src/types/job.ts:150](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L150) |
| <a id="noassignee"></a> `noAssignee?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/job.ts:148](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L148) |
| <a id="nolabels"></a> `noLabels?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/job.ts:149](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L149) |
| <a id="offset"></a> `offset?` | `number` | [CodeBolt/packages/clientsdk/src/types/job.ts:151](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L151) |
| <a id="priority"></a> `priority?` | [`JobPriority`](../type-aliases/JobPriority)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:131](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L131) |
| <a id="prioritymax"></a> `priorityMax?` | [`JobPriority`](../type-aliases/JobPriority) | [CodeBolt/packages/clientsdk/src/types/job.ts:133](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L133) |
| <a id="prioritymin"></a> `priorityMin?` | [`JobPriority`](../type-aliases/JobPriority) | [CodeBolt/packages/clientsdk/src/types/job.ts:132](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L132) |
| <a id="sortby"></a> `sortBy?` | \| `"priority"` \| `"createdAt"` \| `"updatedAt"` \| `"status"` \| `"id"` \| `"name"` \| `"importance"` | [CodeBolt/packages/clientsdk/src/types/job.ts:152](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L152) |
| <a id="sortorder"></a> `sortOrder?` | `"asc"` \| `"desc"` | [CodeBolt/packages/clientsdk/src/types/job.ts:153](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L153) |
| <a id="splitstatus"></a> `splitStatus?` | [`SplitStatus`](../type-aliases/SplitStatus)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:142](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L142) |
| <a id="status"></a> `status?` | [`JobStatus`](../type-aliases/JobStatus)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:130](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L130) |
| <a id="titlecontains"></a> `titleContains?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:137](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L137) |
| <a id="type"></a> `type?` | [`JobType`](../type-aliases/JobType)[] | [CodeBolt/packages/clientsdk/src/types/job.ts:141](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L141) |
| <a id="updatedafter"></a> `updatedAfter?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:146](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L146) |
| <a id="updatedbefore"></a> `updatedBefore?` | `string` | [CodeBolt/packages/clientsdk/src/types/job.ts:147](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/job.ts#L147) |
