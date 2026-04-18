---
title: EventLog API
---

# EventLog API

The `eventLog` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`appendEvent`](./appendEvent) | Append a single event to the log |
| [`appendEvents`](./appendEvents) | Append multiple events to the log |
| [`createInstance`](./createInstance) | Create a new event log instance |
| [`deleteInstance`](./deleteInstance) | Delete an event log instance |
| [`getInstance`](./getInstance) | Get an event log instance by ID |
| [`getInstanceStats`](./getInstanceStats) | Get instance statistics |
| [`listInstances`](./listInstances) | List all event log instances |
| [`queryEvents`](./queryEvents) | Query events using DSL |
| [`updateInstance`](./updateInstance) | Update an event log instance |

## Methods

---

### `appendEvent`

```typescript
plugin.eventLog.appendEvent(params: AppendEventParams): Promise<EventLogAppendResponse>
```

Append a single event to the log

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `AppendEventParams` | Yes | Event parameters |

**Returns:** `Promise<EventLogAppendResponse>`

[Full reference →](./appendEvent)

---

### `appendEvents`

```typescript
plugin.eventLog.appendEvents(params: AppendEventsParams): Promise<EventLogAppendMultipleResponse>
```

Append multiple events to the log

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `AppendEventsParams` | Yes | Events parameters |

**Returns:** `Promise<EventLogAppendMultipleResponse>`

[Full reference →](./appendEvents)

---

### `createInstance`

```typescript
plugin.eventLog.createInstance(name: string, description?: string): Promise<EventLogInstanceResponse>
```

Create a new event log instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Instance name |
| `description` | `string` | No | Optional description |

**Returns:** `Promise<EventLogInstanceResponse>`

[Full reference →](./createInstance)

---

### `deleteInstance`

```typescript
plugin.eventLog.deleteInstance(instanceId: string): Promise<EventLogInstanceResponse>
```

Delete an event log instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

**Returns:** `Promise<EventLogInstanceResponse>`

[Full reference →](./deleteInstance)

---

### `getInstance`

```typescript
plugin.eventLog.getInstance(instanceId: string): Promise<EventLogInstanceResponse>
```

Get an event log instance by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

**Returns:** `Promise<EventLogInstanceResponse>`

[Full reference →](./getInstance)

---

### `getInstanceStats`

```typescript
plugin.eventLog.getInstanceStats(instanceId: string): Promise<EventLogStatsResponse>
```

Get instance statistics

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

**Returns:** `Promise<EventLogStatsResponse>`

[Full reference →](./getInstanceStats)

---

### `listInstances`

```typescript
plugin.eventLog.listInstances(): Promise<EventLogInstanceListResponse>
```

List all event log instances

_No parameters._

**Returns:** `Promise<EventLogInstanceListResponse>`

[Full reference →](./listInstances)

---

### `queryEvents`

```typescript
plugin.eventLog.queryEvents(query: EventLogDSL): Promise<EventLogQueryResponse>
```

Query events using DSL

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `EventLogDSL` | Yes | Query DSL object |

**Returns:** `Promise<EventLogQueryResponse>`

[Full reference →](./queryEvents)

---

### `updateInstance`

```typescript
plugin.eventLog.updateInstance(instanceId: string, updates: UpdateEventLogInstanceParams): Promise<EventLogInstanceResponse>
```

Update an event log instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `updates` | `UpdateEventLogInstanceParams` | Yes | Update parameters |

**Returns:** `Promise<EventLogInstanceResponse>`

[Full reference →](./updateInstance)

