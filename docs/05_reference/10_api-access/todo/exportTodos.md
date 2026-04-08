---
name: exportTodos
cbbaseinfo:
  description: Exports todos in JSON or Markdown format with optional filtering.
cbparameters:
  parameters:
    - name: params
      typeName: "{ format?: 'json' | 'markdown'; listId?: string; status?: string[] }"
      description: Optional parameters for customizing the export.
      isOptional: true
    - name: params.format
      typeName: "'json' | 'markdown'"
      description: "The export format (defaults to 'json')."
      isOptional: true
    - name: params.listId
      typeName: string
      description: Optional list ID to filter todos for export.
      isOptional: true
    - name: params.status
      typeName: "string[]"
      description: "Optional array of status values to filter (e.g., ['pending', 'processing'])."
      isOptional: true
  returns:
    signatureTypeName: "Promise<ExportTodosResponse>"
    description: A promise that resolves with the exported todo data.
    typeArgs: []
data:
  name: exportTodos
  category: todo
  link: exportTodos.md
---
# exportTodos

```typescript
codebolt.todo.exportTodos(params: { format?: 'json' | 'markdown'; listId?: string; status?: string[] }, params.format: 'json' | 'markdown', params.listId: string, params.status: string[]): Promise<ExportTodosResponse>
```

Exports todos in JSON or Markdown format with optional filtering.
### Parameters

- **`params`** (`{ format?: 'json' | 'markdown'; listId?: string; status?: string[] }`, optional): Optional parameters for customizing the export.
- **`params.format`** ('json' | 'markdown', optional): The export format (defaults to 'json').
- **`params.listId`** (string, optional): Optional list ID to filter todos for export.
- **`params.status`** (string[], optional): Optional array of status values to filter (e.g., ['pending', 'processing']).

### Returns

- **`Promise<ExportTodosResponse>`**: A promise that resolves with the exported todo data.

### Response Structure

The method returns a Promise that resolves to an [`ExportTodosResponse`](/docs/api/11_doc-type-ref/types/interfaces/ExportTodosResponse) object with the following properties:

**Response Properties:**
- `type`: Always "exportTodosResponse"
- `data`: Object containing the exported data
  - `content`: String containing the exported data in the requested format
  - `format`: The format used for export ('json' or 'markdown')
  - `count`: Number of todos exported
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Export All Todos as JSON

```js
// Wait for connection
await codebolt.waitForReady();

// Export all todos in JSON format
const result = await codebolt.todo.exportTodos({
  format: 'json'
});
console.log('✅ Exported', result.data.count, 'todos');
console.log('Content:', result.data.content);

// Parse the JSON if needed
const todos = JSON.parse(result.data.content);
console.log('Parsed todos:', todos);
```

**Explanation**: This example exports all todos in JSON format. The content is a string that can be parsed into a JavaScript object for further processing.

#### Example 2: Export as Markdown

```js
// Export todos as formatted Markdown
const result = await codebolt.todo.exportTodos({
  format: 'markdown'
});
console.log('✅ Markdown export:');
console.log(result.data.content);

// Example output format:
// # Todos
//
// ## High Priority
//
// - [ ] Fix critical bug
// - [ ] Implement feature
//
// ## Medium Priority
//
// - [x] Update documentation
```

**Explanation**: Markdown export produces a formatted text representation that's easy to read and can be used in documentation files, README files, or note-taking apps.

#### Example 3: Export Only Incomplete Todos

```js
// Export only pending and processing todos
const result = await codebolt.todo.exportTodos({
  format: 'json',
  status: ['pending', 'processing']
});
console.log('✅ Exported', result.data.count, 'incomplete todos');

const incompleteTodos = JSON.parse(result.data.content);
console.log('Incomplete tasks:', incompleteTodos);
```

**Explanation**: This example filters the export to only include todos with specific statuses. This is useful for generating reports of active work.

#### Example 4: Export for Backup

```js
// Create a timestamped backup
async function backupTodos() {
  const result = await codebolt.todo.exportTodos({
    format: 'json'
  });

  const backup = {
    timestamp: new Date().toISOString(),
    version: '1.0',
    todos: JSON.parse(result.data.content)
  };

  // Save to file or send to storage
  const backupData = JSON.stringify(backup, null, 2);
  console.log('💾 Backup created at', backup.timestamp);
  console.log('Total todos:', backup.todos.length);

  return backupData;
}

// Usage
const backup = await backupTodos();

// In a real scenario, you would save this to a file:
// import fs from 'fs';
// fs.writeFileSync('todo-backup.json', backup);
```

**Explanation**: This example creates a complete backup of all todos with metadata. The backup can be restored later using the import function.

#### Example 5: Generate Report in Markdown

```js
// Generate a formatted status report
async function generateStatusReport() {
  // Get all todos as JSON first
  const jsonResult = await codebolt.todo.exportTodos({
    format: 'json',
    status: ['pending', 'processing']
  });

  const todos = JSON.parse(jsonResult.data.content);

  // Generate custom markdown report
  let markdown = '# Task Status Report\n\n';
  markdown += `Generated: ${new Date().toLocaleString()}\n\n`;

  // Group by priority
  const byPriority = {
    high: todos.filter(t => t.priority === 'high'),
    medium: todos.filter(t => t.priority === 'medium'),
    low: todos.filter(t => t.priority === 'low')
  };

  markdown += '## Summary\n\n';
  markdown += `- **Total Active Tasks**: ${todos.length}\n`;
  markdown += `- **High Priority**: ${byPriority.high.length}\n`;
  markdown += `- **Medium Priority**: ${byPriority.medium.length}\n`;
  markdown += `- **Low Priority**: ${byPriority.low.length}\n\n`;

  // List by priority
  for (const [priority, items] of Object.entries(byPriority)) {
    if (items.length > 0) {
      markdown += `## ${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority\n\n`;
      items.forEach(todo => {
        const status = todo.status === 'processing' ? '🔄' : '📋';
        markdown += `${status} **${todo.title}**\n`;
        if (todo.tags.length > 0) {
          markdown += `   Tags: ${todo.tags.map(t => `\`${t}\``).join(', ')}\n`;
        }
        markdown += '\n';
      });
    }
  }

  console.log('📄 Generated report:');
  console.log(markdown);

  return markdown;
}

// Usage
const report = await generateStatusReport();

// Save to file
// fs.writeFileSync('STATUS_REPORT.md', report);
```

**Explanation**: This advanced example generates a custom markdown report with summary statistics and grouped todos. It demonstrates how to create specialized exports for different purposes.

#### Example 6: Export to Different Destinations

```js
// Export todos to multiple destinations
async function exportToMultipleFormats() {
  const destinations = {
    json: null,
    markdown: null
  };

  // Export as JSON
  const jsonResult = await codebolt.todo.exportTodos({
    format: 'json'
  });
  destinations.json = jsonResult.data.content;
  console.log('✅ JSON export complete');

  // Export as Markdown
  const mdResult = await codebolt.todo.exportTodos({
    format: 'markdown'
  });
  destinations.markdown = mdResult.data.content;
  console.log('✅ Markdown export complete');

  // Save to files (in a real scenario)
  // fs.writeFileSync('todos.json', destinations.json);
  // fs.writeFileSync('todos.md', destinations.markdown);

  // Export to specific statuses
  const activeResult = await codebolt.todo.exportTodos({
    format: 'json',
    status: ['pending', 'processing']
  });
  const activeTodos = JSON.parse(activeResult.data.content);
  console.log(`✅ Active todos: ${activeTodos.length}`);

  return destinations;
}

// Usage
const exports = await exportToMultipleFormats();
console.log('All exports completed');
```

**Explanation**: This example demonstrates exporting todos in multiple formats and with different filters. It shows how to create various export outputs for different use cases.

### Common Use Cases

**1. Weekly Status Report**: Generate a weekly summary.

```js
async function generateWeeklyReport() {
  const result = await codebolt.todo.exportTodos({
    format: 'markdown'
  });

  const report = `# Weekly Task Report

${new Date().toLocaleDateString()}

${result.data.content}

---
*Report generated automatically*
`;

  console.log(report);
  return report;
}
```

**2. Share with Team**: Export todos for team collaboration.

```js
async function exportForTeam() {
  const result = await codebolt.todo.exportTodos({
    format: 'markdown',
    status: ['pending', 'processing']
  });

  // The markdown can be:
  // - Pasted into Slack/Teams
  // - Added to a shared document
  // - Included in an email
  // - Committed to a repo

  return result.data.content;
}
```

**3. Archive Completed Work**: Export and archive completed todos.

```js
async function archiveCompletedTodos() {
  const result = await codebolt.todo.exportTodos({
    format: 'json',
    status: ['completed']
  });

  const archive = {
    archivedAt: new Date().toISOString(),
    todos: JSON.parse(result.data.content)
  };

  console.log(`📦 Archived ${archive.todos.length} completed todos`);

  // Save to archive file
  // fs.writeFileSync(`archive-${Date.now()}.json`, JSON.stringify(archive, null, 2));

  return archive;
}
```

**4. Migration**: Prepare data for migration to another system.

```js
async function prepareForMigration() {
  const result = await codebolt.todo.exportTodos({
    format: 'json'
  });

  const todos = JSON.parse(result.data.content);

  // Transform to another system's format
  const migratedTodos = todos.map(todo => ({
    title: todo.title,
    description: todo.title, // Assuming title is the description
    status: todo.status,
    priority: todo.priority,
    labels: todo.tags,
    created_at: todo.createdAt
  }));

  console.log('🔄 Prepared', migratedTodos.length, 'todos for migration');

  return migratedTodos;
}
```

**5. Documentation**: Include current tasks in project docs.

```js
async function updateProjectReadme() {
  const result = await codebolt.todo.exportTodos({
    format: 'markdown',
    status: ['pending', 'processing']
  });

  const taskSection = `
## Current Tasks

${result.data.content}

---

*Last updated: ${new Date().toISOString()}*
`;

  console.log('📝 Task section for README:');
  console.log(taskSection);

  return taskSection;
}
```

### Notes

- If `format` is not specified, it defaults to 'json'
- If `status` is not specified, all todos are exported regardless of status
- If `listId` is not specified, todos from all lists are exported
- The exported JSON is a string representation of the todos array
- The exported Markdown is formatted with checkboxes for todo items
- Exported data can be saved to files, sent to APIs, or used in other systems
- The `count` field indicates how many todos were included in the export
- Empty exports are possible if no todos match the filter criteria
- Export is a read-only operation and doesn't modify any todos
- For large todo lists, consider using status filters to limit the export size
- The markdown format uses standard markdown checkbox syntax (- [ ] for incomplete, - [x] for complete)
- Exported timestamps are in ISO 8601 format
- You can use the export/import combination to backup and restore todos