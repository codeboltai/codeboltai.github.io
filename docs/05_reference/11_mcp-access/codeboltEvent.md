---
title: CodeboltEvent MCP
sidebar_label: codebolt.event
sidebar_position: 73
---

# codebolt.event

Event management tools for coordinating and tracking background agent lifecycle and external event handling.

## Available Tools

- `event_add_running_agent` - Add a running background agent to tracking
- `event_get_running_agent_count` - Get count of currently running background agents
- `event_check_background_agent_completion` - Check for completed agents (non-blocking)
- `event_on_background_agent_completion` - Wait for agent completion (blocking)
- `event_wait_for_external_event` - Wait for any external event

## Tool Parameters

### `event_add_running_agent`

Adds a running background agent to tracking with optional group ID for coordinated agent management.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The unique thread ID for the agent instance. |
| data | object | Yes | The agent data object containing configuration and state information. |
| groupId | string | No | Optional group ID for grouping related agents together. |

### `event_get_running_agent_count`

Gets the number of currently running background agents being tracked by the system.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `event_check_background_agent_completion`

Checks if any background agent has completed (non-blocking operation). Returns completion data if available, or null if no agents have completed.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `event_on_background_agent_completion`

Waits for background agent completion (blocking operation). Returns when an agent completes and provides completion details.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `event_wait_for_external_event`

Waits for any external event including Background Completion, Group Completion, or Agent Event. Returns the event type and associated data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

## Sample Usage

```javascript
// Add a running agent to tracking
const addAgentResult = await codebolt.tools.executeTool(
  "codebolt.event",
  "event_add_running_agent",
  {
    threadId: "agent-thread-123",
    data: { task: "process-data", status: "running" },
    groupId: "data-processing-group"
  }
);

// Get count of running agents
const countResult = await codebolt.tools.executeTool(
  "codebolt.event",
  "event_get_running_agent_count",
  {}
);

// Check for completed agents (non-blocking)
const checkResult = await codebolt.tools.executeTool(
  "codebolt.event",
  "event_check_background_agent_completion",
  {}
);

// Wait for agent completion (blocking)
const completionResult = await codebolt.tools.executeTool(
  "codebolt.event",
  "event_on_background_agent_completion",
  {}
);

// Wait for any external event
const eventResult = await codebolt.tools.executeTool(
  "codebolt.event",
  "event_wait_for_external_event",
  {}
);
```

:::info
Event lifecycle notes:
- Use `event_add_running_agent` to register background agents when they start
- Use `event_get_running_agent_count` to monitor the number of active agents
- Use `event_check_background_agent_completion` for non-blocking status checks
- Use `event_on_background_agent_completion` to block until an agent completes
- Use `event_wait_for_external_event` to wait for various event types including group completions
:::