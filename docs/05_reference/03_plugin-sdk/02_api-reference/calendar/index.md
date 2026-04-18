---
title: Calendar API
---

# Calendar API

The `calendar` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createEvent`](./createEvent) | Create a new calendar event |
| [`deleteEvent`](./deleteEvent) | Delete a calendar event |
| [`getEvent`](./getEvent) | Get a single calendar event by ID |
| [`getEventsInRange`](./getEventsInRange) | Get events within a specific date range |
| [`getStatus`](./getStatus) | Get the calendar scheduler status |
| [`getTriggeredEvents`](./getTriggeredEvents) | Get triggered events (events whose start time has passed) |
| [`getTriggeredEventsAndMarkComplete`](./getTriggeredEventsAndMarkComplete) | Get triggered events and mark them all as complete in one operation |
| [`getUpcomingEvents`](./getUpcomingEvents) | Get upcoming events within a specified time window |
| [`listEvents`](./listEvents) | List calendar events with optional filters |
| [`markEventComplete`](./markEventComplete) | Mark a single event as complete |
| [`markEventsComplete`](./markEventsComplete) | Mark multiple events as complete |
| [`rsvp`](./rsvp) | RSVP to a calendar event |
| [`updateEvent`](./updateEvent) | Update an existing calendar event |

## Methods

---

### `createEvent`

```typescript
plugin.calendar.createEvent(params: ICreateEventParams): Promise<ICreateEventResponse>
```

Create a new calendar event

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ICreateEventParams` | Yes | Event creation parameters |

**Returns:** `Promise<ICreateEventResponse>` — Promise resolving to the created event

[Full reference →](./createEvent)

---

### `deleteEvent`

```typescript
plugin.calendar.deleteEvent(params: IDeleteEventParams): Promise<IDeleteEventResponse>
```

Delete a calendar event

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IDeleteEventParams` | Yes | Parameters including eventId |

**Returns:** `Promise<IDeleteEventResponse>` — Promise resolving to deletion confirmation

[Full reference →](./deleteEvent)

---

### `getEvent`

```typescript
plugin.calendar.getEvent(params: IGetEventParams): Promise<IGetEventResponse>
```

Get a single calendar event by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetEventParams` | Yes | Parameters including eventId |

**Returns:** `Promise<IGetEventResponse>` — Promise resolving to the event

[Full reference →](./getEvent)

---

### `getEventsInRange`

```typescript
plugin.calendar.getEventsInRange(params: IGetEventsInRangeParams): Promise<IGetEventsInRangeResponse>
```

Get events within a specific date range

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetEventsInRangeParams` | Yes | Parameters including startDate and endDate |

**Returns:** `Promise<IGetEventsInRangeResponse>` — Promise resolving to events in range

[Full reference →](./getEventsInRange)

---

### `getStatus`

```typescript
plugin.calendar.getStatus(): Promise<IGetStatusResponse>
```

Get the calendar scheduler status

_No parameters._

**Returns:** `Promise<IGetStatusResponse>` — Promise resolving to scheduler status information

[Full reference →](./getStatus)

---

### `getTriggeredEvents`

```typescript
plugin.calendar.getTriggeredEvents(params: IGetTriggeredEventsParams): Promise<IGetTriggeredEventsResponse>
```

Get triggered events (events whose start time has passed)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetTriggeredEventsParams` | Yes | Optional parameters including includeCompleted flag _(default: `{}`)_ |

**Returns:** `Promise<IGetTriggeredEventsResponse>` — Promise resolving to triggered events

[Full reference →](./getTriggeredEvents)

---

### `getTriggeredEventsAndMarkComplete`

```typescript
plugin.calendar.getTriggeredEventsAndMarkComplete(): Promise<IGetTriggeredEventsAndMarkCompleteResponse>
```

Get triggered events and mark them all as complete in one operation

_No parameters._

**Returns:** `Promise<IGetTriggeredEventsAndMarkCompleteResponse>` — Promise resolving to the events that were retrieved and marked complete

[Full reference →](./getTriggeredEventsAndMarkComplete)

---

### `getUpcomingEvents`

```typescript
plugin.calendar.getUpcomingEvents(params: IGetUpcomingEventsParams): Promise<IGetUpcomingEventsResponse>
```

Get upcoming events within a specified time window

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetUpcomingEventsParams` | Yes | Optional parameters including withinMinutes (default: 60) _(default: `{}`)_ |

**Returns:** `Promise<IGetUpcomingEventsResponse>` — Promise resolving to upcoming events

[Full reference →](./getUpcomingEvents)

---

### `listEvents`

```typescript
plugin.calendar.listEvents(params: IListEventsParams): Promise<IListEventsResponse>
```

List calendar events with optional filters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IListEventsParams` | Yes | Optional filter parameters _(default: `{}`)_ |

**Returns:** `Promise<IListEventsResponse>` — Promise resolving to list of events

[Full reference →](./listEvents)

---

### `markEventComplete`

```typescript
plugin.calendar.markEventComplete(params: IMarkEventCompleteParams): Promise<IMarkEventCompleteResponse>
```

Mark a single event as complete

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IMarkEventCompleteParams` | Yes | Parameters including eventId |

**Returns:** `Promise<IMarkEventCompleteResponse>` — Promise resolving to the completed event

[Full reference →](./markEventComplete)

---

### `markEventsComplete`

```typescript
plugin.calendar.markEventsComplete(params: IMarkEventsCompleteParams): Promise<IMarkEventsCompleteResponse>
```

Mark multiple events as complete

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IMarkEventsCompleteParams` | Yes | Parameters including array of eventIds |

**Returns:** `Promise<IMarkEventsCompleteResponse>` — Promise resolving to the completed events

[Full reference →](./markEventsComplete)

---

### `rsvp`

```typescript
plugin.calendar.rsvp(params: IRSVPParams): Promise<IRSVPResponse>
```

RSVP to a calendar event

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IRSVPParams` | Yes | Parameters including eventId, participantId, and status |

**Returns:** `Promise<IRSVPResponse>` — Promise resolving to the updated event

[Full reference →](./rsvp)

---

### `updateEvent`

```typescript
plugin.calendar.updateEvent(params: IUpdateEventParams): Promise<IUpdateEventResponse>
```

Update an existing calendar event

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IUpdateEventParams` | Yes | Event update parameters including eventId |

**Returns:** `Promise<IUpdateEventResponse>` — Promise resolving to the updated event

[Full reference →](./updateEvent)

