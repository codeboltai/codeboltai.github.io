---
title: Hook MCP
sidebar_label: codebolt.hook
sidebar_position: 60
---

# codebolt.hook

Hook management tools for creating, managing, and executing event-driven triggers. Hooks respond to system events like file changes, git operations, terminal commands, and agent activities.

## Available Tools

- `hook_create` - Creates a new hook for triggering actions based on events
- `hook_update` - Updates an existing hook's configuration
- `hook_delete` - Deletes a hook by ID
- `hook_list` - Lists all hooks with their configurations
- `hook_get` - Gets detailed information about a specific hook by ID
- `hook_enable` - Enables a hook to start responding to trigger events
- `hook_disable` - Disables a hook to stop responding to trigger events
- `hook_initialize` - Initializes hook manager for a project

## Tool Parameters

### hook_create

Creates a new hook for triggering actions based on events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| config | object | Yes | Complete hook configuration object |
| config.id | string | No | Optional unique identifier (auto-generated if not provided) |
| config.name | string | Yes | Human-readable name for the hook |
| config.description | string | No | Optional description of what the hook does |
| config.trigger | string | Yes | Event type that triggers the hook (see Trigger Types) |
| config.triggerConfig | object | No | Configuration for trigger behavior |
| config.triggerConfig.pattern | string | No | Glob pattern for file events (e.g., `**/*.ts`) |
| config.triggerConfig.path | string | No | Specific path to watch for events |
| config.triggerConfig.command | string | No | Command pattern for terminal events |
| config.triggerConfig.eventType | string | No | Specific event subtype for custom triggers |
| config.action | string | Yes | Action type to execute (see Action Types) |
| config.actionConfig | object | No | Configuration for action behavior |
| config.actionConfig.message | string | No | Message for notify or log actions |
| config.actionConfig.command | string | No | Command to execute for execute actions |
| config.actionConfig.url | string | No | URL for webhook actions |
| config.actionConfig.agentId | string | No | Agent ID for agent actions |
| config.actionConfig.payload | object | No | Additional data payload for the action |
| config.enabled | boolean | No | Whether hook is initially enabled (default: true) |
| config.priority | number | No | Execution priority (higher = earlier execution) |
| config.conditions | array | No | Array of condition objects for filtering events |

### hook_update

Updates an existing hook's configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hookId | string | Yes | Unique identifier of the hook to update |
| config | object | Yes | Partial hook configuration object with fields to update |

### hook_delete

Deletes a hook by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hookId | string | Yes | Unique identifier of the hook to delete |

### hook_list

Lists all hooks with their configurations.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | - | - | No parameters required |

### hook_get

Gets detailed information about a specific hook by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hookId | string | Yes | Unique identifier of the hook to retrieve |

### hook_enable

Enables a hook to start responding to trigger events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hookId | string | Yes | Unique identifier of the hook to enable |

### hook_disable

Disables a hook to stop responding to trigger events.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| hookId | string | Yes | Unique identifier of the hook to disable |

### hook_initialize

Initializes hook manager for a project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| projectPath | string | Yes | File system path to the project directory |

## Sample Usage

### Create a file change notification hook

```javascript
const result = await codebolt.hook.create({
  config: {
    name: 'TypeScript file change notifier',
    description: 'Notifies when TypeScript files are modified',
    trigger: 'file.modified',
    triggerConfig: {
      pattern: '**/*.ts',
      path: './src'
    },
    action: 'notify',
    actionConfig: {
      message: 'TypeScript file modified: {filePath}'
    },
    enabled: true,
    priority: 1
  }
});
```

### Create a git push webhook trigger

```javascript
const result = await codebolt.hook.create({
  config: {
    name: 'Git push webhook',
    description: 'Sends webhook on git push',
    trigger: 'git.push',
    action: 'webhook',
    actionConfig: {
      url: 'https://api.example.com/webhooks/git-push',
      payload: {
        repository: '{repoName}',
        branch: '{branch}',
        commit: '{commitHash}'
      }
    },
    enabled: true
  }
});
```

### Update a hook with conditions

```javascript
const result = await codebolt.hook.update({
  hookId: 'hook_abc123',
  config: {
    triggerConfig: {
      pattern: '**/*.test.ts'
    },
    conditions: [
      {
        field: 'author',
        operator: 'eq',
        value: 'ci-bot'
      }
    ],
    priority: 10
  }
});
```

### List and manage hooks

```javascript
// List all hooks
const hooks = await codebolt.hook.list({});

// Get specific hook details
const hook = await codebolt.hook.get({
  hookId: 'hook_abc123'
});

// Enable a hook
await codebolt.hook.enable({
  hookId: 'hook_abc123'
});

// Disable a hook temporarily
await codebolt.hook.disable({
  hookId: 'hook_abc123'
});

// Delete a hook
await codebolt.hook.delete({
  hookId: 'hook_abc123'
});
```

### Create agent-triggered execution hook

```javascript
const result = await codebolt.hook.create({
  config: {
    name: 'Agent completion cleanup',
    description: 'Runs cleanup script when agent finishes',
    trigger: 'agent.end',
    action: 'execute',
    actionConfig: {
      command: 'npm run cleanup',
      payload: {
        agentId: '{agentId}',
        duration: '{executionTime}'
      }
    },
    enabled: true,
    priority: 5
  }
});
```

:::info
**Trigger Types:**
- `file.created` - Triggered when a new file is created
- `file.modified` - Triggered when a file is modified
- `file.deleted` - Triggered when a file is deleted
- `git.commit` - Triggered on git commit
- `git.push` - Triggered on git push
- `git.pull` - Triggered on git pull
- `terminal.command` - Triggered on terminal command execution
- `agent.start` - Triggered when an agent starts execution
- `agent.end` - Triggered when an agent completes execution
- `message.received` - Triggered when a message is received
- `custom` - Triggered by custom events

**Action Types:**
- `notify` - Sends a notification message
- `execute` - Executes a shell command
- `log` - Logs an event
- `webhook` - Sends an HTTP webhook
- `agent` - Invokes an agent

**Condition Operators:**
- `eq` - Equals
- `neq` - Not equals
- `contains` - Contains substring
- `startsWith` - Starts with string
- `endsWith` - Ends with string
- `matches` - Matches regex pattern

**Hook Lifecycle:**
1. Initialize hook manager with `hook_initialize`
2. Create hooks with `hook_create`
3. Hooks are enabled by default
4. Temporarily disable hooks with `hook_disable` without deleting
5. Re-enable disabled hooks with `hook_enable`
6. Update configuration as needed with `hook_update`
7. Remove unnecessary hooks with `hook_delete`
8. List all hooks with `hook_list` to audit
9. Get details with `hook_get` for inspection
:::
