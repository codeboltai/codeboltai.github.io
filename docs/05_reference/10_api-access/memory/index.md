---
cbapicategory:
  - name: JSON Save
    link: /docs/api/apiaccess/memory/jsonSave
    description: Saves JSON data to memory.
  - name: JSON Update
    link: /docs/api/apiaccess/memory/jsonUpdate
    description: Updates existing JSON memory entry.
  - name: JSON Delete
    link: /docs/api/apiaccess/memory/jsonDelete
    description: Deletes a JSON memory entry.
  - name: JSON List
    link: /docs/api/apiaccess/memory/jsonList
    description: Lists JSON memory entries with optional filters.
  - name: Todo Save
    link: /docs/api/apiaccess/memory/todoSave
    description: Saves a todo item to memory.
  - name: Todo Update
    link: /docs/api/apiaccess/memory/todoUpdate
    description: Updates an existing todo item.
  - name: Todo Delete
    link: /docs/api/apiaccess/memory/todoDelete
    description: Deletes a todo item.
  - name: Todo List
    link: /docs/api/apiaccess/memory/todoList
    description: Lists todo items with optional filters.
  - name: Markdown Save
    link: /docs/api/apiaccess/memory/markdownSave
    description: Saves markdown content to memory.
  - name: Markdown Update
    link: /docs/api/apiaccess/memory/markdownUpdate
    description: Updates existing markdown memory entry.
  - name: Markdown Delete
    link: /docs/api/apiaccess/memory/markdownDelete
    description: Deletes a markdown memory entry.
  - name: Markdown List
    link: /docs/api/apiaccess/memory/markdownList
    description: Lists markdown memory entries with optional filters.
---

# Memory

<CBAPICategory />

The Memory module provides flexible storage capabilities for different data formats including JSON, Todo items, and Markdown content. It enables agents to persist and retrieve structured data, task lists, and documentation across sessions.

## Quick Start Guide

### Basic Memory Operations

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  // Save JSON data
  const jsonResult = await codebolt.memory.json.save({
    type: 'user-preference',
    theme: 'dark',
    language: 'en'
  });
  console.log('Saved JSON:', jsonResult.memoryId);

  // Save a todo
  const todoResult = await codebolt.memory.todo.save({
    title: 'Complete documentation',
    description: 'Write API docs',
    status: 'pending',
    priority: 'high'
  });
  console.log('Saved Todo:', todoResult.memoryId);

  // Save markdown
  const mdResult = await codebolt.memory.markdown.save(
    '# Project Notes\n\nImportant information here.',
    { category: 'notes', project: 'api-docs' }
  );
  console.log('Saved Markdown:', mdResult.memoryId);
}
```

## JSON Memory

### Save JSON Data

```javascript
const result = await codebolt.memory.json.save({
  userId: '123',
  preferences: {
    notifications: true,
    theme: 'dark'
  },
  lastLogin: new Date().toISOString()
});

console.log('Memory ID:', result.memoryId);
```

### Update JSON Data

```javascript
await codebolt.memory.json.update(memoryId, {
  userId: '123',
  preferences: {
    notifications: false,
    theme: 'light'
  }
});
```

### List JSON Entries

```javascript
const result = await codebolt.memory.json.list({
  userId: '123'
});

console.log('Found entries:', result.items.length);
```

### Delete JSON Entry

```javascript
await codebolt.memory.json.delete(memoryId);
```

## Todo Memory

### Save Todo Item

```javascript
const todo = await codebolt.memory.todo.save(
  {
    title: 'Implement authentication',
    description: 'Add JWT-based auth',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-02-01',
    tags: ['security', 'backend']
  },
  {
    project: 'api-development',
    assignee: 'dev-team'
  }
);
```

### Update Todo Item

```javascript
await codebolt.memory.todo.update(todoId, {
  title: 'Implement authentication',
  status: 'completed',
  completedAt: new Date().toISOString()
});
```

### List Todos with Filters

```javascript
// Get all high-priority todos
const highPriority = await codebolt.memory.todo.list({
  priority: 'high',
  status: 'pending'
});

// Get todos for a specific project
const projectTodos = await codebolt.memory.todo.list({
  'metadata.project': 'api-development'
});
```

## Markdown Memory

### Save Markdown Content

```javascript
const markdown = `
# API Documentation

## Overview
This API provides...

## Endpoints
- GET /api/users
- POST /api/users
`;

const result = await codebolt.memory.markdown.save(markdown, {
  category: 'documentation',
  version: '1.0',
  author: 'dev-team'
});
```

### Update Markdown Content

```javascript
const updatedMarkdown = `
# API Documentation (Updated)

## Overview
This API provides enhanced features...
`;

await codebolt.memory.markdown.update(
  memoryId,
  updatedMarkdown,
  { version: '1.1' }
);
```

### List Markdown Entries

```javascript
const docs = await codebolt.memory.markdown.list({
  category: 'documentation'
});

for (const doc of docs.items) {
  console.log(`- ${doc.metadata.version}: ${doc.markdown.substring(0, 50)}...`);
}
```

## Common Workflows

### Workflow 1: Project Configuration Storage

```javascript
async function saveProjectConfig(projectId, config) {
  return await codebolt.memory.json.save({
    projectId,
    config,
    updatedAt: new Date().toISOString()
  });
}

async function loadProjectConfig(projectId) {
  const results = await codebolt.memory.json.list({ projectId });
  return results.items[0]?.json.config || null;
}

async function updateProjectConfig(projectId, updates) {
  const results = await codebolt.memory.json.list({ projectId });
  if (results.items.length > 0) {
    const existing = results.items[0];
    await codebolt.memory.json.update(existing.memoryId, {
      projectId,
      config: { ...existing.json.config, ...updates },
      updatedAt: new Date().toISOString()
    });
  }
}
```

### Workflow 2: Task Management System

```javascript
class TaskManager {
  async createTask(title, description, priority = 'medium') {
    return await codebolt.memory.todo.save({
      title,
      description,
      status: 'pending',
      priority,
      createdAt: new Date().toISOString()
    });
  }

  async completeTask(taskId) {
    return await codebolt.memory.todo.update(taskId, {
      status: 'completed',
      completedAt: new Date().toISOString()
    });
  }

  async getPendingTasks() {
    const result = await codebolt.memory.todo.list({ status: 'pending' });
    return result.items;
  }

  async getTasksByPriority(priority) {
    const result = await codebolt.memory.todo.list({ priority });
    return result.items;
  }

  async deleteCompletedTasks() {
    const completed = await codebolt.memory.todo.list({ status: 'completed' });
    
    for (const task of completed.items) {
      await codebolt.memory.todo.delete(task.memoryId);
    }
    
    return completed.items.length;
  }
}

// Usage
const taskManager = new TaskManager();
await taskManager.createTask('Write tests', 'Unit tests for auth module', 'high');
const pending = await taskManager.getPendingTasks();
```

### Workflow 3: Documentation Management

```javascript
class DocumentationManager {
  async saveDoc(title, content, metadata = {}) {
    const markdown = `# ${title}\n\n${content}`;
    return await codebolt.memory.markdown.save(markdown, {
      title,
      ...metadata,
      createdAt: new Date().toISOString()
    });
  }

  async updateDoc(memoryId, content, metadata = {}) {
    return await codebolt.memory.markdown.update(memoryId, content, {
      ...metadata,
      updatedAt: new Date().toISOString()
    });
  }

  async searchDocs(query) {
    const allDocs = await codebolt.memory.markdown.list({});
    
    return allDocs.items.filter(doc =>
      doc.markdown.toLowerCase().includes(query.toLowerCase())
    );
  }

  async getDocsByCategory(category) {
    return await codebolt.memory.markdown.list({ category });
  }

  async exportDocs(category) {
    const docs = await this.getDocsByCategory(category);
    
    return docs.items.map(doc => ({
      title: doc.metadata.title,
      content: doc.markdown,
      metadata: doc.metadata
    }));
  }
}
```

### Workflow 4: Session State Management

```javascript
async function saveSessionState(sessionId, state) {
  // Check if session exists
  const existing = await codebolt.memory.json.list({ sessionId });
  
  if (existing.items.length > 0) {
    // Update existing session
    await codebolt.memory.json.update(existing.items[0].memoryId, {
      sessionId,
      state,
      lastUpdated: Date.now()
    });
  } else {
    // Create new session
    await codebolt.memory.json.save({
      sessionId,
      state,
      createdAt: Date.now(),
      lastUpdated: Date.now()
    });
  }
}

async function loadSessionState(sessionId) {
  const result = await codebolt.memory.json.list({ sessionId });
  return result.items[0]?.json.state || null;
}

async function clearOldSessions(maxAgeMs = 24 * 60 * 60 * 1000) {
  const allSessions = await codebolt.memory.json.list({});
  const now = Date.now();
  let cleared = 0;

  for (const session of allSessions.items) {
    if (now - session.json.lastUpdated > maxAgeMs) {
      await codebolt.memory.json.delete(session.memoryId);
      cleared++;
    }
  }

  return cleared;
}
```

## Best Practices

### 1. Use Appropriate Format

```javascript
// Good: Use JSON for structured data
await codebolt.memory.json.save({
  userId: '123',
  settings: { theme: 'dark' }
});

// Good: Use Todo for task items
await codebolt.memory.todo.save({
  title: 'Task',
  status: 'pending'
});

// Good: Use Markdown for documentation
await codebolt.memory.markdown.save('# Documentation\n\nContent here');

// Bad: Using wrong format
await codebolt.memory.json.save('# This should be markdown');
```

### 2. Include Metadata

```javascript
// Good: Rich metadata for filtering
await codebolt.memory.json.save(data, {
  category: 'user-data',
  version: '1.0',
  createdBy: 'agent-id',
  project: 'my-project'
});

// Bad: No metadata
await codebolt.memory.json.save(data);
```

### 3. Handle Errors

```javascript
// Good: Proper error handling
try {
  const result = await codebolt.memory.json.save(data);
  if (!result.success) {
    console.error('Save failed:', result.error);
  }
} catch (error) {
  console.error('Error saving:', error);
}

// Bad: No error handling
const result = await codebolt.memory.json.save(data);
```

### 4. Clean Up Old Data

```javascript
// Good: Regular cleanup
async function cleanupOldMemories() {
  const cutoffDate = Date.now() - (30 * 24 * 60 * 60 * 1000); // 30 days
  
  const oldItems = await codebolt.memory.json.list({
    createdAt: { $lt: cutoffDate }
  });

  for (const item of oldItems.items) {
    await codebolt.memory.json.delete(item.memoryId);
  }
}

// Bad: Never cleaning up
// Memory grows indefinitely
```

### 5. Use Filters Effectively

```javascript
// Good: Specific filters
const result = await codebolt.memory.json.list({
  category: 'user-preferences',
  userId: '123'
});

// Bad: Loading everything then filtering
const all = await codebolt.memory.json.list({});
const filtered = all.items.filter(item => item.json.userId === '123');
```

## Performance Considerations

1. **Batch Operations**: Group multiple saves/updates when possible
2. **Filtering**: Use filters in list operations instead of loading all data
3. **Pagination**: Implement pagination for large result sets
4. **Caching**: Cache frequently accessed memory items
5. **Cleanup**: Regularly delete unused memory entries

## Security Considerations

1. **Data Validation**: Validate all data before saving
2. **Access Control**: Implement proper authorization checks
3. **Sensitive Data**: Encrypt sensitive information before storing
4. **Audit Logging**: Log all memory operations
5. **Data Retention**: Implement data retention policies

## Common Pitfalls

### Pitfall 1: Not Checking Success

```javascript
// Problem: Assuming operation succeeded
const result = await codebolt.memory.json.save(data);
console.log(result.memoryId); // Could be undefined!

// Solution: Check success
const result = await codebolt.memory.json.save(data);
if (result.success) {
  console.log(result.memoryId);
} else {
  console.error('Save failed:', result.error);
}
```

### Pitfall 2: Memory Leaks

```javascript
// Problem: Never deleting old data
await codebolt.memory.json.save(data); // Repeated many times

// Solution: Implement cleanup
async function saveWithCleanup(data) {
  await codebolt.memory.json.save(data);
  await cleanupOldEntries();
}
```

### Pitfall 3: Inefficient Queries

```javascript
// Problem: Loading all data
const all = await codebolt.memory.json.list({});
const found = all.items.find(item => item.json.id === targetId);

// Solution: Use filters
const result = await codebolt.memory.json.list({ id: targetId });
const found = result.items[0];
```

## Integration Examples

### With Agent Module

```javascript
async function agentWithMemory(agentId, task) {
  // Save task to memory
  const taskMemory = await codebolt.memory.todo.save({
    title: task,
    status: 'in-progress',
    agentId
  });

  // Execute agent
  const result = await codebolt.agent.startAgent(agentId, task);

  // Update task status
  await codebolt.memory.todo.update(taskMemory.memoryId, {
    status: result.success ? 'completed' : 'failed',
    result: result.result
  });

  return result;
}
```

### With Action Plan Module

```javascript
async function actionPlanWithMemory(planId) {
  // Save plan state
  const planState = await codebolt.memory.json.save({
    planId,
    status: 'running',
    startTime: Date.now()
  });

  // Execute plan
  const details = await codebolt.actionPlan.getPlanDetail(planId);
  
  for (const task of details.tasks) {
    await codebolt.actionPlan.startTaskStep(planId, task.id);
    
    // Update progress
    await codebolt.memory.json.update(planState.memoryId, {
      planId,
      status: 'running',
      completedTasks: details.tasks.indexOf(task) + 1,
      totalTasks: details.tasks.length
    });
  }

  // Mark complete
  await codebolt.memory.json.update(planState.memoryId, {
    planId,
    status: 'completed',
    endTime: Date.now()
  });
}
```
