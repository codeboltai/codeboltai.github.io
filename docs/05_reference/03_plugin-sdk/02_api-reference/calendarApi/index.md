---
title: CalendarApi API
---

# CalendarApi API

The `calendarApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`completeEvent`](./completeEvent) |  |
| [`completeEvents`](./completeEvents) |  |
| [`completeTriggered`](./completeTriggered) |  |
| [`createEvent`](./createEvent) |  |
| [`deleteEvent`](./deleteEvent) |  |
| [`getEvent`](./getEvent) |  |
| [`getIndex`](./getIndex) |  |
| [`getRange`](./getRange) |  |
| [`getStatus`](./getStatus) |  |
| [`getTriggered`](./getTriggered) |  |
| [`getUpcoming`](./getUpcoming) |  |
| [`listEvents`](./listEvents) |  |
| [`rsvp`](./rsvp) |  |
| [`updateEvent`](./updateEvent) |  |

## Methods

---

### `completeEvent`

```typescript
plugin.calendarApi.completeEvent(id: string, data?: CompleteEventRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `CompleteEventRequest` | No |  |

**Returns:** `Promise<void>`

[Full reference →](./completeEvent)

---

### `completeEvents`

```typescript
plugin.calendarApi.completeEvents(data: BulkCompleteEventsRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BulkCompleteEventsRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./completeEvents)

---

### `completeTriggered`

```typescript
plugin.calendarApi.completeTriggered(data: CompleteTriggeredRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CompleteTriggeredRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./completeTriggered)

---

### `createEvent`

```typescript
plugin.calendarApi.createEvent(data: CreateCalendarEventRequest): Promise<CalendarEvent>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateCalendarEventRequest` | Yes |  |

**Returns:** `Promise<CalendarEvent>`

[Full reference →](./createEvent)

---

### `deleteEvent`

```typescript
plugin.calendarApi.deleteEvent(id: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteEvent)

---

### `getEvent`

```typescript
plugin.calendarApi.getEvent(id: string): Promise<CalendarEvent>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<CalendarEvent>`

[Full reference →](./getEvent)

---

### `getIndex`

```typescript
plugin.calendarApi.getIndex(params?: CalendarFilterOptions): Promise<CalendarIndexEntry[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

**Returns:** `Promise<CalendarIndexEntry[]>`

[Full reference →](./getIndex)

---

### `getRange`

```typescript
plugin.calendarApi.getRange(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

**Returns:** `Promise<CalendarEvent[]>`

[Full reference →](./getRange)

---

### `getStatus`

```typescript
plugin.calendarApi.getStatus(): Promise<CalendarStatus>
```



_No parameters._

**Returns:** `Promise<CalendarStatus>`

[Full reference →](./getStatus)

---

### `getTriggered`

```typescript
plugin.calendarApi.getTriggered(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

**Returns:** `Promise<CalendarEvent[]>`

[Full reference →](./getTriggered)

---

### `getUpcoming`

```typescript
plugin.calendarApi.getUpcoming(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

**Returns:** `Promise<CalendarEvent[]>`

[Full reference →](./getUpcoming)

---

### `listEvents`

```typescript
plugin.calendarApi.listEvents(params?: CalendarFilterOptions): Promise<CalendarEventSummary[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

**Returns:** `Promise<CalendarEventSummary[]>`

[Full reference →](./listEvents)

---

### `rsvp`

```typescript
plugin.calendarApi.rsvp(id: string, data: CalendarRSVPRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `CalendarRSVPRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./rsvp)

---

### `updateEvent`

```typescript
plugin.calendarApi.updateEvent(id: string, data: UpdateCalendarEventRequest): Promise<CalendarEvent>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateCalendarEventRequest` | Yes |  |

**Returns:** `Promise<CalendarEvent>`

[Full reference →](./updateEvent)

