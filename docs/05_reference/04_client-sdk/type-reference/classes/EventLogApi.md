---
title: EventLogApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: EventLogApi

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:11

Manages event log instances and their events.

Event logs provide a structured audit trail for tracking actions, state
changes, and system events. Use this API to create log instances, record
events into them, and query historical event data.

## Constructors

### Constructor

```ts
new EventLogApi(http: HttpClient): EventLogApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`EventLogApi`

## Methods

### createEvent()

```ts
createEvent(data: CreateEventLogEventRequest): Promise<EventLogEvent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:126

Creates a new event within an event log instance.

Records a single event with its type, payload, and timestamp. Events
are immutable once created.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateEventLogEventRequest` | Event creation payload including instance ID, type, and data |

#### Returns

`Promise`\<`EventLogEvent`\>

A promise that resolves to the newly created EventLogEvent

#### Example

```typescript
const event = await client.eventLog.createEvent({
  instanceId: 'log-123',
  type: 'file_changed',
  data: { path: 'src/index.ts' },
});
```

***

### createEventsBatch()

```ts
createEventsBatch(data: CreateEventLogEventRequest[]): Promise<EventLogEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:147

Creates multiple events in a single batch operation.

More efficient than creating events one at a time when you have
multiple events to record simultaneously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateEventLogEventRequest`[] | An array of event creation payloads |

#### Returns

`Promise`\<`EventLogEvent`[]\>

A promise that resolves to an array of the created EventLogEvent objects

#### Example

```typescript
const events = await client.eventLog.createEventsBatch([
  { instanceId: 'log-123', type: 'start', data: {} },
  { instanceId: 'log-123', type: 'end', data: {} },
]);
```

***

### createInstance()

```ts
createInstance(data: CreateEventLogInstanceRequest): Promise<EventLogInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:30

Creates a new event log instance.

An event log instance acts as a container that groups related events
together. Create one per logical context (e.g., per agent session or workflow).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateEventLogInstanceRequest` | Instance creation payload including name and configuration |

#### Returns

`Promise`\<`EventLogInstance`\>

A promise that resolves to the newly created EventLogInstance

#### Example

```typescript
const instance = await client.eventLog.createInstance({
  name: 'agent-session-001',
});
```

***

### deleteInstance()

```ts
deleteInstance(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:104

Deletes an event log instance and all its associated events.

Permanently removes the instance. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the event log instance to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.eventLog.deleteInstance('log-123');
```

***

### getInstance()

```ts
getInstance(id: string): Promise<EventLogInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:66

Retrieves a specific event log instance by its ID.

Returns the full details of a single event log instance including
its metadata and configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the event log instance |

#### Returns

`Promise`\<`EventLogInstance`\>

A promise that resolves to the EventLogInstance

#### Example

```typescript
const instance = await client.eventLog.getInstance('log-123');
```

***

### listInstances()

```ts
listInstances(params?: Record<string, unknown>): Promise<EventLogInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:48

Lists all event log instances.

Returns every event log instance in the system. Use optional parameters
to filter or paginate the results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`EventLogInstance`[]\>

A promise that resolves to an array of EventLogInstance objects

#### Example

```typescript
const instances = await client.eventLog.listInstances();
```

***

### query()

```ts
query(data: EventLogQueryRequest): Promise<EventLogEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:168

Queries events using filter criteria.

Searches across event log instances to find events matching specific
types, time ranges, or other filter conditions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `EventLogQueryRequest` | Query parameters specifying filters and sorting |

#### Returns

`Promise`\<`EventLogEvent`[]\>

A promise that resolves to an array of matching EventLogEvent objects

#### Example

```typescript
const errors = await client.eventLog.query({
  instanceId: 'log-123',
  type: 'error',
});
```

***

### updateInstance()

```ts
updateInstance(id: string, data: UpdateEventLogInstanceRequest): Promise<EventLogInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/event-log.api.ts:87

Updates an existing event log instance.

Modifies the instance's properties such as name, description, or
configuration settings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the event log instance to update |
| `data` | `UpdateEventLogInstanceRequest` | The fields to update |

#### Returns

`Promise`\<`EventLogInstance`\>

A promise that resolves to the updated EventLogInstance

#### Example

```typescript
const updated = await client.eventLog.updateInstance('log-123', {
  name: 'renamed-session',
});
```
