---
title: TaskUpdatePayload
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: TaskUpdatePayload

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:97

Payload for task update notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"completed"` \| `"failed"` \| `"cancelled"` \| `"created"` \| `"updated"` | Action that occurred | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:102 |
| <a id="errormessage"></a> `errorMessage?` | `string` | Error message if failed | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:110 |
| <a id="progress"></a> `progress?` | `number` | Progress percentage (0-100) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:108 |
| <a id="status"></a> `status?` | `string` | Current status of the task | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:106 |
| <a id="taskid"></a> `taskId` | `string` | ID of the task | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:100 |
| <a id="tasktitle"></a> `taskTitle?` | `string` | Title of the task | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:104 |
| <a id="type"></a> `type` | `"taskUpdate"` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:98 |
