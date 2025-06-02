---
title: State MCP
sidebar_label: codebolt.state
sidebar_position: 13
---

# codebolt.state

Application state management for maintaining and updating system and agent states.

## Available Tools

- `state_get` - Get current application state
- `state_get_agent` - Get specific agent state
- `state_set_agent` - Set agent state
- `state_remove_agent` - Remove agent from state
- `state_update_project` - Update project state

## Sample Usage

```javascript
// Get current application state
const getResult = await codeboltMCP.executeTool(
  "codebolt.state",
  "state_get",
  {}
);

// Get specific agent state
const agentResult = await codeboltMCP.executeTool(
  "codebolt.state",
  "state_get_agent",
  { agentId: "agent-123" }
);

// Set agent state
const setResult = await codeboltMCP.executeTool(
  "codebolt.state",
  "state_set_agent",
  { 
    agentId: "agent-123",
    state: {
      status: "active",
      currentTask: "code_analysis",
      progress: 75
    }
  }
);

// Remove agent from state
const removeResult = await codeboltMCP.executeTool(
  "codebolt.state",
  "state_remove_agent",
  { agentId: "agent-123" }
);

// Update project state
const projectResult = await codeboltMCP.executeTool(
  "codebolt.state",
  "state_update_project",
  { 
    projectId: "proj-456",
    updates: {
      lastModified: Date.now(),
      buildStatus: "success"
    }
  }
);
```

:::info
This functionality is similar to the [cbstate API](/docs/api/apiaccess/cbstate) and provides state management through MCP interface.
::: 