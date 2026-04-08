---
title: Orchestration MCP
sidebar_label: codebolt.orchestration
sidebar_position: 23
---

# codebolt.orchestration

Tools for managing tasks, agents, and threads in multi-agent orchestration workflows.

## Task Management Tools

### `task_create`

Creates a new task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title/name of the task. |
| description | string | No | The description of the task. |
| thread_id | string | No | The thread ID for the task. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_create",
  { title: "Implement user authentication", description: "Add JWT-based auth flow", thread_id: "thread-123" }
);
```

---

### `task_update`

Updates an existing task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task_id | string | Yes | The ID of the task to update. |
| name | string | No | New name for the task. |
| completed | boolean | No | Whether the task is completed. |
| status | string | No | Task status (e.g., 'completed', 'pending'). |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_update",
  { task_id: "task-456", name: "Updated task name", status: "completed" }
);
```

---

### `task_delete`

Deletes a task by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task_id | string | Yes | The ID of the task to delete. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_delete",
  { task_id: "task-456" }
);
```

---

### `task_list`

Retrieves a list of all tasks.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_list",
  {}
);
```

---

### `task_get`

Retrieves details of a specific task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task_id | string | Yes | The ID of the task to retrieve. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_get",
  { task_id: "task-456" }
);
```

---

### `task_assign`

Assigns an agent to a task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task_id | string | Yes | The ID of the task. |
| agent_id | string | Yes | The ID of the agent to assign. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_assign",
  { task_id: "task-456", agent_id: "agent-789" }
);
```

---

### `task_execute`

Executes a task with a specific agent.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task_id | string | Yes | The ID of the task to execute. |
| agent_id | string | Yes | The ID of the agent to execute the task with. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "task_execute",
  { task_id: "task-456", agent_id: "agent-789" }
);
```

---

## Agent Management Tools

### `agent_find`

Finds agents suitable for a given task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| task | string | Yes | The task description to find agents for. |
| max_results | number | No | Maximum number of results (default: 3). |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "agent_find",
  { task: "Write unit tests for authentication module", max_results: 5 }
);
```

---

### `agent_start`

Starts an agent with a specific task.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agent_id | string | Yes | The ID of the agent to start. |
| task | string | Yes | The task for the agent to execute. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "agent_start",
  { agent_id: "agent-789", task: "Review and refactor the login component" }
);
```

---

### `agent_list`

Lists all available agents.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "agent_list",
  {}
);
```

---

### `agent_details`

Retrieves details of specific agents.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agent_list | array of strings | No | List of agent IDs to get details for. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "agent_details",
  { agent_list: ["agent-123", "agent-456"] }
);
```

---

## Thread Management Tools

### `thread_create`

Creates a new thread with the specified options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | Yes | Thread creation options object containing thread parameters. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_create",
  { options: { name: "Feature Development", priority: "high" } }
);
```

---

### `thread_create_start`

Creates and immediately starts a new thread with the specified options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | Yes | Thread creation and start options object containing thread parameters. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_create_start",
  { options: { name: "Urgent Bug Fix", agent_id: "agent-789" } }
);
```

---

### `thread_create_background`

Creates a thread in the background and resolves when the agent starts or fails.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | Yes | Thread creation options object containing thread parameters. |
| groupId | string | No | Optional group ID for organizing threads. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_create_background",
  { options: { name: "Background Task" }, groupId: "group-123" }
);
```

---

### `thread_list`

Retrieves a list of threads with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| options | object | No | Optional filtering options for the thread list. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_list",
  { options: { status: "active" } }
);
```

---

### `thread_get`

Retrieves detailed information about a specific thread.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to retrieve. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_get",
  { threadId: "thread-123" }
);
```

---

### `thread_start`

Starts a thread by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to start. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_start",
  { threadId: "thread-123" }
);
```

---

### `thread_update`

Updates an existing thread with the specified changes.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to update. |
| updates | object | Yes | The updates to apply to the thread. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_update",
  { threadId: "thread-123", updates: { name: "Updated Thread Name", priority: "low" } }
);
```

---

### `thread_delete`

Deletes a thread by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to delete. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_delete",
  { threadId: "thread-123" }
);
```

---

### `thread_get_messages`

Retrieves messages for a specific thread with optional pagination.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to get messages for. |
| limit | number | No | Optional limit on number of messages to retrieve. |
| offset | number | No | Optional offset for pagination. |
| before | string | No | Optional: include only messages before this timestamp. |
| after | string | No | Optional: include only messages after this timestamp. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_get_messages",
  { threadId: "thread-123", limit: 50, offset: 0 }
);
```

---

### `thread_update_status`

Updates the status of a thread.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The ID of the thread to update status for. |
| status | string | Yes | The new status for the thread. |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.orchestration",
  "thread_update_status",
  { threadId: "thread-123", status: "completed" }
);
```

---

:::info
The orchestration tools enable complex multi-agent workflows by providing task decomposition, agent discovery and assignment, and thread-based conversation management. Use these tools to coordinate work between multiple AI agents and track task progress across your development pipeline.
:::
