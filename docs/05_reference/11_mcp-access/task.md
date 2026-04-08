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
- `task_update` - Update an existing task

## Tool Parameters

### `task_create`

Creates a new task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title/name of the task |
| description | string | No | The description of the task |
| thread_id | string | No | The thread ID for the task |

---

### `task_list`

Retrieves a list of all tasks.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

---

### `task_update`

Updates an existing task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task_id | string | Yes | The ID of the task to update |
| name | string | No | New name for the task |
| completed | boolean | No | Whether the task is completed |
| status | string | No | Task status (e.g., 'completed', 'pending') |

## Sample Usage

```javascript
// Create a new task
const createResult = await codebolt.tools.executeTool(
  "codebolt.task",
  "task_create",
  { title: "Test MCP Task", description: "A test task description" }
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
  { task_id: "task-123", name: "Updated Task Name", status: "completed" }
);
```

:::info
This functionality provides task management through the MCP interface.
::: 