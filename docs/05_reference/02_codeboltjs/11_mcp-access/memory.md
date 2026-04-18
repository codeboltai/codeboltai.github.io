---
title: Memory MCP
sidebar_label: codebolt.memory
sidebar_position: 10
---

# codebolt.memory

Memory operations for storing and retrieving data in various formats including JSON, todo items, markdown, episodic memories, and persistent memories.

## Available Tools

### Basic Memory Operations

- `memory_set` - Store a value in memory
- `memory_get` - Retrieve a value from memory

### JSON Memory

- `memory_json_save` - Saves a JSON object to memory storage
- `memory_json_update` - Updates an existing JSON object in memory storage by its memory ID
- `memory_json_delete` - Deletes a JSON object from memory storage by its memory ID
- `memory_json_list` - Lists JSON objects from memory storage with optional filters

### Todo Memory

- `memory_todo_save` - Saves a todo item to memory storage with optional metadata
- `memory_todo_update` - Updates an existing todo item in memory storage by its memory ID
- `memory_todo_delete` - Deletes a todo item from memory storage by its memory ID
- `memory_todo_list` - Lists todo items from memory storage with optional filters

### Markdown Memory

- `memory_markdown_save` - Saves markdown content to memory storage with optional metadata
- `memory_markdown_update` - Updates existing markdown content in memory storage by its memory ID
- `memory_markdown_delete` - Deletes markdown content from memory storage by its memory ID
- `memory_markdown_list` - Lists markdown content from memory storage with optional filters

### Episodic Memory

- `episodic_memory_create` - Creates a new episodic memory container with a title
- `episodic_memory_list` - Lists all episodic memories with their IDs, titles, and event counts
- `episodic_memory_get` - Retrieves a specific episodic memory by its ID
- `episodic_memory_append_event` - Appends a new event to an existing episodic memory
- `episodic_memory_query_events` - Queries and filters events from an episodic memory
- `episodic_memory_get_event_types` - Retrieves all unique event types from an episodic memory
- `episodic_memory_archive` - Archives an episodic memory (marks as inactive)
- `episodic_memory_update_title` - Updates the title of an existing episodic memory

### Persistent Memory

- `persistent_memory_create` - Creates a new persistent memory configuration with retrieval and contribution settings
- `persistent_memory_get` - Retrieves a persistent memory configuration by its ID
- `persistent_memory_list` - Lists all persistent memory configurations with optional filters
- `persistent_memory_update` - Updates an existing persistent memory configuration
- `persistent_memory_retrieve` - Executes a retrieval query on a persistent memory

## Tool Parameters

### JSON Memory Tools

#### `memory_json_save`

Saves a JSON object to memory storage. Returns the memory ID of the saved entry.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| json | object | Yes | The JSON object to save to memory storage |

#### `memory_json_update`

Updates an existing JSON object in memory storage by its memory ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the memory entry to update |
| json | object | Yes | The new JSON object to replace the existing data |

#### `memory_json_delete`

Deletes a JSON object from memory storage by its memory ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the memory entry to delete |

#### `memory_json_list`

Lists JSON objects from memory storage with optional filters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters to apply when listing JSON entries |

### Todo Memory Tools

#### `memory_todo_save`

Saves a todo item to memory storage with optional metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| todo | object | Yes | The todo object to save (should contain task details like title, description, status) |
| metadata | object | No | Optional metadata to associate with the todo item |

#### `memory_todo_update`

Updates an existing todo item in memory storage by its memory ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the memory entry to update |
| todo | object | Yes | The new todo object to replace the existing data |

#### `memory_todo_delete`

Deletes a todo item from memory storage by its memory ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the memory entry to delete |

#### `memory_todo_list`

Lists todo items from memory storage with optional filters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters to apply when listing todo entries |

### Markdown Memory Tools

#### `memory_markdown_save`

Saves markdown content to memory storage with optional metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| markdown | string | Yes | The markdown content string to save to memory storage |
| metadata | object | No | Optional metadata to associate with the markdown content |

#### `memory_markdown_update`

Updates existing markdown content in memory storage by its memory ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the memory entry to update |
| markdown | string | Yes | The new markdown content to replace the existing data |
| metadata | object | No | Optional metadata to update along with the markdown content |

#### `memory_markdown_delete`

Deletes markdown content from memory storage by its memory ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the memory entry to delete |

#### `memory_markdown_list`

Lists markdown content from memory storage with optional filters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters to apply when listing markdown entries |

### Episodic Memory Tools

#### `episodic_memory_create`

Creates a new episodic memory container with a title.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title for the new episodic memory (should be descriptive of the purpose or context) |

#### `episodic_memory_list`

Lists all episodic memories with their IDs, titles, and event counts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters to apply when listing episodic memories |

#### `episodic_memory_get`

Retrieves a specific episodic memory by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the episodic memory to retrieve |

#### `episodic_memory_append_event`

Appends a new event to an existing episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the episodic memory to append the event to |
| event | object | Yes | The event object to append (see Event Object Structure below) |

**Event Object Structure:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| event_type | string | Yes | The type/category of the event (e.g., "message", "action", "state_change") |
| emitting_agent_id | string | Yes | The ID of the agent that is emitting/creating this event |
| team_id | string | No | Optional team ID to associate with this event |
| tags | string[] | No | Optional array of tags for categorizing and filtering events |
| payload | string or object | Yes | The data payload of the event |

#### `episodic_memory_query_events`

Queries and filters events from an episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | The unique identifier of the episodic memory to query events from |
| swarmId | string | No | The swarm ID to query events from (alternative to memoryId) |
| lastMinutes | number | No | Filter events from the last N minutes |
| lastCount | number | No | Limit the number of events returned |
| tags | string[] | No | Filter events that have any of the specified tags |
| event_type | string | No | Filter events by event type |
| emitting_agent_id | string | No | Filter events by the agent that emitted them |
| team_id | string | No | Filter events by team ID |
| since | string | No | Filter events since a specific timestamp (ISO 8601 format) |

**Note:** Either `memoryId` or `swarmId` must be provided.

#### `episodic_memory_get_event_types`

Retrieves all unique event types from an episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | No | The unique identifier of the episodic memory to get event types from |
| swarmId | string | No | The swarm ID to get event types from (alternative to memoryId) |

**Note:** Either `memoryId` or `swarmId` must be provided.

#### `episodic_memory_archive`

Archives an episodic memory (marks as inactive).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the episodic memory to archive |

#### `episodic_memory_update_title`

Updates the title of an existing episodic memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryId | string | Yes | The unique identifier of the episodic memory to update |
| title | string | Yes | The new title for the episodic memory |

### Persistent Memory Tools

#### `persistent_memory_create`

Creates a new persistent memory configuration with retrieval and contribution settings.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | No | Optional unique identifier for the memory (auto-generated if not provided) |
| label | string | Yes | A human-readable label/name for the persistent memory |
| description | string | No | Optional description explaining the purpose of this memory |
| inputs_scope | string[] | No | Array of input scopes that determine when this memory should be activated |
| additional_variables | object | No | Additional variables for memory configuration as key-value pairs |
| retrieval | object | Yes | Retrieval configuration (see Retrieval Configuration below) |
| contribution | object | Yes | Contribution configuration (see Contribution Configuration below) |

**Retrieval Configuration:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| source_type | string | Yes | Type of data source: 'vectordb', 'kv', 'eventlog', or 'kg' |
| source_id | string | Yes | Identifier of the data source to retrieve from |
| query_template | string | No | Optional template for constructing queries |
| limit | number | No | Maximum number of results to retrieve |
| filters | object | No | Optional filters to apply during retrieval |

**Contribution Configuration:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| format | string | Yes | Output format: 'text', 'json', or 'markdown' |
| template | string | No | Optional template for formatting the output |
| max_tokens | number | No | Maximum number of tokens for the output |

#### `persistent_memory_get`

Retrieves a persistent memory configuration by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memory_id | string | Yes | The unique identifier of the persistent memory to retrieve |

#### `persistent_memory_list`

Lists all persistent memory configurations with optional filters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| input_scope | string | No | Optional input scope to filter memories by |
| active_only | boolean | No | If true, only return memories with status 'active' (defaults to false) |

#### `persistent_memory_update`

Updates an existing persistent memory configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memory_id | string | Yes | The unique identifier of the persistent memory to update |
| label | string | No | New label/name for the memory |
| description | string | No | New description for the memory |
| status | string | No | New status: 'active', 'disabled', or 'draft' |
| inputs_scope | string[] | No | Updated array of input scopes |
| additional_variables | object | No | Updated additional variables as key-value pairs |
| retrieval | object | No | Updated retrieval configuration |
| contribution | object | No | Updated contribution configuration |

#### `persistent_memory_retrieve`

Executes a retrieval query on a persistent memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memory_id | string | Yes | The unique identifier of the persistent memory to query |
| keywords | string[] | No | Optional array of keywords to use in the retrieval query |
| action | string | No | Optional action context that helps focus the retrieval (e.g., "find", "summarize", "compare") |
| context | object | No | Optional additional context as key-value pairs to guide the retrieval |
| query | string | No | Optional direct query string for the retrieval |

## Sample Usage

### Basic Memory Operations

```javascript
// Store a value in memory
const setResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_set",
  {
    key: "test-key-1",
    value: "This is a test memory value"
  }
);

// Retrieve a value from memory
const getResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_get",
  {
    key: "test-key-1"
  }
);
```

### JSON Memory

```javascript
// Save JSON to memory
const saveResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_json_save",
  {
    json: {
      name: "Project Config",
      version: "1.0.0",
      settings: { theme: "dark" }
    }
  }
);

// Update existing JSON
const updateResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_json_update",
  {
    memoryId: "your-memory-id",
    json: {
      name: "Project Config",
      version: "1.0.1",
      settings: { theme: "light" }
    }
  }
);

// List all JSON entries
const listResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_json_list",
  {
    filters: { /* optional filters */ }
  }
);

// Delete JSON entry
const deleteResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_json_delete",
  {
    memoryId: "your-memory-id"
  }
);
```

### Todo Memory

```javascript
// Save a todo item to memory
const todoSaveResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_todo_save",
  {
    todo: {
      title: "Complete documentation",
      status: "pending",
      priority: "high"
    },
    metadata: {
      category: "development",
      dueDate: "2024-12-31"
    }
  }
);

// List all todos in memory
const todoListResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_todo_list",
  {}
);
```

### Markdown Memory

```javascript
// Save markdown content
const markdownSaveResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_markdown_save",
  {
    markdown: "# Project Notes\n\n- Feature A completed\n- Feature B in progress",
    metadata: {
      category: "notes",
      author: "developer"
    }
  }
);

// Update markdown content
const markdownUpdateResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_markdown_update",
  {
    memoryId: "your-memory-id",
    markdown: "# Updated Project Notes\n\n- All features completed",
    metadata: {
      category: "notes",
      author: "developer"
    }
  }
);
```

### Episodic Memory

```javascript
// Create an episodic memory
const createResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "episodic_memory_create",
  {
    title: "User Session Log"
  }
);

// Append an event to the memory
const appendResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "episodic_memory_append_event",
  {
    memoryId: "your-memory-id",
    event: {
      event_type: "user_action",
      emitting_agent_id: "agent-123",
      tags: ["navigation", "ui"],
      payload: {
        action: "button_click",
        target: "submit-form"
      }
    }
  }
);

// Query events from the memory
const queryResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "episodic_memory_query_events",
  {
    memoryId: "your-memory-id",
    event_type: "user_action",
    lastMinutes: 60,
    lastCount: 10
  }
);

// Get all event types
const eventTypesResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "episodic_memory_get_event_types",
  {
    memoryId: "your-memory-id"
  }
);

// Archive the memory
const archiveResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "episodic_memory_archive",
  {
    memoryId: "your-memory-id"
  }
);
```

### Persistent Memory

```javascript
// Create a persistent memory configuration
const persistentCreateResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "persistent_memory_create",
  {
    label: "User Preferences",
    description: "Stores user preferences across sessions",
    inputs_scope: ["user_settings", "preferences"],
    retrieval: {
      source_type: "kv",
      source_id: "user-preferences-store",
      limit: 10
    },
    contribution: {
      format: "json",
      max_tokens: 500
    }
  }
);

// List all persistent memories
const persistentListResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "persistent_memory_list",
  {
    active_only: true
  }
);

// Execute a retrieval query
const retrieveResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "persistent_memory_retrieve",
  {
    memory_id: "your-memory-id",
    keywords: ["theme", "preferences"],
    action: "find",
    query: "user display settings"
  }
);

// Update a persistent memory
const persistentUpdateResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "persistent_memory_update",
  {
    memory_id: "your-memory-id",
    label: "Updated User Preferences",
    status: "active"
  }
);
```

:::info
This functionality provides comprehensive memory storage through the MCP interface. JSON, Todo, and Markdown memory types support CRUD operations with unique memory IDs. Episodic memory is ideal for tracking time-series events and workflows. Persistent memory allows cross-session data storage with configurable retrieval from various data sources (vectordb, kv, eventlog, kg).
:::
