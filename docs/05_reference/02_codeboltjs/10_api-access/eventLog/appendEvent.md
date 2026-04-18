---
name: appendEvent
cbbaseinfo:
  description: Appends a single event to an event log stream.
cbparameters:
  parameters:
    - name: params
      type: AppendEventParams
      required: true
      description: Event parameters including instanceId, streamId, eventType, payload, and metadata.
  returns:
    signatureTypeName: "Promise<EventLogAppendResponse>"
    description: A promise that resolves with the appended event details.
data:
  name: appendEvent
  category: eventLog
  link: appendEvent.md
---
# appendEvent

```typescript
codebolt.eventLog.appendEvent(params: undefined): Promise<EventLogAppendResponse>
```

Appends a single event to an event log stream.
### Parameters

- **`params`** (unknown): Event parameters including instanceId, streamId, eventType, payload, and metadata.

### Returns

- **`Promise<[EventLogAppendResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/EventLogAppendResponse)>`**: A promise that resolves with the appended event details.

### Response Structure

```typescript
{
  type: 'eventLog.appendEvent',
  success: boolean,
  data?: {
    event: {
      id: string;
      instanceId: string;
      stream_id: string;
      event_type: string;
      payload: Record<string, any>;
      metadata: Record<string, any>;
      timestamp: string;
      sequence_number: number;
    }
  }
}
```

### Examples

#### Example 1: Log User Login
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.appendEvent({
  instanceId: 'user-activity-log',
  streamId: 'user-123',
  eventType: 'user_login',
  payload: {
    userId: 'user-123',
    timestamp: Date.now(),
    method: 'password',
    ip: '192.168.1.1'
  },
  metadata: {
    source: 'web-app',
    version: '1.0.0'
  }
});

console.log('Event logged, sequence:', result.data.event.sequence_number);
```

#### Example 2: Record API Call
```javascript
const result = await codebolt.eventLog.appendEvent({
  instanceId: 'api-log',
  streamId: 'api-calls',
  eventType: 'api_request',
  payload: {
    endpoint: '/api/users',
    method: 'GET',
    userId: 'user-123',
    responseTime: 125,
    statusCode: 200
  },
  metadata: {
    userAgent: 'Mozilla/5.0...',
    timestamp: Date.now()
  }
});
```

#### Example 3: Track Order Events (Event Sourcing)
```javascript
const result = await codebolt.eventLog.appendEvent({
  instanceId: 'order-events',
  streamId: `order-${orderId}`,
  eventType: 'OrderCreated',
  payload: {
    orderId,
    customerId: 'customer-456',
    items: [
      { productId: 'prod-1', quantity: 2, price: 29.99 }
    ],
    totalAmount: 59.98,
    createdAt: Date.now()
  }
});
```

#### Example 4: Log System Error
```javascript
const result = await codebolt.eventLog.appendEvent({
  instanceId: 'system-errors',
  streamId: 'errors',
  eventType: 'error_occurred',
  payload: {
    errorType: 'DatabaseConnectionError',
    message: 'Failed to connect to database',
    stack: 'Error: Failed to connect\n    at ...',
    service: 'payment-service',
    severity: 'critical'
  },
  metadata: {
    hostname: 'server-01',
    environment: 'production',
    timestamp: Date.now()
  }
});
```

#### Example 5: Record State Change
```javascript
const result = await codebolt.eventLog.appendEvent({
  instanceId: 'state-changes',
  streamId: `workflow-${workflowId}`,
  eventType: 'WorkflowStateChanged',
  payload: {
    workflowId,
    oldState: 'pending',
    newState: 'in_progress',
    changedBy: 'system',
    reason: 'Timer triggered'
  }
});
```

#### Example 6: Auto-Create Instance if Needed
```javascript
const result = await codebolt.eventLog.appendEvent({
  instanceId: 'new-instance',
  streamId: 'events',
  eventType: 'test_event',
  payload: { data: 'test' },
  autoCreateInstance: true
});

if (result.success) {
  console.log('Event logged (instance auto-created if needed)');
}
```

### Common Use Cases
**User Activity Tracking**: Log user actions for analytics and audit trails.
**API Monitoring**: Record API calls for performance analysis and debugging.
**Event Sourcing**: Store state changes as events for event sourcing patterns.
**Error Logging**: Track errors and exceptions for monitoring and alerting.
**Audit Trails**: Record all changes to sensitive data for compliance.
**System Events**: Log system-level events for monitoring and diagnostics.

### Notes
- Events are immutable once appended
- Each event gets a unique sequence number within its stream
- Timestamps are automatically generated if not provided
- Use streamId to group related events
- Payload can be any JSON-serializable object
- Metadata is for contextual information about the event
- Use autoCreateInstance to automatically create the instance if it doesn't exist
