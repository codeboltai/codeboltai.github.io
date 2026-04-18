---
title: UpdateJobData
---

[**@codebolt/types**](../index.md)

***

# Interface: UpdateJobData

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/job.ts:101

## Extends

- `Partial`\<[`CreateJobData`](CreateJobData)\>

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assignees"></a> `assignees?` | `string`[] | [`CreateJobData`](CreateJobData).[`assignees`](CreateJobData.md#assignees) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:93 |
| <a id="dependencies"></a> `dependencies?` | [`JobDependency`](JobDependency)[] | [`CreateJobData`](CreateJobData).[`dependencies`](CreateJobData.md#dependencies) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:95 |
| <a id="description"></a> `description?` | `string` | [`CreateJobData`](CreateJobData).[`description`](CreateJobData.md#description) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:91 |
| <a id="duedate"></a> `dueDate?` | `string` | [`CreateJobData`](CreateJobData).[`dueDate`](CreateJobData.md#duedate) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:98 |
| <a id="labels"></a> `labels?` | `string`[] | [`CreateJobData`](CreateJobData).[`labels`](CreateJobData.md#labels) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:94 |
| <a id="name"></a> `name?` | `string` | [`CreateJobData`](CreateJobData).[`name`](CreateJobData.md#name) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:88 |
| <a id="notes"></a> `notes?` | `string` | [`CreateJobData`](CreateJobData).[`notes`](CreateJobData.md#notes) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:97 |
| <a id="parentjobid"></a> `parentJobId?` | `string` | [`CreateJobData`](CreateJobData).[`parentJobId`](CreateJobData.md#parentjobid) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:96 |
| <a id="priority"></a> `priority?` | [`JobPriority`](../type-aliases/JobPriority) | [`CreateJobData`](CreateJobData).[`priority`](CreateJobData.md#priority) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:90 |
| <a id="status"></a> `status?` | [`JobStatus`](../type-aliases/JobStatus) | [`CreateJobData`](CreateJobData).[`status`](CreateJobData.md#status) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:92 |
| <a id="type"></a> `type?` | [`JobType`](../type-aliases/JobType) | [`CreateJobData`](CreateJobData).[`type`](CreateJobData.md#type) | common/types/src/codeboltjstypes/libFunctionTypes/job.ts:89 |
