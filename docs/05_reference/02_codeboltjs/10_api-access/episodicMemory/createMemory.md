---
name: createMemory
cbbaseinfo:
  description: "Creates a new episodic memory container for storing time-ordered events."
cbparameters:
  parameters:
    - name: params
      typeName: ICreateMemoryParams
      description: Memory creation parameters.
      nested:
        - name: title
          typeName: string
          description: "The title for the memory (required)."
  returns:
    signatureTypeName: "Promise<ICreateMemoryResponse>"
    description: A promise that resolves to the created memory details.
    typeArgs: []
data:
  name: createMemory
  category: episodicMemory
  link: createMemory.md
---
# createMemory

```typescript
codebolt.episodicMemory.createMemory(params: ICreateMemoryParams): Promise<ICreateMemoryResponse>
```

Creates a new episodic memory container for storing time-ordered events.
### Parameters

- **`params`** ([ICreateMemoryParams](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/ICreateMemoryParams)): Memory creation parameters.

### Returns

- **`Promise<[ICreateMemoryResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/ICreateMemoryResponse)>`**: A promise that resolves to the created memory details.

### Examples

#### Create Basic Memory

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a new episodic memory
const memory = await codebolt.episodicMemory.createMemory({
    title: 'Project Alpha History'
});

if (memory.success) {
    console.log('✅ Memory created:', memory.data.id);
    console.log('Title:', memory.data.title);
    console.log('Created:', memory.data.createdAt);
}
```

#### Create Memory for Different Purposes

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create memories for different use cases
const memories = [
    { title: 'Development Sprint 1' },
    { title: 'Customer Support Interactions' },
    { title: 'System Events Log' },
    { title: 'Meeting Notes Archive' }
];

for (const config of memories) {
    const memory = await codebolt.episodicMemory.createMemory(config);
    if (memory.success) {
        console.log(`✅ Created "${config.title}":`, memory.data.id);
    }
}
```

#### Create Memory and Populate with Events

```js
import codebolt from '@codebolt/codeboltjs';

async function createMemoryWithEvents(title, initialEvents) {
    await codebolt.waitForReady();

    // Create the memory
    const memory = await codebolt.episodicMemory.createMemory({ title });

    if (!memory.success) {
        throw new Error('Failed to create memory');
    }

    const memoryId = memory.data.id;
    console.log('✅ Memory created:', memoryId);

    // Add initial events
    const events = [];
    for (const eventData of initialEvents) {
        const event = await codebolt.episodicMemory.appendEvent({
            memoryId,
            ...eventData
        });
        if (event.success) {
            events.push(event.data);
        }
    }

    console.log(`✅ Added ${events.length} events`);

    return {
        memory: memory.data,
        events
    };
}

// Usage
const result = await createMemoryWithEvents('Team Standups', [
    {
        event_type: 'standup',
        emitting_agent_id: 'agent-001',
        payload: { date: '2024-01-15', attendees: ['Alice', 'Bob'] }
    },
    {
        event_type: 'standup',
        emitting_agent_id: 'agent-001',
        payload: { date: '2024-01-16', attendees: ['Alice', 'Bob', 'Charlie'] }
    }
]);
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        archived: boolean,
        eventCount: number
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Conversation History**
Store chat or conversation histories for later retrieval.

**2. Audit Trails**
Maintain time-ordered logs of system events.

**3. Project Tracking**
Record project milestones and events.

**4. Agent Activity**
Track agent actions and decisions over time.

**5. Meeting Records**
Store meeting notes and action items.

### Notes

- Memory titles must be unique within your workspace
- New memories start with zero events
- Memories are unarchived by default
- Event count is updated automatically as events are added
- Created and updated timestamps are in ISO 8601 format
- Memories can be archived to reduce active storage
- All events are stored in chronological order
- Use descriptive titles for easy identification
