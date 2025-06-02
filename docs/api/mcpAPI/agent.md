---
title: Agent MCP
sidebar_label: codebolt.agent
sidebar_position: 7
---

# codebolt.agent

Agent management and lifecycle operations for controlling and coordinating AI agents.

## Available Tools

- `agent_start` - Start a new agent instance
- `agent_find` - Find existing agents by criteria
- `agent_list` - List all active agents
- `agent_stop` - Stop a running agent
- `agent_install` - Install a new agent
- `attempt_completion` - Mark agent task as completed

## Sample Usage

```javascript
// Start a new agent
const startResult = await codeboltMCP.executeTool(
  "codebolt.agent",
  "agent_start",
  { 
    agentType: "codeAnalyzer",
    config: { language: "javascript" }
  }
);

// List all active agents
const listResult = await codeboltMCP.executeTool(
  "codebolt.agent",
  "agent_list",
  {}
);

// Find specific agents
const findResult = await codeboltMCP.executeTool(
  "codebolt.agent",
  "agent_find",
  { 
    criteria: { type: "codeAnalyzer", status: "active" }
  }
);

// Stop an agent
const stopResult = await codeboltMCP.executeTool(
  "codebolt.agent",
  "agent_stop",
  { agentId: "agent-123" }
);

// Install a new agent
const installResult = await codeboltMCP.executeTool(
  "codebolt.agent",
  "agent_install",
  { 
    source: "marketplace",
    agentName: "testRunner"
  }
);

// Mark task completion
const completeResult = await codeboltMCP.executeTool(
  "codebolt.agent",
  "attempt_completion",
  { 
    agentId: "agent-123",
    result: "Task completed successfully"
  }
);
```

:::info
This functionality provides comprehensive agent lifecycle management for orchestrating multiple AI agents.
::: 