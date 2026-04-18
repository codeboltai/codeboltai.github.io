---
title: calendar
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: calendar

```ts
const calendar: {
  createEvent: (params: ICreateEventParams) => Promise<ICreateEventResponse>;
  deleteEvent: (params: IDeleteEventParams) => Promise<IDeleteEventResponse>;
  getEvent: (params: IGetEventParams) => Promise<IGetEventResponse>;
  getEventsInRange: (params: IGetEventsInRangeParams) => Promise<IGetEventsInRangeResponse>;
  getStatus: () => Promise<IGetStatusResponse>;
  getTriggeredEvents: (params: IGetTriggeredEventsParams) => Promise<IGetTriggeredEventsResponse>;
  getTriggeredEventsAndMarkComplete: () => Promise<IGetTriggeredEventsAndMarkCompleteResponse>;
  getUpcomingEvents: (params: IGetUpcomingEventsParams) => Promise<IGetUpcomingEventsResponse>;
  listEvents: (params: IListEventsParams) => Promise<IListEventsResponse>;
  markEventComplete: (params: IMarkEventCompleteParams) => Promise<IMarkEventCompleteResponse>;
  markEventsComplete: (params: IMarkEventsCompleteParams) => Promise<IMarkEventsCompleteResponse>;
  rsvp: (params: IRSVPParams) => Promise<IRSVPResponse>;
  updateEvent: (params: IUpdateEventParams) => Promise<IUpdateEventResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/calendar.ts:267

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createevent"></a> `createEvent()` | (`params`: [`ICreateEventParams`](../interfaces/ICreateEventParams)) => `Promise`\<[`ICreateEventResponse`](../interfaces/ICreateEventResponse)\> | Create a new calendar event | packages/codeboltjs/src/modules/calendar.ts:273 |
| <a id="deleteevent"></a> `deleteEvent()` | (`params`: [`IDeleteEventParams`](../interfaces/IDeleteEventParams)) => `Promise`\<[`IDeleteEventResponse`](../interfaces/IDeleteEventResponse)\> | Delete a calendar event | packages/codeboltjs/src/modules/calendar.ts:303 |
| <a id="getevent"></a> `getEvent()` | (`params`: [`IGetEventParams`](../interfaces/IGetEventParams)) => `Promise`\<[`IGetEventResponse`](../interfaces/IGetEventResponse)\> | Get a single calendar event by ID | packages/codeboltjs/src/modules/calendar.ts:318 |
| <a id="geteventsinrange"></a> `getEventsInRange()` | (`params`: [`IGetEventsInRangeParams`](../interfaces/IGetEventsInRangeParams)) => `Promise`\<[`IGetEventsInRangeResponse`](../interfaces/IGetEventsInRangeResponse)\> | Get events within a specific date range | packages/codeboltjs/src/modules/calendar.ts:348 |
| <a id="getstatus"></a> `getStatus()` | () => `Promise`\<[`IGetStatusResponse`](../interfaces/IGetStatusResponse)\> | Get the calendar scheduler status | packages/codeboltjs/src/modules/calendar.ts:450 |
| <a id="gettriggeredevents"></a> `getTriggeredEvents()` | (`params`: [`IGetTriggeredEventsParams`](../interfaces/IGetTriggeredEventsParams)) => `Promise`\<[`IGetTriggeredEventsResponse`](../interfaces/IGetTriggeredEventsResponse)\> | Get triggered events (events whose start time has passed) | packages/codeboltjs/src/modules/calendar.ts:378 |
| <a id="gettriggeredeventsandmarkcomplete"></a> `getTriggeredEventsAndMarkComplete()` | () => `Promise`\<[`IGetTriggeredEventsAndMarkCompleteResponse`](../interfaces/IGetTriggeredEventsAndMarkCompleteResponse)\> | Get triggered events and mark them all as complete in one operation | packages/codeboltjs/src/modules/calendar.ts:422 |
| <a id="getupcomingevents"></a> `getUpcomingEvents()` | (`params`: [`IGetUpcomingEventsParams`](../interfaces/IGetUpcomingEventsParams)) => `Promise`\<[`IGetUpcomingEventsResponse`](../interfaces/IGetUpcomingEventsResponse)\> | Get upcoming events within a specified time window | packages/codeboltjs/src/modules/calendar.ts:363 |
| <a id="listevents"></a> `listEvents()` | (`params`: [`IListEventsParams`](../interfaces/IListEventsParams)) => `Promise`\<[`IListEventsResponse`](../interfaces/IListEventsResponse)\> | List calendar events with optional filters | packages/codeboltjs/src/modules/calendar.ts:333 |
| <a id="markeventcomplete"></a> `markEventComplete()` | (`params`: [`IMarkEventCompleteParams`](../interfaces/IMarkEventCompleteParams)) => `Promise`\<[`IMarkEventCompleteResponse`](../interfaces/IMarkEventCompleteResponse)\> | Mark a single event as complete | packages/codeboltjs/src/modules/calendar.ts:393 |
| <a id="markeventscomplete"></a> `markEventsComplete()` | (`params`: [`IMarkEventsCompleteParams`](../interfaces/IMarkEventsCompleteParams)) => `Promise`\<[`IMarkEventsCompleteResponse`](../interfaces/IMarkEventsCompleteResponse)\> | Mark multiple events as complete | packages/codeboltjs/src/modules/calendar.ts:408 |
| <a id="rsvp"></a> `rsvp()` | (`params`: [`IRSVPParams`](../interfaces/IRSVPParams)) => `Promise`\<[`IRSVPResponse`](../interfaces/IRSVPResponse)\> | RSVP to a calendar event | packages/codeboltjs/src/modules/calendar.ts:436 |
| <a id="updateevent"></a> `updateEvent()` | (`params`: [`IUpdateEventParams`](../interfaces/IUpdateEventParams)) => `Promise`\<[`IUpdateEventResponse`](../interfaces/IUpdateEventResponse)\> | Update an existing calendar event | packages/codeboltjs/src/modules/calendar.ts:288 |
