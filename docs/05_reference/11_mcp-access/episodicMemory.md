---
title: Episodic Memory MCP
sidebar_label: codebolt.episodicMemory
sidebar_position: 76
---

# codebolt.episodicMemory

Episode-based memory management tools for creating, querying, and organizing events within memories. Provides chronological event tracking with advanced filtering, tagging, and archiving capabilities for multi-agent systems.

## Available Tools

- `episodic_create_memory` - Creates a new episodic memory with a title
- `episodic_list_memories` - Lists all episodic memories
- `episodic_get_memory` - Retrieves a specific episodic memory by ID
- `episodic_append_event` - Appends an event to an episodic memory
- `episodic_query_events` - Queries events from an episodic memory with filters
- `episodic_get_event_types` - Gets unique event types from an episodic memory
- `episodic_get_tags` - Gets unique tags from an episodic memory
- `episodic_get_agents` - Gets unique agent IDs from an episodic memory
- `episodic_archive_memory` - Archives an episodic memory
- `episodic_unarchive_memory` - Unarchives an episodic memory
- `episodic_update_title` - Updates the title of an episodic memory

## Tool Parameters

### episodic_create_memory

Creates a new episodic memory with a title.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | Title of the episodic memory |

### episodic_list_memories

Lists all available episodic memories.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | | | No parameters required |

### episodic_get_memory

Retrieves a specific episodic memory by ID or swarm ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |

### episodic_append_event

Appends an event to an existing episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |
| event_type | string | Yes | Type of the event |
| emitting_agent_id | string | Yes | ID of the agent emitting the event |
| payload | any | Yes | Event payload (string or object) |
| team_id | string | No | Team ID |
| tags | string[] | No | Tags for the event |

### episodic_query_events

Queries events from an episodic memory with various filtering options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |
| lastMinutes | number | No | Filter events from last N minutes |
| lastCount | number | No | Get last N events |
| tags | string[] | No | Filter by tags |
| event_type | string | No | Filter by event type |
| emitting_agent_id | string | No | Filter by emitting agent ID |
| team_id | string | No | Filter by team ID |
| since | string | No | Filter events since timestamp |

### episodic_get_event_types

Gets all unique event types from an episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |

### episodic_get_tags

Gets all unique tags from an episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |

### episodic_get_agents

Gets all unique agent IDs from an episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |

### episodic_archive_memory

Archives an episodic memory, moving it to archived storage.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |

### episodic_unarchive_memory

Unarchives an episodic memory, restoring it to active storage.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |

### episodic_update_title

Updates the title of an existing episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | ID of the episodic memory (alternative to swarmId) |
| swarmId | string | No | Swarm ID (alternative to memoryId) |
| title | string | Yes | New title for the episodic memory |

## Sample Usage

### Creating a Memory and Adding Events

```javascript
const { codebolt } = require('codebolt');

// Create a new episodic memory
const memory = await codebolt.tools.run({
  tool: 'episodic_create_memory',
  title: 'Project Planning Session'
});

console.log('Memory created:', memory.llmContent);

// Append events to the memory
await codebolt.tools.run({
  tool: 'episodic_append_event',
  memoryId: memory.id,
  event_type: 'task_assigned',
  emitting_agent_id: 'agent-1',
  payload: { task: 'Design database schema', assignee: 'developer-1' },
  tags: ['planning', 'database']
});

await codebolt.tools.run({
  tool: 'episodic_append_event',
  memoryId: memory.id,
  event_type: 'discussion',
  emitting_agent_id: 'agent-2',
  payload: { topic: 'API endpoints discussion', duration: 30 },
  tags: ['planning', 'api']
});
```

### Querying Events with Filters

```javascript
// Query last 10 events
const recentEvents = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  lastCount: 10
});

// Query events from last 30 minutes
const recentEvents = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  lastMinutes: 30
});

// Query events by type and tags
const filteredEvents = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  event_type: 'task_assigned',
  tags: ['planning', 'database']
});

// Query events from specific agent
const agentEvents = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  emitting_agent_id: 'agent-1'
});
```

### Managing Memory Metadata

```javascript
// List all memories
const memories = await codebolt.tools.run({
  tool: 'episodic_list_memories'
});

// Get unique event types from a memory
const eventTypes = await codebolt.tools.run({
  tool: 'episodic_get_event_types',
  memoryId: 'memory-123'
});

// Get all tags from a memory
const tags = await codebolt.tools.run({
  tool: 'episodic_get_tags',
  memoryId: 'memory-123'
});

// Get all agent IDs from a memory
const agents = await codebolt.tools.run({
  tool: 'episodic_get_agents',
  memoryId: 'memory-123'
});

// Update memory title
await codebolt.tools.run({
  tool: 'episodic_update_title',
  memoryId: 'memory-123',
  title: 'Updated Project Planning Session'
});
```

### Using Swarm ID for Multi-Agent Context

```javascript
// Create memory in swarm context
const memory = await codebolt.tools.run({
  tool: 'episodic_create_memory',
  title: 'Swarm Coordination'
});

// Append event with swarm ID
await codebolt.tools.run({
  tool: 'episodic_append_event',
  swarmId: 'swarm-abc-123',
  event_type: 'agent_join',
  emitting_agent_id: 'agent-1',
  team_id: 'team-dev',
  payload: { timestamp: Date.now(), reason: 'new_task' },
  tags: ['swarm', 'coordination']
});

// Query events using swarm ID
const swarmEvents = await codebolt.tools.run({
  tool: 'episodic_query_events',
  swarmId: 'swarm-abc-123',
  lastMinutes: 60
});
```

### Archiving and Unarchiving Memories

```javascript
// Archive a completed project memory
await codebolt.tools.run({
  tool: 'episodic_archive_memory',
  memoryId: 'memory-123'
});

// Unarchive to review later
await codebolt.tools.run({
  tool: 'episodic_unarchive_memory',
  memoryId: 'memory-123'
});
```

### Using with Different Payload Types

```javascript
// String payload
await codebolt.tools.run({
  tool: 'episodic_append_event',
  memoryId: 'memory-123',
  event_type: 'log_message',
  emitting_agent_id: 'agent-1',
  payload: 'Database connection established',
  tags: ['log']
});

// Object payload
await codebolt.tools.run({
  tool: 'episodic_append_event',
  memoryId: 'memory-123',
  event_type: 'metric_recorded',
  emitting_agent_id: 'agent-2',
  payload: {
    metric: 'response_time',
    value: 125,
    unit: 'ms',
    timestamp: Date.now()
  },
  tags: ['metrics', 'performance']
});

// Nested object payload
await codebolt.tools.run({
  tool: 'episodic_append_event',
  memoryId: 'memory-123',
  event_type: 'error_occurred',
  emitting_agent_id: 'agent-1',
  payload: {
    error: {
      code: 500,
      message: 'Internal server error',
      stack: 'Error: ...'
    },
    context: {
      endpoint: '/api/users',
      method: 'GET'
    }
  },
  tags: ['error', 'api']
});
```

### Time-Based Event Queries

```javascript
// Query events since a specific timestamp
const eventsSince = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  since: '2024-01-15T00:00:00Z'
});

// Get events from last hour
const lastHour = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  lastMinutes: 60
});

// Get last 5 events
const last5 = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  lastCount: 5
});

// Combine filters: last 10 events of specific type from specific team
const combined = await codebolt.tools.run({
  tool: 'episodic_query_events',
  memoryId: 'memory-123',
  event_type: 'task_completed',
  team_id: 'team-dev',
  lastCount: 10
});
```

:::info
**Episode-Based Memory and Archiving**

- **Episode-Based Memory**: Episodic memory organizes events chronologically within memory contexts. Each memory represents an "episode" (e.g., a project, session, or task) containing related events from one or more agents.

- **Event Structure**: Events contain:
  - `event_type`: Categorization of the event (e.g., 'task_assigned', 'discussion', 'error_occurred')
  - `emitting_agent_id`: The agent that generated the event
  - `payload`: Event data (flexible string or object)
  - `tags`: Optional labels for filtering and organization
  - `team_id`: Optional team context for multi-team scenarios

- **Memory vs Swarm ID**: 
  - Use `memoryId` for direct memory references
  - Use `swarmId` for multi-agent swarm contexts where multiple agents share the same memory space

- **Archiving**: 
  - Archived memories are moved to long-term storage and excluded from regular queries
  - Useful for completed projects or historical records
  - Unarchiving restores full access to the memory and its events

- **Query Filtering**: The `episodic_query_events` tool supports multiple filter criteria:
  - Time-based: `lastMinutes`, `lastCount`, `since`
  - Event properties: `event_type`, `tags`, `emitting_agent_id`, `team_id`
  - Filters can be combined for precise event retrieval

- **Metadata Discovery**: Use `episodic_get_event_types`, `episodic_get_tags`, and `episodic_get_agents` to understand available filter options before querying.
:::
