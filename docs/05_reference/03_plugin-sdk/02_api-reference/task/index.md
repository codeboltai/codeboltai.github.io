---
title: Task API
---

# Task API

The `task` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`assignAgentToTask`](./assignAgentToTask) | Assigns an agent to a task. |
| [`createTask`](./createTask) | Creates a new task. |
| [`deleteTask`](./deleteTask) | Deletes a task. |
| [`executeTaskWithAgent`](./executeTaskWithAgent) | Executes a task with a specific agent. |
| [`getTaskDetail`](./getTaskDetail) | Retrieves detailed information about a specific task. |
| [`getTaskList`](./getTaskList) | Retrieves a list of tasks. |
| [`getTaskStatus`](./getTaskStatus) | Gets the status of a task. |
| [`getTaskSummary`](./getTaskSummary) | Gets the summary (description) of a task. |
| [`updateTask`](./updateTask) | Updates an existing task. |

## Methods

---

### `assignAgentToTask`

```typescript
plugin.task.assignAgentToTask(taskId: string, agentId: string): Promise<object>
```

Assigns an agent to a task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |
| `agentId` | `string` | Yes | The agent ID to assign |

**Returns:** `Promise<object>`

[Full reference →](./assignAgentToTask)

---

### `createTask`

```typescript
plugin.task.createTask(options: object): Promise<object>
```

Creates a new task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The task creation parameters |

**Returns:** `Promise<object>`

[Full reference →](./createTask)

---

### `deleteTask`

```typescript
plugin.task.deleteTask(taskId: string): Promise<object>
```

Deletes a task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID to delete |

**Returns:** `Promise<object>`

[Full reference →](./deleteTask)

---

### `executeTaskWithAgent`

```typescript
plugin.task.executeTaskWithAgent(taskId: string, agentId: string): Promise<object>
```

Executes a task with a specific agent.
Assigns the agent and then starts the task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |
| `agentId` | `string` | Yes | The agent ID |

**Returns:** `Promise<object>`

[Full reference →](./executeTaskWithAgent)

---

### `getTaskDetail`

```typescript
plugin.task.getTaskDetail(options: object): Promise<object>
```

Retrieves detailed information about a specific task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The task detail options |

**Returns:** `Promise<object>`

[Full reference →](./getTaskDetail)

---

### `getTaskList`

```typescript
plugin.task.getTaskList(options: object): Promise<object>
```

Retrieves a list of tasks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | Optional filters for tasks _(default: `{}`)_ |

**Returns:** `Promise<object>`

[Full reference →](./getTaskList)

---

### `getTaskStatus`

```typescript
plugin.task.getTaskStatus(taskId: string): Promise<string | undefined>
```

Gets the status of a task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |

**Returns:** `Promise<string | undefined>` — The task status

[Full reference →](./getTaskStatus)

---

### `getTaskSummary`

```typescript
plugin.task.getTaskSummary(taskId: string): Promise<string | undefined>
```

Gets the summary (description) of a task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |

**Returns:** `Promise<string | undefined>` — The task description

[Full reference →](./getTaskSummary)

---

### `updateTask`

```typescript
plugin.task.updateTask(taskId: string, updates: object): Promise<object>
```

Updates an existing task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID to update |
| `updates` | `object` | Yes | The task update parameters |

**Returns:** `Promise<object>`

[Full reference →](./updateTask)

