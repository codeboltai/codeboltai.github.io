---
title: CalendarSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: CalendarSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:71

Calendar socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="calendarevent-created"></a> `calendar:event-created` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:72](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L72) |
| <a id="calendarevent-deleted"></a> `calendar:event-deleted` | (`data`: \{ `eventId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:74](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L74) |
| <a id="calendarevent-triggered"></a> `calendar:event-triggered` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:76](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L76) |
| <a id="calendarevent-updated"></a> `calendar:event-updated` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:73](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L73) |
| <a id="calendarreminder"></a> `calendar:reminder` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:75](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L75) |
| <a id="calendarrsvp-updated"></a> `calendar:rsvp-updated` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:77](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L77) |
