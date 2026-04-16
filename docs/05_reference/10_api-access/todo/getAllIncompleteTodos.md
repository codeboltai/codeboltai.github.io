---
name: getAllIncompleteTodos
cbbaseinfo:
  description: Retrieves all todo items that are not yet completed.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetAllIncompleteTodosResponse>"
    description: "A promise that resolves with all incomplete (pending, processing, or cancelled) todos."
    typeArgs: []
data:
  name: getAllIncompleteTodos
  category: todo
  link: getAllIncompleteTodos.md
---
# getAllIncompleteTodos

```typescript
codebolt.todo.getAllIncompleteTodos(): Promise<GetAllIncompleteTodosResponse>
```

Retrieves all todo items that are not yet completed.
### Returns

- **`Promise<GetAllIncompleteTodosResponse>`**: A promise that resolves with all incomplete (pending, processing, or cancelled) todos.

### Response Structure

The method returns a Promise that resolves to a [`GetAllIncompleteTodosResponse`](/docs/reference/type-reference/types/interfaces/GetAllIncompleteTodosResponse) object with the following properties:

**Response Properties:**
- `type`: Always "getAllIncompleteTodosResponse"
- `data`: Object containing the response data
  - `todos`: Array of incomplete todo objects, each containing:
    - `id`: Unique identifier for the todo
    - `title`: The todo title
    - `status`: Current status ('pending', 'processing', or 'cancelled')
    - `priority`: Priority level ('high', 'medium', 'low')
    - `tags`: Array of tags
    - `createdAt`: Timestamp of creation
    - `updatedAt`: Timestamp of last update
  - `count`: Total number of incomplete todos
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Get All Incomplete Todos

```js
// Wait for connection
await codebolt.waitForReady();

// Retrieve only incomplete todos
const result = await codebolt.todo.getAllIncompleteTodos();
console.log('✅ Incomplete todos:', result.data.count);
console.log('Todos:', result.data.todos);

// Display each incomplete todo
result.data.todos.forEach(todo => {
  const icon = todo.status === 'processing' ? '🔄' : '📋';
  console.log(`${icon} [${todo.priority}] ${todo.title}`);
});
```

**Explanation**: This function automatically filters out completed todos, returning only those that are pending, in progress, or cancelled. This is more efficient than getting all todos and filtering client-side.

#### Example 2: Focus on Work Items

```js
// Get actionable work items
const result = await codebolt.todo.getAllIncompleteTodos();
const todos = result.data.todos;

// Separate by status
const pending = todos.filter(t => t.status === 'pending');
const inProgress = todos.filter(t => t.status === 'processing');

console.log('📋 Pending Tasks:', pending.length);
pending.forEach(todo => {
  console.log(`  • ${todo.title} [${todo.priority}]`);
});

console.log('\n🔄 In Progress:', inProgress.length);
inProgress.forEach(todo => {
  console.log(`  • ${todo.title} [${todo.priority}]`);
});
```

**Explanation**: This example separates incomplete todos by their current status, helping you focus on what needs attention versus what's already being worked on.

#### Example 3: Prioritize Work

```js
// Get incomplete todos and prioritize them
const result = await codebolt.todo.getAllIncompleteTodos();
const todos = result.data.todos;

// Sort by priority (high to low) and then by status
const priorityOrder = { high: 0, medium: 1, low: 2 };
const statusOrder = { processing: 0, pending: 1, cancelled: 2 };

const prioritized = [...todos].sort((a, b) => {
  if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }
  return statusOrder[a.status] - statusOrder[b.status];
});

console.log('🎯 Prioritized Work List:');
prioritized.forEach((todo, index) => {
  const statusIcon = todo.status === 'processing' ? '🔄' : '📋';
  console.log(`${index + 1}. ${statusIcon} ${todo.title}`);
  console.log(`   Priority: ${todo.priority} | Status: ${todo.status}`);
});
```

**Explanation**: This example sorts incomplete todos by priority and status, creating a clear work order. High-priority items in progress appear first, followed by high-priority pending items.

#### Example 4: Workload Distribution

```js
// Analyze workload by priority
const result = await codebolt.todo.getAllIncompleteTodos();
const todos = result.data.todos;

const workload = {
  high: todos.filter(t => t.priority === 'high').length,
  medium: todos.filter(t => t.priority === 'medium').length,
  low: todos.filter(t => t.priority === 'low').length,
  total: todos.length
};

console.log('📊 Current Workload:');
console.log(`  Total: ${workload.total} tasks`);
console.log(`  High Priority: ${workload.high}`);
console.log(`  Medium Priority: ${workload.medium}`);
console.log(`  Low Priority: ${workload.low}`);

// Calculate workload score
const score = workload.high * 3 + workload.medium * 2 + workload.low * 1;
console.log(`\n📈 Workload Score: ${score}`);

if (score > 20) {
  console.log('⚠️ Warning: High workload detected!');
} else if (score > 10) {
  console.log('✅ Moderate workload');
} else {
  console.log('💚 Light workload');
}
```

**Explanation**: This example calculates a workload score based on the number and priority of incomplete todos. It helps assess capacity and identify overloaded periods.

#### Example 5: Find Stuck Items

```js
// Find todos that have been in progress too long
const result = await codebolt.todo.getAllIncompleteTodos();
const todos = result.data.todos;
const now = new Date();

const stuckThreshold = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

const stuckTodos = todos.filter(todo => {
  if (todo.status !== 'processing') return false;
  const updatedDate = new Date(todo.updatedAt);
  return (now - updatedDate) > stuckThreshold;
});

if (stuckTodos.length > 0) {
  console.log(`⚠️ Found ${stuckTodos.length} potentially stuck todos:`);
  stuckTodos.forEach(todo => {
    const daysStuck = Math.floor((now - new Date(todo.updatedAt)) / (1000 * 60 * 60 * 24));
    console.log(`  • ${todo.title} (stuck for ${daysStuck} days)`);
  });
} else {
  console.log('✅ No stuck todos found');
}
```

**Explanation**: This example identifies todos that have been in "processing" status for an extended period, which might indicate blocked work or forgotten tasks.

#### Example 6: Smart Task Selection

```js
// Intelligently select the next task to work on
async function selectNextTask() {
  const result = await codebolt.todo.getAllIncompleteTodos();
  const todos = result.data.todos;

  // Selection criteria (in order of priority):
  // 1. High-priority items not being worked on
  // 2. Medium-priority items not being worked on
  // 3. Any item (prefer higher priority)

  let nextTask = null;

  // Try to find high-priority pending task
  nextTask = todos.find(t =>
    t.priority === 'high' &&
    t.status === 'pending'
  );

  // If none found, try medium-priority pending
  if (!nextTask) {
    nextTask = todos.find(t =>
      t.priority === 'medium' &&
      t.status === 'pending'
    );
  }

  // If still none found, take the highest priority pending task
  if (!nextTask) {
    const pendingTasks = todos.filter(t => t.status === 'pending');
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    pendingTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    nextTask = pendingTasks[0];
  }

  if (nextTask) {
    console.log(`🎯 Next task: ${nextTask.title}`);
    console.log(`   Priority: ${nextTask.priority}`);

    // Optionally, automatically set to processing
    await codebolt.todo.updateTodo({
      id: nextTask.id,
      status: 'processing'
    });
    console.log('✅ Status set to processing');

    return nextTask;
  } else {
    console.log('🎉 No pending tasks found!');
    return null;
  }
}

// Usage
await selectNextTask();
```

**Explanation**: This intelligent task selection function helps you decide what to work on next by automatically selecting the most appropriate task based on priority and current status.

### Common Use Cases

**1. Daily Standup**: Generate a report of active work.

```js
async function generateStandupReport() {
  const result = await codebolt.todo.getAllIncompleteTodos();
  const todos = result.data.todos;

  const report = {
    completedYesterday: [], // Would need historical data
    workingOnToday: todos.filter(t => t.status === 'processing'),
    planningToDo: todos.filter(t => t.status === 'pending').slice(0, 3),
    blockers: todos.filter(t => t.tags.includes('blocked'))
  };

  console.log('📅 Daily Standup Report');
  console.log('═'.repeat(50));
  console.log('\nCurrently Working On:');
  report.workingOnToday.forEach(todo => {
    console.log(`  • ${todo.title}`);
  });
  console.log('\nPlanning to Do:');
  report.planningToDo.forEach(todo => {
    console.log(`  • ${todo.title} [${todo.priority}]`);
  });
  if (report.blockers.length > 0) {
    console.log('\n⚠️ Blockers:');
    report.blockers.forEach(todo => {
      console.log(`  • ${todo.title}`);
    });
  }

  return report;
}
```

**2. Capacity Planning**: Check if you can take on more work.

```js
async function checkCapacity(maxHighPriority = 3, maxTotalTasks = 10) {
  const result = await codebolt.todo.getAllIncompleteTodos();
  const todos = result.data.todos;

  const highPriorityCount = todos.filter(t => t.priority === 'high').length;
  const totalCount = todos.length;

  const canAcceptHigh = highPriorityCount < maxHighPriority;
  const canAcceptAny = totalCount < maxTotalTasks;

  console.log('📊 Capacity Check:');
  console.log(`  High Priority: ${highPriorityCount}/${maxHighPriority}`);
  console.log(`  Total Tasks: ${totalCount}/${maxTotalTasks}`);
  console.log(`  Can Accept High Priority: ${canAcceptHigh ? '✅' : '❌'}`);
  console.log(`  Can Accept Any Work: ${canAcceptAny ? '✅' : '❌'}`);

  return { canAcceptHigh, canAcceptAny };
}
```

**3. Clean Up Old Tasks**: Find and clean cancelled tasks.

```js
async function cleanupCancelledTasks(daysOld = 30) {
  const result = await codebolt.todo.getAllIncompleteTodos();
  const todos = result.data.todos;
  const now = new Date();

  const oldCancelled = todos.filter(todo => {
    if (todo.status !== 'cancelled') return false;
    const age = now - new Date(todo.updatedAt);
    return age > (daysOld * 24 * 60 * 60 * 1000);
  });

  if (oldCancelled.length > 0) {
    console.log(`🧹 Found ${oldCancelled.length} old cancelled tasks:`);
    oldCancelled.forEach(todo => {
      const daysOld = Math.floor((now - new Date(todo.updatedAt)) / (1000 * 60 * 60 * 24));
      console.log(`  • ${todo.title} (${daysOld} days old)`);

      // Optionally delete or archive them
      // This would require a delete function if available
    });
  }

  return oldCancelled;
}
```

**4. Focus Time Selection**: Pick tasks for a focused work session.

```js
async function selectTasksForFocusSession(count = 3) {
  const result = await codebolt.todo.getAllIncompleteTodos();
  const todos = result.data.todos;

  // Filter for high-priority pending tasks
  const focusTasks = todos
    .filter(t => t.status === 'pending' && t.priority === 'high')
    .slice(0, count);

  if (focusTasks.length > 0) {
    console.log(`🎯 Selected ${focusTasks.length} tasks for focus session:`);
    focusTasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title}`);

      // Set to processing
      await codebolt.todo.updateTodo({
        id: task.id,
        status: 'processing'
      });
    });

    return focusTasks;
  } else {
    console.log('No high-priority tasks available for focus session');
    return [];
  }
}
```

### Notes

- This function only returns todos with status 'pending', 'processing', or 'cancelled'
- Completed todos (status: 'completed') are automatically excluded
- This is more efficient than using `getTodoList()` and filtering client-side
- The `count` field reflects the number of incomplete todos only
- If no incomplete todos exist, an empty array is returned
- The order of todos in the response is not guaranteed; sort client-side if needed
- This function is ideal for dashboard displays and work planning
- Cancelled todos are included in the results; filter them out if not needed
- For large todo lists, this function provides better performance than retrieving all todos
- All timestamps are ISO 8601 formatted strings
