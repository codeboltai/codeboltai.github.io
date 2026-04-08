---
title: State MCP
sidebar_label: codebolt.state
sidebar_position: 13
---

# codebolt.state

State management operations for agents and projects.

## Available Tools

- `state_get_app` - Retrieve the current application state
- `state_add_agent` - Add a key-value pair to the agent's state
- `state_get_agent` - Retrieve the current agent state
- `state_get_project` - Retrieve the current project state
- `state_update_project` - Update a key-value pair in the project state

## Tool Parameters

### `state_get_app`

Retrieves the current application state from the server. Returns the complete application state object containing configuration and runtime information.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

---

### `state_add_agent`

Adds a key-value pair to the agent's state. Use this to store agent-specific data that persists across interactions.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | The key to add to the agent's state |
| value | string | Yes | The value associated with the key |

---

### `state_get_agent`

Retrieves the current state of the agent from the server. Returns all key-value pairs stored in the agent's state.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

---

### `state_get_project`

Retrieves the current project state from the server. Returns project-specific configuration and data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

---

### `state_update_project`

Updates a key-value pair in the project state. Use this to store or modify project-specific data that persists across sessions.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | The key to update in the project state |
| value | any | Yes | The value to set for the key (can be any JSON-serializable type) |

## Sample Usage

```javascript
// Get application state
const appStateResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_get_app",
  {}
);

// Add to agent state
const addAgentResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_add_agent",
  { key: "testKey", value: "testValue" }
);

// Get agent state
const getAgentResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_get_agent",
  {}
);

// Get project state
const getProjectResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_get_project",
  {}
);

// Update project state
const updateProjectResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_update_project",
  { key: "projectKey", value: "projectValue" }
);
```

:::info
This functionality provides state management for agents and projects through the MCP interface.
::: 