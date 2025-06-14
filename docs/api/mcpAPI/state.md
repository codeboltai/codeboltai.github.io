---
title: State MCP
sidebar_label: codebolt.state
sidebar_position: 13
---

# codebolt.state

State management operations for agents and projects.

## Available Tools

- `state_get` - Get global state by key
- `state_set_agent` - Set agent-specific state
- `state_get_agent` - Get agent-specific state
- `state_remove_agent` - Remove agent-specific state
- `state_update_project` - Update project-specific state

## Sample Usage

```javascript
// Get global state
const getResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_get",
  { key: "all" }
);

// Set agent-specific state
const setAgentResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_set_agent",
  { key: "testKey", value: "testValue", type: "string" }
);

// Get agent-specific state
const getAgentResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_get_agent",
  { variableName: "testKey" }
);

// Remove agent-specific state
const removeAgentResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_remove_agent",
  { key: "testKey", value: "testValue", type: "string" }
);

// Update project-specific state
const updateProjectResult = await codebolt.tools.executeTool(
  "codebolt.state",
  "state_update_project",
  { key: "projectKey", value: "projectValue" }
);
```

:::info
This functionality provides state management for agents and projects through the MCP interface.
::: 