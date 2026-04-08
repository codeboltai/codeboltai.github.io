---
name: getTodoList
cbbaseinfo:
  description: Retrieves the complete list of todo items.
cbparameters:
  parameters:
    - name: params
      typeName: any
      description: Optional parameters for filtering or customizing the todo list.
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetTodoListResponse>"
    description: A promise that resolves with the complete list of todos.
    typeArgs: []
data:
  name: getTodoList
  category: todo
  link: getTodoList.md
---
# getTodoList

```typescript
codebolt.todo.getTodoList(params: any): Promise<GetTodoListResponse>
```

Retrieves the complete list of todo items.
### Parameters

- **`params`** (any, optional): Optional parameters for filtering or customizing the todo list.

### Returns

- **`Promise<GetTodoListResponse>`**: A promise that resolves with the complete list of todos.

### Response Structure

The method returns a Promise that resolves to a [`GetTodoListResponse`](/docs/reference/type-reference/types/interfaces/GetTodoListResponse) object with the following properties:

**Response Properties:**
- `type`: Always "getTodoListResponse"
- `data`: Object containing the response data
  - `todos`: Array of todo objects, each containing:
    - `id`: Unique identifier for the todo
    - `title`: The todo title
    - `status`: Current status ('pending', 'processing', 'completed', 'cancelled')
    - `priority`: Priority level ('high', 'medium', 'low')
    - `tags`: Array of tags
    - `createdAt`: Timestamp of creation
    - `updatedAt`: Timestamp of last update
  - `count`: Total number of todos
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Get All Todos

```js
// Wait for connection
await codebolt.waitForReady();

// Retrieve complete todo list
const result = await codebolt.todo.getTodoList();
console.log('✅ Total todos:', result.data.count);
console.log('Todos:', result.data.todos);

// Display each todo
result.data.todos.forEach(todo => {
  console.log(`[${todo.priority.toUpperCase()}] ${todo.title} - ${todo.status}`);
});
```

**Explanation**: This is the simplest way to retrieve all todos. The response includes an array of all todo items with their complete details.

#### Example 2: Filter and Analyze Todos

```js
// Get todos and analyze by status
const result = await codebolt.todo.getTodoList();
const todos = result.data.todos;

// Group by status
const byStatus = {
  pending: todos.filter(t => t.status === 'pending'),
  processing: todos.filter(t => t.status === 'processing'),
  completed: todos.filter(t => t.status === 'completed'),
  cancelled: todos.filter(t => t.status === 'cancelled')
};

console.log('📊 Todo Summary:');
console.log(`  Pending: ${byStatus.pending.length}`);
console.log(`  In Progress: ${byStatus.processing.length}`);
console.log(`  Completed: ${byStatus.completed.length}`);
console.log(`  Cancelled: ${byStatus.cancelled.length}`);
```

**Explanation**: This example demonstrates how to retrieve todos and then filter them client-side for analysis and reporting.

#### Example 3: Find Specific Todos

```js
// Get todos and search for specific items
const result = await codebolt.todo.getTodoList();
const todos = result.data.todos;

// Find todos by tag
const securityTodos = todos.filter(t => t.tags.includes('security'));
console.log('🔒 Security-related todos:', securityTodos.length);

// Find high-priority items
const highPriorityTodos = todos.filter(t => t.priority === 'high');
console.log('⚠️ High-priority todos:', highPriorityTodos.length);

// Find todos containing a keyword
const apiTodos = todos.filter(t =>
  t.title.toLowerCase().includes('api')
);
console.log('🔌 API-related todos:', apiTodos.map(t => t.title));
```

**Explanation**: After retrieving the full list, you can filter and search based on any criteria - tags, priority, title content, or dates.

#### Example 4: Sort Todos by Priority and Date

```js
// Get todos and sort them
const result = await codebolt.todo.getTodoList();
const todos = result.data.todos;

// Priority weight for sorting
const priorityWeight = { high: 3, medium: 2, low: 1 };

// Sort by priority (descending), then by creation date (ascending)
const sortedTodos = [...todos].sort((a, b) => {
  const priorityDiff = priorityWeight[b.priority] - priorityWeight[a.priority];
  if (priorityDiff !== 0) return priorityDiff;
  return new Date(a.createdAt) - new Date(b.createdAt);
});

console.log('📋 Sorted Todo List:');
sortedTodos.forEach((todo, index) => {
  console.log(`${index + 1}. [${todo.priority}] ${todo.title}`);
});
```

**Explanation**: This example shows how to sort todos by multiple criteria. The sorting is done client-side after retrieving all todos.

#### Example 5: Generate Todo Report

```js
// Generate a comprehensive todo report
async function generateTodoReport() {
  const result = await codebolt.todo.getTodoList();
  const todos = result.data.todos;

  // Calculate statistics
  const stats = {
    total: todos.length,
    byStatus: {},
    byPriority: {},
    byTag: {},
    avgAge: 0
  };

  // Analyze todos
  let totalAge = 0;
  const now = new Date();

  todos.forEach(todo => {
    // Count by status
    stats.byStatus[todo.status] = (stats.byStatus[todo.status] || 0) + 1;

    // Count by priority
    stats.byPriority[todo.priority] = (stats.byPriority[todo.priority] || 0) + 1;

    // Count by tag
    todo.tags.forEach(tag => {
      stats.byTag[tag] = (stats.byTag[tag] || 0) + 1;
    });

    // Calculate age
    const createdDate = new Date(todo.createdAt);
    totalAge += (now - createdDate) / (1000 * 60 * 60 * 24);
  });

  stats.avgAge = totalAge / todos.length;

  // Display report
  console.log('📊 Todo Report');
  console.log('═'.repeat(50));
  console.log(`Total Todos: ${stats.total}`);
  console.log('\nBy Status:');
  Object.entries(stats.byStatus).forEach(([status, count]) => {
    console.log(`  ${status}: ${count}`);
  });
  console.log('\nBy Priority:');
  Object.entries(stats.byPriority).forEach(([priority, count]) => {
    console.log(`  ${priority}: ${count}`);
  });
  console.log('\nTop Tags:');
  Object.entries(stats.byTag)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([tag, count]) => {
      console.log(`  #${tag}: ${count}`);
    });
  console.log(`\nAverage Age: ${stats.avgAge.toFixed(1)} days`);

  return stats;
}

// Usage
await generateTodoReport();
```

**Explanation**: This comprehensive example generates a detailed report with statistics about todos, including counts by status, priority, tags, and average age.

#### Example 6: Find and Update Stale Todos

```js
// Find todos that haven't been updated recently
async function findStaleTodos(daysThreshold = 7) {
  const result = await codebolt.todo.getTodoList();
  const todos = result.data.todos;
  const now = new Date();
  const threshold = daysThreshold * 24 * 60 * 60 * 1000;

  const staleTodos = todos.filter(todo => {
    const updatedDate = new Date(todo.updatedAt);
    const daysSinceUpdate = now - updatedDate;
    return daysSinceUpdate > threshold && todo.status !== 'completed';
  });

  console.log(`⚠️ Found ${staleTodos.length} stale todos (older than ${daysThreshold} days):`);

  for (const todo of staleTodos) {
    const daysSinceUpdate = Math.floor((now - new Date(todo.updatedAt)) / (1000 * 60 * 60 * 24));
    console.log(`  - ${todo.title} (${daysSinceUpdate} days old, status: ${todo.status})`);
  }

  return staleTodos;
}

// Usage
const staleTodos = await findStaleTodos(14);

// Optionally, update them
for (const todo of staleTodos) {
  await codebolt.todo.updateTodo({
    id: todo.id,
    tags: [...todo.tags, 'stale', 'needs-review']
  });
}
```

**Explanation**: This example finds todos that haven't been updated in a specified number of days. It's useful for identifying neglected tasks that may need attention.

### Common Use Cases

**1. Dashboard Overview**: Display all todos organized by category.

```js
async function displayTodoDashboard() {
  const result = await codebolt.todo.getTodoList();
  const todos = result.data.todos;

  const categories = {
    'High Priority': todos.filter(t => t.priority === 'high' && t.status !== 'completed'),
    'In Progress': todos.filter(t => t.status === 'processing'),
    'Recently Added': todos
      .filter(t => t.status === 'pending')
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5)
  };

  for (const [category, items] of Object.entries(categories)) {
    console.log(`\n${category}:`);
    items.forEach(todo => {
      console.log(`  • ${todo.title}`);
    });
  }
}
```

**2. Backup and Sync**: Retrieve all todos for backup purposes.

```js
async function backupTodos() {
  const result = await codebolt.todo.getTodoList();
  const backup = {
    timestamp: new Date().toISOString(),
    todos: result.data.todos
  };

  // Save to file or send to backup service
  const backupData = JSON.stringify(backup, null, 2);
  console.log('💾 Backup created with', backup.todos.length, 'todos');

  return backupData;
}
```

**3. Batch Operations**: Retrieve todos for bulk updates.

```js
async function archiveCompletedTodos() {
  const result = await codebolt.todo.getTodoList();
  const completedTodos = result.data.todos.filter(t => t.status === 'completed');

  console.log(`📦 Found ${completedTodos.length} completed todos to archive`);

  // Archive them (update with archive tag)
  for (const todo of completedTodos) {
    await codebolt.todo.updateTodo({
      id: todo.id,
      tags: [...todo.tags, 'archived']
    });
  }

  return completedTodos.length;
}
```

**4. Find Dependencies**: Locate related todos based on tags.

```js
async function findRelatedTodos(todoId) {
  const result = await codebolt.todo.getTodoList();
  const targetTodo = result.data.todos.find(t => t.id === todoId);

  if (!targetTodo) return [];

  // Find todos with matching tags
  const relatedTodos = result.data.todos.filter(todo =>
    todo.id !== todoId &&
    todo.tags.some(tag => targetTodo.tags.includes(tag))
  );

  console.log(`🔗 Found ${relatedTodos.length} related todos:`);
  relatedTodos.forEach(todo => {
    console.log(`  • ${todo.title}`);
    console.log(`    Common tags: ${todo.tags.filter(t => targetTodo.tags.includes(t)).join(', ')}`);
  });

  return relatedTodos;
}
```

### Notes

- The `params` argument is optional and currently accepts any type for future extensibility
- The returned array includes all todos regardless of status
- Todos are returned in no particular order; sort client-side if needed
- The `count` field reflects the total number of todos in the array
- Empty arrays are returned if no todos exist
- The response includes all todo properties; use client-side filtering to show/hide specific fields
- For large todo lists, consider using `getAllIncompleteTodos` for better performance if you only need pending items
- Timestamps are ISO 8601 formatted strings
- All filtering and sorting operations must be done client-side after retrieving the full list