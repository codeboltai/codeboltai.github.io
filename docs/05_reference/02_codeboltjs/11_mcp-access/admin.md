---
title: Admin MCP
sidebar_label: codebolt.admin
sidebar_position: 33
---

# codebolt.admin

Administrative tools for managing orchestrators, codemaps, hooks, and event logs.

## Available Tools

### Orchestrator Tools

- `orchestrator_list` - Lists all orchestrators with their IDs, names, descriptions, and metadata
- `orchestrator_get` - Gets a specific orchestrator by its ID with full details
- `orchestrator_create` - Creates a new orchestrator instance with name, description, and agent ID
- `orchestrator_update` - Updates an existing orchestrator's properties

### Codemap Tools

- `codemap_list` - Lists all codemaps for a project with metadata
- `codemap_get` - Gets a specific codemap by ID with full structure including sections and files
- `codemap_create` - Creates a new codemap placeholder with title and optional query
- `codemap_update` - Updates an existing codemap with new title, description, or status

### Hook Tools

- `hook_create` - Creates a new hook for triggering actions based on events
- `hook_list` - Lists all hooks with their configurations and trigger counts
- `hook_get` - Gets detailed information about a specific hook by ID
- `hook_enable` - Enables a hook to start responding to trigger events
- `hook_disable` - Disables a hook to stop responding to trigger events

### EventLog Tools

- `eventlog_create_instance` - Creates a new event log instance for logging activities
- `eventlog_get_instance` - Gets an event log instance by ID with details
- `eventlog_list_instances` - Lists all available event log instances
- `eventlog_append_event` - Appends a new event to an event log instance
- `eventlog_query_events` - Queries events using a DSL-based query with filtering and pagination
- `eventlog_get_stats` - Gets statistics for an event log instance including event count

## Tool Parameters

### `orchestrator_list`

Lists all orchestrators. Returns an array of orchestrator instances with their IDs, names, descriptions, agent IDs, statuses, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters. |

### `orchestrator_get`

Gets a specific orchestrator by its ID. Returns the orchestrator instance details including ID, name, description, agent ID, status, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to retrieve. |

### `orchestrator_create`

Creates a new orchestrator instance. Requires a name, description, and agent ID. Optionally accepts a default worker agent ID and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the orchestrator. |
| description | string | Yes | A description of what the orchestrator does. |
| agent_id | string | Yes | The ID of the agent to associate with this orchestrator. |
| default_worker_agent_id | string | No | The ID of the default worker agent (optional). |
| metadata | object | No | Additional metadata for the orchestrator as key-value pairs (optional). |

### `orchestrator_update`

Updates an existing orchestrator. Requires the orchestrator ID. Optionally updates name, description, agent ID, default worker agent ID, and/or metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to update. |
| name | string | No | The new name of the orchestrator (optional). |
| description | string | No | The new description of the orchestrator (optional). |
| agent_id | string | No | The new agent ID to associate with this orchestrator (optional). |
| default_worker_agent_id | string | No | The new default worker agent ID (optional). |
| metadata | object | No | Updated metadata for the orchestrator as key-value pairs (optional). |

### `codemap_list`

Lists all codemaps for a project. Returns an array of codemap metadata including id, title, description, status, and timestamps.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| project_path | string | No | Optional project path to list codemaps for. If not provided, uses the current project. |

### `codemap_get`

Gets a specific codemap by its ID. Returns the full codemap structure including sections, files, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codemap_id | string | Yes | The unique identifier of the codemap to retrieve. |
| project_path | string | No | Optional project path. If not provided, uses the current project. |

### `codemap_create`

Creates a new codemap placeholder with the specified title. The codemap is created with status "creating" and can be populated with content using other codemap operations.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title for the new codemap. |
| query | string | No | Optional query or description for the codemap that describes what code structure it represents. |
| project_path | string | No | Optional project path. If not provided, uses the current project. |

### `codemap_update`

Updates an existing codemap with new title, description, status, or error information. At least one update field must be provided.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| codemap_id | string | Yes | The unique identifier of the codemap to update. |
| title | string | No | Optional new title for the codemap. |
| description | string | No | Optional new description for the codemap. |
| status | string | No | Optional new status for the codemap. Valid values: 'creating', 'done', 'error'. |
| error | string | No | Optional error message. Typically used when setting status to 'error'. |
| project_path | string | No | Optional project path. If not provided, uses the current project. |

### `hook_create`

Creates a new hook for triggering actions based on events. Hooks can be configured to respond to file changes, git operations, terminal commands, agent events, and more.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the hook. |
| description | string | No | Optional description of the hook. |
| trigger | string | Yes | The trigger event type (e.g., 'file.created', 'file.modified', 'file.deleted', 'git.commit', 'git.push', 'git.pull', 'terminal.command', 'agent.start', 'agent.end', 'message.received', 'custom'). |
| trigger_config | object | No | Optional trigger configuration object with pattern, path, command, or eventType fields. |
| action | string | Yes | The action to perform when triggered (e.g., 'notify', 'execute', 'log', 'webhook', 'agent'). |
| action_config | object | No | Optional action configuration object with message, command, url, agentId, or payload fields. |
| enabled | boolean | No | Whether the hook is enabled (defaults to true). |
| priority | number | No | Priority of the hook (higher priority hooks run first). |
| conditions | array | No | Optional array of conditions that must be met for the hook to trigger. |

### `hook_list`

Lists all hooks configured in the system. Returns information about each hook including its name, ID, trigger type, action type, enabled status, and trigger count.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters. |

### `hook_get`

Gets detailed information about a specific hook by its ID. Returns the hook's configuration, status, and statistics.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hook_id | string | Yes | The unique identifier of the hook to retrieve. |

### `hook_enable`

Enables a hook by its ID. Once enabled, the hook will start triggering actions when its configured trigger events occur.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hook_id | string | Yes | The unique identifier of the hook to enable. |

### `hook_disable`

Disables a hook by its ID. Once disabled, the hook will no longer trigger actions when its configured trigger events occur.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hook_id | string | Yes | The unique identifier of the hook to disable. |

### `eventlog_create_instance`

Creates a new event log instance for logging agent activities. An event log instance serves as a container for related events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name for the new event log instance. |
| description | string | No | Optional description for the event log instance. |

### `eventlog_get_instance`

Gets an event log instance by its ID. Returns the instance details including name, description, and timestamps.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the event log instance to retrieve. |

### `eventlog_list_instances`

Lists all available event log instances. Returns a list of instances with their IDs, names, descriptions, and creation timestamps.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters. |

### `eventlog_append_event`

Appends a new event to an event log instance. Events can include a type, payload data, metadata, and can be organized into streams.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the event log instance to append to. |
| stream_id | string | No | Optional stream ID to categorize the event within the instance. |
| event_type | string | No | The type of event being logged (e.g., "user_action", "system_event"). |
| payload | object | No | The event payload data as a JSON object. |
| metadata | object | No | Optional metadata for the event as a JSON object. |
| auto_create_instance | boolean | No | Whether to automatically create the instance if it does not exist. |

### `eventlog_query_events`

Queries events from an event log instance using a DSL-based query. Supports filtering by stream, conditions, field selection, ordering, and pagination.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the event log instance to query. |
| stream_id | string | No | Optional stream ID to filter events by. |
| conditions | array | No | Optional array of filter conditions. Each condition has field, operator (eq, neq, gt, gte, lt, lte, contains, in, between), and value. |
| select | array | No | Optional array of fields to select in the result. |
| order_by | object | No | Optional ordering configuration with field and direction (asc or desc). |
| limit | number | No | Optional maximum number of events to return. |
| offset | number | No | Optional offset for pagination. |

### `eventlog_get_stats`

Gets statistics for an event log instance including event count, creation time, and last update time.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the event log instance to get statistics for. |

## Sample Usage

### Orchestrator Management

```javascript
// Create an orchestrator
const createResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "orchestrator_create",
  {
    name: "Task Orchestrator",
    description: "Manages and distributes tasks across worker agents",
    agent_id: "agent-001",
    default_worker_agent_id: "worker-001",
    metadata: { priority: "high" }
  }
);

// List all orchestrators
const listResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "orchestrator_list",
  {}
);

// Update an orchestrator
const updateResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "orchestrator_update",
  {
    orchestrator_id: "orch-123",
    description: "Updated description",
    metadata: { priority: "critical" }
  }
);
```

### Codemap Management

```javascript
// Create a codemap
const createResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "codemap_create",
  {
    title: "Authentication Module",
    query: "Map the authentication and authorization code structure"
  }
);

// Get a codemap
const getResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "codemap_get",
  { codemap_id: "codemap-123" }
);

// Update codemap status
const updateResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "codemap_update",
  {
    codemap_id: "codemap-123",
    status: "done",
    description: "Completed mapping of auth module"
  }
);
```

### Hook Management

```javascript
// Create a hook for file changes
const createResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "hook_create",
  {
    name: "Test Runner Hook",
    description: "Runs tests when source files change",
    trigger: "file.modified",
    trigger_config: { pattern: "src/**/*.ts" },
    action: "execute",
    action_config: { command: "npm test" },
    enabled: true,
    priority: 10
  }
);

// List all hooks
const listResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "hook_list",
  {}
);

// Enable/disable a hook
const enableResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "hook_enable",
  { hook_id: "hook-123" }
);

const disableResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "hook_disable",
  { hook_id: "hook-123" }
);
```

### EventLog Management

```javascript
// Create an event log instance
const createResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "eventlog_create_instance",
  {
    name: "Agent Activity Log",
    description: "Tracks all agent activities and decisions"
  }
);

// Append an event
const appendResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "eventlog_append_event",
  {
    instance_id: "log-123",
    stream_id: "agent-actions",
    event_type: "task_completed",
    payload: { task_id: "task-456", duration_ms: 5000 },
    metadata: { agent_id: "agent-001" }
  }
);

// Query events
const queryResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "eventlog_query_events",
  {
    instance_id: "log-123",
    stream_id: "agent-actions",
    conditions: [
      { field: "event_type", operator: "eq", value: "task_completed" }
    ],
    order_by: { field: "timestamp", direction: "desc" },
    limit: 50
  }
);

// Get statistics
const statsResult = await codebolt.tools.executeTool(
  "codebolt.admin",
  "eventlog_get_stats",
  { instance_id: "log-123" }
);
```

:::info
Hook trigger types include: file.created, file.modified, file.deleted, git.commit, git.push, git.pull, terminal.command, agent.start, agent.end, message.received, and custom. Hook action types include: notify, execute, log, webhook, and agent. Codemap status values are: creating, done, and error.
:::
