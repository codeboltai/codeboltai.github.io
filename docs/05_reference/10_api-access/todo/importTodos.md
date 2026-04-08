---
name: importTodos
cbbaseinfo:
  description: Imports todos from JSON or Markdown format with optional merge strategy.
cbparameters:
  parameters:
    - name: params
      typeName: "{ data: string; format?: 'json' | 'markdown'; mergeStrategy?: 'replace' | 'merge'; listId?: string }"
      description: Parameters for importing todos.
      isOptional: false
    - name: params.data
      typeName: string
      description: "The import data as a string (JSON or Markdown format)."
      isOptional: false
    - name: params.format
      typeName: "'json' | 'markdown'"
      description: "The format of the import data (defaults to 'json')."
      isOptional: true
    - name: params.mergeStrategy
      typeName: "'replace' | 'merge'"
      description: "How to handle existing todos ('replace' clears existing, 'merge' combines them)."
      isOptional: true
    - name: params.listId
      typeName: string
      description: Optional target list ID for the imported todos.
      isOptional: true
  returns:
    signatureTypeName: "Promise<ImportTodosResponse>"
    description: A promise that resolves with the import result.
    typeArgs: []
data:
  name: importTodos
  category: todo
  link: importTodos.md
---
# importTodos

```typescript
codebolt.todo.importTodos(params: { data: string; format?: 'json' | 'markdown'; mergeStrategy?: 'replace' | 'merge'; listId?: string }, params.data: string, params.format: 'json' | 'markdown', params.mergeStrategy: 'replace' | 'merge', params.listId: string): Promise<ImportTodosResponse>
```

Imports todos from JSON or Markdown format with optional merge strategy.
### Parameters

- **`params`** (`{ data: string; format?: 'json' | 'markdown'; mergeStrategy?: 'replace' | 'merge'; listId?: string }`): Parameters for importing todos.
- **`params.data`** (string): The import data as a string (JSON or Markdown format).
- **`params.format`** ('json' | 'markdown', optional): The format of the import data (defaults to 'json').
- **`params.mergeStrategy`** ('replace' | 'merge', optional): How to handle existing todos ('replace' clears existing, 'merge' combines them).
- **`params.listId`** (string, optional): Optional target list ID for the imported todos.

### Returns

- **`Promise<ImportTodosResponse>`**: A promise that resolves with the import result.

### Response Structure

The method returns a Promise that resolves to an [`ImportTodosResponse`](/docs/api/11_doc-type-ref/types/interfaces/ImportTodosResponse) object with the following properties:

**Response Properties:**
- `type`: Always "importTodosResponse"
- `data`: Object containing the import result
  - `imported`: Number of todos successfully imported
  - `failed`: Number of todos that failed to import
  - `errors`: Array of error messages for failed imports (if any)
  - `todos`: Array of imported todo objects
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Import JSON Todos

```js
// Wait for connection
await codebolt.waitForReady();

// Import todos from JSON string
const jsonTodos = JSON.stringify([
  { title: 'Review pull request', priority: 'high' },
  { title: 'Update documentation', priority: 'medium' },
  { title: 'Fix navigation bug', priority: 'high', tags: ['bug', 'urgent'] }
]);

const result = await codebolt.todo.importTodos({
  data: jsonTodos,
  format: 'json'
});
console.log('✅ Imported', result.data.imported, 'todos');
console.log('Failed:', result.data.failed);
```

**Explanation**: This example imports todos from a JSON string. Each todo object must at least have a `title` property. Other properties like `priority` and `tags` are optional.

#### Example 2: Import from Markdown

```js
// Import todos from Markdown format
const markdownTodos = `
# Project Tasks

## High Priority
- [ ] Fix critical security bug
- [ ] Implement user authentication

## Medium Priority
- [ ] Update API documentation
- [ ] Refactor database queries
`;

const result = await codebolt.todo.importTodos({
  data: markdownTodos,
  format: 'markdown'
});
console.log('✅ Imported', result.data.imported, 'todos from Markdown');
```

**Explanation**: This example imports todos from a markdown string. The parser extracts tasks from markdown lists and checkboxes. Headings can be used to set priorities or categories.

#### Example 3: Import with Merge Strategy

```js
// Import todos and merge with existing ones
const newTodos = JSON.stringify([
  { title: 'New feature request', priority: 'medium' },
  { title: 'Performance optimization', priority: 'high' }
]);

const result = await codebolt.todo.importTodos({
  data: newTodos,
  format: 'json',
  mergeStrategy: 'merge'
});
console.log('✅ Merged', result.data.imported, 'new todos with existing ones');
```

**Explanation**: Using the 'merge' strategy adds new todos to the existing list. This is useful for incrementally adding tasks without losing current work.

#### Example 4: Replace All Todos

```js
// Replace all existing todos with new set
const freshTodos = JSON.stringify([
  { title: 'Sprint 1: User registration', priority: 'high', tags: ['sprint-1'] },
  { title: 'Sprint 1: Login page', priority: 'high', tags: ['sprint-1'] },
  { title: 'Sprint 1: Database setup', priority: 'high', tags: ['sprint-1'] }
]);

const result = await codebolt.todo.importTodos({
  data: freshTodos,
  format: 'json',
  mergeStrategy: 'replace'
});
console.log('✅ Replaced all todos with', result.data.imported, 'new tasks');
```

**Explanation**: The 'replace' strategy clears all existing todos before importing the new set. This is useful when starting a new sprint or completely restructuring the task list.

#### Example 5: Restore from Backup

```js
// Restore todos from a backup file
async function restoreFromBackup(backupData) {
  // Parse the backup
  const backup = JSON.parse(backupData);

  // Extract the todos array
  const todosToRestore = backup.todos;

  // Import with replace strategy to restore exact state
  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(todosToRestore),
    format: 'json',
    mergeStrategy: 'replace'
  });

  if (result.success) {
    console.log('✅ Successfully restored', result.data.imported, 'todos');
    console.log('Backup timestamp:', backup.timestamp);
  } else {
    console.error('❌ Restore failed:', result.error);
  }

  return result;
}

// Usage
const backupData = `{
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0",
  "todos": [
    { "title": "Task 1", "priority": "high" },
    { "title": "Task 2", "priority": "medium" }
  ]
}`;

await restoreFromBackup(backupData);
```

**Explanation**: This example shows how to restore todos from a backup created by the export function. The backup structure includes metadata along with the todos array.

#### Example 6: Import from External Sources

```js
// Import todos from various external sources
async function importFromExternalSource(source) {
  let todosToImport = [];

  switch (source.type) {
    case 'github-issues':
      // Convert GitHub issues to todo format
      todosToImport = source.issues.map(issue => ({
        title: issue.title,
        priority: issue.labels.includes('high-priority') ? 'high' : 'medium',
        tags: ['github', ...issue.labels]
      }));
      break;

    case 'jira':
      // Convert JIRA tickets to todo format
      todosToImport = source.tickets.map(ticket => ({
        title: `${ticket.key}: ${ticket.summary}`,
        priority: ticket.priority.toLowerCase(),
        tags: ['jira', ticket.status]
      }));
      break;

    case 'trello':
      // Convert Trello cards to todo format
      todosToImport = source.cards.map(card => ({
        title: card.name,
        priority: 'medium',
        tags: card.labels.map(l => l.name)
      }));
      break;

    default:
      throw new Error(`Unknown source type: ${source.type}`);
  }

  // Import the converted todos
  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(todosToImport),
    format: 'json',
    mergeStrategy: 'merge'
  });

  console.log(`✅ Imported ${result.data.imported} todos from ${source.type}`);
  return result;
}

// Usage
const githubData = {
  type: 'github-issues',
  issues: [
    { title: 'Fix login bug', labels: ['high-priority', 'bug'] },
    { title: 'Add dark mode', labels: ['enhancement'] }
  ]
};

await importFromExternalSource(githubData);
```

**Explanation**: This advanced example demonstrates importing todos from external project management systems. It transforms the external format into the Codebolt todo format before importing.

### Common Use Cases

**1. Sprint Planning**: Import tasks from planning documents.

```js
async function importSprintTasks(sprintData) {
  const tasks = sprintData.tasks.map(task => ({
    title: task.name,
    priority: task.priority,
    tags: [sprintData.name, task.category]
  }));

  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(tasks),
    format: 'json',
    mergeStrategy: 'replace'
  });

  console.log(`📋 Imported ${result.data.imported} tasks for ${sprintData.name}`);
  return result;
}
```

**2. Template-based Setup**: Import pre-defined task templates.

```js
const onboardingTemplate = [
  { title: 'Set up development environment', priority: 'high', tags: ['onboarding'] },
  { title: 'Review code style guide', priority: 'medium', tags: ['onboarding'] },
  { title: 'Complete first bug fix', priority: 'medium', tags: ['onboarding'] },
  { title: 'Attend team standup', priority: 'low', tags: ['onboarding'] }
];

async function setupOnboardingTasks() {
  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(onboardingTemplate),
    format: 'json',
    mergeStrategy: 'merge'
  });

  console.log('✅ Set up onboarding tasks');
  return result;
}
```

**3. Bulk Task Creation**: Create many tasks at once.

```js
async function bulkCreateTasks(taskList) {
  const todos = taskList.map(title => ({
    title,
    priority: 'medium'
  }));

  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(todos),
    format: 'json',
    mergeStrategy: 'merge'
  });

  console.log(`✅ Created ${result.data.imported} tasks in bulk`);
  return result;
}

// Usage
await bulkCreateTasks([
  'Research competitors',
  'Draft requirements',
  'Create wireframes',
  'Develop prototype',
  'User testing',
  'Finalize design'
]);
```

**4. Migration from Other Tools**: Migrate from task management apps.

```js
async function migrateFromTodoist(todoistExport) {
  // Convert Todoist export to our format
  const todos = todoistExport.items.map(item => ({
    title: item.content,
    priority: item.priority === 4 ? 'high' : item.priority === 2 ? 'medium' : 'low',
    tags: [item.project_name, ...item.labels]
  }));

  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(todos),
    format: 'json',
    mergeStrategy: 'replace'
  });

  console.log(`✅ Migrated ${result.data.imported} tasks from Todoist`);
  return result;
}
```

**5. Recurring Tasks**: Import recurring task sets.

```js
const dailyReviewTasks = [
  { title: 'Review pull requests', priority: 'high', tags: ['daily', 'review'] },
  { title: 'Check CI/CD status', priority: 'medium', tags: ['daily', 'devops'] },
  { title: 'Respond to team messages', priority: 'medium', tags: ['daily', 'communication'] },
  { title: 'Update task progress', priority: 'low', tags: ['daily', 'planning'] }
];

async function startDailyReview() {
  // First, clear old daily tasks
  const currentTodos = await codebolt.todo.getTodoList();
  const oldDailyTodos = currentTodos.data.todos.filter(t =>
    t.tags.includes('daily') && t.status === 'completed'
  );

  // Then import fresh daily tasks
  const result = await codebolt.todo.importTodos({
    data: JSON.stringify(dailyReviewTasks),
    format: 'json',
    mergeStrategy: 'merge'
  });

  console.log('📅 Started daily review with', result.data.imported, 'tasks');
  return result;
}
```

### Notes

- The `data` parameter is required and must be a string containing the import data
- If `format` is not specified, it defaults to 'json'
- If `mergeStrategy` is not specified, it defaults to 'replace'
- The 'replace' strategy removes all existing todos before importing
- The 'merge' strategy adds new todos to the existing list
- When importing JSON, the data must be a valid JSON array of todo objects
- When importing Markdown, checkboxes are parsed as todos
- Each imported todo must have at least a `title` property
- Optional properties like `priority` and `tags` can be included
- Invalid todos are skipped and counted in the `failed` field
- The `errors` array contains details about any import failures
- Imported todos receive new unique IDs
- The `createdAt` timestamp is set to the import time
- Markdown parsing supports standard checkbox syntax: `- [ ]` for incomplete, `- [x]` for complete
- Headings in markdown can be used to categorize todos
- The `listId` parameter can be used to import to a specific todo list
- Large imports may take time to process; consider chunking very large datasets
- Import operations can be undone by re-importing from a backup
- The import doesn't validate against existing todos (no deduplication)