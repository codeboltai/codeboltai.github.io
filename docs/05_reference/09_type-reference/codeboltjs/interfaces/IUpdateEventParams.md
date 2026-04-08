---
title: IUpdateEventParams
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: IUpdateEventParams

Defined in: packages/codeboltjs/src/modules/calendar.ts:91

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenda"></a> `agenda?` | `string` | packages/codeboltjs/src/modules/calendar.ts:108 |
| <a id="allday"></a> `allDay?` | `boolean` | packages/codeboltjs/src/modules/calendar.ts:99 |
| <a id="checktype"></a> `checkType?` | [`CalendarCheckType`](../type-aliases/CalendarCheckType) | packages/codeboltjs/src/modules/calendar.ts:109 |
| <a id="cronexpression"></a> `cronExpression?` | `string` | packages/codeboltjs/src/modules/calendar.ts:102 |
| <a id="description"></a> `description?` | `string` | packages/codeboltjs/src/modules/calendar.ts:94 |
| <a id="endtime"></a> `endTime?` | `string` | packages/codeboltjs/src/modules/calendar.ts:97 |
| <a id="eventid"></a> `eventId` | `string` | packages/codeboltjs/src/modules/calendar.ts:92 |
| <a id="eventtype"></a> `eventType?` | [`CalendarEventType`](../type-aliases/CalendarEventType) | packages/codeboltjs/src/modules/calendar.ts:95 |
| <a id="hasduration"></a> `hasDuration?` | `boolean` | packages/codeboltjs/src/modules/calendar.ts:98 |
| <a id="isrecurring"></a> `isRecurring?` | `boolean` | packages/codeboltjs/src/modules/calendar.ts:101 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | packages/codeboltjs/src/modules/calendar.ts:111 |
| <a id="participants"></a> `participants?` | [`CalendarParticipant`](CalendarParticipant)[] | packages/codeboltjs/src/modules/calendar.ts:100 |
| <a id="recurrenceendtime"></a> `recurrenceEndTime?` | `string` | packages/codeboltjs/src/modules/calendar.ts:103 |
| <a id="reminder"></a> `reminder?` | \{ `enabled`: `boolean`; `minutesBefore`: `number`; \} | packages/codeboltjs/src/modules/calendar.ts:104 |
| `reminder.enabled` | `boolean` | packages/codeboltjs/src/modules/calendar.ts:105 |
| `reminder.minutesBefore` | `number` | packages/codeboltjs/src/modules/calendar.ts:106 |
| <a id="starttime"></a> `startTime?` | `string` | packages/codeboltjs/src/modules/calendar.ts:96 |
| <a id="tags"></a> `tags?` | `string`[] | packages/codeboltjs/src/modules/calendar.ts:110 |
| <a id="title"></a> `title?` | `string` | packages/codeboltjs/src/modules/calendar.ts:93 |
