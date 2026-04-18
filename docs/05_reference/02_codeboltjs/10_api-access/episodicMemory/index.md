---
cbapicategory:
  - name: createMemory
    link: /docs/api/apiaccess/episodicmemory/createMemory
    description: Creates a new episodic memory for storing events.
  - name: listMemories
    link: /docs/api/apiaccess/episodicmemory/listMemories
    description: Lists all episodic memories.
  - name: getMemory
    link: /docs/api/apiaccess/episodicmemory/getMemory
    description: Gets a specific episodic memory by ID.
  - name: appendEvent
    link: /docs/api/apiaccess/episodicmemory/appendEvent
    description: Appends an event to an episodic memory.
  - name: queryEvents
    link: /docs/api/apiaccess/episodicmemory/queryEvents
    description: Queries events from an episodic memory with filters.
  - name: getEventTypes
    link: /docs/api/apiaccess/episodicmemory/getEventTypes
    description: Gets unique event types from a memory.
  - name: getTags
    link: /docs/api/apiaccess/episodicmemory/getTags
    description: Gets unique tags from a memory.
  - name: getAgents
    link: /docs/api/apiaccess/episodicmemory/getAgents
    description: Gets unique agent IDs from a memory.
  - name: archiveMemory
    link: /docs/api/apiaccess/episodicmemory/archiveMemory
    description: Archives an episodic memory.
  - name: unarchiveMemory
    link: /docs/api/apiaccess/episodicmemory/unarchiveMemory
    description: Unarchives an episodic memory.
  - name: updateTitle
    link: /docs/api/apiaccess/episodicmemory/updateTitle
    description: Updates the title of an episodic memory.
---
# Episodic Memory API

The Episodic Memory API provides time-series event storage and retrieval capabilities, enabling you to track and query sequences of events with temporal context. This is ideal for maintaining conversation histories, audit trails, and event logs.

## Overview

The episodic memory module enables you to:
- **Memories**: Create and manage time-bound event containers
- **Events**: Append events with timestamps, types, agents, and tags
- **Querying**: Filter and retrieve events by various criteria
- **Metadata**: Extract unique event types, tags, and agents
- **Lifecycle**: Archive and manage memory lifecycle

## Quick Start Example

```js
// Wait for connection
await codebolt.waitForReady();

// Create a new episodic memory
const memory = await codebolt.episodicMemory.createMemory({
    title: 'Project Alpha History'
});

// Append events to the memory
await codebolt.episodicMemory.appendEvent({
    memoryId: memory.data.id,
    event_type: 'task_created',
    emitting_agent_id: 'agent-001',
    tags: ['important', 'backend'],
    payload: {
        task: 'Implement user authentication',
        priority: 'high'
    }
});

await codebolt.episodicMemory.appendEvent({
    memoryId: memory.data.id,
    event_type: 'task_completed',
    emitting_agent_id: 'agent-001',
    tags: ['backend'],
    payload: {
        task: 'Implement user authentication',
        duration: '4 hours'
    }
});

// Query events from the last hour
const events = await codebolt.episodicMemory.queryEvents({
    memoryId: memory.data.id,
    lastMinutes: 60
});

console.log(`Found ${events.data.events.length} events in the last hour`);
```

## Response Structure

All episodic memory API functions return responses with a consistent structure:

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        // Response-specific data
        memory: EpisodicMemory,
        events: EpisodicEvent[],
        eventTypes: string[],
        tags: string[],
        agents: string[]
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

## Key Concepts

### Episodic Memory
A memory is a time-ordered collection of events, representing a sequence of activities or a conversation history.

### Events
Events are individual records within a memory, containing:
- **Event Type**: Categorizes the event (e.g., 'message', 'action', 'state_change')
- **Agent ID**: Which agent generated the event
- **Team ID**: Optional team context
- **Tags**: Optional array of tags for filtering
- **Payload**: Event data (string or object)
- **Timestamp**: When the event occurred

### Querying
Events can be queried by:
- Time range (lastMinutes, lastCount, since)
- Event type
- Agent ID
- Team ID
- Tags

### Swarm Integration
Memories can be associated with swarms, providing event tracking at the swarm level.

### Archiving
Memories can be archived to reduce active storage while preserving historical data.

<CBAPICategory />
