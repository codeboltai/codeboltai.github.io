---
name: appendEvents
cbbaseinfo:
  description: Appends multiple events to an event log stream in a batch.
cbparameters:
  parameters:
    - name: params
      type: AppendEventsParams
      required: true
      description: Parameters including instanceId, events array, and autoCreateInstance option.
  returns:
    signatureTypeName: "Promise<EventLogAppendMultipleResponse>"
    description: A promise that resolves with all appended events and count.
data:
  name: appendEvents
  category: eventLog
  link: appendEvents.md
---
# appendEvents

```typescript
codebolt.eventLog.appendEvents(params: undefined): Promise<EventLogAppendMultipleResponse>
```

Appends multiple events to an event log stream in a batch.
### Parameters

- **`params`** (unknown): Parameters including instanceId, events array, and autoCreateInstance option.

### Returns

- **`Promise<[EventLogAppendMultipleResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/EventLogAppendMultipleResponse)>`**: A promise that resolves with all appended events and count.

### Response Structure

```typescript
{
  type: 'eventLog.appendEvents',
  success: boolean,
  data?: {
    events: Array<{
      id: string;
      instanceId: string;
      stream_id: string;
      event_type: string;
      payload: Record<string, any>;
      metadata: Record<string, any>;
      timestamp: string;
      sequence_number: number;
    }>;
    count: number;
  }
}
```

### Examples

#### Example 1: Batch User Activity Events
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.appendEvents({
  instanceId: 'user-activity-log',
  events: [
    {
      streamId: 'user-123',
      eventType: 'page_view',
      payload: { page: '/home', duration: 5000 }
    },
    {
      streamId: 'user-123',
      eventType: 'page_view',
      payload: { page: '/profile', duration: 3000 }
    },
    {
      streamId: 'user-123',
      eventType: 'button_click',
      payload: { button: 'save', page: '/profile' }
    }
  ]
});

console.log(`Logged ${result.data.count} events`);
```

#### Example 2: Import Historical Events
```javascript
const historicalEvents = [
  { streamId: 'order-1', eventType: 'OrderCreated', payload: { orderId: '1', total: 100 } },
  { streamId: 'order-1', eventType: 'OrderPaid', payload: { orderId: '1', amount: 100 } },
  { streamId: 'order-1', eventType: 'OrderShipped', payload: { orderId: '1', tracking: 'ABC123' } }
];

const result = await codebolt.eventLog.appendEvents({
  instanceId: 'order-events',
  events: historicalEvents
});

console.log(`Imported ${result.data.count} historical events`);
```

#### Example 3: Log Batch Processing Results
```javascript
async function logBatchProcessing(batchId, results) {
  const events = results.map(result => ({
    streamId: `batch-${batchId}`,
    eventType: result.success ? 'item_processed' : 'item_failed',
    payload: {
      itemId: result.id,
      status: result.success ? 'success' : 'error',
      error: result.error,
      processingTime: result.duration
    }
  }));

  const result = await codebolt.eventLog.appendEvents({
    instanceId: 'processing-log',
    events
  });

  return result.data.count;
}
```

#### Example 4: Multi-Stream Events
```javascript
const result = await codebolt.eventLog.appendEvents({
  instanceId: 'system-events',
  events: [
    { streamId: 'auth', eventType: 'login_attempt', payload: { userId: 'user-1' } },
    { streamId: 'database', eventType: 'query_executed', payload: { query: 'SELECT...' } },
    { streamId: 'cache', eventType: 'cache_miss', payload: { key: 'user-1' } }
  ]
});
```

#### Example 5: Performance Monitoring Batch
```javascript
const metrics = [
  { streamId: 'api-metrics', eventType: 'request', payload: { endpoint: '/users', duration: 120 } },
  { streamId: 'api-metrics', eventType: 'request', payload: { endpoint: '/users', duration: 95 } },
  { streamId: 'api-metrics', eventType: 'request', payload: { endpoint: '/users', duration: 110 } }
];

const result = await codebolt.eventLog.appendEvents({
  instanceId: 'performance-log',
  events: metrics
});

console.log(`Logged ${result.data.count} performance metrics`);
```

#### Example 6: State Transition Events
```javascript
const stateTransitions = [
  { streamId: 'order-456', eventType: 'OrderCreated', payload: { state: 'created' } },
  { streamId: 'order-456', eventType: 'OrderValidated', payload: { state: 'validated' } },
  { streamId: 'order-456', eventType: 'OrderConfirmed', payload: { state: 'confirmed' } }
];

const result = await codebolt.eventLog.appendEvents({
  instanceId: 'order-state-log',
  events: stateTransitions,
  autoCreateInstance: true
});
```

### Common Use Cases
**Bulk Import**: Import large numbers of historical events.
**Batch Processing**: Log results from batch jobs.
**Performance Monitoring**: Record multiple metrics simultaneously.
**Multi-Stream Logging**: Write to multiple streams in one operation.
**Event Replays**: Batch events for replay systems.
**Data Migration**: Migrate events from other systems.

### Notes
- More efficient than multiple single append operations
- All events are appended atomically
- Sequence numbers are assigned per stream
- Use for bulk imports and batch operations
- Consider size limits for very large batches
- Events maintain their order within the array