---
name: createThread
cbbaseinfo:
  description: Creates a new thread with comprehensive options for conversation management.
cbparameters:
  parameters:
    - name: options
      typeName: CreateThreadOptions
      description: Configuration options for creating the thread including title, description, agentId, and metadata.
  returns:
    signatureTypeName: "Promise<CreateThreadResponse>"
    description: A promise that resolves with the created thread details including threadId, status, and timestamp.
data:
  name: createThread
  category: thread
  link: createThread.md
---
# createThread

```typescript
codebolt.thread.createThread(options: CreateThreadOptions): Promise<CreateThreadResponse>
```

Creates a new thread with comprehensive options for conversation management.
### Parameters

- **`options`** (CreateThreadOptions): Configuration options for creating the thread including title, description, agentId, and metadata.

### Returns

- **`Promise<CreateThreadResponse>`**: A promise that resolves with the created thread details including threadId, status, and timestamp.

### Response Structure

```typescript
interface CreateThreadResponse {
  threadId: string;
  title: string;
  description?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
}
```

### Examples

#### Example 1: Create a Basic Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const thread = await codebolt.thread.createThread({
  title: 'Code Review Session',
  description: 'Review the new authentication module',
  agentId: 'reviewer-agent-001'
});

console.log('Thread created with ID:', thread.threadId);
// Output: Thread created with ID: thread_abc123
```

#### Example 2: Create Thread with Metadata

```typescript
const thread = await codebolt.thread.createThread({
  title: 'Bug Investigation',
  description: 'Investigating memory leak in the payment service',
  agentId: 'debugger-agent',
  metadata: {
    priority: 'critical',
    bugId: 'BUG-456',
    assignee: 'john.doe',
    estimatedHours: 4,
    tags: ['bug', 'memory', 'payment']
  }
});

console.log('Thread metadata:', thread.metadata);
// Use metadata to track additional context and categorization
```

#### Example 3: Create Thread for Feature Development

```typescript
const thread = await codebolt.thread.createThread({
  title: 'Implement User Preferences',
  description: 'Add user preference management system with UI and API',
  agentId: 'developer-agent',
  metadata: {
    featureId: 'FEAT-789',
    sprint: 'Sprint-23',
    storyPoints: 8,
    dependencies: ['auth-service', 'database'],
    deadline: '2024-02-15'
  }
});

console.log(`Thread "${thread.title}" created for ${thread.metadata.sprint}`);
```

#### Example 4: Create Thread with Error Handling

```typescript
try {
  const thread = await codebolt.thread.createThread({
    title: 'Database Migration',
    description: 'Migrate user data to new schema',
    agentId: 'migration-agent',
    metadata: {
      environment: 'production',
      backupRequired: true,
      estimatedDowntime: '5min'
    }
  });

  if (thread.threadId) {
    console.log('Thread successfully created');
    console.log('Thread ID:', thread.threadId);
    console.log('Status:', thread.status);
    console.log('Created at:', thread.createdAt);
  }
} catch (error) {
  console.error('Failed to create thread:', error.message);
  // Handle error appropriately
}
```

#### Example 5: Create Multiple Related Threads

```typescript
const tasks = [
  { title: 'Design Database Schema', description: 'Design tables and relationships', agentId: 'architect-agent' },
  { title: 'Implement API Endpoints', description: 'Create REST API for user management', agentId: 'backend-agent' },
  { title: 'Create User Interface', description: 'Build responsive UI for user settings', agentId: 'frontend-agent' }
];

const threads = await Promise.all(
  tasks.map(task => codebolt.thread.createThread({
    ...task,
    metadata: {
      project: 'UserManagement',
      phase: 'implementation'
    }
  }))
);

console.log(`Created ${threads.length} threads for the project`);
threads.forEach((thread, index) => {
  console.log(`${index + 1}. ${thread.title} (${thread.threadId})`);
});
```

#### Example 6: Create Thread with Template

```typescript
function createThreadFromTemplate(template: string, variables: Record<string, string>) {
  const templates = {
    'bug-fix': {
      title: `Bug Fix: ${variables.issue}`,
      description: `Fix ${variables.issue} reported in ${variables.component}`,
      metadata: { type: 'bug-fix', severity: variables.severity }
    },
    'feature': {
      title: `Feature: ${variables.featureName}`,
      description: `Implement ${variables.featureName} as per ${variables.ticket}`,
      metadata: { type: 'feature', ticket: variables.ticket }
    },
    'review': {
      title: `Code Review: ${variables.prTitle}`,
      description: `Review PR #${variables.prNumber}: ${variables.prTitle}`,
      metadata: { type: 'review', prNumber: variables.prNumber }
    }
  };

  return codebolt.thread.createThread({
    ...templates[template],
    agentId: variables.agentId || 'default-agent'
  });
}

// Usage
const thread = await createThreadFromTemplate('bug-fix', {
  issue: 'Login timeout',
  component: 'auth-service',
  severity: 'high',
  agentId: 'bug-fixer-agent'
});
```

### Common Use Cases

- **Project Task Management**: Create threads for different tasks in a project
- **Bug Tracking**: Initialize threads for bug investigation and fixes
- **Code Reviews**: Set up threads for reviewing pull requests
- **Feature Development**: Create threads for implementing new features
- **Debugging Sessions**: Start threads for debugging specific issues

### Notes

- Each thread is assigned a unique `threadId` upon creation
- The thread status is typically set to 'active' by default
- Metadata is optional but highly recommended for organization and filtering
- Threads are timestamped with `createdAt` and `updatedAt` fields
- The `agentId` specifies which agent will handle the thread
