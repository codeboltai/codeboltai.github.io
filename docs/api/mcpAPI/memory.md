---
title: Memory MCP
sidebar_label: codebolt.memory
sidebar_position: 8
---

# codebolt.memory

Memory storage and retrieval system for persisting and accessing data across sessions.

## Available Tools

- `memory_set` - Store data in memory
- `memory_get` - Retrieve data from memory

## Sample Usage

```javascript
// Store data in memory
const setResult = await codeboltMCP.executeTool(
  "codebolt.memory",
  "memory_set",
  { 
    key: "user_preferences",
    value: {
      theme: "dark",
      language: "javascript",
      autoSave: true
    }
  }
);

// Retrieve data from memory
const getResult = await codeboltMCP.executeTool(
  "codebolt.memory",
  "memory_get",
  { key: "user_preferences" }
);

// Store session data
const sessionResult = await codeboltMCP.executeTool(
  "codebolt.memory",
  "memory_set",
  { 
    key: "session_data",
    value: {
      startTime: Date.now(),
      actions: []
    },
    ttl: 3600 // Time to live in seconds
  }
);
```

:::info
This functionality is similar to the [memory API](/docs/api/apiaccess/dbmemory) and provides persistent storage through MCP interface.
::: 