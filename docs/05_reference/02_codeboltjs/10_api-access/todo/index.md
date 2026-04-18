---
cbapicategory:
  - name: addTodo
    link: /docs/api/apiaccess/todo/addTodo
    description: Adds a new todo item with title, priority, and tags.
  - name: updateTodo
    link: /docs/api/apiaccess/todo/updateTodo
    description: "Updates an existing todo item's status, title, priority, or tags."
  - name: getTodoList
    link: /docs/api/apiaccess/todo/getTodoList
    description: Retrieves the complete list of todo items.
  - name: getAllIncompleteTodos
    link: /docs/api/apiaccess/todo/getAllIncompleteTodos
    description: Gets all todo items that are not yet completed.
  - name: exportTodos
    link: /docs/api/apiaccess/todo/exportTodos
    description: Exports todos in JSON or Markdown format.
  - name: importTodos
    link: /docs/api/apiaccess/todo/importTodos
    description: Imports todos from JSON or Markdown format.
---

# Todo API

The Todo API provides comprehensive task management capabilities, allowing you to create, update, retrieve, and organize todo items. You can manage priorities, tags, statuses, and import/export tasks in different formats.

## Overview

The todo module enables you to:
- **Create Tasks**: Add new todo items with titles, priorities, and tags
- **Update Tasks**: Modify todo status, title, priority, and tags
- **Retrieve Tasks**: Get complete todo lists or filter by status
- **Organize Tasks**: Use tags and priorities to categorize tasks
- **Import/Export**: Transfer tasks between systems using JSON or Markdown formats

## Quick Start Example

```js
// Initialize connection
await codebolt.waitForReady();

// Add a new high-priority todo
const result = await codebolt.todo.addTodo({
  title: 'Implement user authentication',
  priority: 'high',
  tags: ['backend', 'security']
});
console.log('Todo added:', result);

// Get all incomplete todos
const incompleteTodos = await codebolt.todo.getAllIncompleteTodos();
console.log('Pending tasks:', incompleteTodos);

// Update todo status
await codebolt.todo.updateTodo({
  id: result.data.todo.id,
  status: 'processing'
});

// Mark as completed
await codebolt.todo.updateTodo({
  id: result.data.todo.id,
  status: 'completed'
});
```

## Todo Status Values

Todos can have the following statuses:
- `pending`: Task is not yet started
- `processing`: Task is currently being worked on
- `completed`: Task has been finished
- `cancelled`: Task was cancelled

## Priority Levels

Todos can be assigned these priority levels:
- `high`: Urgent tasks that should be addressed first
- `medium`: Standard priority tasks
- `low`: Tasks that can be deferred

## Common Use Cases

### Task Management Workflow

```js
// Create multiple related tasks
const task1 = await codebolt.todo.addTodo({
  title: 'Design database schema',
  priority: 'high',
  tags: ['database', 'design']
});

const task2 = await codebolt.todo.addTodo({
  title: 'Implement API endpoints',
  priority: 'high',
  tags: ['backend', 'api']
});

const task3 = await codebolt.todo.addTodo({
  title: 'Write unit tests',
  priority: 'medium',
  tags: ['testing']
});

// Start working on first task
await codebolt.todo.updateTodo({
  id: task1.data.todo.id,
  status: 'processing'
});

// Complete and move to next
await codebolt.todo.updateTodo({
  id: task1.data.todo.id,
  status: 'completed'
});
```

### Exporting and Importing Tasks

```js
// Export all todos as JSON
const exported = await codebolt.todo.exportTodos({
  format: 'json'
});
console.log('Exported data:', exported.data.content);

// Export only high-priority tasks as Markdown
const highPriorityExport = await codebolt.todo.exportTodos({
  format: 'markdown',
  status: ['pending', 'processing']
});

// Import todos from another system
await codebolt.todo.importTodos({
  data: JSON.stringify([
    { title: 'Review code', priority: 'medium' },
    { title: 'Update documentation', priority: 'low' }
  ]),
  format: 'json',
  mergeStrategy: 'merge'
});
```

## Response Structure

All todo API functions return responses with a consistent structure:

```js
{
  type: 'addTodoResponse' | 'updateTodoResponse' | 'getTodoListResponse' | etc.,
  data: {
    todo: { ... },           // Single todo object
    todos: [ ... ],          // Array of todos
    content: '...',          // Exported content string
    count: 5                 // Number of todos
  },
  success: true,
  message: 'Operation completed',
  error: null,
  messageId: 'msg-id',
  threadId: 'thread-id'
}
```

<CBAPICategory />
