---
title: CreateCalendarEventRequest
---

[**@codebolt/client-sdk**](../index)

***

# Interface: CreateCalendarEventRequest

Defined in: CodeBolt/packages/clientsdk/src/types/calendar.ts:69

Create calendar event request

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenda"></a> `agenda?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:83](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L83) |
| <a id="allday"></a> `allDay?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:76](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L76) |
| <a id="checktype"></a> `checkType?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:84](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L84) |
| <a id="cronexpression"></a> `cronExpression?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:80](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L80) |
| <a id="description"></a> `description?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:71](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L71) |
| <a id="endtime"></a> `endTime?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:74](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L74) |
| <a id="eventtype"></a> `eventType?` | [`CalendarEventType`](../type-aliases/CalendarEventType) | [CodeBolt/packages/clientsdk/src/types/calendar.ts:72](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L72) |
| <a id="hasduration"></a> `hasDuration?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:75](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L75) |
| <a id="isrecurring"></a> `isRecurring?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:79](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L79) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [CodeBolt/packages/clientsdk/src/types/calendar.ts:86](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L86) |
| <a id="participants"></a> `participants?` | `Omit`\<[`CalendarParticipant`](CalendarParticipant), `"status"`\>[] | [CodeBolt/packages/clientsdk/src/types/calendar.ts:78](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L78) |
| <a id="recurrenceendtime"></a> `recurrenceEndTime?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:81](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L81) |
| <a id="reminder"></a> `reminder?` | \{ `enabled`: `boolean`; `minutesBefore`: `number`; \} | [CodeBolt/packages/clientsdk/src/types/calendar.ts:82](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L82) |
| `reminder.enabled` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:82](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L82) |
| `reminder.minutesBefore` | `number` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:82](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L82) |
| <a id="starttime"></a> `startTime` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:73](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L73) |
| <a id="swarmid"></a> `swarmId?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:77](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L77) |
| <a id="tags"></a> `tags?` | `string`[] | [CodeBolt/packages/clientsdk/src/types/calendar.ts:85](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L85) |
| <a id="title"></a> `title` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:70](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L70) |
