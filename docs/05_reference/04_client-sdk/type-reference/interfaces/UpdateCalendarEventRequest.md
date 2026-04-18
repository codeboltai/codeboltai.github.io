---
title: UpdateCalendarEventRequest
---

[**@codebolt/client-sdk**](../index)

***

# Interface: UpdateCalendarEventRequest

Defined in: CodeBolt/packages/clientsdk/src/types/calendar.ts:90

Update calendar event request

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenda"></a> `agenda?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:105](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L105) |
| <a id="allday"></a> `allDay?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:97](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L97) |
| <a id="checktype"></a> `checkType?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:106](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L106) |
| <a id="completed"></a> `completed?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:98](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L98) |
| <a id="cronexpression"></a> `cronExpression?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:102](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L102) |
| <a id="description"></a> `description?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:92](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L92) |
| <a id="endtime"></a> `endTime?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:95](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L95) |
| <a id="eventtype"></a> `eventType?` | [`CalendarEventType`](../type-aliases/CalendarEventType) | [CodeBolt/packages/clientsdk/src/types/calendar.ts:93](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L93) |
| <a id="hasduration"></a> `hasDuration?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:96](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L96) |
| <a id="isrecurring"></a> `isRecurring?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:101](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L101) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [CodeBolt/packages/clientsdk/src/types/calendar.ts:108](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L108) |
| <a id="participants"></a> `participants?` | `Omit`\<[`CalendarParticipant`](CalendarParticipant), `"status"`\>[] | [CodeBolt/packages/clientsdk/src/types/calendar.ts:100](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L100) |
| <a id="recurrenceendtime"></a> `recurrenceEndTime?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:103](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L103) |
| <a id="reminder"></a> `reminder?` | \{ `enabled`: `boolean`; `minutesBefore`: `number`; \} | [CodeBolt/packages/clientsdk/src/types/calendar.ts:104](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L104) |
| `reminder.enabled` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:104](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L104) |
| `reminder.minutesBefore` | `number` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:104](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L104) |
| <a id="starttime"></a> `startTime?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:94](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L94) |
| <a id="swarmid"></a> `swarmId?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:99](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L99) |
| <a id="tags"></a> `tags?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/calendar.ts:107](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L107) |
| <a id="title"></a> `title?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:91](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L91) |
| <a id="updatescope"></a> `updateScope?` | `"this"` \| `"all"` \| `"future"` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:109](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L109) |
