---
title: CalendarUpdatePayload
---

[**@codebolt/types**](../index)

***

# Interface: CalendarUpdatePayload

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:74

Payload for calendar update notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"deleted"` \| `"created"` \| `"updated"` \| `"reminder"` | Action that occurred | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L79) |
| <a id="calendareventid"></a> `calendarEventId` | `string` | ID of the calendar event | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L77) |
| <a id="description"></a> `description?` | `string` | Additional event details | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:87](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L87) |
| <a id="endtime"></a> `endTime?` | `string` | Event end time (ISO string) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:85](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L85) |
| <a id="eventtitle"></a> `eventTitle?` | `string` | Title of the calendar event | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L81) |
| <a id="location"></a> `location?` | `string` | Location of the event | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:89](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L89) |
| <a id="starttime"></a> `startTime?` | `string` | Event start time (ISO string) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:83](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L83) |
| <a id="type"></a> `type` | `"calendarUpdate"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L75) |
