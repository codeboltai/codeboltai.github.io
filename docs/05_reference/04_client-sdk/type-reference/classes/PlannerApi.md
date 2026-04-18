---
title: PlannerApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: PlannerApi

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:11

Provides API methods for the task planner system.

The planner manages structured task assignments across agents, enabling project planning
with task creation, assignment, status tracking, and markdown-based import/export. Use
this API to coordinate work breakdown and track progress across multi-agent workflows.

## Constructors

### Constructor

```ts
new PlannerApi(http: HttpClient): PlannerApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`PlannerApi`

## Methods

### createTask()

```ts
createTask(data: CreatePlannerTaskRequest): Promise<PlannerTask>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:90

Creates a new task in the planner.

Adds a task with a title, description, and optional agent assignment. Tasks can have
dependencies, priorities, and labels to organize complex project work.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreatePlannerTaskRequest` | The task creation payload |

#### Returns

`Promise`\<`PlannerTask`\>

A promise that resolves to the newly created planner task

#### Example

```typescript
const task = await client.planner.createTask({
  title: 'Implement user authentication',
  description: 'Add JWT-based auth flow to the API',
  agentId: 'backend-dev',
});
```

***

### createTasksFromMarkdown()

```ts
createTasksFromMarkdown(data: CreateTasksFromMarkdownRequest): Promise<PlannerTask[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:148

Bulk-creates tasks by parsing a markdown document.

Parses a markdown-formatted task list (using checkboxes, headings, and lists) and
creates individual planner tasks from it. This enables rapid task creation from
planning documents or specifications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTasksFromMarkdownRequest` | The request containing the markdown content to parse |

#### Returns

`Promise`\<`PlannerTask`[]\>

A promise that resolves to an array of the newly created tasks

#### Example

```typescript
const tasks = await client.planner.createTasksFromMarkdown({
  markdown: '- [ ] Implement login\n- [ ] Add tests\n- [ ] Write docs',
});
console.log(`Created ${tasks.length} tasks`);
```

***

### deleteTask()

```ts
deleteTask(taskId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:125

Deletes a planner task permanently.

Removes a task from the planner. This action cannot be undone. Consider updating the
task status to "cancelled" instead if you want to preserve a record of the work.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the task has been deleted

***

### exportMarkdown()

```ts
exportMarkdown(params?: ExportMarkdownParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:167

Exports the current planner tasks as a markdown document.

Generates a markdown-formatted representation of all tasks, organized by agent or
status. Useful for creating reports, sharing progress externally, or backing up
the current plan.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ExportMarkdownParams` | Optional parameters to control which tasks are exported and formatting |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the markdown content

#### Example

```typescript
const markdown = await client.planner.exportMarkdown({ groupBy: 'agent' });
```

***

### get()

```ts
get(): Promise<PlannerOverview>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:28

Retrieves the planner overview with aggregated status information.

Returns a high-level summary of the planner state including total tasks, completion
statistics, and agent utilization. Use this for dashboard views and progress monitoring.

#### Returns

`Promise`\<`PlannerOverview`\>

A promise that resolves to the planner overview data

#### Example

```typescript
const overview = await client.planner.get();
console.log(`Tasks: ${overview.totalTasks}, Completed: ${overview.completedTasks}`);
```

***

### getAgents()

```ts
getAgents(): Promise<PlannerAgent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:46

Retrieves all agents registered in the planner.

Returns the list of agents that have been assigned tasks or are available for task
assignment. Each agent includes its current workload and assignment information.

#### Returns

`Promise`\<`PlannerAgent`[]\>

A promise that resolves to an array of planner agents

#### Example

```typescript
const agents = await client.planner.getAgents();
agents.forEach(a => console.log(`${a.name}: ${a.taskCount} tasks`));
```

***

### getAgentTasks()

```ts
getAgentTasks(agentId: string): Promise<PlannerTask[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:65

Retrieves all tasks assigned to a specific agent.

Returns the task list for a given agent, allowing you to see what work is queued,
in progress, or completed for that agent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent whose tasks to retrieve |

#### Returns

`Promise`\<`PlannerTask`[]\>

A promise that resolves to an array of tasks assigned to the agent

#### Example

```typescript
const tasks = await client.planner.getAgentTasks('code-reviewer');
const pending = tasks.filter(t => t.status === 'pending');
```

***

### updateTask()

```ts
updateTask(taskId: string, data: UpdatePlannerTaskRequest): Promise<PlannerTask>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/planner.api.ts:112

Updates an existing planner task.

Modifies task properties such as status, assignment, priority, or description.
Use this to transition tasks through their lifecycle (e.g., pending to in-progress
to completed).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to update |
| `data` | `UpdatePlannerTaskRequest` | The fields to update on the task |

#### Returns

`Promise`\<`PlannerTask`\>

A promise that resolves to the updated planner task

#### Example

```typescript
const updated = await client.planner.updateTask('task-123', {
  status: 'completed',
});
```
