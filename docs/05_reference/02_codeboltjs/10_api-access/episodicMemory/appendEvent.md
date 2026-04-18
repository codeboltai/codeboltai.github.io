---
name: appendEvent
cbbaseinfo:
  description: Appends a new event to an episodic memory with timestamp, type, and optional metadata.
cbparameters:
  parameters:
    - name: params
      typeName: IAppendEventParams
      description: Event data object.
      nested:
        - name: memoryId
          typeName: "string | undefined"
          description: "The ID of the memory (or use swarmId)."
        - name: swarmId
          typeName: "string | undefined"
          description: "The ID of the swarm (alternative to memoryId)."
        - name: event_type
          typeName: string
          description: "The type/category of the event (required)."
        - name: emitting_agent_id
          typeName: string
          description: "ID of the agent creating the event (required)."
        - name: team_id
          typeName: "string | undefined"
          description: Optional team context ID.
        - name: tags
          typeName: "string[] | undefined"
          description: Optional array of tags for filtering.
        - name: payload
          typeName: "string | Record<string, any>"
          description: "Event data (required)."
  returns:
    signatureTypeName: "Promise<IAppendEventResponse>"
    description: A promise that resolves to the created event details.
    typeArgs: []
data:
  name: appendEvent
  category: episodicMemory
  link: appendEvent.md
---
# appendEvent

```typescript
codebolt.episodicMemory.appendEvent(params: IAppendEventParams): Promise<IAppendEventResponse>
```

Appends a new event to an episodic memory with timestamp, type, and optional metadata.
### Parameters

- **`params`** ([IAppendEventParams](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/IAppendEventParams)): Event data object.

### Returns

- **`Promise<[IAppendEventResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/IAppendEventResponse)>`**: A promise that resolves to the created event details.

### Examples

#### Append Basic Event

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Append a simple event
const event = await codebolt.episodicMemory.appendEvent({
    memoryId: 'memory-123',
    event_type: 'task_completed',
    emitting_agent_id: 'agent-001',
    payload: {
        task: 'Review PR #123',
        duration: '30 minutes'
    }
});

if (event.success) {
    console.log('✅ Event appended:', event.data.id);
    console.log('Type:', event.data.event_type);
    console.log('Timestamp:', event.data.timestamp);
}
```

#### Append Event with Tags

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Append event with multiple tags for filtering
const event = await codebolt.episodicMemory.appendEvent({
    memoryId: 'memory-123',
    event_type: 'code_change',
    emitting_agent_id: 'agent-002',
    tags: ['backend', 'api', 'authentication'],
    payload: {
        file: 'auth.ts',
        change_type: 'feature',
        lines_changed: 45
    }
});

console.log('✅ Tagged event created');
```

#### Append Different Event Types

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Append various types of events
const events = [
    {
        event_type: 'user_message',
        emitting_agent_id: 'agent-001',
        payload: { content: 'Hello, how can I help?' }
    },
    {
        event_type: 'system_action',
        emitting_agent_id: 'system',
        payload: { action: 'backup_created', size: '2.5GB' }
    },
    {
        event_type: 'error',
        emitting_agent_id: 'agent-003',
        tags: ['error', 'critical'],
        payload: { error: 'Connection timeout', code: 504 }
    }
];

for (const eventData of events) {
    const event = await codebolt.episodicMemory.appendEvent({
        memoryId: 'memory-123',
        ...eventData
    });
    console.log(`✅ Added ${eventData.event_type} event`);
}
```

#### Append Event with String Payload

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Append event with simple string payload
const event = await codebolt.episodicMemory.appendEvent({
    memoryId: 'memory-123',
    event_type: 'note',
    emitting_agent_id: 'agent-001',
    payload: 'Important: Remember to follow up with the client tomorrow'
});

console.log('✅ Note event added');
```

#### Append Swarm-Level Event

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Append event to a swarm's memory
const event = await codebolt.episodicMemory.appendEvent({
    swarmId: 'swarm-123',
    event_type: 'coordination',
    emitting_agent_id: 'agent-001',
    team_id: 'team-456',
    payload: {
        action: 'task_delegation',
        delegated_to: 'agent-002',
        task: 'Code review'
    }
});

console.log('✅ Swarm coordination event logged');
```

#### Append Events in Batch

```js
import codebolt from '@codebolt/codeboltjs';

async function appendEventsBatch(memoryId, events) {
    await codebolt.waitForReady();

    const results = [];

    for (const eventData of events) {
        const event = await codebolt.episodicMemory.appendEvent({
            memoryId,
            ...eventData
        });

        results.push({
            eventType: eventData.event_type,
            success: event.success,
            id: event.data?.id
        });
    }

    return results;
}

// Usage
const events = [
    {
        event_type: 'start',
        emitting_agent_id: 'agent-001',
        payload: { message: 'Starting task' }
    },
    {
        event_type: 'progress',
        emitting_agent_id: 'agent-001',
        payload: { complete: 50 }
    },
    {
        event_type: 'complete',
        emitting_agent_id: 'agent-001',
        payload: { message: 'Task finished' }
    }
];

const results = await appendEventsBatch('memory-123', events);
console.log('Batch results:', results);
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        id: string,
        event_type: string,
        emitting_agent_id: string,
        team_id?: string,
        tags?: string[],
        payload: string | Record<string, any>,
        timestamp: string
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Activity Logging**
Record agent activities and actions.

**2. Conversation Tracking**
Store messages and responses in order.

**3. Audit Trails**
Maintain chronological records of events.

**4. Progress Monitoring**
Log progress updates and milestones.

**5. Error Tracking**
Record errors and issues for debugging.

### Notes

- Either memoryId or swarmId must be provided
- Events are automatically timestamped when appended
- Event types can be any string (use consistent naming)
- Tags are useful for filtering events later
- Payload can be a string or object (objects are stored as-is)
- Events are appended in chronological order
- The event ID is returned and can be used for reference
- Team context is optional but useful for swarm coordination
- Consider using a consistent event type taxonomy
