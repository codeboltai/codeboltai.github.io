---
title: Task MCP
sidebar_label: codebolt.task
sidebar_position: 14
---

# codebolt.task

Task management operations for creating, listing, and updating tasks.

## Available Tools

- `task_create` - Create a new task
- `task_list` - List all tasks
- `task_update` - Update a task

## Sample Usage

```javascript
// Create a new task
const createResult = await codebolt.tools.executeTool(
  "codebolt.task",
  "task_create",
  { task: "Test MCP Task" }
);

// List all tasks
const listResult = await codebolt.tools.executeTool(
  "codebolt.task",
  "task_list",
  {}
);

// Update a task
const updateResult = await codebolt.tools.executeTool(
  "codebolt.task",
  "task_update",
  { task: "Test MCP Task Updated" }
);
```

:::info
This functionality provides task management through the MCP interface.
::: 