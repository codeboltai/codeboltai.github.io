---
name: addTodo
cbbaseinfo:
  description: Adds a new todo item with optional priority and tags.
cbparameters:
  parameters:
    - name: params
      typeName: "{ title: string; priority?: 'high' | 'medium' | 'low'; tags?: string[] }"
      description: Parameters for creating the todo item.
      isOptional: false
    - name: params.title
      typeName: string
      description: The title or description of the todo item.
      isOptional: false
    - name: params.priority
      typeName: "'high' | 'medium' | 'low'"
      description: "The priority level of the todo (defaults to medium)."
      isOptional: true
    - name: params.tags
      typeName: "string[]"
      description: Array of tags to categorize the todo item.
      isOptional: true
  returns:
    signatureTypeName: "Promise<AddTodoResponse>"
    description: A promise that resolves with the created todo item.
    typeArgs: []
data:
  name: addTodo
  category: todo
  link: addTodo.md
---
# addTodo

```typescript
codebolt.todo.addTodo(params: { title: string; priority?: 'high' | 'medium' | 'low'; tags?: string[] }, params.title: string, params.priority: 'high' | 'medium' | 'low', params.tags: string[]): Promise<AddTodoResponse>
```

Adds a new todo item with optional priority and tags.
### Parameters

- **`params`** (`{ title: string; priority?: 'high' | 'medium' | 'low'; tags?: string[] }`): Parameters for creating the todo item.
- **`params.title`** (string): The title or description of the todo item.
- **`params.priority`** ('high' | 'medium' | 'low', optional): The priority level of the todo (defaults to medium).
- **`params.tags`** (string[], optional): Array of tags to categorize the todo item.

### Returns

- **`Promise<AddTodoResponse>`**: A promise that resolves with the created todo item.

### Response Structure

The method returns a Promise that resolves to an [`AddTodoResponse`](/docs/reference/codeboltjs/type-reference/types/interfaces/AddTodoResponse) object with the following properties:

**Response Properties:**
- `type`: Always "addTodoResponse"
- `data`: Object containing the response data
  - `todo`: The newly created todo object
    - `id`: Unique identifier for the todo
    - `title`: The todo title
    - `status`: Current status (defaults to "pending")
    - `priority`: Priority level
    - `tags`: Array of tags
    - `createdAt`: Timestamp of creation
    - `updatedAt`: Timestamp of last update
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Basic Todo Creation

```js
// Wait for connection
await codebolt.waitForReady();

// Add a simple todo
const result = await codebolt.todo.addTodo({
  title: 'Review pull request #42'
});
console.log('✅ Todo created with ID:', result.data.todo.id);
console.log('Status:', result.data.todo.status);
console.log('Priority:', result.data.todo.priority);
```

**Explanation**: This is the simplest form of creating a todo. Only the title is required. The todo will be created with default values: status "pending" and priority "medium".

#### Example 2: High-Priority Todo with Tags

```js
// Add a high-priority todo with multiple tags
const result = await codebolt.todo.addTodo({
  title: 'Fix critical security vulnerability in authentication',
  priority: 'high',
  tags: ['security', 'urgent', 'backend']
});
console.log('✅ High-priority todo created:', result.data.todo.id);
console.log('Tags:', result.data.todo.tags);
```

**Explanation**: This example creates a high-priority todo item with three tags. Tags help organize and filter todos by category or topic.

#### Example 3: Creating Multiple Related Todos

```js
// Create a series of related todos for a feature
const featureTasks = [
  {
    title: 'Design user authentication flow',
    priority: 'high',
    tags: ['design', 'auth']
  },
  {
    title: 'Implement login API endpoint',
    priority: 'high',
    tags: ['backend', 'auth']
  },
  {
    title: 'Create login UI components',
    priority: 'medium',
    tags: ['frontend', 'auth']
  },
  {
    title: 'Write authentication tests',
    priority: 'medium',
    tags: ['testing', 'auth']
  },
  {
    title: 'Update documentation',
    priority: 'low',
    tags: ['docs', 'auth']
  }
];

const createdTodos = [];
for (const task of featureTasks) {
  const result = await codebolt.todo.addTodo(task);
  createdTodos.push(result.data.todo);
  console.log(`✅ Created: ${task.title}`);
}

console.log(`✅ Created ${createdTodos.length} todos for authentication feature`);
```

**Explanation**: This batch creation pattern is useful when setting up a project or feature. Each todo has appropriate priority and tags for later filtering.

#### Example 4: Todo with Error Handling

```js
async function createTodoWithErrorHandling(title, priority, tags) {
  try {
    const result = await codebolt.todo.addTodo({
      title,
      priority,
      tags
    });

    if (result.success) {
      console.log('✅ Todo created successfully');
      return result.data.todo;
    } else {
      console.error('❌ Failed to create todo:', result.message);
      return null;
    }
  } catch (error) {
    console.error('❌ Error creating todo:', error.message);
    // Handle network errors, connection issues, etc.
    return null;
  }
}

// Usage
const todo = await createTodoWithErrorHandling(
  'Implement feature flag system',
  'high',
  ['backend', 'feature-flags']
);
```

**Explanation**: This example demonstrates proper error handling when creating todos. It checks both for successful responses and catches any exceptions that might occur.

#### Example 5: Creating Todos from User Input

```js
// Function to parse user input and create todos
async function createTodoFromInput(userInput) {
  // Parse priority from user input (case-insensitive)
  const priorityMap = {
    'urgent': 'high',
    'important': 'high',
    'normal': 'medium',
    'low': 'low'
  };

  // Extract priority if mentioned
  let priority = 'medium'; // default
  let title = userInput;

  for (const [keyword, level] of Object.entries(priorityMap)) {
    if (userInput.toLowerCase().includes(keyword)) {
      priority = level;
      title = userInput.replace(new RegExp(keyword, 'gi'), '').trim();
      break;
    }
  }

  // Extract tags (words starting with #)
  const tagMatches = title.match(/#\w+/g);
  const tags = tagMatches ? tagMatches.map(tag => tag.substring(1)) : [];
  title = title.replace(/#\w+/g, '').trim();

  // Create the todo
  const result = await codebolt.todo.addTodo({
    title,
    priority,
    tags: tags.length > 0 ? tags : undefined
  });

  console.log(`✅ Created "${title}" with priority ${priority}`);
  if (tags.length > 0) {
    console.log(`   Tags: ${tags.join(', ')}`);
  }

  return result.data.todo;
}

// Usage examples
await createTodoFromInput('Urgent: Fix production bug #critical');
await createTodoFromInput('Review code #review #backend');
await createTodoFromInput('Update README documentation');
```

**Explanation**: This advanced example parses natural language input to extract priority and tags. It's useful for building user-friendly todo creation interfaces.

#### Example 6: Template-Based Todo Creation

```js
// Todo templates for common tasks
const todoTemplates = {
  bug: {
    prefix: '🐛 Bug:',
    defaultPriority: 'high',
    defaultTags: ['bug']
  },
  feature: {
    prefix: '✨ Feature:',
    defaultPriority: 'medium',
    defaultTags: ['feature']
  },
  refactor: {
    prefix: '♻️ Refactor:',
    defaultPriority: 'low',
    defaultTags: ['refactor']
  },
  review: {
    prefix: '👀 Review:',
    defaultPriority: 'medium',
    defaultTags: ['review']
  }
};

async function createTodoFromTemplate(templateType, description, options = {}) {
  const template = todoTemplates[templateType];

  if (!template) {
    throw new Error(`Unknown template type: ${templateType}`);
  }

  const result = await codebolt.todo.addTodo({
    title: `${template.prefix} ${description}`,
    priority: options.priority || template.defaultPriority,
    tags: options.tags ? [...template.defaultTags, ...options.tags] : template.defaultTags
  });

  console.log(`✅ Created ${templateType} todo:`, result.data.todo.id);
  return result.data.todo;
}

// Usage
await createTodoFromTemplate('bug', 'Login fails on Safari');
await createTodoFromTemplate('feature', 'Add dark mode support', {
  tags: ['ui', 'frontend']
});
await createTodoFromTemplate('refactor', 'Optimize database queries', {
  priority: 'high'
});
await createTodoFromTemplate('review', 'Check PR #123');
```

**Explanation**: This example uses templates to standardize todo creation. Templates ensure consistency in naming and categorization across your project.

### Common Use Cases

**1. Sprint Planning**: Create all tasks for an upcoming sprint with appropriate priorities and tags.

```js
const sprintTasks = [
  { title: 'Story 1: User registration', priority: 'high', tags: ['sprint-1', 'backend'] },
  { title: 'Story 2: User profile', priority: 'high', tags: ['sprint-1', 'backend'] },
  { title: 'Story 3: Dashboard', priority: 'medium', tags: ['sprint-1', 'frontend'] },
  { title: 'Bug: Fix navigation issue', priority: 'high', tags: ['sprint-1', 'bug'] }
];

for (const task of sprintTasks) {
  await codebolt.todo.addTodo(task);
}
```

**2. Quick Task Capture**: Rapidly add tasks without worrying about organization.

```js
// Quick capture during meetings or brainstorming
const quickIdeas = [
  'Consider using Redis for caching',
  'Add rate limiting to API',
  'Improve error handling',
  'Set up monitoring dashboard'
];

for (const idea of quickIdeas) {
  await codebolt.todo.addTodo({ title: idea });
}
```

**3. Incident Response**: Create high-priority todos for critical issues.

```js
async function createIncidentTodos(incidentDescription) {
  const todos = [
    { title: `Investigate: ${incidentDescription}`, priority: 'high', tags: ['incident', 'investigation'] },
    { title: 'Create incident report', priority: 'high', tags: ['incident', 'docs'] },
    { title: 'Implement fix', priority: 'high', tags: ['incident', 'fix'] },
    { title: 'Add monitoring to prevent recurrence', priority: 'medium', tags: ['incident', 'monitoring'] },
    { title: 'Post-incident review', priority: 'medium', tags: ['incident', 'review'] }
  ];

  for (const todo of todos) {
    await codebolt.todo.addTodo(todo);
  }
}
```

### Notes

- The `title` parameter is required and must be a non-empty string
- If `priority` is not specified, it defaults to "medium"
- If `tags` is not specified, the todo will have no tags
- Tags are case-sensitive and must be strings
- Duplicate todos with the same title are allowed
- The created todo will have an automatically generated unique ID
- New todos always start with status "pending" unless specified otherwise in updateTodo
- Timestamps (createdAt, updatedAt) are automatically generated by the server
