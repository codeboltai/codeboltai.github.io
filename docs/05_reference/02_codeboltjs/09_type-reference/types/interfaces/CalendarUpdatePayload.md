---
title: CalendarUpdatePayload
---

[**@codebolt/types**](../index.md)

***

# Interface: CalendarUpdatePayload

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:74

Payload for calendar update notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"deleted"` \| `"created"` \| `"updated"` \| `"reminder"` | Action that occurred | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:79 |
| <a id="calendareventid"></a> `calendarEventId` | `string` | ID of the calendar event | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:77 |
| <a id="description"></a> `description?` | `string` | Additional event details | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:87 |
| <a id="endtime"></a> `endTime?` | `string` | Event end time (ISO string) | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:85 |
| <a id="eventtitle"></a> `eventTitle?` | `string` | Title of the calendar event | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:81 |
| <a id="location"></a> `location?` | `string` | Location of the event | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:89 |
| <a id="starttime"></a> `startTime?` | `string` | Event start time (ISO string) | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:83 |
| <a id="type"></a> `type` | `"calendarUpdate"` | - | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:75 |
