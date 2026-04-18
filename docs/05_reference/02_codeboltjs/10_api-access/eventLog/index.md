---
cbapicategory:
  - name: createInstance
    link: /docs/api/apiaccess/eventlog/createInstance
    description: Creates a new event log instance for storing event streams.
  - name: getInstance
    link: /docs/api/apiaccess/eventlog/getInstance
    description: Gets details of a specific event log instance.
  - name: listInstances
    link: /docs/api/apiaccess/eventlog/listInstances
    description: Lists all available event log instances.
  - name: updateInstance
    link: /docs/api/apiaccess/eventlog/updateInstance
    description: Updates the name or description of an event log instance.
  - name: deleteInstance
    link: /docs/api/apiaccess/eventlog/deleteInstance
    description: Deletes an event log instance and all its events.
  - name: appendEvent
    link: /docs/api/apiaccess/eventlog/appendEvent
    description: Appends a single event to an event log stream.
  - name: appendEvents
    link: /docs/api/apiaccess/eventlog/appendEvents
    description: Appends multiple events to an event log stream in a batch.
  - name: queryEvents
    link: /docs/api/apiaccess/eventlog/queryEvents
    description: Queries events using a flexible DSL with filtering and aggregation.
  - name: getInstanceStats
    link: /docs/api/apiaccess/eventlog/getInstanceStats
    description: Gets statistics and metadata for an event log instance.

---
# Event Log API

The Event Log API provides a persistent, append-only log for storing and querying time-series events. It's designed for audit trails, activity logs, event sourcing, and temporal data analysis.

## Overview

The Event Log module enables you to:
- **Store Events**: Record events with payloads and metadata
- **Organize**: Use streams to group related events
- **Query**: Filter and aggregate events using a powerful DSL
- **Analyze**: Perform time-series analysis and aggregations

## Key Concepts

### Instances
An event log instance is a container for event streams. Each instance can have multiple streams for different types of events.

### Streams
Streams are logical groupings of events within an instance. For example, you might have separate streams for different users, services, or event types.

### Events
Each event contains:
- **instanceId**: The ID of the log instance
- **stream_id**: The stream identifier
- **event_type**: Type of the event
- **payload**: Event data (JSON object)
- **metadata**: Additional metadata
- **timestamp**: When the event occurred
- **sequence_number**: Order within the stream

### Sequence Numbers
Events in a stream are assigned sequential numbers, providing strict ordering within each stream.

## Quick Start Example

```javascript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create an event log instance
const instance = await codebolt.eventLog.createInstance(
  'user-activity',
  'Logs user actions and system events'
);
console.log('Created instance:', instance.data.instance.id);

// Append an event
await codebolt.eventLog.appendEvent({
  instanceId: instance.data.instance.id,
  streamId: 'user-123',
  eventType: 'login',
  payload: {
    userId: 'user-123',
    timestamp: Date.now(),
    ip: '192.168.1.1'
  },
  metadata: {
    source: 'web-app',
    version: '1.0.0'
  }
});

// Query events
const result = await codebolt.eventLog.queryEvents({
  from: {
    instance: instance.data.instance.id,
    stream: 'user-123'
  },
  where: [
    { field: 'event_type', operator: 'eq', value: 'login' }
  ],
  orderBy: {
    field: 'timestamp',
    direction: 'desc'
  },
  limit: 10
});

console.log('Recent login events:', result.data.result.events);
```

## Response Structure

All Event Log API functions return responses with a consistent structure:

```javascript
{
  type: 'eventLog.operationName',
  success: true,
  data: {
    // Operation-specific data
  },
  message: 'Optional message',
  error: 'Error details if failed',
  timestamp: '2024-01-19T10:00:00Z',
  requestId: 'unique-request-id'
}
```

## Common Use Cases

### Audit Logging
Track all changes to sensitive data:

```javascript
await codebolt.eventLog.appendEvent({
  instanceId: 'audit-log',
  streamId: 'data-changes',
  eventType: 'record_updated',
  payload: {
    table: 'users',
    recordId: 'user-123',
    changes: { field: 'email', old: 'old@email.com', new: 'new@email.com' },
    performedBy: 'admin-1'
  }
});
```

### Activity Tracking
Monitor user and system activity:

```javascript
await codebolt.eventLog.appendEvent({
  instanceId: 'activity-log',
  streamId: userId,
  eventType: 'page_view',
  payload: {
    page: '/dashboard',
    referrer: '/home',
    duration: 5000
  }
});
```

### Event Sourcing
Store state changes as events:

```javascript
await codebolt.eventLog.appendEvent({
  instanceId: 'order-events',
  streamId: `order-${orderId}`,
  eventType: 'OrderCreated',
  payload: {
    orderId,
    customerId,
    items,
    totalAmount
  }
});
```

### Monitoring and Alerts
Log system events for monitoring:

```javascript
await codebolt.eventLog.appendEvent({
  instanceId: 'system-monitor',
  streamId: 'alerts',
  eventType: 'threshold_exceeded',
  payload: {
    metric: 'cpu_usage',
    value: 95,
    threshold: 80,
    severity: 'warning'
  }
});
```

### Analytics and Reporting
Query events for analysis:

```javascript
const analytics = await codebolt.eventLog.queryEvents({
  from: { instance: 'analytics-log' },
  where: [
    { field: 'timestamp', operator: 'gte', value: startTime },
    { field: 'timestamp', operator: 'lte', value: endTime }
  ],
  reduce: {
    type: 'count',
    groupBy: ['event_type']
  }
});
```

## Query DSL Reference

The event log query DSL supports powerful filtering and aggregation:

```javascript
const query = {
  from: {
    instance: 'instance-id',      // Required
    stream: 'optional-stream'      // Optional
  },
  where: [                          // Optional filters
    {
      field: 'event_type',          // Field to filter
      operator: 'eq',               // Operator
      value: 'login'                // Value
    }
  ],
  select: ['event_type', 'payload'], // Optional: fields to return
  orderBy: {                         // Optional: sort
    field: 'timestamp',
    direction: 'desc'
  },
  limit: 100,                        // Optional: max results
  offset: 0,                         // Optional: pagination
  reduce: {                          // Optional: aggregation
    type: 'count',                   // count, sum, avg, min, max, collect
    field: 'payload.duration',       // Field to aggregate (optional)
    groupBy: ['event_type']          // Grouping fields (optional)
  }
};
```

### Supported Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `eq` | Equal to | `{ field: 'event_type', operator: 'eq', value: 'login' }` |
| `neq` | Not equal to | `{ field: 'event_type', operator: 'neq', value: 'logout' }` |
| `gt` | Greater than | `{ field: 'sequence_number', operator: 'gt', value: 100 }` |
| `gte` | Greater than or equal | `{ field: 'timestamp', operator: 'gte', value: startTime }` |
| `lt` | Less than | `{ field: 'timestamp', operator: 'lt', value: endTime }` |
| `lte` | Less than or equal | `{ field: 'payload.value', operator: 'lte', value: 100 }` |
| `contains` | Contains substring | `{ field: 'payload.message', operator: 'contains', value: 'error' }` |
| `in` | In array | `{ field: 'event_type', operator: 'in', value: ['login', 'logout'] }` |
| `between` | Between values | `{ field: 'timestamp', operator: 'between', value: [start, end] }` |

### Aggregation Types

| Type | Description | Example |
|------|-------------|---------|
| `count` | Count events | `{ type: 'count' }` |
| `sum` | Sum values | `{ type: 'sum', field: 'payload.amount' }` |
| `avg` | Average values | `{ type: 'avg', field: 'payload.duration' }` |
| `min` | Minimum value | `{ type: 'min', field: 'payload.temperature' }` |
| `max` | Maximum value | `{ type: 'max', field: 'payload.score' }` |
| `collect` | Collect all values | `{ type: 'collect', field: 'payload.userId' }` |

## Notes and Best Practices

### Stream Design
- Use meaningful stream IDs (user IDs, session IDs, entity IDs)
- Consider time-based streams for daily/monthly data
- Group related events in the same stream

### Event Design
- Use descriptive event types (past tense verb nouns are common)
- Include all relevant data in the payload
- Use metadata for contextual information

### Performance
- Use `appendEvents` for batch operations
- Set appropriate limits on queries
- Use time-range filters to reduce query size

### Query Optimization
- Filter by stream when possible
- Use indexed fields (stream_id, event_type, timestamp)
- Avoid wildcards in string comparisons

### Error Handling
- Always check the `success` field
- Handle cases where instances don't exist
- Implement retry logic for network issues

<CBAPICategory />
