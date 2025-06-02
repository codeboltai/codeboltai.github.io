---
title: Task MCP
sidebar_label: codebolt.task
sidebar_position: 14
---

# codebolt.task

Task management and tracking system for organizing and monitoring work items.

## Available Tools

- `task_create` - Create a new task
- `task_list` - List all tasks
- `task_update` - Update an existing task
- `task_complete` - Mark task as completed
- `task_get_all` - Get all tasks with details

## Sample Usage

```javascript
// Create a new task
const createResult = await codeboltMCP.executeTool(
  "codebolt.task",
  "task_create",
  { 
    title: "Implement user authentication",
    description: "Add login and registration functionality",
    priority: "high",
    assignee: "developer@example.com",
    dueDate: "2024-01-15"
  }
);

// List all tasks
const listResult = await codeboltMCP.executeTool(
  "codebolt.task",
  "task_list",
  { 
    status: "active",
    limit: 10
  }
);

// Update a task
const updateResult = await codeboltMCP.executeTool(
  "codebolt.task",
  "task_update",
  { 
    taskId: "task-123",
    updates: {
      status: "in_progress",
      progress: 50,
      notes: "Started implementation"
    }
  }
);

// Complete a task
const completeResult = await codeboltMCP.executeTool(
  "codebolt.task",
  "task_complete",
  { 
    taskId: "task-123",
    completionNotes: "Authentication system implemented successfully"
  }
);

// Get all tasks with details
const getAllResult = await codeboltMCP.executeTool(
  "codebolt.task",
  "task_get_all",
  { includeCompleted: true }
);
```

:::info
This functionality is similar to the [taskplaner API](/docs/api/apiaccess/taskplaner) and provides task management through MCP interface.
::: 