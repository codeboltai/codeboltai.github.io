---
title: Memory MCP
sidebar_label: codebolt.memory
sidebar_position: 10
---

# codebolt.memory

Memory operations for storing and retrieving key-value pairs.

## Available Tools

- `memory_set` - Store a value in memory
- `memory_get` - Retrieve a value from memory

## Sample Usage

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

// Attempt to get non-existent key
const nonExistentResult = await codebolt.tools.executeTool(
  "codebolt.memory",
  "memory_get",
  {
    key: "non-existent-key-12345"
  }
);
```

:::info
This functionality provides simple key-value storage through the MCP interface.
::: 