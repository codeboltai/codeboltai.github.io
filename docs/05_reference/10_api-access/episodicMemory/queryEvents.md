---
name: queryEvents
cbbaseinfo:
  description: Queries events from an episodic memory with optional filters for time range, type, agent, tags, and more.
cbparameters:
  parameters:
    - name: params
      typeName: IQueryEventsParams
      description: Query parameters with optional filters.
      nested:
        - name: memoryId
          typeName: "string | undefined"
          description: "The ID of the memory (or use swarmId)."
        - name: swarmId
          typeName: "string | undefined"
          description: "The ID of the swarm (alternative to memoryId)."
        - name: lastMinutes
          typeName: "number | undefined"
          description: Get events from the last N minutes.
        - name: lastCount
          typeName: "number | undefined"
          description: Get the last N events.
        - name: tags
          typeName: "string[] | undefined"
          description: "Filter by tags (events must have all specified tags)."
        - name: event_type
          typeName: "string | undefined"
          description: Filter by event type.
        - name: emitting_agent_id
          typeName: "string | undefined"
          description: Filter by emitting agent.
        - name: team_id
          typeName: "string | undefined"
          description: Filter by team ID.
        - name: since
          typeName: "string | undefined"
          description: ISO 8601 timestamp to get events since.
  returns:
    signatureTypeName: "Promise<IQueryEventsResponse>"
    description: A promise that resolves to filtered events.
    typeArgs: []
data:
  name: queryEvents
  category: episodicMemory
  link: queryEvents.md
---
# queryEvents

```typescript
codebolt.episodicMemory.queryEvents(params: IQueryEventsParams): Promise<IQueryEventsResponse>
```

Queries events from an episodic memory with optional filters for time range, type, agent, tags, and more.
### Parameters

- **`params`** ([IQueryEventsParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IQueryEventsParams)): Query parameters with optional filters.

### Returns

- **`Promise<[IQueryEventsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IQueryEventsResponse)>`**: A promise that resolves to filtered events.

### Examples

#### Query All Events

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Get all events from a memory
const result = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123'
});

if (result.success) {
    console.log(`✅ Found ${result.data.events.length} events`);
    console.log('Total events in memory:', result.data.total);
    console.log('Filtered:', result.data.filtered);
}
```

#### Query Recent Events

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Get events from the last hour
const result = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    lastMinutes: 60
});

console.log(`Events in the last hour: ${result.data.events.length}`);

// Get events from the last 24 hours
const dayResult = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    lastMinutes: 1440 // 24 hours
});
```

#### Query Last N Events

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Get the 10 most recent events
const result = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    lastCount: 10
});

console.log('Last 10 events:');
result.data.events.forEach((event, index) => {
    console.log(`${index + 1}. [${event.event_type}] ${event.timestamp}`);
});
```

#### Query by Event Type

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Get only error events
const errors = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    event_type: 'error'
});

console.log(`Found ${errors.data.events.length} error events`);

// Get only task completion events
const completed = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    event_type: 'task_completed'
});
```

#### Query by Tags

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Get events tagged with 'backend'
const backendEvents = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    tags: ['backend']
});

// Get events with multiple tags (AND logic)
const criticalBackendEvents = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    tags: ['backend', 'critical']
});

console.log(`Critical backend events: ${criticalBackendEvents.data.events.length}`);
```

#### Query by Agent

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Get events from a specific agent
const agentEvents = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    emitting_agent_id: 'agent-001'
});

console.log(`Agent activity: ${agentEvents.data.events.length} events`);
```

#### Query Since Timestamp

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Get events since a specific time
const result = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    since: '2024-01-15T10:00:00Z'
});

console.log(`Events since Jan 15: ${result.data.events.length}`);
```

#### Complex Query with Multiple Filters

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Complex query: backend errors from last hour by specific agent
const result = await codebolt.episodicMemory.queryEvents({
    memoryId: 'memory-123',
    event_type: 'error',
    tags: ['backend', 'production'],
    emitting_agent_id: 'agent-003',
    lastMinutes: 60
});

console.log('Filtered results:');
result.data.events.forEach(event => {
    console.log(`- [${event.timestamp}] ${event.payload}`);
});
```

#### Query Swarm Events

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Query events at the swarm level
const result = await codebolt.episodicMemory.queryEvents({
    swarmId: 'swarm-123',
    team_id: 'team-456',
    lastCount: 20
});

console.log('Swarm team events:', result.data.events.length);
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        events: Array<{
            id: string,
            event_type: string,
            emitting_agent_id: string,
            team_id?: string,
            tags?: string[],
            payload: string | Record<string, any>,
            timestamp: string
        }>,
        total: number,
        filtered: boolean
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Recent Activity**
Get the most recent events for dashboards.

**2. Error Analysis**
Query and analyze error events.

**3. Agent Monitoring**
Track specific agent activity over time.

**4. Tag-Based Filtering**
Find events by topic or category.

**5. Time Windows**
Analyze events within specific time ranges.

### Notes

- Either memoryId or swarmId must be provided
- Filters are combined with AND logic (all must match)
- Multiple tags means the event must have all specified tags
- Events are returned in chronological order (oldest first)
- `lastCount` and `lastMinutes` are mutually exclusive
- `total` reflects the count before filtering
- `filtered` indicates if any filters were applied
- For pagination, combine filters with count limits
- Timestamps should be in ISO 8601 format
- Empty result is returned if no events match