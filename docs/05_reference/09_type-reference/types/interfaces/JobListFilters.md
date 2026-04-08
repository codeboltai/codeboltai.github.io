---
title: JobListFilters
---

[**@codebolt/types**](../index)

***

# Interface: JobListFilters

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/job.ts:52

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="assignee"></a> `assignee?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:57](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L57) |
| <a id="closedafter"></a> `closedAfter?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:71](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L71) |
| <a id="closedbefore"></a> `closedBefore?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:72](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L72) |
| <a id="createdafter"></a> `createdAfter?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:67](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L67) |
| <a id="createdbefore"></a> `createdBefore?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L68) |
| <a id="desccontains"></a> `descContains?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:61](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L61) |
| <a id="emptydescription"></a> `emptyDescription?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:74](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L74) |
| <a id="filteroutblockers"></a> `filterOutBlockers?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:83](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L83) |
| <a id="groupid"></a> `groupId?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:64](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L64) |
| <a id="ids"></a> `ids?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:63](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L63) |
| <a id="labels"></a> `labels?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:58](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L58) |
| <a id="labelsany"></a> `labelsAny?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:59](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L59) |
| <a id="limit"></a> `limit?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:78](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L78) |
| <a id="noassignee"></a> `noAssignee?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L75) |
| <a id="nolabels"></a> `noLabels?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L76) |
| <a id="notescontain"></a> `notesContain?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:62](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L62) |
| <a id="offset"></a> `offset?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L79) |
| <a id="priority"></a> `priority?` | [`JobPriority`](../type-aliases/JobPriority)[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L54) |
| <a id="prioritymax"></a> `priorityMax?` | [`JobPriority`](../type-aliases/JobPriority) | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:56](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L56) |
| <a id="prioritymin"></a> `priorityMin?` | [`JobPriority`](../type-aliases/JobPriority) | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L55) |
| <a id="sortby"></a> `sortBy?` | `"status"` \| `"createdAt"` \| `"updatedAt"` \| `"priority"` \| `"importance"` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L81) |
| <a id="sortorder"></a> `sortOrder?` | `"asc"` \| `"desc"` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:82](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L82) |
| <a id="status"></a> `status?` | [`JobStatus`](../type-aliases/JobStatus)[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L53) |
| <a id="titlecontains"></a> `titleContains?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:60](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L60) |
| <a id="type"></a> `type?` | [`JobType`](../type-aliases/JobType)[] | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L65) |
| <a id="updatedafter"></a> `updatedAfter?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:69](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L69) |
| <a id="updatedbefore"></a> `updatedBefore?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/job.ts:70](common/types/src/codeboltjstypes/libFunctionTypes/job.ts#L70) |
