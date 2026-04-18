---
title: CalendarApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: CalendarApi

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:24

Provides methods for managing calendar events in the CodeBolt runtime.

The calendar API supports scheduling, querying, and managing events that
coordinate agent activities and user workflows. It includes CRUD operations
for events, date range queries, RSVP management, triggered event handling,
and bulk completion operations.

## Constructors

### Constructor

```ts
new CalendarApi(http: HttpClient): CalendarApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`CalendarApi`

## Methods

### completeEvent()

```ts
completeEvent(id: string, data?: CompleteEventRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:265

Marks a specific calendar event as complete.

Records the completion of an event, optionally with completion
details such as outcome or notes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the event to complete |
| `data?` | `CompleteEventRequest` | Optional completion details |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the event has been marked complete

#### Example

```typescript
await client.calendar.completeEvent('event-123', {
  notes: 'Review completed successfully'
});
```

***

### completeEvents()

```ts
completeEvents(data: BulkCompleteEventsRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:286

Bulk-completes multiple calendar events.

Marks multiple events as complete in a single operation, useful for
batch processing of finished events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BulkCompleteEventsRequest` | The bulk completion payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all specified events have been completed

#### Example

```typescript
await client.calendar.completeEvents({
  eventIds: ['event-1', 'event-2', 'event-3']
});
```

***

### completeTriggered()

```ts
completeTriggered(data: CompleteTriggeredRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:242

Marks triggered events as complete.

Acknowledges and completes triggered events, removing them from
the pending triggered events list.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CompleteTriggeredRequest` | The completion payload identifying which triggered events to complete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the events have been marked complete

***

### createEvent()

```ts
createEvent(data: CreateCalendarEventRequest): Promise<CalendarEvent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:50

Creates a new calendar event.

Schedules a new event that can trigger agent actions or serve as
a coordination point for workflows.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateCalendarEventRequest` | The event creation payload |

#### Returns

`Promise`\<`CalendarEvent`\>

A promise that resolves to the newly created CalendarEvent

#### Example

```typescript
const event = await client.calendar.createEvent({
  title: 'Daily Code Review',
  startTime: '2025-01-15T10:00:00Z',
  endTime: '2025-01-15T11:00:00Z'
});
```

***

### deleteEvent()

```ts
deleteEvent(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:113

Deletes a calendar event.

Permanently removes the specified calendar event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the event to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the event has been deleted

***

### getEvent()

```ts
getEvent(id: string): Promise<CalendarEvent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:87

Retrieves a specific calendar event by ID.

Returns the full event details including all metadata, participants,
and configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the calendar event |

#### Returns

`Promise`\<`CalendarEvent`\>

A promise that resolves to the CalendarEvent object

***

### getIndex()

```ts
getIndex(params?: CalendarFilterOptions): Promise<CalendarIndexEntry[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:194

Retrieves the calendar index.

Returns an indexed view of calendar events, optimized for fast
lookups and navigation across large numbers of events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CalendarFilterOptions` | Optional filter options |

#### Returns

`Promise`\<`CalendarIndexEntry`[]\>

A promise that resolves to an array of CalendarIndexEntry objects

***

### getRange()

```ts
getRange(params?: CalendarFilterOptions): Promise<CalendarEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:138

Retrieves calendar events within a date range.

Returns full event objects for all events that overlap with the
specified date range.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CalendarFilterOptions` | Optional filter options including date range boundaries |

#### Returns

`Promise`\<`CalendarEvent`[]\>

A promise that resolves to an array of CalendarEvent objects in the range

#### Example

```typescript
const events = await client.calendar.getRange({
  from: '2025-01-15',
  to: '2025-01-22'
});
```

***

### getStatus()

```ts
getStatus(): Promise<CalendarStatus>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:208

Retrieves the calendar service status.

Returns health and configuration information about the calendar
subsystem, including whether triggers are active.

#### Returns

`Promise`\<`CalendarStatus`\>

A promise that resolves to the CalendarStatus object

***

### getTriggered()

```ts
getTriggered(params?: CalendarFilterOptions): Promise<CalendarEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:229

Retrieves triggered calendar events.

Returns events whose trigger conditions have been met and are
pending action or acknowledgment.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CalendarFilterOptions` | Optional filter options |

#### Returns

`Promise`\<`CalendarEvent`[]\>

A promise that resolves to an array of triggered CalendarEvent objects

#### Example

```typescript
const triggered = await client.calendar.getTriggered();
console.log(`${triggered.length} events need attention`);
```

***

### getUpcoming()

```ts
getUpcoming(params?: CalendarFilterOptions): Promise<CalendarEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:157

Retrieves upcoming calendar events.

Returns events scheduled in the near future, sorted chronologically.
Useful for displaying "what's next" views.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CalendarFilterOptions` | Optional filter options to customize the results |

#### Returns

`Promise`\<`CalendarEvent`[]\>

A promise that resolves to an array of upcoming CalendarEvent objects

#### Example

```typescript
const upcoming = await client.calendar.getUpcoming();
upcoming.forEach(e => console.log(e.title, e.startTime));
```

***

### listEvents()

```ts
listEvents(params?: CalendarFilterOptions): Promise<CalendarEventSummary[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:74

Retrieves all calendar events as summaries.

Returns lightweight summary representations of all events,
suitable for calendar overview displays.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CalendarFilterOptions` | Optional filter options for narrowing results |

#### Returns

`Promise`\<`CalendarEventSummary`[]\>

A promise that resolves to an array of CalendarEventSummary objects

#### Example

```typescript
const events = await client.calendar.listEvents({
  from: '2025-01-01',
  to: '2025-01-31'
});
```

***

### rsvp()

```ts
rsvp(id: string, data: CalendarRSVPRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:179

Sends an RSVP response to a calendar event.

Records a participant's attendance response (accept, decline, tentative)
for the specified event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the calendar event |
| `data` | `CalendarRSVPRequest` | The RSVP payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the RSVP has been recorded

#### Example

```typescript
await client.calendar.rsvp('event-123', { response: 'accepted' });
```

***

### updateEvent()

```ts
updateEvent(id: string, data: UpdateCalendarEventRequest): Promise<CalendarEvent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/calendar.api.ts:101

Updates a calendar event.

Modifies the properties of an existing calendar event such as
its title, time, or configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the event to update |
| `data` | `UpdateCalendarEventRequest` | The fields to update on the event |

#### Returns

`Promise`\<`CalendarEvent`\>

A promise that resolves to the updated CalendarEvent
