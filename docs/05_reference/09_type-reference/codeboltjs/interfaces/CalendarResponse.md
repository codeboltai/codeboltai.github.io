---
title: CalendarResponse
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: CalendarResponse

Defined in: packages/codeboltjs/src/modules/calendar.ts:168

## Extended by

- [`ICreateEventResponse`](ICreateEventResponse)
- [`IUpdateEventResponse`](IUpdateEventResponse)
- [`IDeleteEventResponse`](IDeleteEventResponse)
- [`IGetEventResponse`](IGetEventResponse)
- [`IListEventsResponse`](IListEventsResponse)
- [`IGetEventsInRangeResponse`](IGetEventsInRangeResponse)
- [`IGetUpcomingEventsResponse`](IGetUpcomingEventsResponse)
- [`IGetTriggeredEventsResponse`](IGetTriggeredEventsResponse)
- [`IMarkEventCompleteResponse`](IMarkEventCompleteResponse)
- [`IMarkEventsCompleteResponse`](IMarkEventsCompleteResponse)
- [`IGetTriggeredEventsAndMarkCompleteResponse`](IGetTriggeredEventsAndMarkCompleteResponse)
- [`IRSVPResponse`](IRSVPResponse)
- [`IGetStatusResponse`](IGetStatusResponse)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | packages/codeboltjs/src/modules/calendar.ts:170 |
| <a id="data"></a> `data?` | `any` | packages/codeboltjs/src/modules/calendar.ts:172 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | packages/codeboltjs/src/modules/calendar.ts:173 |
| `error.code` | `string` | packages/codeboltjs/src/modules/calendar.ts:174 |
| `error.details?` | `any` | packages/codeboltjs/src/modules/calendar.ts:176 |
| `error.message` | `string` | packages/codeboltjs/src/modules/calendar.ts:175 |
| <a id="message"></a> `message` | `string` | packages/codeboltjs/src/modules/calendar.ts:171 |
| <a id="success"></a> `success` | `boolean` | packages/codeboltjs/src/modules/calendar.ts:169 |
