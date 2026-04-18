---
title: Thread MCP
sidebar_label: codebolt.thread
sidebar_position: 17
---

# codebolt.thread

Thread management tools for creating and managing multi-threaded agent execution.

## Overview

The Thread system enables parallel execution of agent tasks through managed threads. Each thread represents an independent execution context that can run agents, maintain state, and communicate with other threads.

## Available Tools

- `thread_create` - Create a new thread
- `thread_create_start` - Create and immediately start a thread
- `thread_create_background` - Create a background thread
- `thread_list` - List all threads with optional filtering
- `thread_get` - Get detailed information about a specific thread
- `thread_start` - Start a thread
- `thread_update` - Update thread properties
- `thread_delete` - Delete a thread
- `thread_get_messages` - Get messages from a thread
- `thread_update_status` - Update thread status

## Tool Parameters

### `thread_create`

Creates a new thread with the specified options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | Yes | Thread creation options object containing thread parameters. |

### `thread_create_start`

Creates a new thread and immediately starts it.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | Yes | Thread creation options object containing thread parameters. |

### `thread_create_background`

Creates a new background thread that runs independently.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | Yes | Thread creation options object containing thread parameters. |

### `thread_list`

Retrieves a list of threads with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | No | Optional filtering options for the thread list. |

### `thread_get`

Retrieves detailed information about a specific thread.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to retrieve. |

### `thread_start`

Starts a thread by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to start. |

### `thread_update`

Updates an existing thread with the specified changes.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to update. |
| updates | object | Yes | The updates to apply to the thread. |

### `thread_delete`

Deletes a thread by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to delete. |

### `thread_get_messages`

Retrieves messages from a specific thread.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to get messages from. |
| options | object | No | Optional filtering options for messages. |

### `thread_update_status`

Updates the status of a thread.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to update. |
| status | string | Yes | The new status for the thread. |

## Sample Usage

```javascript
// Create a new thread
const createResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_create",
  {
    options: {
      name: "Data Processing Thread",
      agentId: "agent-123",
      priority: 5
    }
  }
);

// Create and start a thread immediately
const createStartResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_create_start",
  {
    options: {
      name: "Quick Task Thread",
      agentId: "agent-456",
      task: "process_data"
    }
  }
);

// Create a background thread
const backgroundResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_create_background",
  {
    options: {
      name: "Background Monitor",
      agentId: "agent-789",
      interval: 60000
    }
  }
);

// List all threads
const listResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_list",
  {
    options: {
      status: "active"
    }
  }
);

// Get thread details
const getResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_get",
  { threadId: "thread-123" }
);

// Start a thread
const startResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_start",
  { threadId: "thread-123" }
);

// Update thread properties
const updateResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_update",
  {
    threadId: "thread-123",
    updates: {
      priority: 8,
      name: "Updated Thread Name"
    }
  }
);

// Get thread messages
const messagesResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_get_messages",
  {
    threadId: "thread-123",
    options: {
      limit: 50
    }
  }
);

// Update thread status
const statusResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_update_status",
  {
    threadId: "thread-123",
    status: "completed"
  }
);

// Delete a thread
const deleteResult = await codebolt.tools.executeTool(
  "codebolt.thread",
  "thread_delete",
  { threadId: "thread-123" }
);
```

## Workflow Examples

### Parallel Task Processing

```javascript
async function processTasksInParallel(tasks) {
  const threads = [];
  
  // Create threads for each task
  for (const task of tasks) {
    const result = await codebolt.tools.executeTool(
      "codebolt.thread",
      "thread_create_start",
      {
        options: {
          name: `Task: ${task.name}`,
          agentId: task.agentId,
          task: task.data
        }
      }
    );
    threads.push(result.threadId);
  }
  
  // Monitor thread completion
  const checkCompletion = async () => {
    const list = await codebolt.tools.executeTool(
      "codebolt.thread",
      "thread_list",
      {
        options: {
          threadIds: threads
        }
      }
    );
    
    return list.threads.every(t => t.status === "completed");
  };
  
  // Wait for all threads to complete
  while (!(await checkCompletion())) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("All tasks completed");
}
```

### Background Monitoring

```javascript
async function setupBackgroundMonitor() {
  // Create a background thread for monitoring
  const monitor = await codebolt.tools.executeTool(
    "codebolt.thread",
    "thread_create_background",
    {
      options: {
        name: "System Monitor",
        agentId: "monitor-agent",
        interval: 30000, // Check every 30 seconds
        task: "monitor_system"
      }
    }
  );
  
  console.log("Background monitor started:", monitor.threadId);
  return monitor.threadId;
}

async function stopBackgroundMonitor(threadId) {
  // Update status to stop the monitor
  await codebolt.tools.executeTool(
    "codebolt.thread",
    "thread_update_status",
    {
      threadId,
      status: "stopped"
    }
  );
  
  // Delete the thread
  await codebolt.tools.executeTool(
    "codebolt.thread",
    "thread_delete",
    { threadId }
  );
}
```

### Thread Communication

```javascript
async function coordinateThreads(mainThreadId, workerThreadIds) {
  // Get messages from main thread
  const mainMessages = await codebolt.tools.executeTool(
    "codebolt.thread",
    "thread_get_messages",
    { threadId: mainThreadId }
  );
  
  // Distribute work to worker threads
  for (const workerId of workerThreadIds) {
    await codebolt.tools.executeTool(
      "codebolt.thread",
      "thread_update",
      {
        threadId: workerId,
        updates: {
          instructions: mainMessages.latestInstruction
        }
      }
    );
    
    await codebolt.tools.executeTool(
      "codebolt.thread",
      "thread_start",
      { threadId: workerId }
    );
  }
}
```

## Best Practices

1. **Use descriptive names** - Give threads meaningful names for easier tracking
2. **Set appropriate priorities** - Higher priority threads get more resources
3. **Clean up completed threads** - Delete threads when they're no longer needed
4. **Monitor thread status** - Regularly check thread status to detect issues
5. **Use background threads wisely** - Background threads consume resources continuously
6. **Handle thread failures** - Implement error handling for thread operations
7. **Limit concurrent threads** - Too many threads can degrade performance

## Thread Lifecycle

1. **Created** - Thread is created but not started
2. **Started** - Thread is actively executing
3. **Running** - Thread is processing tasks
4. **Paused** - Thread execution is temporarily suspended
5. **Completed** - Thread has finished its work
6. **Failed** - Thread encountered an error
7. **Stopped** - Thread was manually stopped
8. **Deleted** - Thread is removed from the system

:::info
This functionality provides thread management capabilities through the MCP interface. Use threads to enable parallel execution and improve agent performance.
:::

## Related Tools

- [Agent MCP](./agent.md) - Agent management
- [Task MCP](./task.md) - Task management
- [Orchestration MCP](./orchestration.md) - Orchestration tools
- [Swarm MCP](./swarm.md) - Swarm coordination
