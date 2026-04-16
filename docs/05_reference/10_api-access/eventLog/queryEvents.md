---
name: queryEvents
cbbaseinfo:
  description: Queries events using a flexible DSL with filtering, sorting, and aggregation capabilities.
cbparameters:
  parameters:
    - name: query
      type: EventLogDSL
      required: true
      description: Query DSL object with from, where, orderBy, limit, offset, and reduce clauses.
  returns:
    signatureTypeName: "Promise<EventLogQueryResponse>"
    description: A promise that resolves with matching events or aggregations.
data:
  name: queryEvents
  category: eventLog
  link: queryEvents.md
---
# queryEvents

```typescript
codebolt.eventLog.queryEvents(query: undefined): Promise<EventLogQueryResponse>
```

Queries events using a flexible DSL with filtering, sorting, and aggregation capabilities.
### Parameters

- **`query`** (unknown): Query DSL object with from, where, orderBy, limit, offset, and reduce clauses.

### Returns

- **`Promise<[EventLogQueryResponse](/docs/reference/type-reference/codeboltjs/interfaces/EventLogQueryResponse)>`**: A promise that resolves with matching events or aggregations.

### Response Structure

```typescript
{
  type: 'eventLog.queryEvents',
  success: boolean,
  data?: {
    result: {
      events?: EventLogEntry[];
      aggregation?: any;
      total: number;
      limit?: number;
      offset?: number;
    }
  }
}
```

### Examples

#### Example 1: Query All Events in Stream
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.queryEvents({
  from: {
    instance: 'user-activity-log',
    stream: 'user-123'
  },
  orderBy: {
    field: 'timestamp',
    direction: 'desc'
  },
  limit: 50
});

console.log(`Found ${result.data.result.total} events`);
result.data.result.events?.forEach(event => {
  console.log(`${event.event_type}: ${event.timestamp}`);
});
```

#### Example 2: Filter by Event Type
```javascript
const result = await codebolt.eventLog.queryEvents({
  from: { instance: 'api-log' },
  where: [
    { field: 'event_type', operator: 'eq', value: 'api_request' }
  ],
  orderBy: {
    field: 'timestamp',
    direction: 'desc'
  },
  limit: 100
});
```

#### Example 3: Time Range Query
```javascript
const startTime = new Date('2024-01-01').getTime();
const endTime = new Date('2024-01-31').getTime();

const result = await codebolt.eventLog.queryEvents({
  from: { instance: 'system-events' },
  where: [
    { field: 'timestamp', operator: 'gte', value: startTime },
    { field: 'timestamp', operator: 'lte', value: endTime }
  ],
  orderBy: {
    field: 'timestamp',
    direction: 'asc'
  }
});
```

#### Example 4: Aggregate by Event Type
```javascript
const result = await codebolt.eventLog.queryEvents({
  from: { instance: 'user-activity-log' },
  where: [
    { field: 'timestamp', operator: 'gte', value: Date.now() - 86400000 }
  ],
  reduce: {
    type: 'count',
    groupBy: ['event_type']
  }
});

console.log('Event counts by type:', result.data.result.aggregation);
```

#### Example 5: Pagination
```javascript
async function getEventsPage(instanceId, page = 1, pageSize = 50) {
  const offset = (page - 1) * pageSize;

  const result = await codebolt.eventLog.queryEvents({
    from: { instance: instanceId },
    orderBy: {
      field: 'timestamp',
      direction: 'desc'
    },
    limit: pageSize,
    offset: offset
  });

  return {
    events: result.data.result.events || [],
    total: result.data.result.total,
    page,
    pageSize,
    totalPages: Math.ceil(result.data.result.total / pageSize)
  };
}

const page1 = await getEventsPage('user-activity-log', 1, 50);
console.log(`Page 1 of ${page1.totalPages}`);
```

#### Example 6: Complex Filter with Aggregation
```javascript
const result = await codebolt.eventLog.queryEvents({
  from: { instance: 'api-log' },
  where: [
    { field: 'event_type', operator: 'eq', value: 'api_request' },
    { field: 'payload.statusCode', operator: 'gte', value: 400 },
    { field: 'timestamp', operator: 'gte', value: Date.now() - 3600000 }
  ],
  reduce: {
    type: 'count',
    groupBy: ['payload.statusCode']
  },
  orderBy: {
    field: 'timestamp',
    direction: 'desc'
  }
});

console.log('Error counts by status code:', result.data.result.aggregation);
```

### Common Use Cases
**Audit Trails**: Query all events for a specific entity or user.
**Analytics**: Aggregate events for reporting and insights.
**Debugging**: Find specific events based on filters.
**Monitoring**: Query recent events for system health.
**Compliance**: Extract events for compliance reporting.
**Event Replay**: Retrieve events for replay processing.

### Supported Operators
`eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `contains`, `in`, `between`

### Aggregation Types
`count`, `sum`, `avg`, `min`, `max`, `collect`

### Notes
- Use time range filters to improve query performance
- Filter by stream when possible for faster queries
- Use reduce for aggregations instead of fetching all events
- Set reasonable limits to avoid large result sets
- Sequence numbers provide strict ordering within streams
