---
title: IUpdateEventParams
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: IUpdateEventParams

Defined in: packages/codeboltjs/src/modules/calendar.ts:91

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenda"></a> `agenda?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:108](packages/codeboltjs/src/modules/calendar.ts#L108) |
| <a id="allday"></a> `allDay?` | `boolean` | [packages/codeboltjs/src/modules/calendar.ts:99](packages/codeboltjs/src/modules/calendar.ts#L99) |
| <a id="checktype"></a> `checkType?` | [`CalendarCheckType`](../type-aliases/CalendarCheckType) | [packages/codeboltjs/src/modules/calendar.ts:109](packages/codeboltjs/src/modules/calendar.ts#L109) |
| <a id="cronexpression"></a> `cronExpression?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:102](packages/codeboltjs/src/modules/calendar.ts#L102) |
| <a id="description"></a> `description?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:94](packages/codeboltjs/src/modules/calendar.ts#L94) |
| <a id="endtime"></a> `endTime?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:97](packages/codeboltjs/src/modules/calendar.ts#L97) |
| <a id="eventid"></a> `eventId` | `string` | [packages/codeboltjs/src/modules/calendar.ts:92](packages/codeboltjs/src/modules/calendar.ts#L92) |
| <a id="eventtype"></a> `eventType?` | [`CalendarEventType`](../type-aliases/CalendarEventType) | [packages/codeboltjs/src/modules/calendar.ts:95](packages/codeboltjs/src/modules/calendar.ts#L95) |
| <a id="hasduration"></a> `hasDuration?` | `boolean` | [packages/codeboltjs/src/modules/calendar.ts:98](packages/codeboltjs/src/modules/calendar.ts#L98) |
| <a id="isrecurring"></a> `isRecurring?` | `boolean` | [packages/codeboltjs/src/modules/calendar.ts:101](packages/codeboltjs/src/modules/calendar.ts#L101) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [packages/codeboltjs/src/modules/calendar.ts:111](packages/codeboltjs/src/modules/calendar.ts#L111) |
| <a id="participants"></a> `participants?` | [`CalendarParticipant`](CalendarParticipant)[] | [packages/codeboltjs/src/modules/calendar.ts:100](packages/codeboltjs/src/modules/calendar.ts#L100) |
| <a id="recurrenceendtime"></a> `recurrenceEndTime?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:103](packages/codeboltjs/src/modules/calendar.ts#L103) |
| <a id="reminder"></a> `reminder?` | \{ `enabled`: `boolean`; `minutesBefore`: `number`; \} | [packages/codeboltjs/src/modules/calendar.ts:104](packages/codeboltjs/src/modules/calendar.ts#L104) |
| `reminder.enabled` | `boolean` | [packages/codeboltjs/src/modules/calendar.ts:105](packages/codeboltjs/src/modules/calendar.ts#L105) |
| `reminder.minutesBefore` | `number` | [packages/codeboltjs/src/modules/calendar.ts:106](packages/codeboltjs/src/modules/calendar.ts#L106) |
| <a id="starttime"></a> `startTime?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:96](packages/codeboltjs/src/modules/calendar.ts#L96) |
| <a id="tags"></a> `tags?` | `string`[] | [packages/codeboltjs/src/modules/calendar.ts:110](packages/codeboltjs/src/modules/calendar.ts#L110) |
| <a id="title"></a> `title?` | `string` | [packages/codeboltjs/src/modules/calendar.ts:93](packages/codeboltjs/src/modules/calendar.ts#L93) |
