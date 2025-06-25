---
title: Agent MCP
sidebar_label: codebolt.agent
sidebar_position: 7
---

# codebolt.agent

Agent management and lifecycle operations for controlling and coordinating AI agents.

## Available Tools

- `start` - Start a new agent instance
- `find` - Find existing agents by task
- `list` - List all active agents
- `get_detail` - Get detailed information about a specific agent

## Sample Usage

```javascript
// Start a new agent
const startResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "start",
  { 
    agentId: "act",
    task: "Hi"
  }
);

// Find agents by task
const findResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "find",
  { 
    task: "create node js application"
  }
);

// List all active agents
const listResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "list",
  {}
);

// Get agent details
const detailResult = await codebolt.tools.executeTool(
  "codebolt.agent",
  "get_detail",
  { 
    agentId: "ask"
  }
);
```

:::info
This functionality provides agent lifecycle management for orchestrating AI agents.
::: 