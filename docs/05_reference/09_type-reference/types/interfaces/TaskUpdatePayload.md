---
title: TaskUpdatePayload
---

[**@codebolt/types**](../index)

***

# Interface: TaskUpdatePayload

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:112

Payload for task update notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"completed"` \| `"failed"` \| `"cancelled"` \| `"created"` \| `"updated"` | Action that occurred | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:117](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L117) |
| <a id="errormessage"></a> `errorMessage?` | `string` | Error message if failed | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:125](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L125) |
| <a id="progress"></a> `progress?` | `number` | Progress percentage (0-100) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:123](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L123) |
| <a id="status"></a> `status?` | `string` | Current status of the task | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:121](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L121) |
| <a id="taskid"></a> `taskId` | `string` | ID of the task | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:115](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L115) |
| <a id="tasktitle"></a> `taskTitle?` | `string` | Title of the task | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:119](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L119) |
| <a id="type"></a> `type` | `"taskUpdate"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:113](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L113) |
