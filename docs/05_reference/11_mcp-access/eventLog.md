---
title: Event Log MCP
sidebar_label: codebolt.eventLog
sidebar_position: 77
---

# codebolt.eventLog

Comprehensive event logging tools for managing event log instances, appending events, querying with DSL, and retrieving statistics. Provides a powerful event streaming system with query capabilities.

## Available Tools

**Instance Management (4 tools)**
- `eventlog_create_instance` - Creates a new event log instance
- `eventlog_get_instance` - Gets an event log instance by ID
- `eventlog_list_instances` - Lists all event log instances
- `eventlog_update_instance` - Updates an event log instance
- `eventlog_delete_instance` - Deletes an event log instance

**Event Operations (3 tools)**
- `eventlog_append_event` - Appends a single event to an event log instance
- `eventlog_append_events` - Appends multiple events to an event log instance
- `eventlog_query_events` - Queries events using DSL

**Statistics (1 tool)**
- `eventlog_get_instance_stats` - Gets statistics for an event log instance

## Tool Parameters

### Instance Management

#### eventlog_create_instance
Creates a new event log instance for storing events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Name of the event log instance |
| description | string | No | Description of the event log instance |

#### eventlog_get_instance
Retrieves a specific event log instance by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | ID of the event log instance to retrieve |

#### eventlog_list_instances
Lists all available event log instances.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### eventlog_update_instance
Updates an existing event log instance with partial updates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | ID of the event log instance to update |
| name | string | No | New name for the instance |
| description | string | No | New description for the instance |

#### eventlog_delete_instance
Deletes an event log instance by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | ID of the event log instance to delete |

### Event Operations

#### eventlog_append_event
Appends a single event to an event log instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | ID of the event log instance |
| stream_id | string | No | Stream ID for the event |
| streamId | string | No | Alternative parameter for stream ID |
| event_type | string | No | Type of the event |
| eventType | string | No | Alternative parameter for event type |
| payload | object | No | Event payload (key-value pairs) |
| metadata | object | No | Event metadata (key-value pairs) |
| autoCreateInstance | boolean | No | Auto-create instance if not exists |

**Event Parameters Note**: Both `stream_id`/`streamId` and `event_type`/`eventType` are supported for compatibility.

#### eventlog_append_events
Appends multiple events to an event log instance in a single operation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | ID of the event log instance |
| events | object[] | Yes | Array of event objects to append |
| autoCreateInstance | boolean | No | Auto-create instance if not exists |

**Event Object Structure** (within events array):
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| stream_id | string | No | Stream ID for the event |
| streamId | string | No | Alternative parameter for stream ID |
| event_type | string | No | Type of the event |
| eventType | string | No | Alternative parameter for event type |
| payload | object | No | Event payload |
| metadata | object | No | Event metadata |

#### eventlog_query_events
Queries events from an event log instance using the Event Log DSL.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | object | Yes | Event log query DSL object |

**Query DSL Structure**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| from | object | Yes | Source specification |
| from.instance | string | Yes | Instance ID to query from |
| from.stream | string | No | Optional stream ID to filter by |
| where | object[] | No | Array of condition objects for filtering |
| select | string[] | No | Array of fields to select from events |
| orderBy | object | No | Sort specification |
| orderBy.field | string | No | Field to sort by |
| orderBy.direction | string | No | Sort direction: 'asc' or 'desc' |
| limit | number | No | Maximum number of events to return |
| offset | number | No | Number of events to skip |
| reduce | object | No | Aggregation/reduction operation |
| reduce.type | string | No | Aggregation type: 'count', 'sum', 'avg', 'min', 'max', 'collect' |
| reduce.field | string | No | Field to aggregate (required for sum, avg, min, max) |
| reduce.groupBy | string[] | No | Fields to group by for aggregation |

**Condition Object Structure** (within where array):
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| field | string | Yes | Field name to filter on |
| operator | string | Yes | Comparison operator |
| value | any | Yes | Value to compare against |

**Supported Operators**:
- `eq` - Equal to
- `neq` - Not equal to
- `gt` - Greater than
- `gte` - Greater than or equal to
- `lt` - Less than
- `lte` - Less than or equal to
- `contains` - Contains substring
- `in` - In array of values
- `between` - Between two values

### Statistics

#### eventlog_get_instance_stats
Retrieves statistics for a specific event log instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | ID of the event log instance |

## Sample Usage

### Creating and Managing Event Log Instances

```javascript
// Create a new event log instance
const instance = await codebolt.eventLog.eventlog_create_instance({
  name: 'application_events',
  description: 'Application-level event logging'
});

// List all event log instances
const instances = await codebolt.eventLog.eventlog_list_instances({});

// Get a specific instance
const instanceDetails = await codebolt.eventLog.eventlog_get_instance({
  instanceId: instance.id
});

// Update an instance
await codebolt.eventLog.eventlog_update_instance({
  instanceId: instance.id,
  name: 'app_events_prod',
  description: 'Production application event logs'
});

// Delete an instance
await codebolt.eventLog.eventlog_delete_instance({
  instanceId: instance.id
});
```

### Appending Events

```javascript
// Append a single event
const event = await codebolt.eventLog.eventlog_append_event({
  instanceId: 'instance_123',
  stream_id: 'user_actions',
  event_type: 'user_login',
  payload: {
    userId: 'user_456',
    timestamp: new Date().toISOString(),
    ip: '192.168.1.1'
  },
  metadata: {
    source: 'web_app',
    environment: 'production'
  }
});

// Append multiple events in batch
const batchResult = await codebolt.eventLog.eventlog_append_events({
  instanceId: 'instance_123',
  events: [
    {
      stream_id: 'user_actions',
      event_type: 'user_click',
      payload: {
        userId: 'user_456',
        button: 'submit_form',
        page: '/checkout'
      }
    },
    {
      stream_id: 'user_actions',
      event_type: 'user_view',
      payload: {
        userId: 'user_456',
        page: '/dashboard'
      }
    },
    {
      stream_id: 'api_calls',
      event_type: 'api_request',
      payload: {
        endpoint: '/api/users',
        method: 'GET',
        statusCode: 200,
        responseTime: 45
      }
    }
  ]
});
```

### Querying Events with DSL

```javascript
// Query all events from an instance
const allEvents = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123'
    }
  }
});

// Query events from a specific stream with filtering
const userEvents = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123',
      stream: 'user_actions'
    },
    where: [
      {
        field: 'event_type',
        operator: 'eq',
        value: 'user_login'
      }
    ],
    orderBy: {
      field: 'timestamp',
      direction: 'desc'
    },
    limit: 100
  }
});

// Query with multiple conditions
const recentErrors = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123',
      stream: 'api_calls'
    },
    where: [
      {
        field: 'statusCode',
        operator: 'gte',
        value: 400
      },
      {
        field: 'responseTime',
        operator: 'gt',
        value: 1000
      }
    ],
    select: ['event_type', 'payload', 'timestamp', 'sequence_number'],
    orderBy: {
      field: 'timestamp',
      direction: 'desc'
    },
    limit: 50
  }
});

// Query with time range
const todayEvents = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123'
    },
    where: [
      {
        field: 'timestamp',
        operator: 'between',
        value: ['2024-01-01T00:00:00Z', '2024-01-02T00:00:00Z']
      }
    ]
  }
});

// Query with aggregation
const stats = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123',
      stream: 'api_calls'
    },
    reduce: {
      type: 'count'
    }
  }
});

// Query with grouping and aggregation
const avgResponseByEndpoint = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123',
      stream: 'api_calls'
    },
    reduce: {
      type: 'avg',
      field: 'responseTime',
      groupBy: ['payload.endpoint']
    }
  }
});

// Query with complex operators
const userActions = await codebolt.eventLog.eventlog_query_events({
  query: {
    from: {
      instance: 'instance_123',
      stream: 'user_actions'
    },
    where: [
      {
        field: 'event_type',
        operator: 'in',
        value: ['user_login', 'user_logout', 'user_click']
      },
      {
        field: 'payload.userId',
        operator: 'contains',
        value: 'admin'
      }
    ]
  }
});
```

### Getting Instance Statistics

```javascript
// Get statistics for an instance
const stats = await codebolt.eventLog.eventlog_get_instance_stats({
  instanceId: 'instance_123'
});
```

### Auto-Creating Instances

```javascript
// Auto-create instance when appending events
await codebolt.eventLog.eventlog_append_event({
  instanceId: 'new_instance',
  stream_id: 'logs',
  event_type: 'system_start',
  payload: {
    message: 'System started'
  },
  autoCreateInstance: true
});

// Auto-create instance with multiple events
await codebolt.eventLog.eventlog_append_events({
  instanceId: 'new_instance',
  events: [
    {
      stream_id: 'logs',
      event_type: 'info',
      payload: { message: 'Application initialized' }
    },
    {
      stream_id: 'logs',
      event_type: 'info',
      payload: { message: 'Database connected' }
    }
  ],
  autoCreateInstance: true
});
```

### Using Alternative Parameter Names

```javascript
// Using eventType and streamId (alternative names)
await codebolt.eventLog.eventlog_append_event({
  instanceId: 'instance_123',
  streamId: 'user_actions',
  eventType: 'user_click',
  payload: {
    userId: 'user_456',
    button: 'submit'
  }
});

// Mixing parameter styles in batch events
await codebolt.eventLog.eventlog_append_events({
  instanceId: 'instance_123',
  events: [
    {
      stream_id: 'logs',
      event_type: 'error',
      payload: { error: 'Something went wrong' }
    },
    {
      streamId: 'metrics',
      eventType: 'performance',
      payload: { metric: 'cpu_usage', value: 75 }
    }
  ]
});
```

:::info
**Event Log DSL and Event Streams**

The Event Log system uses a powerful DSL (Domain Specific Language) for querying events with the following key concepts:

**Event Streams**: Events can be organized into logical streams within an instance. A stream represents a category or source of events (e.g., 'user_actions', 'api_calls', 'system_logs'). Streams help organize and filter events efficiently.

**Query Structure**:
- `from`: Specifies the data source (required instance, optional stream)
- `where`: Defines filtering conditions using field operators
- `select`: Specifies which fields to return in results
- `orderBy`: Controls result sorting with field and direction
- `limit`/`offset`: Implements pagination for large result sets
- `reduce`: Supports aggregation operations including count, sum, avg, min, max, and collect

**Field Operators**:
- Comparison operators: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`
- String matching: `contains`
- Array matching: `in`
- Range matching: `between`

**Event Structure**:
Each event contains:
- `id`: Unique event identifier
- `instanceId`: Parent instance ID
- `stream_id`: Stream identifier
- `event_type`: Event type/category
- `payload`: Event data (structured object)
- `metadata`: Additional context (structured object)
- `timestamp`: Event creation timestamp (ISO 8601)
- `sequence_number`: Sequential number within instance

**Event Log Instance**: An isolated container for events with its own configuration (name, description, timestamps). Each instance maintains independent event sequences and can be queried independently.

**Auto-Instance Creation**: The `autoCreateInstance` flag allows appending events to non-existent instances, automatically creating them on first use. This is useful for dynamic event scenarios where instances are created based on event data.

**Performance Considerations**: Querying with stream filters is more efficient than filtering by stream in where clauses. Use indexes on frequently queried fields when available.
:::
