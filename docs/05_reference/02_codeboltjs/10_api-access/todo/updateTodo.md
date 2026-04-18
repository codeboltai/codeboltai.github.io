---
name: updateTodo
cbbaseinfo:
  description: "Updates an existing todo item's status, title, priority, or tags."
cbparameters:
  parameters:
    - name: params
      typeName: "{ id: string; title?: string; status?: 'pending' | 'processing' | 'completed' | 'cancelled'; priority?: 'high' | 'medium' | 'low'; tags?: string[] }"
      description: Parameters for updating the todo item.
      isOptional: false
    - name: params.id
      typeName: string
      description: The unique identifier of the todo to update.
      isOptional: false
    - name: params.title
      typeName: string
      description: The new title for the todo item.
      isOptional: true
    - name: params.status
      typeName: "'pending' | 'processing' | 'completed' | 'cancelled'"
      description: The new status for the todo item.
      isOptional: true
    - name: params.priority
      typeName: "'high' | 'medium' | 'low'"
      description: The new priority level for the todo item.
      isOptional: true
    - name: params.tags
      typeName: "string[]"
      description: "The new array of tags for the todo item (replaces existing tags)."
      isOptional: true
  returns:
    signatureTypeName: "Promise<UpdateTodoResponse>"
    description: A promise that resolves with the updated todo item.
    typeArgs: []
data:
  name: updateTodo
  category: todo
  link: updateTodo.md
---
# updateTodo

```typescript
codebolt.todo.updateTodo(params: { id: string; title?: string; status?: 'pending' | 'processing' | 'completed' | 'cancelled'; priority?: 'high' | 'medium' | 'low'; tags?: string[] }, params.id: string, params.title: string, params.status: 'pending' | 'processing' | 'completed' | 'cancelled', params.priority: 'high' | 'medium' | 'low', params.tags: string[]): Promise<UpdateTodoResponse>
```

Updates an existing todo item's status, title, priority, or tags.
### Parameters

- **`params`** (`{ id: string; title?: string; status?: 'pending' | 'processing' | 'completed' | 'cancelled'; priority?: 'high' | 'medium' | 'low'; tags?: string[] }`): Parameters for updating the todo item.
- **`params.id`** (string): The unique identifier of the todo to update.
- **`params.title`** (string, optional): The new title for the todo item.
- **`params.status`** ('pending' | 'processing' | 'completed' | 'cancelled', optional): The new status for the todo item.
- **`params.priority`** ('high' | 'medium' | 'low', optional): The new priority level for the todo item.
- **`params.tags`** (string[], optional): The new array of tags for the todo item (replaces existing tags).

### Returns

- **`Promise<UpdateTodoResponse>`**: A promise that resolves with the updated todo item.

### Response Structure

The method returns a Promise that resolves to an [`UpdateTodoResponse`](/docs/reference/codeboltjs/type-reference/types/interfaces/UpdateTodoResponse) object with the following properties:

**Response Properties:**
- `type`: Always "updateTodoResponse"
- `data`: Object containing the response data
  - `todo`: The updated todo object with all current values
    - `id`: Unique identifier for the todo
    - `title`: The updated todo title
    - `status`: Current status
    - `priority`: Current priority level
    - `tags`: Current array of tags
    - `createdAt`: Original creation timestamp
    - `updatedAt`: Timestamp of the update
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Update Todo Status

```js
// Wait for connection
await codebolt.waitForReady();

// Create a todo first
const created = await codebolt.todo.addTodo({
  title: 'Implement user authentication'
});

// Update status to processing
const result = await codebolt.todo.updateTodo({
  id: created.data.todo.id,
  status: 'processing'
});
console.log('✅ Todo status updated to:', result.data.todo.status);

// Mark as completed
await codebolt.todo.updateTodo({
  id: created.data.todo.id,
  status: 'completed'
});
console.log('✅ Todo marked as completed');
```

**Explanation**: This is the most common use case - updating a todo's status as it progresses through the workflow. Status changes are tracked with timestamps.

#### Example 2: Update Multiple Properties

```js
// Update title, priority, and tags simultaneously
const result = await codebolt.todo.updateTodo({
  id: 'todo-id-123',
  title: 'Fix critical authentication bug in production',
  priority: 'high',
  tags: ['critical', 'security', 'production']
});
console.log('✅ Todo updated:', result.data.todo);
```

**Explanation**: You can update multiple properties in a single call. All specified fields will be updated, while unspecified fields remain unchanged.

#### Example 3: Complete Todo Workflow

```js
async function manageTodoLifecycle(todoId) {
  // Step 1: Start working on the todo
  await codebolt.todo.updateTodo({
    id: todoId,
    status: 'processing'
  });
  console.log('🔄 Started working on todo');

  // Simulate work
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Step 2: Mark as completed
  const result = await codebolt.todo.updateTodo({
    id: todoId,
    status: 'completed'
  });

  console.log('✅ Todo completed at:', result.data.todo.updatedAt);
  return result.data.todo;
}

// Usage
const todo = await codebolt.todo.addTodo({ title: 'Test task' });
await manageTodoLifecycle(todo.data.todo.id);
```

**Explanation**: This demonstrates a complete todo lifecycle from pending to processing to completed. This pattern is useful for tracking progress.

#### Example 4: Change Priority and Add Tags

```js
// Escalate a todo and add tags
const result = await codebolt.todo.updateTodo({
  id: 'todo-id-456',
  priority: 'high',
  tags: ['urgent', 'customer-issue', 'escalated']
});
console.log('✅ Todo escalated and tagged');
```

**Explanation**: When updating tags, the new array completely replaces the old tags. Make sure to include all desired tags in the update.

#### Example 5: Batch Update Multiple Todos

```js
// Update multiple todos at once
async function updateMultipleTodos(todoIds, updates) {
  const results = [];
  for (const id of todoIds) {
    try {
      const result = await codebolt.todo.updateTodo({
        id,
        ...updates
      });
      results.push({ id, success: true, data: result.data.todo });
      console.log(`✅ Updated todo ${id}`);
    } catch (error) {
      results.push({ id, success: false, error: error.message });
      console.error(`❌ Failed to update todo ${id}:`, error.message);
    }
  }
  return results;
}

// Usage: Mark all todos in a list as completed
const incompleteTodos = await codebolt.todo.getAllIncompleteTodos();
const todoIds = incompleteTodos.data.todos.map(t => t.id);
const results = await updateMultipleTodos(todoIds, { status: 'completed' });
console.log(`✅ Updated ${results.filter(r => r.success).length} todos`);
```

**Explanation**: This pattern is useful for bulk operations, such as completing all tasks in a sprint or changing priorities for multiple items.

#### Example 6: Conditional Updates Based on Current State

```js
// Update todo only if certain conditions are met
async function conditionalTodoUpdate(todoId, updates, condition) {
  // First, get the current todo state
  const currentList = await codebolt.todo.getTodoList();
  const todo = currentList.data.todos.find(t => t.id === todoId);

  if (!todo) {
    throw new Error(`Todo ${todoId} not found`);
  }

  // Check condition
  if (!condition(todo)) {
    console.log('⚠️ Condition not met, skipping update');
    return null;
  }

  // Apply updates
  const result = await codebolt.todo.updateTodo({
    id: todoId,
    ...updates
  });

  console.log('✅ Todo updated conditionally');
  return result.data.todo;
}

// Usage: Only update if todo is pending
await conditionalTodoUpdate(
  'todo-id-789',
  { status: 'processing' },
  (todo) => todo.status === 'pending'
);

// Usage: Only escalate if not already high priority
await conditionalTodoUpdate(
  'todo-id-789',
  { priority: 'high' },
  (todo) => todo.priority !== 'high'
);
```

**Explanation**: This advanced pattern ensures updates are only applied when appropriate, preventing unintended state changes.

### Common Use Cases

**1. Kanban-Style Workflow**: Move todos through different stages.

```js
async function moveTodoToStage(todoId, stage) {
  const stages = {
    backlog: 'pending',
    inProgress: 'processing',
    done: 'completed',
    cancelled: 'cancelled'
  };

  await codebolt.todo.updateTodo({
    id: todoId,
    status: stages[stage]
  });
}

// Usage
await moveTodoToStage('todo-id', 'inProgress');
await moveTodoToStage('todo-id', 'done');
```

**2. Priority Escalation**: Increase priority based on age or other factors.

```js
async function escalateOldTodos() {
  const todos = await codebolt.todo.getAllIncompleteTodos();
  const now = new Date();

  for (const todo of todos.data.todos) {
    const createdDate = new Date(todo.createdAt);
    const daysOld = (now - createdDate) / (1000 * 60 * 60 * 24);

    // Escalate todos older than 7 days that are still pending
    if (daysOld > 7 && todo.status === 'pending' && todo.priority !== 'high') {
      await codebolt.todo.updateTodo({
        id: todo.id,
        priority: 'high',
        tags: [...todo.tags, 'escalated']
      });
      console.log(`⚠️ Escalated old todo: ${todo.title}`);
    }
  }
}
```

**3. Smart Tagging**: Automatically add tags based on todo content.

```js
async function autoTagTodo(todoId) {
  const todoList = await codebolt.todo.getTodoList();
  const todo = todoList.data.todos.find(t => t.id === todoId);

  if (!todo) return;

  // Auto-tag based on keywords in title
  const keywordTags = {
    'bug': 'bug',
    'feature': 'feature',
    'urgent': 'urgent',
    'security': 'security',
    'performance': 'performance',
    'api': 'api',
    'ui': 'ui',
    'database': 'database'
  };

  const newTags = new Set(todo.tags);
  const titleLower = todo.title.toLowerCase();

  for (const [keyword, tag] of Object.entries(keywordTags)) {
    if (titleLower.includes(keyword) && !todo.tags.includes(tag)) {
      newTags.add(tag);
    }
  }

  if (newTags.size > todo.tags.length) {
    await codebolt.todo.updateTodo({
      id: todoId,
      tags: Array.from(newTags)
    });
    console.log('🏷️ Auto-tagged todo');
  }
}
```

**4. Todo Renaming**: Update titles while preserving context.

```js
async function renameTodoWithPrefix(todoId, prefix) {
  const todoList = await codebolt.todo.getTodoList();
  const todo = todoList.data.todos.find(t => t.id === todoId);

  if (!todo) return;

  // Add prefix if not already present
  const newTitle = todo.title.startsWith(prefix)
    ? todo.title
    : `${prefix} ${todo.title}`;

  await codebolt.todo.updateTodo({
    id: todoId,
    title: newTitle
  });

  console.log(`✅ Renamed to: ${newTitle}`);
}

// Usage
await renameTodoWithPrefix('todo-id', '[IN PROGRESS]');
```

### Notes

- The `id` parameter is required and must be a valid todo ID
- At least one of the optional parameters (title, status, priority, tags) must be provided
- When updating tags, the new array completely replaces existing tags (not a merge operation)
- Status changes are automatically timestamped in the `updatedAt` field
- Updating a completed todo back to pending/reactivate it is possible
- Priority changes don't automatically affect status
- If the todo ID doesn't exist, the response will indicate failure with an error message
- All updates are atomic - either all changes apply or none do
- The `createdAt` timestamp never changes, but `updatedAt` reflects the most recent update
