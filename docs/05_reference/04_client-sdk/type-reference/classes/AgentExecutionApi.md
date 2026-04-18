---
title: AgentExecutionApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentExecutionApi

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:11

Provides methods for tracking and managing agent execution records in the CodeBolt runtime.

This API gives visibility into agent execution history, allowing you to query past
and current executions, view execution trees for multi-agent workflows, and
clean up old execution data.

## Constructors

### Constructor

```ts
new AgentExecutionApi(http: HttpClient): AgentExecutionApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentExecutionApi`

## Methods

### cleanupExecutions()

```ts
cleanupExecutions(params?: CleanupExecutionsParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:124

Cleans up old execution records.

Removes execution records older than the specified threshold to free
up storage and keep the system performant.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `CleanupExecutionsParams` | Query parameters controlling the cleanup |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when cleanup is complete

#### Example

```typescript
await client.agentExecution.cleanupExecutions({ daysOld: 90 });
```

***

### getExecution()

```ts
getExecution(threadId: string): Promise<AgentExecutionRecord>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:85

Retrieves the execution record for a specific thread.

Returns detailed execution information including timing, status,
agent configuration, and outcome for the given thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`AgentExecutionRecord`\>

A promise that resolves to the AgentExecutionRecord for that thread

#### Example

```typescript
const execution = await client.agentExecution.getExecution('thread-xyz');
console.log(execution.status, execution.duration);
```

***

### getExecutions()

```ts
getExecutions(params?: Record<string, unknown>): Promise<AgentExecutionRecord[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:29

Retrieves all agent execution records.

Returns the complete history of agent executions, useful for auditing
and monitoring agent activity over time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`AgentExecutionRecord`[]\>

A promise that resolves to an array of AgentExecutionRecord objects

#### Example

```typescript
const executions = await client.agentExecution.getExecutions();
console.log(`Total executions: ${executions.length}`);
```

***

### getExecutionTree()

```ts
getExecutionTree(threadId: string): Promise<AgentExecutionTree>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:105

Retrieves the execution tree for a specific thread.

Returns a hierarchical view of the execution, showing parent-child
relationships between agents in multi-agent workflows. Useful for
visualizing how agents spawned sub-agents during execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`AgentExecutionTree`\>

A promise that resolves to the AgentExecutionTree structure

#### Example

```typescript
const tree = await client.agentExecution.getExecutionTree('thread-xyz');
console.log('Root agent:', tree.root.agentName);
```

***

### getFilteredExecutions()

```ts
getFilteredExecutions(params?: AgentExecutionFilterParams): Promise<AgentExecutionRecord[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:54

Retrieves agent executions matching specific filter criteria.

Supports filtering by status, swarm ID, start source, thread ID,
and whether the execution ran in the background.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `AgentExecutionFilterParams` | Filter parameters to narrow down results |

#### Returns

`Promise`\<`AgentExecutionRecord`[]\>

A promise that resolves to an array of matching AgentExecutionRecord objects

#### Example

```typescript
const failed = await client.agentExecution.getFilteredExecutions({
  status: 'failed'
});
```

***

### getSwarmIds()

```ts
getSwarmIds(): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution.api.ts:66

Retrieves all known swarm IDs from execution history.

Returns a list of unique swarm identifiers that appear in the execution
records, useful for populating filter dropdowns or discovering swarms.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of swarm ID strings
