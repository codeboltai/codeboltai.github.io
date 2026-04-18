---
title: CalendarApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: CalendarApi

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:24

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

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:25

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

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:89

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `CompleteEventRequest` |

#### Returns

`Promise`\<`void`\>

***

### completeEvents()

```ts
completeEvents(data: BulkCompleteEventsRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:93

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `BulkCompleteEventsRequest` |

#### Returns

`Promise`\<`void`\>

***

### completeTriggered()

```ts
completeTriggered(data: CompleteTriggeredRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CompleteTriggeredRequest` |

#### Returns

`Promise`\<`void`\>

***

### createEvent()

```ts
createEvent(data: CreateCalendarEventRequest): Promise<CalendarEvent>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateCalendarEventRequest` |

#### Returns

`Promise`\<`CalendarEvent`\>

***

### deleteEvent()

```ts
deleteEvent(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

***

### getEvent()

```ts
getEvent(id: string): Promise<CalendarEvent>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`CalendarEvent`\>

***

### getIndex()

```ts
getIndex(params?: CalendarFilterOptions): Promise<CalendarIndexEntry[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:67

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `CalendarFilterOptions` |

#### Returns

`Promise`\<`CalendarIndexEntry`[]\>

***

### getRange()

```ts
getRange(params?: CalendarFilterOptions): Promise<CalendarEvent[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:51

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `CalendarFilterOptions` |

#### Returns

`Promise`\<`CalendarEvent`[]\>

***

### getStatus()

```ts
getStatus(): Promise<CalendarStatus>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:73

#### Returns

`Promise`\<`CalendarStatus`\>

***

### getTriggered()

```ts
getTriggered(params?: CalendarFilterOptions): Promise<CalendarEvent[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:79

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `CalendarFilterOptions` |

#### Returns

`Promise`\<`CalendarEvent`[]\>

***

### getUpcoming()

```ts
getUpcoming(params?: CalendarFilterOptions): Promise<CalendarEvent[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `CalendarFilterOptions` |

#### Returns

`Promise`\<`CalendarEvent`[]\>

***

### listEvents()

```ts
listEvents(params?: CalendarFilterOptions): Promise<CalendarEventSummary[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `CalendarFilterOptions` |

#### Returns

`Promise`\<`CalendarEventSummary`[]\>

***

### rsvp()

```ts
rsvp(id: string, data: CalendarRSVPRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `CalendarRSVPRequest` |

#### Returns

`Promise`\<`void`\>

***

### updateEvent()

```ts
updateEvent(id: string, data: UpdateCalendarEventRequest): Promise<CalendarEvent>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/calendar.api.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateCalendarEventRequest` |

#### Returns

`Promise`\<`CalendarEvent`\>
