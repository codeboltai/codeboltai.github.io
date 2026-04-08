---
title: CalendarUpdatePayload
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: CalendarUpdatePayload

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:61

Payload for calendar update notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | `"deleted"` \| `"created"` \| `"updated"` \| `"reminder"` | Action that occurred | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:66 |
| <a id="calendareventid"></a> `calendarEventId` | `string` | ID of the calendar event | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:64 |
| <a id="description"></a> `description?` | `string` | Additional event details | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:74 |
| <a id="endtime"></a> `endTime?` | `string` | Event end time (ISO string) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:72 |
| <a id="eventtitle"></a> `eventTitle?` | `string` | Title of the calendar event | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:68 |
| <a id="location"></a> `location?` | `string` | Location of the event | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:76 |
| <a id="starttime"></a> `startTime?` | `string` | Event start time (ISO string) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:70 |
| <a id="type"></a> `type` | `"calendarUpdate"` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:62 |
