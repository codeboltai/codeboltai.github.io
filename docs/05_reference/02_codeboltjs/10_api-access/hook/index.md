---
cbapicategory:
  - name: initialize
    link: /docs/api/apiaccess/hook/initialize
    description: Initializes the hook manager for a project directory.
  - name: create
    link: /docs/api/apiaccess/hook/create
    description: Creates a new hook with the specified configuration.
  - name: update
    link: /docs/api/apiaccess/hook/update
    description: "Updates an existing hook's configuration."
  - name: delete
    link: /docs/api/apiaccess/hook/delete
    description: Deletes a hook by its ID.
  - name: list
    link: /docs/api/apiaccess/hook/list
    description: Lists all hooks in the system.
  - name: get
    link: /docs/api/apiaccess/hook/get
    description: Retrieves details of a specific hook.
  - name: enable
    link: /docs/api/apiaccess/hook/enable
    description: Enables a hook to make it active.
  - name: disable
    link: /docs/api/apiaccess/hook/disable
    description: Disables a hook to prevent it from triggering.

---
# Hook API

The Hook API provides a powerful event-driven system for automating actions based on file changes, git events, or custom triggers. Hooks enable you to execute code automatically when specific events occur in your project.

## Overview

The hook module enables you to:
- **Initialize**: Set up hook management for a project
- **Create Hooks**: Define custom hooks with event triggers
- **Manage Hooks**: Update, delete, enable, and disable hooks
- **List & Query**: View all hooks and get specific hook details
- **Event Automation**: Automate workflows based on project events

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Initialize hooks for a project
await codebolt.hook.initialize('/path/to/project');

// Create a hook that runs on file changes
const hook = await codebolt.hook.create({
  name: 'run-tests-on-change',
  description: 'Run tests when TypeScript files change',
  events: ['file.save'],
  filter: {
    pattern: '**/*.ts'
  },
  action: {
    type: 'command',
    command: 'npm test'
  },
  enabled: true
});

console.log('Hook created:', hook.hookId);

// List all hooks
const hooks = await codebolt.hook.list();
console.log('Active hooks:', hooks.hooks.filter(h => h.enabled));
```

## Response Structure

All hook API functions return responses with a consistent structure:

```typescript
{
  success: boolean;
  hookId?: string;
  hook?: {
    id: string;
    name: string;
    description?: string;
    events: string[];
    action: any;
    enabled: boolean;
    createdAt: string;
    updatedAt: string;
  };
  hooks?: Array<any>;
  error?: string;
}
```

## Common Use Cases

### Automated Testing

```typescript
// Create hook to run tests on file changes
await codebolt.hook.create({
  name: 'test-on-change',
  description: 'Run tests when source files change',
  events: ['file.save'],
  filter: {
    pattern: 'src/**/*.ts'
  },
  action: {
    type: 'command',
    command: 'npm test',
    timeout: 30000
  }
});
```

### Code Quality Checks

```typescript
// Create hook to lint code before commits
await codebolt.hook.create({
  name: 'pre-commit-lint',
  description: 'Run linter before git commits',
  events: ['git.pre-commit'],
  action: {
    type: 'command',
    command: 'npm run lint'
  }
});
```

### Build Automation

```typescript
// Create hook to build on specific file changes
await codebolt.hook.create({
  name: 'build-on-config-change',
  description: 'Rebuild when configuration changes',
  events: ['file.save'],
  filter: {
    pattern: '{package.json,tsconfig.json}'
  },
  action: {
    type: 'command',
    command: 'npm run build'
  }
});
```

### Custom Workflows

```typescript
// Create hook for custom notifications
await codebolt.hook.create({
  name: 'notify-on-error',
  description: 'Send notification when errors occur',
  events: ['error.occurred'],
  action: {
    type: 'notification',
    message: 'An error occurred in the project'
  }
});
```

<CBAPICategory />
