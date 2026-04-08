---
title: Todo MCP
sidebar_label: codebolt.todo
sidebar_position: 26
---

# codebolt.todo

Task management operations for creating, updating, and managing todo items with priorities, statuses, and tags.

## Available Tools

- `todo_add` - Adds a new todo item with title, priority, and tags
- `todo_list` - Retrieves the todo list with optional filters
- `todo_list_incomplete` - Retrieves all incomplete todo items
- `todo_update` - Updates an existing todo item (title, status, priority, tags)
- `todo_export` - Exports todos in JSON or markdown format
- `todo_import` - Imports todos from JSON or markdown format

## Sample Usage

### Adding a Todo

```javascript
// Add a basic todo
const addResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_add",
  {
    title: "Implement user authentication"
  }
);

// Add a todo with priority and tags
const addWithDetailsResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_add",
  {
    title: "Review pull request #42",
    priority: "high",
    tags: ["code-review", "urgent"]
  }
);
```

### Listing Todos

```javascript
// List all todos
const listResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_list",
  {}
);

// List todos with filters
const filteredListResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_list",
  {
    filters: {
      priority: "high",
      status: "pending"
    }
  }
);

// List only incomplete todos
const incompleteResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_list_incomplete",
  {}
);
```

### Updating a Todo

```javascript
// Update todo title
const updateTitleResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_update",
  {
    id: "todo-123",
    title: "Updated: Implement user authentication with OAuth"
  }
);

// Update todo status
const updateStatusResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_update",
  {
    id: "todo-123",
    status: "completed"
  }
);

// Update multiple fields
const updateMultipleResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_update",
  {
    id: "todo-123",
    status: "processing",
    priority: "medium",
    tags: ["in-progress", "backend"]
  }
);
```

### Exporting Todos

```javascript
// Export todos as JSON
const exportJsonResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_export",
  {
    format: "json"
  }
);

// Export todos as markdown
const exportMarkdownResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_export",
  {
    format: "markdown"
  }
);

// Export filtered todos
const exportFilteredResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_export",
  {
    format: "json",
    listId: "project-alpha",
    status: ["pending", "processing"]
  }
);
```

### Importing Todos

```javascript
// Import todos from JSON
const importJsonResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_import",
  {
    data: JSON.stringify([
      { title: "Task 1", priority: "high" },
      { title: "Task 2", priority: "low" }
    ]),
    format: "json",
    mergeStrategy: "merge"
  }
);

// Import todos from markdown
const importMarkdownResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_import",
  {
    data: "- [ ] Task 1\n- [ ] Task 2\n- [x] Task 3 (completed)",
    format: "markdown",
    mergeStrategy: "replace"
  }
);

// Import to a specific list
const importToListResult = await codebolt.tools.executeTool(
  "codebolt.todo",
  "todo_import",
  {
    data: JSON.stringify([{ title: "New Task" }]),
    format: "json",
    listId: "project-beta"
  }
);
```

## Tool Parameters

### todo_add

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title of the todo item |
| priority | string | No | Priority level: 'high', 'medium', or 'low' |
| tags | string[] | No | Array of tags for organizing the todo |

### todo_list

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters to apply to the query |

### todo_list_incomplete

No parameters required.

### todo_update

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the todo to update |
| title | string | No | New title for the todo |
| status | string | No | New status: 'pending', 'processing', 'completed', or 'cancelled' |
| priority | string | No | New priority: 'high', 'medium', or 'low' |
| tags | string[] | No | New tags for the todo |

### todo_export

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| format | string | No | Export format: 'json' or 'markdown' |
| listId | string | No | Filter by list ID |
| status | string[] | No | Filter by status values |

### todo_import

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| data | string | Yes | The import data (JSON or markdown string) |
| format | string | No | Import format: 'json' or 'markdown' |
| mergeStrategy | string | No | How to handle existing todos: 'replace' or 'merge' |
| listId | string | No | Target list ID for imported todos |

:::info
The todo functionality provides a complete task management system through the MCP interface. Todos support multiple statuses (pending, processing, completed, cancelled), three priority levels (high, medium, low), and custom tags for flexible organization. Import/export capabilities allow data portability between systems.
:::
