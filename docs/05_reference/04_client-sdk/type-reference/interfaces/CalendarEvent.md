---
title: CalendarEvent
---

[**@codebolt/client-sdk**](../index)

***

# Interface: CalendarEvent

Defined in: CodeBolt/packages/clientsdk/src/types/calendar.ts:23

Calendar event

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenda"></a> `agenda?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:44](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L44) |
| <a id="allday"></a> `allDay` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:31](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L31) |
| <a id="checktype"></a> `checkType?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:45](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L45) |
| <a id="completed"></a> `completed` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:32](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L32) |
| <a id="completedat"></a> `completedAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:33](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L33) |
| <a id="createdat"></a> `createdAt` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:49](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L49) |
| <a id="createdby"></a> `createdBy` | [`CalendarParticipant`](CalendarParticipant) | [CodeBolt/packages/clientsdk/src/types/calendar.ts:36](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L36) |
| <a id="cronexpression"></a> `cronExpression?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:39](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L39) |
| <a id="description"></a> `description` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:26](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L26) |
| <a id="endtime"></a> `endTime` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:29](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L29) |
| <a id="eventtype"></a> `eventType` | [`CalendarEventType`](../type-aliases/CalendarEventType) | [CodeBolt/packages/clientsdk/src/types/calendar.ts:27](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L27) |
| <a id="hasduration"></a> `hasDuration` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:30](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L30) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L24) |
| <a id="isrecurring"></a> `isRecurring` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:38](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L38) |
| <a id="isrecurringinstance"></a> `isRecurringInstance` | `boolean` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:41](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L41) |
| <a id="mailthreadid"></a> `mailThreadId?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:43](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L43) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [CodeBolt/packages/clientsdk/src/types/calendar.ts:48](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L48) |
| <a id="parenteventid"></a> `parentEventId?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:42](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L42) |
| <a id="participants"></a> `participants` | [`CalendarParticipant`](CalendarParticipant)[] | [CodeBolt/packages/clientsdk/src/types/calendar.ts:37](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L37) |
| <a id="recurrenceendtime"></a> `recurrenceEndTime?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:40](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L40) |
| <a id="reminder"></a> `reminder?` | [`CalendarReminder`](CalendarReminder) | [CodeBolt/packages/clientsdk/src/types/calendar.ts:46](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L46) |
| <a id="starttime"></a> `startTime` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:28](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L28) |
| <a id="swarmid"></a> `swarmId?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:35](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L35) |
| <a id="tags"></a> `tags` | `string`[] | [CodeBolt/packages/clientsdk/src/types/calendar.ts:47](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L47) |
| <a id="title"></a> `title` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:25](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L25) |
| <a id="triggeredat"></a> `triggeredAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:34](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L34) |
| <a id="updatedat"></a> `updatedAt` | `string` | [CodeBolt/packages/clientsdk/src/types/calendar.ts:50](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/calendar.ts#L50) |
