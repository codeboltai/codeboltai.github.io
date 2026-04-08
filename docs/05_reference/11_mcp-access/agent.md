---
title: Agent MCP
sidebar_label: codebolt.agent
sidebar_position: 7
---

# codebolt.agent

Agent management and lifecycle operations for controlling and coordinating AI agents.

## Available Tools

- `agent_start` - Start a new agent instance
- `agent_find` - Find existing agents by task
- `agent_list` - List all active agents
- `agent_details` - Get detailed information about specific agents

## Tool Parameters

### `agent_start`

Starts an agent with a specific task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agent_id | string | Yes | The ID of the agent to start. |
| task | string | Yes | The task for the agent to execute. |

### `agent_find`

Finds agents suitable for a given task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task | string | Yes | The task description to find agents for. |
| max_results | number | No | Maximum number of results (default: 3). |

### `agent_list`

Lists all available agents.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `agent_details`

Retrieves details of specific agents.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agent_list | string[] | No | List of agent IDs to get details for. |

## Sample Usage

```javascript
// Start a new agent
const startResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "agent_start",
  {
    agent_id: "act",
    task: "Hi"
  }
);

// Find agents by task
const findResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "agent_find",
  {
    task: "create node js application",
    max_results: 5
  }
);

// List all active agents
const listResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "agent_list",
  {}
);

// Get agent details
const detailResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "agent_details",
  {
    agent_list: ["ask", "act"]
  }
);
```

:::info
This functionality provides agent lifecycle management for orchestrating AI agents.
::: 